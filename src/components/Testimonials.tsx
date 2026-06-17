import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    company: 'Interior Design Studio',
    result: '38 qualified leads in the first month',
    text: 'We generated 38 qualified leads within the first month. Communication was excellent and the team was always available to adjust the strategy based on real data.',
  },
  {
    name: 'James C.',
    company: 'E-commerce Brand',
    result: '2.4x return on ad spend',
    text: 'The team built us a full strategy that actually made sense. Our return on ad spend went from break-even to 2.4x, and we finally have a clear picture of where every dollar goes.',
  },
  {
    name: 'Elena R.',
    company: 'Professional Services Firm',
    result: '39% lower cost per lead',
    text: 'Professional, responsive, and genuinely invested in our success. The rebrand and new ad campaigns positioned us as the premium choice in our market. Worth every penny.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,43,86,0.12)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Client Feedback
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl border border-pearl/5 bg-surface-elevated/50 p-8 transition-all duration-300 hover:border-bronze/15 hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/5"
            >
              <Quote size={32} className="absolute top-6 right-6 text-bronze/15" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <div className="mb-3 inline-block rounded-full bg-bronze/10 px-3 py-1 text-xs font-medium text-bronze">
                {t.result}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-taupe">"{t.text}"</p>
              <div className="border-t border-pearl/5 pt-4">
                <p className="font-semibold text-pearl">{t.name}</p>
                <p className="text-sm text-text-muted">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
