import { describe, it, expect } from '@jest/globals'
import { pricingContent, getPricingContent } from '@/lib/pricing-content'
import { locales } from '@/lib/types'

describe('Pricing Content', () => {
  it('should have content for all supported locales', () => {
    locales.forEach((locale) => {
      expect(pricingContent[locale]).toBeDefined()
    })
  })

  it('should have matching keys across all locales', () => {
    const koKeys = Object.keys(pricingContent.ko)
    const enKeys = Object.keys(pricingContent.en)

    expect(koKeys.sort()).toEqual(enKeys.sort())
  })

  it('should have all required sections', () => {
    locales.forEach((locale) => {
      const content = pricingContent[locale]

      expect(content.metadata).toBeDefined()
      expect(content.hero).toBeDefined()
      expect(content.plan).toBeDefined()
      expect(content.accordion).toBeDefined()
      expect(content.finalCTA).toBeDefined()
      expect(content.trust).toBeDefined()
    })
  })

  it('should have HEIMDEX Access as plan name in both languages', () => {
    expect(pricingContent.ko.plan.name).toBe('HEIMDEX Access')
    expect(pricingContent.en.plan.name).toBe('HEIMDEX Access')
  })

  it('should have non-empty feature lists', () => {
    locales.forEach((locale) => {
      const features = pricingContent[locale].plan.features
      expect(features.length).toBeGreaterThan(0)
    })
  })

  it('should have matching number of features across locales', () => {
    const koFeatureCount = pricingContent.ko.plan.features.length
    const enFeatureCount = pricingContent.en.plan.features.length

    expect(koFeatureCount).toBe(enFeatureCount)
  })

  it('should have matching number of pricing factors', () => {
    const koFactorCount = pricingContent.ko.accordion.factors.length
    const enFactorCount = pricingContent.en.accordion.factors.length

    expect(koFactorCount).toBe(enFactorCount)
  })

  it('should return correct content via getPricingContent', () => {
    const koContent = getPricingContent('ko')
    const enContent = getPricingContent('en')

    expect(koContent).toEqual(pricingContent.ko)
    expect(enContent).toEqual(pricingContent.en)
  })
})
