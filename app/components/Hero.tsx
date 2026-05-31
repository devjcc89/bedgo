'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LogoIntro from './LogoIntro'

export interface HeroImage {
  src: string
  alt: string
  caption?: string
}

interface HeroProps {
  title: string
  subtitle: string
  highlight?: string
  badge?: string
  image?: HeroImage
  children?: React.ReactNode
  ctas?: Array<{ label: string; href?: string; onClick?: () => void }>
  logoIntro?: boolean
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero({
  title,
  subtitle,
  highlight,
  badge,
  image,
  children,
  ctas = [],
  logoIntro = false,
}: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 lg:pb-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(72,72,148,0.12),transparent)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          className={`grid gap-12 lg:gap-16 items-center ${
            image ? 'lg:grid-cols-[1fr_minmax(0,0.95fr)]' : 'max-w-3xl mx-auto text-center'
          }`}
        >
          <div className={image ? 'text-left' : ''}>
            {logoIntro && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`mb-5 ${image ? '' : 'flex justify-center'}`}
              >
                <LogoIntro size="md" />
              </motion.div>
            )}

            {badge && (
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-primary"
              >
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" aria-hidden="true" />
                {badge}
              </motion.p>
            )}

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="hero-title text-primary mb-5"
            >
              {title}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className={`text-lg md:text-xl text-gray-dark leading-relaxed max-w-xl ${
                image ? '' : 'mx-auto'
              }`}
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              {subtitle}
            </motion.p>

            {highlight && !image && (
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="mt-5 text-2xl md:text-3xl font-bold text-primary"
              >
                {highlight}
              </motion.p>
            )}

            {ctas.length > 0 && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className={`flex flex-wrap gap-3 mt-8 ${image ? '' : 'justify-center'}`}
              >
                {ctas.map((cta, idx) =>
                  cta.href ? (
                    <Link key={cta.label} href={cta.href} className={idx === 0 ? 'btn-primary' : 'btn-outline'}>
                      {cta.label}
                    </Link>
                  ) : (
                    <button
                      key={cta.label}
                      type="button"
                      onClick={cta.onClick}
                      className={idx === 0 ? 'btn-primary' : 'btn-outline'}
                    >
                      {cta.label}
                    </button>
                  ),
                )}
              </motion.div>
            )}

            {image && (
              <motion.ul
                {...fadeUp}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-dark"
              >
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  Empresa registrada
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                  Contratos legales
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  Madrid
                </li>
              </motion.ul>
            )}
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative order-first lg:order-none"
            >
              <div className="relative aspect-[5/4] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-lifted ring-1 ring-primary/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {(highlight || image.caption) && (
                <div className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:max-w-[240px] bg-white rounded-2xl p-4 shadow-card border border-gray-100">
                  {highlight && (
                    <p className="text-xl font-bold text-primary leading-tight">{highlight}</p>
                  )}
                  {image.caption && (
                    <p className="text-sm text-gray-dark mt-1">{image.caption}</p>
                  )}
                </div>
              )}

              <div
                className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 rounded-3xl bg-secondary/15"
                aria-hidden="true"
              />
            </motion.div>
          )}
        </div>

        {children && <div className="mt-14 lg:mt-16">{children}</div>}
      </div>
    </section>
  )
}
