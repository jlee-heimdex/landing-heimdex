import { Locale } from './types'

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
