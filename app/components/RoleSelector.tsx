'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface RoleCard {
  icon: LucideIcon
  title: string
  description: string
  cta: string
  onClick: () => void
  featured?: boolean
}

interface RoleSelectorProps {
  cards: RoleCard[]
}

export default function RoleSelector({ cards }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
      {cards.map((card, idx) => {
        const Icon = card.icon
        return (
          <motion.button
            key={card.title}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 + idx * 0.1 }}
            onClick={card.onClick}
            className={`group text-left p-8 rounded-2xl border-2 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
              card.featured
                ? 'bg-primary text-white border-primary shadow-card hover:shadow-lifted'
                : 'bg-white text-primary border-gray-200 hover:border-secondary/40 hover:shadow-card'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-200 ${
                card.featured
                  ? 'bg-white/15 text-white group-hover:bg-secondary'
                  : 'bg-primary/8 text-primary group-hover:bg-secondary/10 group-hover:text-secondary'
              }`}
            >
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>

            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className={`text-sm leading-relaxed mb-6 ${card.featured ? 'text-white/80' : 'text-gray-dark'}`}>
              {card.description}
            </p>

            <span
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                card.featured ? 'text-accent group-hover:text-white' : 'text-secondary group-hover:text-primary'
              }`}
            >
              {card.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}
