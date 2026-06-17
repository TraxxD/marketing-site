import { ArrowRight, TrendingDown } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Local Service Business',
    before: '$18',
    after: '$11',
    metric: 'Cost Per Lead',
    improvement: '39%',
  },
  {
    industry: 'E-commerce Brand',
    before: '1.1x',
    after: '2.4x',
    metric: 'Return On Ad Spend',
    improvement: '118%',
  },
  {
    industry: 'Professional Services',
    before: '12',
    after: '38',
    metric: 'Monthly Qualified Leads',
    improvement: '217%',
  },
]

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-midnight/30 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(196,154,108,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Case Studies
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Recent Success Stories
          </h2>
          <p className="mt-4 text-lg text-taupe">
            Real results from real campaigns. Here's what we've delivered.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <div
              key={cs.industry}
              className="group rounded-2xl border border-pearl/5 bg-surface-elevated/50 p-8 transition-all duration-300 hover:border-bronze/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/5"
            >
              <h3 className="text-lg font-semibold text-pearl">{cs.industry}</h3>
              <p className="mt-1 text-sm text-text-muted">{cs.metric}</p>

              <div className="mt-6 flex items-center gap-4">
                {/* Before */}
                <div className="flex-1 rounded-xl bg-error/5 border border-error/10 p-4 text-center">
                  <p className="text-xs text-text-muted">Before</p>
                  <p className="mt-1 text-2xl font-bold text-error/80">{cs.before}</p>
                </div>

                <ArrowRight size={20} className="flex-shrink-0 text-bronze" />

                {/* After */}
                <div className="flex-1 rounded-xl bg-success/5 border border-success/10 p-4 text-center">
                  <p className="text-xs text-text-muted">After</p>
                  <p className="mt-1 text-2xl font-bold text-success">{cs.after}</p>
                </div>
              </div>

              {/* Improvement */}
              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-bronze/10 py-3">
                <TrendingDown size={16} className="text-bronze rotate-180" />
                <span className="text-lg font-bold text-bronze">{cs.improvement} Improvement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
