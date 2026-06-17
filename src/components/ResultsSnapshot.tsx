import { Target, Eye, MousePointer, TrendingUp } from 'lucide-react'
import { useScrollReveal } from '../lib/useScrollReveal'

const results = [
  { icon: Target, value: '40+', label: 'Qualified Leads Generated', color: 'text-bronze' },
  { icon: Eye, value: '500,000+', label: 'Ad Impressions', color: 'text-gold' },
  { icon: MousePointer, value: '25,000+', label: 'Clicks Generated', color: 'text-bronze' },
  { icon: TrendingUp, value: '2.4x', label: 'Average ROAS', color: 'text-gold' },
]

export default function ResultsSnapshot() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-midnight/40 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,154,108,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Proven Results
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div ref={ref} className={`mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 reveal-stagger ${isVisible ? 'visible' : ''}`}>
          {results.map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="group rounded-2xl border border-pearl/5 bg-surface-elevated/50 p-6 text-center transition-all duration-300 hover:border-bronze/20 hover:bg-surface-elevated/80 hover:shadow-lg hover:shadow-bronze/5 hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-bronze/10 p-3 transition-colors group-hover:bg-bronze/20">
                <Icon size={24} className={color} />
              </div>
              <div className={`text-3xl font-bold sm:text-4xl ${color}`}>{value}</div>
              <div className="mt-2 text-sm text-taupe">{label}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          Results vary by industry and campaign.
        </p>
      </div>
    </section>
  )
}
