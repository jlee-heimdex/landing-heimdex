import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, isValidLocale } from './lib/types'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = /^\/(ko|en)(\/|$)/.test(pathname)

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect root to default locale
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    )
  }

  // Redirect other paths to default locale
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|sitemap\\.xml|robots\\.txt).*)',
  ],
}
