import Link from 'next/link'
import Image from 'next/image'
import { Locale } from '@/lib/types'
import { getLocalizedPath } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const t = {
    ko: {
      privacy: '개인정보 수집 동의',
      terms: '이용약관',
      inquiry: '도입문의',
    },
    en: {
      privacy: 'Privacy Policy',
      terms: 'Terms',
      inquiry: 'Inquiry',
    },
  }

  const text = t[locale]

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <Link href={getLocalizedPath('/', locale)} className="flex items-center gap-2">
            <Image
              src="/images/logos/heimdex-logo.svg"
              alt="HEIMDEX"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          {/* Right: Links */}
          <div className="flex flex-col items-end gap-1 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>{text.privacy}</span>
              <span className="text-gray-300">|</span>
              <span>{text.terms}</span>
              <span className="text-gray-300">|</span>
              <span>{text.inquiry}</span>
            </div>
            <a href="mailto:heimdex@heimdex.co" className="hover:text-gray-700 transition-colors">
              heimdex@heimdex.co
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-400">
          &copy; 2026 Heimdex. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
