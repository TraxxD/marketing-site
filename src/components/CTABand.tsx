import { ArrowRight } from 'lucide-react'

export default function CTABand({ variant = 'default' }: { variant?: 'default' | 'audit' }) {
  if (variant === 'audit') {
    return (
      <section className="relative overflow-hidden bg-gradient-to-r from-midnight to-plum py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,154,108,0.08)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-pearl sm:text-3xl">
            Get a Free Marketing Audit
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-taupe">
            Get a free review of your website, ads, and growth opportunities. No commitment, no strings attached.
          </p>
          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-bronze px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-gold hover:shadow-xl hover:shadow-bronze/20"
          >
            Request Your Free Audit
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-plum/30 to-midnight/30 py-12 sm:py-16">
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-pearl sm:text-3xl">
          Ready to See Results Like These?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-taupe">
          Let's talk about what we can do for your business. Free consultation, no obligations.
        </p>
        <a
          href="#contact"
          className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-bronze px-8 py-4 text-base font-semibold text-surface transition-all hover:bg-gold hover:shadow-xl hover:shadow-bronze/20"
        >
          Book a Free Strategy Call
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
