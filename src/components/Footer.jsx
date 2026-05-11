export default function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span className="font-display text-xl tracking-wide text-text-muted">
          LEWIS SOMES
        </span>

        <div className="flex items-center gap-8">
          {[
            { label: 'Instagram', href: 'https://instagram.com/lewisSomes' },
            { label: 'TikTok', href: 'https://tiktok.com/@lewisSomes' },
            { label: 'YouTube', href: 'https://youtube.com/@lewisSomes' },
            { label: 'BeatStars', href: 'https://lewissomes.beatstars.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-text-muted hover:text-red transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-text-muted/40 text-[11px] tracking-wide">
          &copy; {new Date().getFullYear()} Lewis Somes
        </p>
      </div>
    </footer>
  )
}
