// Serverless function for Vercel/Netlify — alternative to Web3Forms
// To use this instead of Web3Forms:
// 1. Set RESEND_API_KEY in your environment variables
// 2. Update the ContactForm fetch URL to '/api/contact'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  message?: string
  website?: string // honeypot
}

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 3 // max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW)
  rateLimitMap.set(ip, recent)

  if (recent.length >= RATE_LIMIT_MAX) return true
  recent.push(now)
  return false
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: 'Too many requests. Please try again later.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } },
    )
  }

  const body = (await req.json()) as ContactPayload

  // Honeypot check
  if (body.website) {
    // Silently accept to not alert bots
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  // TODO: Replace with your verified Resend domain email
  const YOUR_EMAIL = process.env.CONTACT_EMAIL || 'support@ds-marketingroup.com'

  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Email service not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }

  try {
    // 1. Notification email to you
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DS Marketing <noreply@ds-marketingroup.com>',
        to: YOUR_EMAIL,
        subject: `New Lead: ${body.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
          <p><strong>Message:</strong> ${body.message || 'No message'}</p>
        `,
      }),
    })

    // 2. Auto-reply to the lead
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DS Marketing <noreply@ds-marketingroup.com>',
        to: body.email,
        subject: "Thanks for reaching out — we'll be in touch!",
        html: `
          <h2>Hi ${body.name},</h2>
          <p>Thanks for contacting DS Marketing. We've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, if you have any urgent questions, feel free to reply to this email.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The DS Marketing Team</strong></p>
        `,
      }),
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
