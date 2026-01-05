import { Locale } from '@/lib/types'
import ContentSection from '@/components/sections/ContentSection'
import { getLocalizedPath } from '@/lib/i18n'
import Link from 'next/link'

interface PricingPageProps {
  params: Promise<{ locale: string }>
}

export default async function PricingPage({ params }: PricingPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const t = {
    ko: {
      title: '간편한 가격 정책',
      subtitle: '필요에 맞는 플랜을 선택하고 지금 바로 시작하세요',
      promo: '오픈 프로모션 혜택 고객: 프리미엄 50% 할인',
      basic: {
        name: '영상 아카이빙',
        badge: undefined,
        price: '₩100,000',
        period: '/월',
        features: [
          '영상 아카이빙',
          '영상 AI 요약 미리보기',
          '화질별 영상 자동 분류 (인제스트)',
          '키워드 기반 검색',
          '사용자 1명',
          '검색 월 50회',
        ],
        cta: '시작하기',
      },
      premium: {
        name: 'AI 장면 검색',
        badge: '인기',
        price: '₩300,000',
        period: '/월',
        features: [
          'Basic의 모든 기능',
          'AI 장면 검색 (이름·장소·대사)',
          '불법 유통 영상 자동 감지',
          '사용자 3명',
          '검색 월 500회',
        ],
        cta: '시작하기',
      },
      enterprise: {
        name: '맞춤형 솔루션',
        badge: undefined,
        price: 'Custom',
        period: '',
        features: [
          'Premium의 모든 기능',
          'IP 유통 관리 및 추적 대시보드',
          '워터마크·보안 기능 추가',
          '온프레미스+클라우드 하이브리드 구축',
          '사용자 무제한',
          '검색 무제한',
        ],
        cta: '맞춤 견적 받기',
      },
    },
    en: {
      title: 'Simple Pricing Plans',
      subtitle: 'Choose the plan that fits your needs and start right away',
      promo: 'Open Promotion: Premium customers get 50% off',
      basic: {
        name: 'Video Archiving',
        badge: undefined,
        price: '$100',
        period: '/month',
        features: [
          'Video archiving',
          'AI video summary preview',
          'Automatic video classification by quality',
          'Keyword-based search',
          '1 user',
          '50 searches/month',
        ],
        cta: 'Get Started',
      },
      premium: {
        name: 'AI Scene Search',
        badge: 'Popular',
        price: '$300',
        period: '/month',
        features: [
          'All Basic features',
          'AI scene search (name, place, dialogue)',
          'Automatic illegal distribution detection',
          '3 users',
          '500 searches/month',
        ],
        cta: 'Get Started',
      },
      enterprise: {
        name: 'Custom Solution',
        badge: undefined,
        price: 'Custom',
        period: '',
        features: [
          'All Premium features',
          'IP distribution management dashboard',
          'Watermark and security features',
          'Hybrid on-premise + cloud deployment',
          'Unlimited users',
          'Unlimited searches',
        ],
        cta: 'Get Custom Quote',
      },
    },
  }

  const text = t[locale]

  const plans = [text.basic, text.premium, text.enterprise]

  return (
    <div className="page-wrapper">
      <ContentSection title={text.title} subtitle={text.subtitle}>
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium">
            {text.promo}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`card ${i === 1 ? 'border-accent-cyan/30 relative' : ''}`}
            >
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-accent-cyan text-white text-xs font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-surface-400">{plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-surface-400">
                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={getLocalizedPath('/contact', locale)}
                className={`btn w-full ${i === 1 ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </ContentSection>
    </div>
  )
}
