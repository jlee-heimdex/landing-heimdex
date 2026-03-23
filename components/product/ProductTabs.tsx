'use client'

import Link from 'next/link'
import { Locale } from '@/lib/types'
import { getLocalizedPath } from '@/lib/i18n'

interface Tab {
  key: string
  label: string
  href: string
}

interface ProductTabsProps {
  locale: Locale
  activeTab: string
  tabs: Tab[]
}

export default function ProductTabs({ locale, activeTab, tabs }: ProductTabsProps) {
  return (
    <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={getLocalizedPath(tab.href, locale)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab.key
              ? 'bg-white text-accent-blue shadow-sm'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}
