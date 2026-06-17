import { Award, Zap, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-midnight/30 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(196,154,108,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-bronze/20 to-gold/10 blur-2xl" />
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-pearl/10 bg-gradient-to-br from-midnight-light to-plum sm:h-96 sm:w-80">
                {/* TODO: Replace with your photo */}
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-taupe">
                  <div className="h-20 w-20 rounded-full bg-bronze/20" />
                  <span className="text-sm">Your photo here</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
              About DS Marketing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
              Your Growth Is{' '}
              <span className="text-bronze">Personal to Us</span>
            </h2>
            <div className="mt-6 space-y-4 text-taupe leading-relaxed">
              <p>
                DS Marketing was built on a simple belief: every business
                deserves marketing that actually works. Not vanity metrics.
                Not cookie-cutter campaigns. Real strategies that bring in
                real customers.
              </p>
              <p>
                We're a full-service team of strategists, creatives, and
                data-driven marketers who obsess over your results the way you
                obsess over your business. From your first ad to a complete
                brand overhaul, we're with you at every stage.
              </p>
              <p>
                Our mission is straightforward - help you get seen by the
                right people, earn their trust, and turn that trust into
                lasting revenue.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: 'Excellence' },
                { icon: Zap, label: 'Speed' },
                { icon: Heart, label: 'Dedication' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-pearl/5 bg-surface/50 p-4 text-center"
                >
                  <Icon size={22} className="text-bronze" />
                  <span className="text-sm font-medium text-pearl">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
