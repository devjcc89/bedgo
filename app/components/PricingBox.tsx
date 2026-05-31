'use client'

import { motion } from 'framer-motion'

interface PricingRow {
  label: string
  value: string
  highlight?: boolean
}

interface PricingBoxProps {
  rows: PricingRow[]
  summary?: string
}

export default function PricingBox({ rows, summary }: PricingBoxProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.div
      className="bg-gray-light rounded-2xl p-8 md:p-12 my-8 border-l-4 border-secondary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="space-y-4">
        {rows.map((row, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex justify-between items-center py-3 border-b border-gray-300 last:border-b-0"
          >
            <span className="text-lg text-gray-dark font-medium">{row.label}</span>
            <span
              className={`text-xl font-bold ${
                row.highlight ? 'text-secondary text-2xl' : 'text-primary'
              }`}
            >
              {row.value}
            </span>
          </motion.div>
        ))}
      </div>

      {summary && (
        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-secondary/10 rounded-lg border border-secondary/20"
        >
          <p className="text-lg font-bold text-secondary">{summary}</p>
        </motion.div>
      )}
    </motion.div>
  )
}
