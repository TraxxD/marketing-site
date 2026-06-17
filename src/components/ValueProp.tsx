import { AlertTriangle, CheckCircle, ArrowDown } from 'lucide-react'

const painPoints = [
  'Spending on ads with no clear return',
  'Inconsistent branding across channels',
  'No strategy — just scattered tactics',
  'Losing leads to competitors who look sharper',
]

const outcomes = [
  'Every dollar tracked and optimized for ROI',
  'A cohesive brand that commands attention',
  'A clear strategy tailored to your growth goals',
  'A premium presence that attracts premium clients',
]

export default function ValueProp() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(61,43,86,0.15)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Marketing Shouldn't Feel Like a{' '}
            <span className="text-bronze">Guessing Game</span>
          </h2>
          <p className="mt-4 text-lg text-taupe">
            Most businesses know they need better marketing. The problem is knowing
            where to start — and who to trust.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Pain column */}
          <div className="rounded-2xl border border-pearl/5 bg-midnight/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-error/10 p-2">
                <AlertTriangle size={20} className="text-error" />
              </div>
              <h3 className="text-xl font-semibold text-pearl">
                Sound familiar?
              </h3>
            </div>
            <ul className="space-y-4">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-error/60" />
                  <span className="text-taupe">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution column */}
          <div className="rounded-2xl border border-bronze/15 bg-gradient-to-br from-midnight-light/50 to-plum/20 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-success/10 p-2">
                <CheckCircle size={20} className="text-success" />
              </div>
              <h3 className="text-xl font-semibold text-pearl">
                What it looks like with DS Marketing
              </h3>
            </div>
            <ul className="space-y-4">
              {outcomes.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bronze" />
                  <span className="text-pearl/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#services"
            className="group flex flex-col items-center gap-2 text-sm text-taupe transition-colors hover:text-bronze"
          >
            See how we do it
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
