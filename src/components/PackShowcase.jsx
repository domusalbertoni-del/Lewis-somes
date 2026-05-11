import { motion } from 'framer-motion'

export default function PackShowcase() {
  return (
    <section id="pack" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Cover art */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all" />
            <img
              src="/assets/DRUMS-KIT-.jpg.jpeg"
              alt="Drums Kit Lewis Somes"
              className="relative w-72 md:w-80 lg:w-96 rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <div>
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/20 mb-4">
              50 sonidos exclusivos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              Drums Kit<br />Lewis Somes
            </h2>
          </div>

          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
            Desbloquea el sonido que llevas dentro. 50 samples cuidadosamente seleccionados
            para producir reggaeton con el sello chileno que define a Lewis Somes.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {['WAV 24-bit', 'Royalty Free', 'Descarga Instantánea'].map((tag) => (
              <span
                key={tag}
                className="text-xs text-text-muted bg-bg-card border border-border px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
