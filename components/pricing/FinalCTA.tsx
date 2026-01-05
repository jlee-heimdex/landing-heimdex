import Link from 'next/link'

interface FinalCTAProps {
  heading: string
  cta: string
  microcopy: string
  ctaHref: string
}

export default function FinalCTA({
  heading,
  cta,
  microcopy,
  ctaHref,
}: FinalCTAProps) {
  return (
    <div className="card max-w-3xl mx-auto text-center border-accent-cyan/20 bg-gradient-to-br from-surface-900/80 to-surface-800/80">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-surface-400 mb-8 max-w-2xl mx-auto leading-relaxed">{microcopy}</p>
      <Link href={ctaHref} className="btn btn-gradient text-lg px-8 py-4 inline-flex">
        {cta}
      </Link>
    </div>
  )
}
