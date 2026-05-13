import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const SPOTIFY_LINK =
    import.meta.env.VITE_SPOTIFY_LINK ||
    'https://open.spotify.com/search/Lewis%20Somes'

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Pack', href: '#pack' },
    { label: 'Merch', href: '#merch' },
    { label: 'Comprar', href: '#comprar' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Grandes Éxitos', href: SPOTIFY_LINK, external: true },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#inicio" className="font-display text-2xl tracking-wide text-text hover:text-red transition-colors">
          LEWIS SOMES
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-xs font-medium tracking-[0.15em] uppercase text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block h-px bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px] w-5' : 'w-6'}`} />
          <span className={`block h-px bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px] w-5' : 'w-4'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-md border-t border-rule"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl tracking-wide text-text-muted hover:text-text transition-colors"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
