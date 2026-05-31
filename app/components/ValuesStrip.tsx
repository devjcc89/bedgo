'use client'

import { motion } from 'framer-motion'
import { Shield, Wallet, Home, Handshake, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const values: Value[] = [
  { icon: Shield, title: 'Seguridad', description: 'Contratos legales claros y garantías profesionales.' },
  { icon: Wallet, title: 'Rentabilidad', description: 'Maximizamos ingresos sin que tengas que intervenir.' },
  { icon: Home, title: 'Calidad', description: 'Reformas hechas para durar y generar valor.' },
  { icon: Handshake, title: 'Transparencia', description: 'Todo documentado y acordado por escrito.' },
  { icon: Zap, title: 'Rapidez', description: 'De interesado a reforma en marcha en semanas.' },
]

export default function ValuesStrip() {
  return (
    <section className="py-16 lg:py-20 px-6 border-y border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-10 text-balance max-w-md">
          Cómo trabajamos contigo
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
              >
                <div className="w-10 h-10 mb-3 rounded-xl bg-primary/8 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-primary mb-1">{value.title}</h3>
                <p className="text-sm text-gray-dark leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
