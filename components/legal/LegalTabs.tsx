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
    `flex items-center justify-center px-4 py-[10px] rounded-full text-[18px] font-semibold leading-[1.4] tracking-[-0.025em] whitespace-nowrap ${
      isActive ? 'bg-[#E4F2FF] text-[#3991FF]' : 'text-[#C4C4C4]'
    }`

  return (
    <div className="inline-flex items-center gap-0 p-1 bg-white rounded-full shadow-[0px_4px_20px_#E8E9F8]">
      <Link href={`/${locale}/terms`} className={tabClass(active === 'terms')}>
        {t.terms}
      </Link>
      <Link href={`/${locale}/privacy`} className={tabClass(active === 'privacy')}>
        {t.privacy}
      </Link>
    </div>
  )
}
