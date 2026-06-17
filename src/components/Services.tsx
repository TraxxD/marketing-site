import {
  Megaphone,
  Globe,
  Search,
  PenTool,
  Mail,
  BarChart3,
  Palette,
  Users,
  TrendingUp,
  Share2,
} from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    description:
      'Google, Facebook & TikTok Ads - precision-targeted campaigns that put your brand in front of buyers ready to act.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Consistent, engaging content across your social channels that builds community and keeps your brand top-of-mind.',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description:
      'Scroll-stopping graphics, videos, and copy that communicate your value and convert browsers into buyers.',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Beautiful, fast websites designed to impress visitors and guide them toward taking action.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Rank higher, get found organically, and build a pipeline of traffic that doesn\'t depend on ad spend.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Nurture leads and re-engage past customers with campaigns that drive repeat business and loyalty.',
  },
  {
    icon: BarChart3,
    title: 'Strategy & Consulting',
    description:
      'A clear, data-driven marketing roadmap aligned with your business goals - no guesswork.',
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description:
      'A cohesive visual identity that tells your story and positions you as the premium choice in your market.',
  },
  {
    icon: TrendingUp,
    title: 'Market Research',
    description:
      'Deep competitor analysis and market insights so every move is backed by data, not assumptions.',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description:
      'Connect with the right voices in your space to amplify your reach and build instant credibility.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-midnight/30 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,154,108,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bronze">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-bronze to-gold bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h2>
          <p className="mt-4 text-lg text-taupe">
            One partner. Every channel. No gaps. We handle the full spectrum so
            your brand shows up everywhere it matters.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-pearl/5 bg-surface-elevated/50 p-6 transition-all duration-300 hover:border-bronze/20 hover:bg-surface-elevated/80 hover:shadow-lg hover:shadow-bronze/5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-bronze/10 p-3 transition-colors group-hover:bg-bronze/20">
                <Icon size={24} className="text-bronze" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-pearl">{title}</h3>
              <p className="text-sm leading-relaxed text-taupe">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
