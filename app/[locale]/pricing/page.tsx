import { Metadata } from 'next'
import { Locale } from '@/lib/types'
import { getPricingContent } from '@/lib/pricing-content'
import { getBookingLink } from '@/lib/i18n'
import PricingHero from '@/components/pricing/PricingHero'
import PricingCard from '@/components/pricing/PricingCard'
import PricingFactorsAccordion from '@/components/pricing/PricingFactorsAccordion'
import PricingTrust from '@/components/pricing/PricingTrust'
import FinalCTA from '@/components/pricing/FinalCTA'

interface PricingPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: PricingPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const content = getPricingContent(locale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      type: 'website',
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.title,
      description: content.metadata.description,
    },
    alternates: {
      canonical: `/${locale}/pricing`,
      languages: {
        'ko-KR': '/ko/pricing',
        'en-US': '/en/pricing',
      },
    },
  }
}

export default async function PricingPage({ params }: PricingPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const content = getPricingContent(locale)
  const bookingLink = getBookingLink(locale)

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <PricingHero
        h1={content.hero.h1}
        subheadline={content.hero.subheadline}
        cta={content.hero.cta}
        ctaMicrocopy={content.hero.ctaMicrocopy}
        ctaHref={bookingLink}
      />

      {/* Pricing Card Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="section-container">
          <PricingCard
            planName={content.plan.name}
            tagline={content.plan.tagline}
            pricingLabel={content.plan.pricingLabel}
            features={content.plan.features}
            deploymentOptions={content.plan.deploymentOptions}
            cta={content.hero.cta}
            ctaHref={bookingLink}
          />
        </div>
      </section>

      {/* Pricing Factors Accordion */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-950">
        <div className="section-container">
          <PricingFactorsAccordion
            title={content.accordion.title}
            factors={content.accordion.factors}
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="section-container">
          <PricingTrust heading={content.trust.heading} points={content.trust.points} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface-950">
        <div className="section-container">
          <FinalCTA
            heading={content.finalCTA.heading}
            cta={content.finalCTA.cta}
            microcopy={content.finalCTA.microcopy}
            ctaHref={bookingLink}
          />
        </div>
      </section>
    </div>
  )
}
