import { motion } from 'framer-motion'

const STRIPE_LINK = import.meta.env.VITE_STRIPE_LINK || '#comprar'

const trustBadges = [
  { icon: '⚡', label: 'Descarga instantánea' },
  { icon: '🎵', label: 'WAV 24-bit' },
  { icon: '✓', label: 'Royalty Free' },
  { icon: '🔒', label: 'Pago seguro con Stripe' },
]

export default function BuySection() {
  return (
    <section id="comprar" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Glow */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Consigue tu pack ahora
            </h2>
            <p className="text-text-muted text-lg mb-10">
              50 sonidos exclusivos de reggaeton chileno, listos para usar en tu próxima producción.
            </p>

            {/* Price */}
            <div className="mb-8">
              {/* TODO(human): Set the final price — Lewis needs to confirm the amount */}
              <span className="text-5xl md:text-6xl font-black">$XX</span>
              <span className="text-text-muted text-lg ml-2">USD</span>
            </div>

            {/* CTA */}
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:shadow-[0_0_40px_var(--color-accent-glow)] hover:scale-105 active:scale-100"
            >
              Comprar Ahora
            </a>

            {/* Trust badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-2 text-text-muted text-sm"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Post-purchase info */}
            <p className="text-text-muted/60 text-sm mt-10 max-w-md mx-auto">
              Después de tu compra recibirás un link de descarga instantáneo.
              Todos los sonidos en formato WAV de alta calidad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
