'use client'

import { motion } from 'framer-motion'
import { X, Check, TrendingUp } from 'lucide-react'

interface PricingRow {
  label: string
  value: string
  highlight?: boolean
}

interface TransformationSectionProps {
  rows: PricingRow[]
  summary?: string
}

export default function TransformationSection({ rows, summary }: TransformationSectionProps) {
  const beforeRows = rows.filter((r) => !r.highlight)
  const afterRows = rows.filter((r) => r.highlight)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="rounded-2xl border border-gray-200 bg-white p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gray-light flex items-center justify-center">
              <X className="w-5 h-5 text-gray-muted" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-muted">Antes</p>
              <h3 className="text-lg font-bold text-gray-dark">Alquiler tradicional</h3>
            </div>
          </div>

          <ul className="space-y-4">
            {beforeRows.map((row) => (
              <li key={row.label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-dark">{row.label}</span>
                <span className="text-lg font-bold text-gray-muted">{row.value}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-2 text-sm text-gray-muted">
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 shrink-0" aria-hidden="true" />
              Vacancias, impagos e incidencias a tu cargo
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 shrink-0" aria-hidden="true" />
              Comercialización y selección de inquilinos
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 shrink-0" aria-hidden="true" />
              Rentabilidad limitada al alquiler convencional
            </li>
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="rounded-2xl border-2 border-secondary/30 bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-lifted"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Check className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Después</p>
              <h3 className="text-lg font-bold">Con Bedgo</h3>
            </div>
          </div>

          <ul className="space-y-4">
            {afterRows.map((row) => (
              <li key={row.label} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                <span className="text-sm text-white/80">{row.label}</span>
                <span className="text-2xl font-bold text-accent">{row.value}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              Renta fija pactada, todos los meses
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              Gestión integral de incidencias e inquilinos
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              Mayor rentabilidad · reforma incluida
            </li>
          </ul>
        </motion.div>
      </div>

      {summary && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-accent/10 border border-accent/30"
        >
          <TrendingUp className="w-6 h-6 text-primary shrink-0" aria-hidden="true" />
          <p className="text-lg font-bold text-primary text-center">{summary}</p>
        </motion.div>
      )}
    </div>
  )
}
