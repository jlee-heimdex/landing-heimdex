import Link from 'next/link'

interface PricingCardProps {
  planName: string
  tagline: string
  pricingLabel: string
  features: string[]
  deploymentOptions: string
  cta: string
  ctaHref: string
}

export default function PricingCard({
  planName,
  tagline,
  pricingLabel,
  features,
  deploymentOptions,
  cta,
  ctaHref,
}: PricingCardProps) {
  return (
    <div className="card border-accent-cyan/30 relative max-w-2xl mx-auto">
      {/* Plan badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink text-white text-sm font-semibold">
          {planName}
        </span>
      </div>

      <div className="pt-6">
        {/* Tagline */}
        <p className="text-center text-surface-400 mb-6">{tagline}</p>

        {/* Pricing label */}
        <div className="text-center mb-8 py-6 border-y border-surface-700">
          <div className="text-3xl font-bold gradient-text">{pricingLabel}</div>
        </div>

        {/* Features list */}
        <div className="mb-8">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-surface-300">
                <svg
                  className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deployment options */}
        <div className="mb-8 p-4 rounded-lg bg-surface-900/50 border border-surface-700">
          <div className="text-sm text-surface-500 mb-1">Deployment</div>
          <div className="font-medium text-surface-200">{deploymentOptions}</div>
        </div>

        {/* CTA */}
        <Link href={ctaHref} className="btn btn-primary w-full text-center">
          {cta}
        </Link>
      </div>
    </div>
  )
}
