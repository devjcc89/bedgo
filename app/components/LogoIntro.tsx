'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { LOGO, LOGO_INTRO } from '../lib/brand'

interface LogoIntroProps {
  className?: string
  size?: 'sm' | 'md'
}

const sizes = {
  sm: { box: 'h-12 w-12', dim: 48 },
  md: { box: 'h-16 w-16', dim: 64 },
} as const

export default function LogoIntro({ className = '', size = 'md' }: LogoIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const { box, dim } = sizes[size]

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    setPlaying(true)
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => setPlaying(false))
  }, [])

  return (
    <div className={`relative shrink-0 ${box} ${className}`} aria-hidden="true">
      <Image
        src={LOGO.src}
        alt=""
        width={dim}
        height={dim}
        priority
        className={`${box} object-contain transition-opacity duration-300 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {playing && (
        <video
          ref={videoRef}
          src={LOGO_INTRO.src}
          muted
          playsInline
          preload="auto"
          poster={LOGO.src}
          className={`absolute inset-0 ${box} object-contain`}
          onEnded={() => setPlaying(false)}
          onError={() => setPlaying(false)}
        />
      )}
    </div>
  )
}
