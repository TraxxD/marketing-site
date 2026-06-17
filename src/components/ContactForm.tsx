import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactSchema, type ContactFormData } from '../lib/schema'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.website) return

    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Lead: ${data.name}`,
          from_name: 'DS Marketing Website',
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          message: data.message || 'No message',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        reset()

        // Analytics conversion event placeholder
        // window.gtag?.('event', 'conversion', { send_to: 'AW-XXXXX/XXXXX' })
        // window.fbq?.('track', 'Lead')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="relative overflow-hidden bg-midnight/30 py-24 sm:py-32">
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-success/20 bg-success/5 p-12 text-center">
            <CheckCircle size={48} className="mx-auto text-success" />
            <h3 className="mt-4 text-2xl font-bold text-pearl">
              Message Received!
            </h3>
            <p className="mt-2 text-taupe">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 rounded-lg border border-pearl/10 px-6 py-2.5 text-sm font-medium text-pearl transition-all hover:border-pearl/30 hover:bg-pearl/5"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-midnight/30 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,154,108,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Let's Talk
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-lg text-taupe">
            Tell us about your goals and we'll show you exactly how we can
            help. No commitment, no pressure — just a conversation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-12 space-y-6"
        >
          {/* Honeypot — visually hidden from humans */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              autoComplete="off"
              tabIndex={-1}
              {...register('website')}
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-pearl">
              Name <span className="text-bronze">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className={`mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-pearl placeholder:text-text-muted transition-all focus:outline-none focus:ring-2 focus:ring-bronze/50 ${
                errors.name ? 'border-error' : 'border-pearl/10 hover:border-pearl/20'
              }`}
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-error">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-pearl">
              Email <span className="text-bronze">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@company.com"
              className={`mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-pearl placeholder:text-text-muted transition-all focus:outline-none focus:ring-2 focus:ring-bronze/50 ${
                errors.email ? 'border-error' : 'border-pearl/10 hover:border-pearl/20'
              }`}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-error">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-pearl">
              Phone <span className="text-text-muted">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className="mt-2 w-full rounded-xl border border-pearl/10 bg-surface px-4 py-3 text-pearl placeholder:text-text-muted transition-all hover:border-pearl/20 focus:outline-none focus:ring-2 focus:ring-bronze/50"
              {...register('phone')}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-pearl">
              Message <span className="text-text-muted">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your business and goals..."
              className="mt-2 w-full resize-none rounded-xl border border-pearl/10 bg-surface px-4 py-3 text-pearl placeholder:text-text-muted transition-all hover:border-pearl/20 focus:outline-none focus:ring-2 focus:ring-bronze/50"
              {...register('message')}
            />
          </div>

          {/* Error state */}
          {status === 'error' && (
            <div className="flex items-center gap-3 rounded-xl border border-error/20 bg-error/5 p-4">
              <AlertCircle size={20} className="flex-shrink-0 text-error" />
              <p className="text-sm text-error">
                Something went wrong. Please try again or email us directly.
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-bronze px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-gold hover:shadow-xl hover:shadow-bronze/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>

          <p className="text-center text-xs text-text-muted">
            Your information is safe with us. We'll never share your details
            with third parties.
          </p>
        </form>
      </div>
    </section>
  )
}
