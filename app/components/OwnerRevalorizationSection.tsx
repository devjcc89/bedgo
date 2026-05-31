'use client'

import { motion } from 'framer-motion'
import { Megaphone, Sofa, PenTool, TrendingUp, Scale } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const pillars: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: PenTool,
    title: 'Estudios de arquitectura',
    description:
      'Partnerships con estudios locales para redistribuir espacios, mejorar acabados y sacar el máximo partido a cada metro cuadrado.',
  },
  {
    icon: Sofa,
    title: 'Home staging',
    description:
      'Ambientamos y presentamos la vivienda para que destaque en el mercado y genere más interés desde el primer día.',
  },
  {
    icon: Megaphone,
    title: 'Marketing inmobiliario',
    description:
      'Fotografía profesional, difusión y posicionamiento para llenar habitaciones con inquilinos verificados en menos tiempo.',
  },
  {
    icon: Scale,
    title: 'Precio justo de mercado',
    description:
      'Analizamos la zona en Madrid y ajustamos la renta al mercado real: máximo rendimiento sin inflar el precio.',
  },
  {
    icon: TrendingUp,
    title: 'Revalorización del activo',
    description:
      'Reforma, diseño y gestión integrada para que tu piso valga más y rinda mejor a largo plazo.',
  },
]

export default function OwnerRevalorizationSection() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-white border-y border-gray-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 lg:mb-14 max-w-2xl">
          <h2 className="section-title mb-4">Revalorizamos tu piso para maximizar el rendimiento</h2>
          <p className="section-subtitle">
            No solo alquilamos: aplicamos marketing, home staging y diseño con estudios de arquitectura
            para revalorizar tu vivienda en Madrid y conseguir el máximo rendimiento con un precio justo
            ajustado al mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                className={`rounded-2xl border border-gray-200 p-6 hover:border-primary/20 hover:shadow-soft transition-all duration-200 ${
                  idx === pillars.length - 1 && pillars.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
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
