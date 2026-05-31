'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  GraduationCap,
  Briefcase,
  FileCheck,
  Zap,
  Home,
  MessageCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const valueProps: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Zap,
    title: 'Proceso fácil y rápido',
    description: 'Cuéntanos qué buscas y te proponemos opciones en 24 horas. Sin papeleo innecesario.',
  },
  {
    icon: ShieldCheck,
    title: 'Vivienda segura',
    description: 'Habitaciones verificadas, empresa registrada y contrato claro antes de entrar.',
  },
  {
    icon: GraduationCap,
    title: 'Vienes a estudiar',
    description: 'Ideal si llegas a Madrid para el máster, la carrera o un intercambio universitario.',
  },
  {
    icon: Briefcase,
    title: 'Trabajo temporal',
    description: 'Contratos flexibles para estancias cortas, prácticas, proyectos o traslados laborales.',
  },
  {
    icon: FileCheck,
    title: 'Sin sorpresas',
    description: 'Precio final, servicios incluidos y condiciones explicadas por escrito desde el primer día.',
  },
  {
    icon: Home,
    title: 'Lista para entrar',
    description: 'Habitaciones amuebladas y reformadas. WiFi activo y piso preparado para vivir.',
  },
  {
    icon: MessageCircle,
    title: 'Acompañamiento real',
    description: 'Un interlocutor de confianza durante la búsqueda, la reserva y tu estancia.',
  },
]

export default function InquilinosPitchSection() {
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
            Vienes a Madrid a{' '}
            <span className="font-bold text-secondary">estudiar</span> o por un{' '}
            <span className="font-bold text-secondary">trabajo temporal</span> y no quieres perder tiempo ni
            arriesgarte con anuncios dudosos. Te ayudamos a conseguir vivienda de forma{' '}
            <span className="font-bold text-secondary">fácil y segura</span>, con habitaciones verificadas y
            contrato claro de principio a fin.
          </p>
        </motion.blockquote>

        <div className="mb-10 max-w-xl">
          <h2 className="section-title mb-3">Vivienda sin complicaciones</h2>
          <p className="section-subtitle">
            Para estudiantes y profesionales en estancia temporal que buscan tranquilidad desde el primer día.
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
