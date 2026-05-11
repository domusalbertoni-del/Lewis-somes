import { motion } from 'framer-motion'

const categories = [
  { name: 'Kick', count: 10, desc: 'Golpes potentes que marcan el ritmo' },
  { name: 'Snare', count: 8, desc: 'Snares con carácter y punch' },
  { name: 'FX', count: 8, desc: 'Efectos para transiciones y risers' },
  { name: 'Voces', count: 8, desc: 'Ad-libs y chops vocales únicos' },
  { name: 'Melody', count: 8, desc: 'Loops melódicos listos para usar' },
  { name: 'Loops', count: 8, desc: 'Patrones rítmicos completos' },
]

export default function SoundCategories() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] tracking-[0.3em] uppercase mb-12"
        >
          02 / Contenido
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide text-white mb-16"
        >
          LO QUE INCLUYE
        </motion.h2>

        {/* Stacked list — not cards */}
        <div className="border-t border-rule">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_200px_1fr_auto] items-center gap-4 md:gap-8 py-5 border-b border-rule hover:bg-surface transition-colors px-2 md:px-4 cursor-default"
            >
              {/* Number */}
              <span className="font-display text-3xl md:text-4xl text-rule group-hover:text-red transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Name */}
              <span className="font-display text-xl md:text-2xl tracking-wide text-white">
                {cat.name.toUpperCase()}
              </span>

              {/* Description — hidden on mobile */}
              <span className="hidden md:block text-sm text-text-muted">
                {cat.desc}
              </span>

              {/* Count */}
              <span className="text-xs tracking-[0.15em] uppercase text-text-muted text-right">
                {cat.count} <span className="hidden sm:inline">samples</span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-end mt-6">
          <span className="text-red font-bold text-sm tracking-[0.1em]">
            50 SAMPLES TOTAL
          </span>
        </div>
      </div>
    </section>
  )
}
