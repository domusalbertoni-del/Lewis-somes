import { motion } from 'framer-motion'

const MANAGER_PHONE = '+56942205167'
const MANAGER_PHONE_DISPLAY = '+56 9 4220 5167'
const EMAIL = 'lewissomes@gmail.com'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] tracking-[0.3em] uppercase mb-12"
        >
          07 / Contacto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide text-white mb-16"
        >
          CONTACTO
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.a
            href={`tel:${MANAGER_PHONE}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group block border border-rule p-8 hover:border-red transition-colors"
          >
            <span className="block text-[10px] tracking-[0.3em] uppercase text-text-muted mb-3">
              Manager
            </span>
            <span className="block font-display text-2xl md:text-3xl text-white group-hover:text-red transition-colors">
              {MANAGER_PHONE_DISPLAY}
            </span>
          </motion.a>

          <motion.a
            href={`mailto:${EMAIL}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group block border border-rule p-8 hover:border-red transition-colors"
          >
            <span className="block text-[10px] tracking-[0.3em] uppercase text-text-muted mb-3">
              Email
            </span>
            <span className="block font-display text-2xl md:text-3xl text-white group-hover:text-red transition-colors break-all">
              {EMAIL}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
