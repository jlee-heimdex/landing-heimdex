import Image from 'next/image'
import { ReactNode } from 'react'

interface HeroProps {
  headline: ReactNode
  description: string
  ctaLabel: string
  ctaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  imageSrc: string
  imageAlt: string
}

export default function Hero({
  headline,
  description,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold mb-5 tracking-tight leading-tight">
          {headline}
        </h1>

        <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
          {description}
        </p>

        {/* Product Image */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gray-200/60">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={720}
              className="w-full h-auto"
              priority
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors">
                <svg className="w-6 h-6 text-gray-700 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={secondaryCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-sm px-6 py-3"
          >
            {secondaryCtaLabel}
          </a>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm px-6 py-3"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
