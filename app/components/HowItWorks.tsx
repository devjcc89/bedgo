'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Paintbrush, Banknote } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: 'Cuéntanos sobre tu piso',
    description: 'Zona, habitaciones y situación actual. Respuesta en 24 horas, sin compromiso.',
  },
  {
    icon: Paintbrush,
    title: 'Reformamos gratis',
    description: 'Hasta €18.000 en reformas. Tu vivienda gana valor y tú no pagas la reforma.',
  },
  {
    icon: Banknote,
    title: 'Cobras cada mes',
    description: 'Renta fija garantizada cada mes. Gestionamos inquilinos, incidencias y mantenimiento.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 lg:mb-16 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h2 className="section-title mb-4">Cómo funciona</h2>
            <p className="section-subtitle">
              De la primera llamada a la renta en cuenta en semanas, no meses.
            </p>
          </div>
          <p className="hidden lg:block text-sm text-gray-muted max-w-xs leading-relaxed">
            Tres pasos. Sin letra pequeña en el proceso.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 list-none">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                className="relative pl-0"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm font-semibold tabular-nums text-secondary">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
                </div>
                <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-gray-dark leading-relaxed max-w-sm">{step.description}</p>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
