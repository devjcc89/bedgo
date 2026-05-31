import Image from 'next/image'

export interface BeforeAfterImage {
  src: string
  alt: string
}

interface BeforeAfterGalleryProps {
  before: BeforeAfterImage
  after: BeforeAfterImage
  size?: 'sm' | 'lg'
  className?: string
}

export default function BeforeAfterGallery({
  before,
  after,
  size = 'lg',
  className = '',
}: BeforeAfterGalleryProps) {
  const aspect = size === 'lg' ? 'aspect-[4/3]' : 'aspect-[5/4]'

  return (
    <div className={`grid grid-cols-2 gap-2 sm:gap-3 ${className}`}>
      <div className={`relative ${aspect} rounded-xl overflow-hidden ring-1 ring-black/5`}>
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes={size === 'lg' ? '(max-width: 768px) 50vw, 320px' : '(max-width: 768px) 50vw, 200px'}
          className="object-cover"
        />
        <span className="absolute top-2 left-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide bg-black/65 text-white px-2 py-1 rounded-md">
          Antes
        </span>
      </div>
      <div className={`relative ${aspect} rounded-xl overflow-hidden ring-1 ring-secondary/20`}>
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes={size === 'lg' ? '(max-width: 768px) 50vw, 320px' : '(max-width: 768px) 50vw, 200px'}
          className="object-cover"
        />
        <span className="absolute top-2 left-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide bg-secondary text-white px-2 py-1 rounded-md">
          Después
        </span>
      </div>
    </div>
  )
}
