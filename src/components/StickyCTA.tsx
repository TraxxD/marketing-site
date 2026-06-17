import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-bronze/20 bg-surface/95 backdrop-blur-md p-3 md:hidden">
      <a
        href="#contact"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-bronze px-6 py-3.5 text-base font-semibold text-surface transition-all hover:bg-gold"
      >
        <Phone size={18} />
        Book Free Consultation
      </a>
    </div>
  )
}
