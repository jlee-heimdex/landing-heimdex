import Link from 'next/link'

interface PricingHeroProps {
  h1: string
  subheadline: string
  cta: string
  ctaMicrocopy: string
  ctaHref: string
}

export default function PricingHero({
  h1,
  subheadline,
  cta,
  ctaMicrocopy,
  ctaHref,
}: PricingHeroProps) {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-slide-up">
          {h1}
        </h1>

        <p
          className="text-lg sm:text-xl text-surface-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          {subheadline}
        </p>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {ctaHref.startsWith('http') ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-gradient text-lg px-8 py-4 inline-flex">
              {cta}
            </a>
          ) : (
            <Link href={ctaHref} className="btn btn-gradient text-lg px-8 py-4 inline-flex">
              {cta}
            </Link>
          )}
          <p className="text-sm text-surface-500 mt-3">{ctaMicrocopy}</p>
        </div>
      </div>
    </section>
  )
}
