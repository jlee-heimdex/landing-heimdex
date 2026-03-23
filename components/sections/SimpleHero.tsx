import Link from 'next/link'
import { ReactNode } from 'react'

interface SimpleHeroProps {
  headline: string | ReactNode
  subhead?: string
  description?: string
  ctaText: string
  ctaHref: string
}

export default function SimpleHero({
  headline,
  subhead,
  description,
  ctaText,
  ctaHref,
}: SimpleHeroProps) {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          {headline}
        </h1>

        {subhead && (
          <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
            {subhead}
          </p>
        )}

        {description && (
          <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex justify-center">
          {ctaHref.startsWith('http') ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm px-6 py-3">
              {ctaText}
            </a>
          ) : (
            <Link href={ctaHref} className="btn btn-primary text-sm px-6 py-3">
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
