'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

interface TrustedByProps {
  label: string
  headline: ReactNode
  logos: Array<{
    src: string
    alt: string
    width?: number
    height?: number
  }>
}

export default function TrustedBy({ label, headline, logos }: TrustedByProps) {
  // Double the logos for seamless infinite scroll
  const scrollLogos = [...logos, ...logos]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-400 font-medium mb-3">{label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">
            {headline}
          </h2>

          {/* Carousel container */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-8 overflow-hidden">
            <div className="relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

              {/* Scrolling track */}
              <div className="flex animate-scroll">
                {scrollLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center px-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 120}
                      height={logo.height || 40}
                      className="object-contain h-8 sm:h-10 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
