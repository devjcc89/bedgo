'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Building2,
  TrendingUp,
  Wrench,
  Users,
  CalendarCheck,
  RefreshCw,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const valueProps: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: ShieldCheck,
    title: 'Renta garantizada todos los meses',
    description: 'Cobras una renta fija pactada, sin depender de la ocupación ni de los impagos.',
  },
  {
    icon: Building2,
    title: 'Un único interlocutor',
    description: 'Tu empresa gestiona todo. Tú hablas solo con Bedgo, no con inquilinos ni proveedores.',
  },
  {
    icon: TrendingUp,
    title: 'Mayor rentabilidad',
    description: 'Rentabilidad potencialmente superior al alquiler tradicional por habitaciones.',
  },
  {
    icon: Wrench,
    title: 'Gestión integral de incidencias',
    description: 'Reparaciones, mantenimiento y coordinación diaria: resueltos por nosotros.',
  },
  {
    icon: Users,
    title: 'Selección y sustitución de inquilinos',
    description: 'Verificamos ocupantes y gestionamos cambios sin que tú intervengas.',
  },
  {
    icon: CalendarCheck,
    title: 'Menor riesgo de vacancia',
    description: 'Evitas periodos vacíos entre inquilinos y la pérdida de ingresos que conllevan.',
  },
  {
    icon: RefreshCw,
    title: 'Recupera el activo con flexibilidad',
    description: 'Estructura contractual que te permite recuperar el piso según lo acordado.',
  },
]

export default function OwnerPitchSection() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto text-center mb-14 lg:mb-16"
        >
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-secondary"
            aria-hidden="true"
          />
          <p className="text-xl md:text-2xl lg:text-[1.65rem] font-medium text-primary leading-snug text-balance">
            Con un alquiler tradicional, el propietario asume vacancias, impagos, gestión e incidencias.
            Con nuestro modelo, recibe una{' '}
            <span className="font-bold text-secondary">renta fija pactada</span>, sin preocuparse por la
            comercialización de habitaciones, selección de ocupantes ni gestión diaria, mientras obtiene una{' '}
            <span className="font-bold text-secondary">rentabilidad potencialmente superior</span> a la del
            alquiler convencional.
          </p>
        </motion.blockquote>

        <div className="mb-10 max-w-xl">
          <h2 className="section-title mb-3">Por qué los propietarios eligen Bedgo</h2>
          <p className="section-subtitle">
            Menos riesgo, más ingresos y un solo interlocutor de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {valueProps.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
                className="rounded-2xl border border-gray-200 bg-gray-light/50 p-6 hover:border-primary/20 hover:shadow-soft transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-dark leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
