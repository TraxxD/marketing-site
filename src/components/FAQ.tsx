import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much do your services cost?',
    a: 'Every business is different, so we tailor our packages to your specific goals and budget. We\'ll discuss your needs on a free consultation call and provide a transparent proposal - no hidden fees, no surprises.',
  },
  {
    q: 'How quickly can I see results?',
    a: 'Paid ads can drive leads within days. SEO and organic strategies typically show meaningful traction within 2-3 months. We set clear expectations upfront and report on progress every step of the way.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work across industries - from local service businesses and e-commerce brands to professional services and startups. If you want more qualified leads and better marketing ROI, we can help.',
  },
  {
    q: 'What\'s included in monthly management?',
    a: 'Depending on your plan: campaign strategy, ad creation and management, content production, performance tracking, weekly/monthly reporting, and ongoing optimization. Everything is laid out clearly before we start.',
  },
  {
    q: 'Do you provide reports?',
    a: 'Yes. You\'ll receive regular performance reports showing exactly where your budget goes and what results it generates. Full transparency, always.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'We offer flexible arrangements. Some clients prefer month-to-month, others commit to longer engagements for better rates. We earn your loyalty through results, not lock-in contracts.',
  },
  {
    q: 'What\'s the minimum ad budget?',
    a: 'We recommend a minimum ad spend of $500-1,000/month to see meaningful results, but this depends on your industry and goals. We\'ll advise you on the right budget during our discovery call.',
  },
  {
    q: 'Can you handle everything or just specific services?',
    a: 'Both. We\'re a full-service partner, so we can manage your entire marketing ecosystem - or plug into specific areas where you need the most help. You choose the scope, we deliver the results.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(61,43,86,0.1)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Questions? We've Got Answers.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-bronze/20 bg-surface-elevated/80'
                    : 'border-pearl/5 bg-surface-elevated/30 hover:border-pearl/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 font-medium text-pearl">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-bronze transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-taupe">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
