'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Search, Key } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: 'Cuéntanos qué buscas',
    description: 'Estudiante, temporal o profesional: cuéntanos tu situación. Respuesta en 24 horas.',
  },
  {
    icon: Search,
    title: 'Te proponemos opciones seguras',
    description: 'Habitaciones verificadas en Madrid, con precio claro y contrato antes de reservar.',
  },
  {
    icon: Key,
    title: 'Entras con tranquilidad',
    description: 'Piso amueblado, WiFi y servicios incluidos. Ideal para estudiar o trabajar temporalmente.',
  },
]

export default function TenantHowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 px-6 bg-gray-light border-y border-gray-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 lg:mb-16 max-w-xl">
          <h2 className="section-title mb-4">Consigue tu habitación fácil y seguro</h2>
          <p className="section-subtitle">
            Tres pasos sencillos para estudiar o trabajar en Madrid con tranquilidad desde el primer día.
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
