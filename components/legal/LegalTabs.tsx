import Link from 'next/link'
import { Locale } from '@/lib/types'

interface LegalTabsProps {
  locale: Locale
  active: 'terms' | 'privacy'
}

const labels: Record<Locale, { terms: string; privacy: string }> = {
  ko: { terms: '서비스 이용약관', privacy: '개인정보 처리방침' },
  en: { terms: 'Terms of Service', privacy: 'Privacy Policy' },
}

export default function LegalTabs({ locale, active }: LegalTabsProps) {
  const t = labels[locale]
  const tabClass = (isActive: boolean) =>
    `flex items-center justify-center px-4 py-2.5 rounded-full text-lg font-semibold leading-[1.4] tracking-[-0.025em] whitespace-nowrap transition-colors duration-150 ${
      isActive
        ? 'bg-legal-tab text-accent-blue'
        : 'text-legal-muted hover:text-surface-500'
    }`

  return (
    <div className="inline-flex items-center gap-0 p-1 bg-white rounded-full shadow-[0px_4px_20px_theme(colors.legal.shadow)]">
      <Link href={`/${locale}/terms`} className={tabClass(active === 'terms')}>
        {t.terms}
      </Link>
      <Link href={`/${locale}/privacy`} className={tabClass(active === 'privacy')}>
        {t.privacy}
      </Link>
    </div>
  )
}
