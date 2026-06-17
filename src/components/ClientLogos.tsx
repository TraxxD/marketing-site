import { Building, ShoppingBag, Wrench, Store } from 'lucide-react'

const clients = [
  { icon: Building, label: 'Growing Businesses' },
  { icon: Store, label: 'Local Brands' },
  { icon: ShoppingBag, label: 'E-commerce Stores' },
  { icon: Wrench, label: 'Service Businesses' },
]

export default function ClientLogos() {
  return (
    <section className="relative border-y border-pearl/5 bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-text-muted">
          Trusted by businesses like yours
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {clients.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-pearl/5 bg-surface-elevated/30 px-6 py-4 transition-all hover:border-bronze/15 hover:bg-surface-elevated/60"
            >
              <Icon size={20} className="text-bronze" />
              <span className="text-sm font-medium text-taupe">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
