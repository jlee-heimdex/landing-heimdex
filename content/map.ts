import { Locale } from '@/lib/types'
import { PageSlug } from './schema'

export const contentFileMap: Record<PageSlug, Record<Locale, string>> = {
  'home': {
    ko: 'landing-main-content.md',
    en: 'landing-main-content.en.md',
  },
  'company': {
    ko: 'landing-company-content.md',
    en: 'landing-company-content.en.md',
  },
  'product-entertainment': {
    ko: 'landing-product-entertainment-content.md',
    en: 'landing-product-entertainment-content.en.md',
  },
  'pricing': {
    ko: 'landing-main-content.md', // pricing content is in main for now
    en: 'landing-main-content.en.md',
  },
  'contact': {
    ko: 'landing-main-content.md', // contact info is in main for now
    en: 'landing-main-content.en.md',
  },
}

export function getContentFilePath(slug: PageSlug, locale: Locale): string {
  return contentFileMap[slug][locale]
}
