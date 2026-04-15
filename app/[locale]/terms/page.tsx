import { Locale } from '@/lib/types'
import { getBookingLink } from '@/lib/i18n'
import LegalTabs from '@/components/legal/LegalTabs'
import LegalFloatingContact from '@/components/legal/LegalFloatingContact'

interface TermsPageProps {
  params: Promise<{ locale: string }>
}

interface Section {
  title: string
  body: string
}

export default async function TermsPage({ params }: TermsPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const floatingLabel = locale === 'ko' ? '문의하기' : 'Contact'

  const copy: Record<Locale, { title: string; sections: Section[] }> = {
    ko: {
      title: '하임덱스(HEIMDEX) 서비스 이용약관',
      sections: [
        {
          title: '제1조 (목적)',
          body:
            '본 약관은 주식회사 하임덱스(이하 "회사")가 제공하는 영상 분석 및 인덱싱 솔루션(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.',
        },
        {
          title: '제2조 (용어의 정의)',
          body:
            '서비스: 회사가 제공하는 웹 기반 영상 분석 플랫폼 및 관련 소프트웨어 일체를 의미합니다. 이용자: 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 개인 또는 법인 고객을 의미합니다. 콘텐츠(영상 데이터): 이용자가 서비스 분석을 위해 연결하거나 업로드한 영상 및 관련 데이터를 의미합니다. 분석 데이터: 서비스를 통해 영상에서 추출된 메타데이터, 인덱싱 정보 및 분석 결과물을 의미합니다.',
        },
        {
          title: '제3조 (서비스의 제공 및 변경)',
          body:
            '회사는 이용자에게 다음과 같은 서비스를 제공합니다. 영상 인덱싱 및 검색 서비스 영상 분석 및 데이터 추출 솔루션 기타 회사가 추가로 개발하여 제공하는 서비스 회사는 기술적 사양의 변경이나 운영상 필요에 따라 서비스 내용을 변경할 수 있으며, 이 경우 변경 사항을 서비스 화면에 게시하거나 이메일로 통지합니다.',
        },
        {
          title: '제4조 (데이터 소유권 및 보호)',
          body:
            '영상 데이터의 소유권: 이용자가 서비스에 제공한 원본 영상 데이터의 소유권 및 저작권은 이용자에게 있습니다. 분석 데이터의 활용: 회사는 이용자의 동의 없이 원본 영상을 열람하거나 외부로 유출하지 않습니다. 단, 서비스 품질 개선 및 통계적 목적을 위해 비식별화된 분석 데이터(메타데이터 등)를 활용할 수 있습니다. 보안: 회사는 이용자의 데이터를 보호하기 위해 업계 표준의 보안 기술을 적용하며, 온프레미스 및 하이브리드 환경에서의 데이터 보안 정책을 준수합니다.',
        },
        {
          title: '제5조 (이용료 및 결제)',
          body:
            '서비스 이용료는 회사가 정한 요금 체계(구독형 또는 종량제)에 따릅니다. 유료 서비스 이용 시 결제 수단은 [신용카드, 무통장 입금, 전자결제 등] 회사가 지정한 방식으로 합니다. 이용자가 이용료를 연체할 경우, 회사는 서비스 이용을 정지할 수 있습니다.',
        },
        {
          title: '제6조 (계약 해지 및 환불)',
          body:
            '이용자는 언제든지 서비스 내 설정 또는 고객센터를 통해 해지 신청을 할 수 있습니다. 환불은 [결제 후 7일 이내 미사용 시 전액 환불 / 중도 해지 시 사용 기간을 제외한 잔여 일수 일할 계산] 등 회사의 별도 환불 정책에 따릅니다.',
        },
        {
          title: '제7조 (책임 제한)',
          body:
            '회사는 천재지변, 기간통신사업자의 서비스 중단, 외부 해킹 등 회사의 통제 범위를 벗어난 사유로 발생한 손해에 대해서는 책임을 지지 않습니다. 회사는 이용자가 서비스를 통해 얻은 분석 결과의 정확성이나 특정 목적 적합성에 대해 보증하지 않으며, 이를 신뢰하여 발생한 결과에 대해 책임을 지지 않습니다.',
        },
        {
          title: '제8조 (준거법 및 관할법원)',
          body:
            '본 약관은 대한민국 법령에 의하여 해석되며, 서비스 이용과 관련하여 발생한 분쟁은 [서울중앙지방법원]을 관할 법원으로 합니다.',
        },
      ],
    },
    en: {
      title: 'HEIMDEX Terms of Service',
      sections: [
        {
          title: 'Article 1 (Purpose)',
          body:
            'These Terms define the conditions, procedures, rights, obligations, and responsibilities relating to the video analysis and indexing services (the "Service") provided by Heimdex Inc. (the "Company").',
        },
        {
          title: 'Article 2 (Definitions)',
          body:
            'Service: the Company\u2019s web-based video analysis platform and related software. User: an individual or corporate customer who agrees to these Terms and uses the Service. Content (Video Data): videos and related data that the User connects or uploads for analysis. Analytical Data: metadata, indexing information, and analysis results extracted from videos through the Service.',
        },
        {
          title: 'Article 3 (Provision and Modification of Service)',
          body:
            'The Company provides the following: video indexing and search, video analysis and data extraction, and any additional services the Company develops. The Company may modify service contents due to technical changes or operational needs, and will post such changes on the service screen or notify by email.',
        },
        {
          title: 'Article 4 (Data Ownership and Protection)',
          body:
            'Ownership of original video data remains with the User. The Company does not view or disclose original videos without the User\u2019s consent, but may use de-identified analytical data for service improvement and statistics. The Company applies industry-standard security and complies with data security policies for on-premises and hybrid environments.',
        },
        {
          title: 'Article 5 (Fees and Payment)',
          body:
            'Service fees follow the pricing model (subscription or usage-based) set by the Company. Payment methods include credit card, bank transfer, and electronic payment as designated by the Company. If fees are overdue, the Company may suspend service.',
        },
        {
          title: 'Article 6 (Termination and Refunds)',
          body:
            'The User may request termination at any time via service settings or customer support. Refunds follow the Company\u2019s separate refund policy (e.g., full refund within 7 days of unused payment; pro-rata calculation for mid-term cancellation).',
        },
        {
          title: 'Article 7 (Limitation of Liability)',
          body:
            'The Company is not liable for damages arising from events beyond its control, including acts of God, service interruptions by telecommunications providers, or external hacking. The Company does not warrant the accuracy or fitness for a particular purpose of analysis results and is not responsible for consequences of reliance thereon.',
        },
        {
          title: 'Article 8 (Governing Law and Jurisdiction)',
          body:
            'These Terms are governed by the laws of the Republic of Korea. Disputes arising from the use of the Service shall be subject to the Seoul Central District Court as the court of jurisdiction.',
        },
      ],
    },
  }

  const text = copy[locale]

  return (
    <section className="bg-[#FCFCFF] pt-[69px] pb-20">
      <div className="flex justify-center px-6 mb-16">
        <LegalTabs locale={locale} active="terms" />
      </div>
      <div className="max-w-[840px] mx-auto px-6">
        <h1 className="text-[18px] font-bold text-[#272833] tracking-[-0.025em] leading-[140%] mb-8">
          {text.title}
        </h1>

        <div className="flex flex-col gap-6">
          {text.sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-[10px]">
              <h2 className="text-[16px] font-bold text-[#272833] tracking-[-0.025em] leading-[140%]">
                {section.title}
              </h2>
              <p className="text-[16px] font-normal text-[#272833] tracking-[-0.025em] leading-[140%] whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <LegalFloatingContact label={floatingLabel} href={getBookingLink(locale)} />
      </div>
    </section>
  )
}
