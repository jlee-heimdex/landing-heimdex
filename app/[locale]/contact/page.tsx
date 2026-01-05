import { Locale } from '@/lib/types'
import ContentSection from '@/components/sections/ContentSection'

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const t = {
    ko: {
      title: 'HEIMDEX 데모 상담을 예약하세요',
      subtitle: '15분 통화로 현재 영상 관리 방식과 문제를 빠르게 진단하고, HEIMDEX가 줄일 수 있는 작업 시간을 함께 계산해드립니다.',
      ctaButton: '통화 예약하기',
      helper: '영업 메일 없이, 필요한 정보만 안내드립니다.',
      contactTitle: '문의 정보',
      email: '이메일',
      website: '웹사이트',
      address: '주소',
      addressValue: '서울특별시 마포구 백범로31길 21',
    },
    en: {
      title: 'Book a HEIMDEX demo consultation',
      subtitle: 'In a 15-minute call, we\'ll quickly diagnose your current video management methods and problems, and calculate the work hours HEIMDEX can save together.',
      ctaButton: 'Book a Call',
      helper: 'No sales emails, just the information you need.',
      contactTitle: 'Contact Information',
      email: 'Email',
      website: 'Website',
      address: 'Address',
      addressValue: '21 Baekbeom-ro 31-gil, Mapo-gu, Seoul',
    },
  }

  const text = t[locale]

  return (
    <div className="page-wrapper">
      <ContentSection title={text.title} subtitle={text.subtitle}>
        <div className="max-w-2xl mx-auto">
          {/* CTA Section */}
          <div className="card text-center mb-12">
            <a
              href="mailto:heimdex@heimdex.co?subject=Demo Request"
              className="btn btn-gradient text-lg px-8 py-4 inline-flex"
            >
              {text.ctaButton}
            </a>
            <p className="text-sm text-surface-400 mt-4">{text.helper}</p>
          </div>

          {/* Contact Information */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-6 text-center">{text.contactTitle}</h3>
            <div className="space-y-4 text-surface-400">
              <div className="flex justify-between items-center py-3 border-b border-surface-700">
                <span className="font-medium">{text.email}</span>
                <a href="mailto:heimdex@heimdex.co" className="text-accent-cyan hover:underline">
                  heimdex@heimdex.co
                </a>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-surface-700">
                <span className="font-medium">{text.website}</span>
                <a href="https://heimdex.co" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">
                  heimdex.co
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                <span className="font-medium mb-1 sm:mb-0">{text.address}</span>
                <span className="text-surface-300">{text.addressValue}</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
