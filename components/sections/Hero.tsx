import Link from 'next/link'
import { ReactNode } from 'react'

interface HeroProps {
  badge?: string
  headline: string | ReactNode
  subhead?: string
  description?: string
  ctaText: string
  ctaHref: string
  children?: ReactNode
}

export default function Hero({
  badge,
  headline,
  subhead,
  description,
  ctaText,
  ctaHref,
  children,
}: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-accent-pink/8 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {badge && (
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium">
              {badge}
            </span>
          </div>
        )}

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-slide-up">
          {headline}
        </h1>

        {subhead && (
          <p className="text-xl sm:text-2xl font-semibold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {subhead}
          </p>
        )}

        {description && (
          <p className="text-xl sm:text-2xl text-surface-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {ctaHref.startsWith('http') ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-gradient text-lg px-8 py-4">
              {ctaText}
            </a>
          ) : (
            <Link href={ctaHref} className="btn btn-gradient text-lg px-8 py-4">
              {ctaText}
            </Link>
          )}
        </div>

        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  )
}
