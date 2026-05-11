import { motion } from 'framer-motion'

const videos = [
  '/assets/corto lewis 1.mp4',
  '/assets/corto lewis 2.mp4',
  '/assets/corto lewis 3.mp4',
  '/assets/corto lewis 4.mp4',
]

export default function VideoReel() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] tracking-[0.3em] uppercase mb-12"
        >
          04 / En Vivo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide text-white mb-16"
        >
          LEWIS EN ACCIÓN
        </motion.h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex justify-center gap-4 md:gap-6 px-6 md:px-10 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 w-[260px] md:w-[320px] aspect-[9/16] snap-start"
          >
            <video
              src={src}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-full object-cover"
            />
            {/* Red corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-px bg-red" />
              <div className="absolute top-0 left-0 h-full w-px bg-red" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-px bg-red" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-red" />
            </div>
            {/* Number overlay */}
            <span className="absolute bottom-3 left-3 font-display text-4xl text-white/20">
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
