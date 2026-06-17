import { Phone, Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Discovery Call',
    desc: 'We learn about your business, goals, and challenges.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Marketing Audit',
    desc: 'We analyze your current marketing and find opportunities.',
  },
  {
    icon: Lightbulb,
    step: '03',
    title: 'Strategy Creation',
    desc: 'We build a custom plan tailored to your growth goals.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Campaign Launch',
    desc: 'We execute across all channels with precision.',
  },
  {
    icon: BarChart3,
    step: '05',
    title: 'Optimization & Growth',
    desc: 'We track, optimize, and scale what works.',
  },
]

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(61,43,86,0.1)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-taupe">
            A clear, proven process from first call to measurable growth.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />

            <div className="grid grid-cols-5 gap-4">
              {steps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="group relative flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-pearl/10 bg-surface-elevated transition-all duration-300 group-hover:border-bronze/30 group-hover:shadow-lg group-hover:shadow-bronze/10 group-hover:-translate-y-1">
                    <Icon size={28} className="text-bronze" />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-bronze text-xs font-bold text-surface">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-pearl">{title}</h3>
                  <p className="mt-2 text-sm text-taupe">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile steps */}
        <div className="mt-12 space-y-4 lg:hidden">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div
              key={step}
              className="flex items-start gap-4 rounded-xl border border-pearl/5 bg-surface-elevated/50 p-5"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-bronze/10">
                <Icon size={22} className="text-bronze" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-bronze">Step {step}</span>
                </div>
                <h3 className="mt-1 font-semibold text-pearl">{title}</h3>
                <p className="mt-1 text-sm text-taupe">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-bronze px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-gold hover:shadow-xl hover:shadow-bronze/20"
          >
            Book Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}
