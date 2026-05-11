import { motion } from 'framer-motion'

const daws = ['FL Studio', 'Ableton Live', 'Logic Pro', 'Pro Tools', 'Studio One']

export default function DawCompatibility() {
  return (
    <section className="py-16 px-6 border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-text-muted text-sm tracking-widest uppercase mb-8">
          Compatible con tu DAW favorito
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {daws.map((daw, i) => (
            <motion.span
              key={daw}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-text-muted/60 font-semibold text-sm md:text-base hover:text-text transition-colors"
            >
              {daw}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
