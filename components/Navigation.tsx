'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale } from '@/lib/types'
import { extractPathWithoutLocale, getLocalizedPath, getBookingLink } from '@/lib/i18n'

interface NavigationProps {
  locale: Locale
}

const navItems = {
  ko: [
    { href: '/', label: '홈' },
    { href: '/product/entertainment', label: '제품' },
    { href: '/pricing', label: '가격' },
    { href: '/company', label: '회사' },
    { href: '/contact', label: '문의' },
  ],
  en: [
    { href: '/', label: 'Home' },
    { href: '/product/entertainment', label: 'Product' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/company', label: 'Company' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname()
  const pathWithoutLocale = extractPathWithoutLocale(pathname)
  const items = navItems[locale]

  const otherLocale: Locale = locale === 'ko' ? 'en' : 'ko'
  const switchLocalePath = getLocalizedPath(pathWithoutLocale, otherLocale)

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-900/80 backdrop-blur-xl border-b border-surface-700/50">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={getLocalizedPath('/', locale)} className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-cyan via-accent-violet to-accent-pink opacity-80" />
              <div className="absolute inset-[2px] rounded-[6px] bg-surface-900 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">HEIMDEX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {items.map((item) => {
              const fullPath = getLocalizedPath(item.href, locale)
              const isActive =
                item.href === '/'
                  ? pathWithoutLocale === '/'
                  : pathWithoutLocale.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={fullPath}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'text-surface-100 bg-surface-800'
                      : 'text-surface-400 hover:text-surface-100 hover:bg-surface-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-3">
            <Link
              href={switchLocalePath}
              className="px-3 py-1.5 text-sm text-surface-400 hover:text-surface-100 transition-colors"
            >
              {locale === 'ko' ? 'EN' : 'KO'}
            </Link>
            <a href={getBookingLink(locale)} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">
              {locale === 'ko' ? '등록하기' : 'Sign Up'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
