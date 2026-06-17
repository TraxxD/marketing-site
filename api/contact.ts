// Serverless function for Vercel/Netlify - alternative to Web3Forms
// To use this instead of Web3Forms:
// 1. Set RESEND_API_KEY and CONTACT_EMAIL in your environment variables
// 2. Update the ContactForm fetch URL to '/api/contact'

import { z } from 'zod'

// Server-side validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional().or(z.literal('')),
  message: z.string().max(1000).optional().or(z.literal('')),
  website: z.string().max(0).optional(),
})

// Sanitize user input to prevent HTML injection in emails
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Simple in-memory rate limiter (best-effort on serverless)
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 3

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
  // CORS - only allow requests from our domain
  const origin = req.headers.get('origin') || ''
  const allowedOrigins = ['https://ds-marketingroup.com', 'https://www.ds-marketingroup.com']
  const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0]

  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: corsHeaders },
    )
  }

  // Rate limiting (use platform header when available)
  const ip =
    req.headers.get('x-real-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: 'Too many requests. Please try again later.' }),
      { status: 429, headers: corsHeaders },
    )
  }

  // Validate input server-side
  let body: z.infer<typeof contactSchema>
  try {
    const raw = await req.json()
    const parsed = contactSchema.safeParse(raw)
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'Invalid input' }),
        { status: 400, headers: corsHeaders },
      )
    }
    body = parsed.data
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { status: 400, headers: corsHeaders },
    )
  }

  // Honeypot check - silently accept to not alert bots
  if (body.website) {
    return new Response(
      JSON.stringify({ success: true }),
      { headers: corsHeaders },
    )
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const YOUR_EMAIL = process.env.CONTACT_EMAIL || 'support@ds-marketingroup.com'

  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Email service not configured' }),
      { status: 500, headers: corsHeaders },
    )
  }

  // Sanitize all user input before embedding in HTML
  const safeName = escapeHtml(body.name)
  const safeEmail = escapeHtml(body.email)
  const safePhone = escapeHtml(body.phone || 'Not provided')
  const safeMessage = escapeHtml(body.message || 'No message')

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
        subject: `New Lead: ${safeName.substring(0, 100)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Message:</strong> ${safeMessage}</p>
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
        subject: "Thanks for reaching out - we'll be in touch!",
        html: `
          <h2>Hi ${safeName},</h2>
          <p>Thanks for contacting DS Marketing. We've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, if you have any urgent questions, feel free to reply to this email.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The DS Marketing Team</strong></p>
        `,
      }),
    })

    return new Response(
      JSON.stringify({ success: true }),
      { headers: corsHeaders },
    )
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: corsHeaders },
    )
  }
}
