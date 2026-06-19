import { Shield, Zap, BarChart3, MessageSquare, CalendarX } from 'lucide-react'

const reasons = [
  { icon: BarChart3, title: 'Data-Driven Decisions', desc: 'Every move backed by real analytics, not guesswork.' },
  { icon: Zap, title: 'Fast Communication', desc: 'Quick responses and proactive updates on your campaigns.' },
  { icon: Shield, title: 'Transparent Reporting', desc: 'Clear reports so you always know where your money goes.' },
  { icon: MessageSquare, title: 'Personalized Strategy', desc: 'Custom plans tailored to your specific business goals.' },
  { icon: CalendarX, title: 'No Long-Term Contracts', desc: 'We earn your loyalty through results, not lock-ins.' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-midnight/30 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(196,154,108,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Founder section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-bronze/20 to-gold/10 blur-2xl" />
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-pearl/10 bg-gradient-to-br from-midnight-light to-plum sm:h-96 sm:w-80">
                <img
                  src="/founder.png"
                  alt="Daniel Simeonov, founder of DS Marketing"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Founder copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
              Meet the Founder
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
              Hi, I'm Daniel
            </h2>
            <div className="mt-6 space-y-4 text-taupe leading-relaxed">
              <p>
                I founded DS Marketing to help businesses generate more leads
                through strategic digital marketing and conversion-focused
                campaigns.
              </p>
              <p>
                I believe every business deserves marketing that actually works.
                Not vanity metrics. Not cookie-cutter campaigns. Real strategies
                that bring in real customers and measurable ROI.
              </p>
              <p>
                Whether you need a complete marketing overhaul or help with a
                specific channel, I'm personally invested in making sure your
                business grows.
              </p>
            </div>
          </div>
        </div>

        {/* Why DS Marketing */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
              Why DS Marketing
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-pearl/5 bg-surface-elevated/50 p-6 text-center transition-all duration-300 hover:border-bronze/20 hover:bg-surface-elevated/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/5"
              >
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-bronze/10 p-3 transition-colors group-hover:bg-bronze/20">
                  <Icon size={24} className="text-bronze" />
                </div>
                <h3 className="text-sm font-semibold text-pearl">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-taupe">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
