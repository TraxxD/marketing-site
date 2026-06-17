import { useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Megaphone } from 'lucide-react'

const statsPages = [
  {
    title: 'Lead Generation',
    icon: Target,
    color: 'text-bronze',
    stats: [
      { value: '1.8x', label: 'More Leads' },
      { value: '85%', label: 'Lead Growth' },
      { value: '40+', label: 'Qualified Leads / Mo' },
      { value: '22%', label: 'Lower Cost Per Lead' },
    ],
    progress: 85,
  },
  {
    title: 'Revenue / ROI',
    icon: TrendingUp,
    color: 'text-gold',
    stats: [
      { value: '35%', label: 'ROI Improvement' },
      { value: '2.4x', label: 'ROAS' },
      { value: '$50k+', label: 'Revenue Generated' },
      { value: '42%', label: 'Revenue Growth' },
    ],
    progress: 72,
  },
  {
    title: 'Advertising',
    icon: Megaphone,
    color: 'text-bronze',
    stats: [
      { value: '25%', label: 'Lower CPC' },
      { value: '18%', label: 'Lower CPA' },
      { value: '500k+', label: 'Ad Impressions' },
      { value: '25k+', label: 'Clicks Generated' },
    ],
    progress: 90,
  },
]

function StatsCard({
  page,
  state,
}: {
  page: (typeof statsPages)[number]
  state: 'enter' | 'active' | 'exit'
}) {
  const Icon = page.icon

  return (
    <div
      className={`absolute inset-0 rounded-2xl border border-pearl/10 bg-gradient-to-br from-midnight-light to-plum p-6 backface-hidden transition-all duration-700 ease-in-out ${
        state === 'enter'
          ? 'translate-y-full rotate-x-[-20deg] opacity-0'
          : state === 'exit'
            ? '-translate-y-full rotate-x-[20deg] opacity-0'
            : 'translate-y-0 rotate-x-0 opacity-100'
      }`}
      style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <div className="rounded-lg bg-bronze/15 p-1.5">
            <Icon size={16} className={page.color} />
          </div>
          <span className="text-sm font-semibold text-pearl">{page.title}</span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2.5 flex-1">
          {page.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-xl bg-surface/40 border border-pearl/5 p-3 text-center transition-all"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`text-xl font-bold ${i % 2 === 0 ? 'text-bronze' : 'text-gold'}`}>
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] leading-tight text-taupe">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-[10px] text-taupe mb-1.5">
            <span>Performance</span>
            <span className="text-bronze">{page.progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-pearl/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-bronze to-gold transition-all duration-1000"
              style={{ width: `${page.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex)
      setCurrentIndex((i) => (i + 1) % statsPages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentIndex])

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
                { icon: BarChart3, label: 'Proven Results' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-taupe">
                  <Icon size={16} className="text-bronze" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated stats cards */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative" style={{ perspective: '1000px' }}>
              {/* Shadow card behind */}
              <div className="absolute -top-3 -left-3 h-[340px] w-[280px] rounded-2xl border border-bronze/10 bg-midnight-light/30" />
              <div className="absolute -top-1.5 -left-1.5 h-[340px] w-[280px] rounded-2xl border border-bronze/5 bg-midnight-light/20" />

              {/* Card container */}
              <div className="relative h-[340px] w-[280px]">
                {statsPages.map((page, i) => (
                  <StatsCard
                    key={page.title}
                    page={page}
                    state={
                      i === currentIndex
                        ? 'active'
                        : i === prevIndex
                          ? 'exit'
                          : 'enter'
                    }
                  />
                ))}
              </div>

              {/* Page dots */}
              <div className="mt-4 flex justify-center gap-2">
                {statsPages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentIndex
                        ? 'w-6 bg-bronze'
                        : 'w-1.5 bg-pearl/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
