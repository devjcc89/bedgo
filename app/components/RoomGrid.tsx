'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Room {
  icon: LucideIcon
  title: string
  price: string
  description: string
  features: string[]
}

interface RoomGridProps {
  rooms: Room[]
}

export default function RoomGrid({ rooms }: RoomGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rooms.map((room, idx) => {
        const Icon = room.icon
        return (
          <motion.article
            key={room.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.08 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-secondary/30 hover:shadow-card transition-all duration-200"
          >
            <div className="bg-gray-light p-8 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="w-4 h-4 text-gray-muted shrink-0 mt-1" aria-hidden="true" />
                <h4 className="text-lg font-bold text-primary leading-snug">{room.title}</h4>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">{room.price}</p>
              <p className="text-sm text-gray-dark mb-4">{room.description}</p>
              <div className="flex flex-wrap gap-2">
                {room.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}
