import Link from 'next/link'
import { Locale } from '@/lib/types'
import { getLocalizedPath, getBookingLink } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const t = {
    ko: {
      tagline: 'Make every video searchable, reusable, and protected.',
      cta: '지금 시작하기',
      email: '이메일',
      website: '웹사이트',
      address: '주소',
    },
    en: {
      tagline: 'Make every video searchable, reusable, and protected.',
      cta: 'Get Started Now',
      email: 'Email',
      website: 'Website',
      address: 'Address',
    },
  }

  const text = t[locale]

  return (
    <footer className="bg-surface-900 border-t border-surface-800">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col gap-4">
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
            <p className="text-surface-400 text-sm max-w-md">
              {text.tagline}
            </p>
          </div>

          {/* Right: Contact + CTA */}
          <div className="flex flex-col gap-4">
            <div className="text-sm text-surface-400 space-y-1">
              <div><span className="font-medium">{text.email}:</span> heimdex@heimdex.co</div>
              <div><span className="font-medium">{text.website}:</span> heimdex.co</div>
              <div><span className="font-medium">{text.address}:</span> {locale === 'ko' ? '광주광역시 북구 안산로 75 (삼각동)' : '75 Ansan-ro, Buk-gu, Gwangju'}</div>
            </div>
            <a href={getBookingLink(locale)} target="_blank" rel="noopener noreferrer" className="btn btn-gradient text-sm">
              {text.cta}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-surface-800 text-center text-sm text-surface-500">
          © 2025 HEIMDEX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
