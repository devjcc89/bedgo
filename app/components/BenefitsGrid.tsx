'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

interface BenefitsGridProps {
  benefits: Benefit[]
}

export default function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
      {benefits.map((benefit, idx) => {
        const Icon = benefit.icon
        return (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.05 }}
            className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-secondary/30 hover:shadow-card transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-primary mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-dark leading-relaxed">{benefit.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
