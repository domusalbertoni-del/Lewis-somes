import { motion } from 'framer-motion'

export default function PackShowcase() {
  return (
    <section id="pack" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] tracking-[0.3em] uppercase mb-12"
        >
          01 / Reggaeton Chileno
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* Cover art — full column bleed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative max-w-lg">
              <img
                src="/assets/NEW-LIBRERIA-LEWIS-SOMES.4.jpg.jpeg"
                alt="Drums Kit Lewis Somes"
                className="w-full h-auto object-contain"
              />
              {/* Red corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-full h-px bg-red" />
                <div className="absolute top-0 right-0 h-full w-px bg-red" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <div className="absolute bottom-0 left-0 w-full h-px bg-red" />
                <div className="absolute bottom-0 left-0 h-full w-px bg-red" />
              </div>
            </div>
          </motion.div>

          {/* Info — left aligned */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:pl-8"
          >
            <span className="text-red text-[10px] font-bold tracking-[0.3em] uppercase">
              Sonidos Exclusivos
            </span>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-wide mt-4 mb-6 text-white">
              DRUMS KIT<br />LEWIS SOMES
            </h2>

            <p className="text-text-muted leading-relaxed max-w-md mb-8">
              Desbloquea el sonido que llevas dentro. Samples cuidadosamente
              seleccionados para producir reggaeton con el sello chileno que
              define a Lewis Somes.
            </p>

            <div className="flex gap-6 text-[11px] tracking-[0.15em] uppercase text-text-muted">
              <span>WAV 24-bit</span>
              <span className="text-rule">|</span>
              <span>Royalty Free</span>
              <span className="text-rule">|</span>
              <span>Descarga Instantánea</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
