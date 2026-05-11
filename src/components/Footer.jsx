export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/assets/FONDO-2.jpg.jpeg"
            alt="Lewis Somes"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-bold text-sm tracking-widest uppercase">Lewis Somes</span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/lewisSomes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@lewisSomes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.37A8.16 8.16 0 0 0 20.59 11V7.5a4.84 4.84 0 0 1-1-.81z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@lewisSomes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <rect x="2" y="4" width="20" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="currentColor" />
            </svg>
          </a>
        </div>

        <p className="text-text-muted/50 text-xs">
          &copy; {new Date().getFullYear()} Lewis Somes. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
