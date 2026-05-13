import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/FONDO-DE-PANTALLA-1.jpg.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
        {/* Red tint at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-red/8 to-transparent" />
      </div>

      {/* Content pinned to bottom-left */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-red text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Reggaeton Chileno
          </p>

          <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-wide text-white">
            LEWIS<br />SOMES
          </h1>

          <div className="flex items-center gap-6 mt-8">
            <a
              href="#comprar"
              className="text-xs font-bold tracking-[0.15em] uppercase bg-red text-white px-7 py-3 hover:bg-red-dim transition-colors"
            >
              Comprar Librería
            </a>
            <span className="text-text-muted text-sm">
              Drums Kit Vol. 1
            </span>
          </div>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute right-6 md:right-10 bottom-16 md:bottom-24 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted [writing-mode:vertical-lr]">
            Scroll
          </span>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-12 bg-text-muted origin-top"
          />
        </motion.div>
      </div>
    </section>
  )
}
