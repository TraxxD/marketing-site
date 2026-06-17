import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Luxe Interiors',
    text: 'DS Marketing completely transformed our online presence. Within three months, our lead quality improved dramatically — we\'re now attracting the high-end clients we always wanted.',
    stars: 5,
  },
  {
    name: 'James Carter',
    role: 'Founder, Carter & Co.',
    text: 'The team doesn\'t just run ads — they built us a full strategy that actually makes sense. Our revenue is up 40% and we finally feel like we have a marketing partner, not just a vendor.',
    stars: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director, Vanguard Tech',
    text: 'Professional, responsive, and genuinely invested in our success. The rebrand and new website they delivered positioned us as the leader in our space. Worth every penny.',
    stars: 5,
  },
]

const stats = [
  { value: '150+', label: 'Clients Served' },
  { value: '3x', label: 'Avg. Lead Increase' },
  { value: '95%', label: 'Client Retention' },
  { value: '$2M+', label: 'Ad Spend Managed' },
]

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,43,86,0.12)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Trusted by Growing Businesses
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Don't Take Our Word for It
          </h2>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-pearl/5 bg-surface-elevated/50 p-8 transition-all hover:border-bronze/15"
            >
              <Quote
                size={32}
                className="absolute top-6 right-6 text-bronze/15"
              />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-taupe">
                "{t.text}"
              </p>
              <div className="border-t border-pearl/5 pt-4">
                <p className="font-semibold text-pearl">{t.name}</p>
                <p className="text-sm text-text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-pearl/5 bg-midnight/30 p-8 sm:p-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-bronze sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-taupe">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Placeholder: client logos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {['Client A', 'Client B', 'Client C', 'Client D', 'Client E'].map(
            (name) => (
              <div
                key={name}
                className="rounded-lg border border-pearl/10 px-6 py-3 text-sm text-taupe"
              >
                {/* TODO: Replace with actual client logos */}
                {name}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
