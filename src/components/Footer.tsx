export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-pearl/5 bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight text-pearl">
              DS<span className="text-bronze">Marketing</span>
            </a>
            <p className="mt-2 text-sm text-taupe">
              Full-service marketing that delivers results.
            </p>
            <a
              href="mailto:support@ds-marketingroup.com"
              className="mt-1 block text-sm text-bronze transition-colors hover:text-gold"
            >
              support@ds-marketingroup.com
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-taupe">
            <a href="#services" className="transition-colors hover:text-pearl">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-pearl">
              About
            </a>
            <a href="#faq" className="transition-colors hover:text-pearl">
              FAQ
            </a>
            <a href="#contact" className="transition-colors hover:text-pearl">
              Contact
            </a>
          </div>

          {/* Social — TODO: add your links */}
          <div className="flex items-center gap-4">
            {/* Placeholder social icons — replace href with your actual links */}
            {/*
            <a href="https://linkedin.com/in/YOURPROFILE" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg border border-pearl/10 p-2 text-taupe transition-all hover:border-bronze/30 hover:text-bronze">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            */}
          </div>
        </div>

        <div className="mt-8 border-t border-pearl/5 pt-8 text-center">
          <p className="text-xs text-text-muted">
            &copy; {year} DS Marketing. All rights reserved.
            {' · '}
            <a href="/privacy" className="transition-colors hover:text-taupe">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
