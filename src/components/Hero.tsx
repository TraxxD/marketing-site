import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-midnight to-plum" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,154,108,0.08)_0%,_transparent_60%)]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-bronze/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-plum-light/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-bronze/20 bg-bronze/10 px-4 py-1.5 text-sm text-bronze">
              <TrendingUp size={14} />
              Full-Service Marketing Partner
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-pearl sm:text-5xl lg:text-6xl">
              Get Seen. Get Clicks.{' '}
              <span className="bg-gradient-to-r from-bronze to-gold bg-clip-text text-transparent">
                Get Customers.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-taupe sm:text-xl">
              From ads and SEO to content, branding, and web design — we help
              businesses attract higher-value clients and turn attention into
              revenue.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-bronze px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-gold hover:shadow-xl hover:shadow-bronze/20"
              >
                Start Growing Today
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-pearl/10 px-8 py-4 text-base font-medium text-pearl transition-all hover:border-pearl/30 hover:bg-pearl/5"
              >
                See What We Do
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex items-center gap-8 border-t border-pearl/10 pt-8">
              {[
                { icon: Target, label: 'Precision Targeting' },
                { icon: Users, label: 'Dedicated Team' },
                { icon: TrendingUp, label: 'Proven Results' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-taupe">
                  <Icon size={16} className="text-bronze" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative">
              {/* Decorative card stack */}
              <div className="absolute -top-4 -left-4 h-80 w-72 rounded-2xl border border-bronze/10 bg-midnight-light/50" />
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-pearl/10 bg-gradient-to-br from-midnight-light to-plum p-8">
                <div className="flex flex-col gap-6">
                  <div className="h-3 w-20 rounded-full bg-bronze/40" />
                  <div className="space-y-3">
                    <div className="h-2 w-full rounded-full bg-pearl/10" />
                    <div className="h-2 w-3/4 rounded-full bg-pearl/10" />
                    <div className="h-2 w-5/6 rounded-full bg-pearl/10" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-bronze/10 p-4 text-center">
                      <div className="text-2xl font-bold text-bronze">3x</div>
                      <div className="mt-1 text-xs text-taupe">More Leads</div>
                    </div>
                    <div className="rounded-lg bg-bronze/10 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">85%</div>
                      <div className="mt-1 text-xs text-taupe">ROI Boost</div>
                    </div>
                  </div>
                  <div className="mt-auto h-2.5 w-full overflow-hidden rounded-full bg-pearl/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-bronze to-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
