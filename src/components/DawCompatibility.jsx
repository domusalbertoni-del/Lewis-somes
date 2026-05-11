import { motion } from 'framer-motion'

const daws = ['FL Studio', 'Ableton Live', 'Logic Pro', 'Pro Tools', 'Studio One']

export default function DawCompatibility() {
  return (
    <section className="py-16 border-y border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] tracking-[0.3em] uppercase shrink-0"
        >
          Compatible con tu DAW
        </motion.p>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {daws.map((daw, i) => (
            <motion.span
              key={daw}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="font-display text-lg md:text-xl tracking-wide text-text-muted/40 hover:text-white transition-colors"
            >
              {daw.toUpperCase()}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
