import { Locale } from '@/lib/types'
import { getBookingLink } from '@/lib/i18n'
import ContactForm from '@/components/contact/ContactForm'
import FloatingContact from '@/components/sections/FloatingContact'

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const t = {
    ko: {
      brand: 'HEIMDEX',
      headline: '데모 상담을 예약하세요',
      description: '15분 상담으로 현재 영상 관리 방식과 문제를 빠르게 진단하고,\nHEIMDEX가 줄일 수 있는 작업 시간을 함께 계산해드립니다.',
      floatingContact: '문의하기',
    },
    en: {
      brand: 'HEIMDEX',
      headline: 'Book a demo consultation',
      description: "In a 15-minute call, we'll quickly diagnose your current video management\nand calculate the work hours HEIMDEX can save.",
      floatingContact: 'Contact',
    },
  }

  const text = t[locale]

  return (
    <>
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Intro */}
          <div className="lg:pt-16">
            <h1 className="text-accent-blue text-2xl sm:text-3xl font-bold mb-3">
              {text.brand}
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {text.headline}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed whitespace-pre-line">
              {text.description}
            </p>
          </div>

          {/* Right: Form */}
          <ContactForm locale={locale} />
        </div>
      </section>

      <FloatingContact label={text.floatingContact} href={getBookingLink(locale)} />
    </>
  )
}
