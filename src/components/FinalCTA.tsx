import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-plum/30 to-midnight" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,154,108,0.1)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-pearl sm:text-4xl lg:text-5xl">
          Your Competitors Aren't Waiting.{' '}
          <span className="bg-gradient-to-r from-bronze to-gold bg-clip-text text-transparent">
            Neither Should You.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-taupe">
          Every day without a strong marketing strategy is a day your competitors
          get further ahead. Let's change that - starting now.
        </p>
        <a
          href="#contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-bronze px-10 py-4 text-lg font-semibold text-surface transition-all hover:bg-gold hover:shadow-xl hover:shadow-bronze/20"
        >
          Get in Touch
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  )
}
