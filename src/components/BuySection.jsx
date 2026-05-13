import { motion } from 'framer-motion'
import { buildCheckoutUrl } from '../lib/checkout'

const CHECKOUT_HREF = buildCheckoutUrl()
const BEATSTARS_LINK = import.meta.env.VITE_BEATSTARS_LINK || 'https://lewissomes.beatstars.com'

export default function BuySection() {
  return (
    <section id="comprar" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] tracking-[0.3em] uppercase mb-12"
        >
          06 / Comprar
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0 items-start">
          {/* Left — Sample Pack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-16"
          >
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide text-white mb-2">
              DRUMS KIT REGGAETON<br />CHILENO VOL. 1
            </h2>

            <p className="text-text-muted mb-8 max-w-md">
              Sonidos exclusivos de LEWIS SOMES, listos para usar en tu
              próxima producción.
            </p>

            {/* Pack image (pendrive en la librería) */}
            <div className="relative mb-8 max-w-sm">
              <img
                src="/assets/DRUMS-KIT-.jpg.jpeg"
                alt="Pack Drums Kit Lewis Somes"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-red mb-3">
                Precio limitado
              </span>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-text-muted line-through">
                  $50.000
                </span>
                <span className="font-display text-[clamp(3rem,8vw,5rem)] leading-none text-white">
                  $25.000
                </span>
                <span className="text-text-muted text-sm">CLP</span>
              </div>
            </div>

            <a
              href={CHECKOUT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-comprar"
              className="inline-block bg-red text-white font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-red-dim transition-colors"
            >
              Comprar Ahora
            </a>

            {/* Details */}
            <div className="mt-10 grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <p className="text-text-muted text-[10px] tracking-[0.2em] uppercase mb-1">Formato</p>
                <p className="text-text">WAV 24-bit</p>
              </div>
              <div>
                <p className="text-text-muted text-[10px] tracking-[0.2em] uppercase mb-1">Licencia</p>
                <p className="text-text">Royalty Free</p>
              </div>
              <div>
                <p className="text-text-muted text-[10px] tracking-[0.2em] uppercase mb-1">Entrega</p>
                <p className="text-text">Descarga instantánea</p>
              </div>
              <div>
                <p className="text-text-muted text-[10px] tracking-[0.2em] uppercase mb-1">Pago</p>
                <p className="text-text">Pago vía TOLIV</p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block bg-rule" />

          {/* Right — BeatStars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-16"
          >
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide text-white mb-2">
              BEATS
            </h2>

            <p className="text-text-muted mb-8 max-w-md">
              Explora la librería completa de beats de Lewis Somes en BeatStars.
              Exclusivos, leases y más.
            </p>

            {/* Promo image */}
            <div className="relative mb-8">
              <img
                src="/assets/full-rojo-FONDO.jpg.jpeg"
                alt="Lewis Somes Beats"
                className="w-full object-cover max-h-[280px]"
              />
            </div>

            <a
              href={BEATSTARS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-rule text-text font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 hover:border-red hover:text-red transition-colors"
            >
              Ver en BeatStars
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
