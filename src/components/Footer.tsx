import { MapPin, Mail, Building, FileText } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-pearl/5 bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold tracking-tight text-pearl">
              DS<span className="text-bronze">Marketing</span>
            </a>
            <p className="mt-2 text-sm text-taupe">
              Full-service marketing that delivers results.
            </p>
            <a
              href="mailto:support@ds-marketingroup.com"
              className="mt-2 inline-flex items-center gap-2 text-sm text-bronze transition-colors hover:text-gold"
            >
              <Mail size={14} />
              support@ds-marketingroup.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-sm text-taupe">
              <a href="#services" className="transition-colors hover:text-pearl">Services</a>
              <a href="#about" className="transition-colors hover:text-pearl">About</a>
              <a href="#faq" className="transition-colors hover:text-pearl">FAQ</a>
              <a href="#contact" className="transition-colors hover:text-pearl">Contact</a>
            </div>
          </div>

          {/* Company details */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">
              Company Details
            </h4>
            <div className="space-y-3 text-sm text-taupe">
              <div className="flex items-start gap-2">
                <Building size={14} className="mt-0.5 flex-shrink-0 text-bronze" />
                <span>Daniel Simeonov Marketing</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-bronze" />
                <span>
                  ul. Michała Kleofasa Ogińskiego 11/9<br />
                  03-318 Warszawa, Poland
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FileText size={14} className="mt-0.5 flex-shrink-0 text-bronze" />
                <div>
                  <span>NIP: 7011317431</span>
                  <br />
                  <span>REGON: 544943690</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-pearl/5 pt-8 text-center">
          <p className="text-xs text-text-muted">
            &copy; {year} Daniel Simeonov Marketing. All rights reserved.
            {' · '}
            <a href="/privacy" className="transition-colors hover:text-taupe">
              Privacy Policy
            </a>
            {' · '}
            <a href="/terms" className="transition-colors hover:text-taupe">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
