'use client'

import { motion } from 'framer-motion'
import { Star, ArrowRight, TrendingUp } from 'lucide-react'
import type { SuccessStory, Testimonial } from '../lib/social-proof'
import BeforeAfterGallery from './BeforeAfterGallery'

interface SocialProofSectionProps {
  stories: SuccessStory[]
  testimonials: Testimonial[]
  storiesTitle?: string
  storiesSubtitle?: string
  testimonialsTitle?: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-accent text-accent' : 'text-gray-200'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className="w-10 h-10 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center shrink-0"
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

export default function SocialProofSection({
  stories,
  testimonials,
  storiesTitle = 'Casos de éxito',
  storiesSubtitle = 'Resultados concretos de propietarios e inquilinos en Madrid.',
  testimonialsTitle = 'Lo que dicen nuestros clientes',
}: SocialProofSectionProps) {
  const [featured, ...restStories] = stories

  return (
    <section id="resenas" className="py-20 lg:py-28 px-6 bg-gray-light border-y border-gray-200/80">
      <div className="max-w-6xl mx-auto space-y-20 lg:space-y-24">
        {/* Casos de éxito */}
        <div>
          <div className="mb-12 lg:mb-14 max-w-2xl">
            <h2 className="section-title mb-4">{storiesTitle}</h2>
            <p className="section-subtitle">{storiesSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {featured && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3 bg-primary text-white rounded-3xl p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-white/70 mb-1">{featured.zone} · Madrid</p>
                    <h3 className="text-xl lg:text-2xl font-bold text-balance">{featured.title}</h3>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                </div>

                {featured.beforeImage && featured.afterImage && (
                  <BeforeAfterGallery
                    before={featured.beforeImage}
                    after={featured.afterImage}
                    size="lg"
                    className="mb-6"
                  />
                )}

                <p className="text-white/85 leading-relaxed mb-4 flex-1">{featured.summary}</p>

                {featured.intervention && (
                  <p className="text-xs font-medium text-accent/90 mb-6">{featured.intervention}</p>
                )}

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-white/60 mb-1">Antes</p>
                    <p className="font-semibold text-white/80">{featured.before}</p>
                  </div>
                  <div className="rounded-2xl bg-accent/20 border border-accent/30 p-4">
                    <p className="text-xs text-accent mb-1">Con Bedgo</p>
                    <p className="font-bold text-accent text-lg">{featured.after}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                  {featured.extra && <span>{featured.extra}</span>}
                  <span>{featured.timeline}</span>
                </div>
              </motion.article>
            )}

            <div className="lg:col-span-2 flex flex-col gap-6">
              {restStories.map((story, idx) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 flex-1 overflow-hidden"
                >
                  {story.beforeImage && story.afterImage && (
                    <BeforeAfterGallery
                      before={story.beforeImage}
                      after={story.afterImage}
                      size="sm"
                      className="mb-4 -mx-1"
                    />
                  )}
                  <p className="text-sm font-medium text-secondary mb-1">{story.zone} · Madrid</p>
                  <h3 className="text-lg font-bold text-primary mb-3">{story.title}</h3>
                  <p className="text-sm text-gray-dark leading-relaxed mb-3">{story.summary}</p>
                  {story.intervention && (
                    <p className="text-xs font-medium text-gray-muted mb-4">{story.intervention}</p>
                  )}
                  <div className="flex items-end justify-between gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-muted line-through">{story.before}</p>
                      <p className="text-base font-bold text-primary">{story.after}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mb-1" aria-hidden="true" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Reseñas */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-balance">
            {testimonialsTitle}
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {testimonials.map((item, idx) => (
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col"
              >
                <StarRating rating={item.rating} />
                <p className="mt-4 text-gray-dark leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                  <InitialsAvatar name={item.name} />
                  <div>
                    <cite className="not-italic text-sm font-bold text-primary">{item.name}</cite>
                    <p className="text-xs text-gray-muted">{item.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
