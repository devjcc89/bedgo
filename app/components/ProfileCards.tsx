'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ProfileCard {
  icon: LucideIcon
  title: string
  price: string
  features: string[]
}

interface ProfileCardsProps {
  profiles: ProfileCard[]
}

export default function ProfileCards({ profiles }: ProfileCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {profiles.map((profile, idx) => {
        const Icon = profile.icon
        return (
          <motion.div
            key={profile.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.08 }}
            className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-secondary/30 hover:shadow-card transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">{profile.title}</h3>
            <p className="text-2xl font-bold text-secondary mb-6">{profile.price}</p>
            <ul className="space-y-3">
              {profile.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gray-dark leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )
      })}
    </div>
  )
}
