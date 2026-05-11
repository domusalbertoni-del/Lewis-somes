import { motion } from 'framer-motion'

export default function Merch() {
  return (
    <section id="merch" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] tracking-[0.3em] uppercase mb-12"
        >
          05 / Merch
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* Hoodie image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative max-w-lg">
              <img
                src="/assets/hoodie.jpeg"
                alt="Lewis Somes Hoodie"
                className="w-full object-cover"
              />
              {/* Red corner accents */}
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

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:pl-8"
          >
            <span className="text-red text-[10px] font-bold tracking-[0.3em] uppercase">
              Edición Limitada
            </span>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-wide mt-4 mb-6 text-white">
              HOODIE<br />LEWIS SOMES
            </h2>

            <p className="text-text-muted leading-relaxed max-w-md mb-8">
              Representa el movimiento. Hoodie oficial Lewis Somes — diseño exclusivo,
              edición limitada. El uniforme del reggaeton chileno.
            </p>

            <div className="flex gap-6 text-[11px] tracking-[0.15em] uppercase text-text-muted mb-10">
              <span>Edición Limitada</span>
              <span className="text-rule">|</span>
              <span>Envío Nacional</span>
            </div>

            {/* TODO(human): Add merch purchase link when Lewis has his store set up */}
            <a
              href="#comprar"
              className="inline-block bg-red text-white font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-red-dim transition-colors"
            >
              Próximamente
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
