export type Locale = 'ko' | 'en'

export const locales: Locale[] = ['ko', 'en']
export const defaultLocale: Locale = 'ko'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
