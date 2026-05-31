'use client'

import { motion } from 'framer-motion'

interface Stat {
  number: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
  title?: string
}

export default function StatsSection({ stats, title }: StatsSectionProps) {
  return (
    <section className="relative py-20 px-6 bg-primary overflow-hidden">
      <div className="absolute inset-0 brand-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">{title}</h2>
          </motion.div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.08 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <p className="text-sm text-white/80 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
