import { Locale } from './types'

// Meeting booking links - update these with your actual booking URLs
const BOOKING_LINKS: Record<Locale, string> = {
  ko: 'https://cal.com/jlee-heimdex/하임덱스-데모',
  en: 'https://cal.com/jlee-heimdex/heimdex-demo',
}

export function getBookingLink(locale: Locale): string {
  return BOOKING_LINKS[locale]
}

export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path}`
}

export function extractPathWithoutLocale(pathname: string): string {
  const match = pathname.match(/^\/(ko|en)(.*)$/)
  return match ? match[2] || '/' : pathname
}

export function switchLocale(currentPath: string, newLocale: Locale): string {
  const pathWithoutLocale = extractPathWithoutLocale(currentPath)
  return getLocalizedPath(pathWithoutLocale, newLocale)
}
