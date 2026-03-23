interface CTABannerProps {
  headline: string
  highlight: string
  ctaLabel: string
  ctaHref: string
}

export default function CTABanner({ headline, highlight, ctaLabel, ctaHref }: CTABannerProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left">
              {headline}
              <br />
              <span className="text-accent-blue font-medium">{highlight}</span>
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm px-6 py-3 whitespace-nowrap flex-shrink-0"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
