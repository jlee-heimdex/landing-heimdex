import { Locale } from '@/lib/types'
import { getBookingLink } from '@/lib/i18n'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import UseCases from '@/components/sections/UseCases'
import TechFeatures from '@/components/sections/TechFeatures'
import CTABanner from '@/components/sections/CTABanner'
import FloatingContact from '@/components/sections/FloatingContact'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const t = {
    ko: {
      heroHeadline1: '보지 않아도 보이는 영상',
      heroHeadlineBrand: 'Heimdex',
      heroDesc: '시청과 업로드 없이 영상 분석을 혁신합니다.\n단어 검색 한 번에 핵심 구간 추출부터 숏폼 · 리포트까지 자동 생성하세요.',
      ctaPrimary: '웹에서 체험하기',
      ctaSecondary: '문의하기',
      trustedLabel: 'Trusted by',
      trustedHeadline1: '현장에서 먼저 검증된 기술력, ',
      trustedHeadlineBrand: 'Heimdex',
      useCasesHeadline1: "영상을 '보는' 시간보다",
      useCasesHeadline2: "'생각하는'",
      useCasesHeadline3: ' 시간에 집중하도록',
      case1Tag: '수천 시간의 CCTV, 1초 만에 법적 증거로',
      case1Title: '로펌 · 수사',
      case1Desc: '증거 영상 전체를 돌려볼 필요 없습니다.\n행동과 맥락 검색/요약으로 결정적 증거 장면을 즉시 식별합니다.',
      case2Tag: '하드 · NAS 아카이브 1초 검색, 즉시 쇼츠 제작',
      case2Title: '마케터 · PD',
      case2Desc: '흩어진 저장소를 전부 검색할 필요 없습니다.\n장면 검색 한 줄로 소스 탐색부터 AI 쇼츠까지 한 번에 끝내세요.',
      case3Tag: '엣지 케이스 탐색부터 분석 리포트까지',
      case3Title: '데이터 · 연구',
      case3Desc: '특정 동작이나 오류 구간을 일일이 찾을 필요 없습니다.\n검색으로 원하는 장면만 추출하고 분석 리포트까지 자동 생성하세요.',
      techHeadline1: '업로드 대기 없이,',
      techHeadline2: '방대한 영상 업무를 즉시 끝내는 하임덱스의 기술',
      tech1Title: '업로드 대기 없는 분석',
      tech1Desc: '기가바이트급 무거운 영상, 서버에 올리는 대기 시간 없이 원본 저장 위치에서 즉시 분석합니다.',
      tech2Title: '모든 업무 환경 연동 가능',
      tech2Desc: '사내 서버, NAS, 로컬 PC까지. 기존 영상 보관 환경을 그대로 연동하여 클라우드 구축 부담을 없앴습니다.',
      tech3Title: '소요시간 90% 단축',
      tech3Desc: '영상을 끝까지 시청할 필요 없이 텍스트로 검색하세요. 필요한 구간만 찾아 맞춤형 클립과 레포트를 자동 생성합니다.',
      tech4Title: '유출 리스크 원천 차단',
      tech4Desc: '외부 접근이 완벽히 차단된 상태에서 가장 안전하게 분석됩니다.',
      ctaBannerHeadline: '하임덱스 도입으로 변화될 압도적인 영상 업무 효율,',
      ctaBannerHighlight: '무료 1달 PoC로 먼저 검토해 보세요.',
      ctaBannerBtn: '문의하기',
      floatingContact: '문의하기',
    },
    en: {
      heroHeadline1: 'See videos without watching',
      heroHeadlineBrand: 'Heimdex',
      heroDesc: 'Revolutionize video analysis without viewing or uploading.\nExtract key segments, generate shorts & reports with a single search.',
      ctaPrimary: 'Try on Web',
      ctaSecondary: 'Contact Us',
      trustedLabel: 'Trusted by',
      trustedHeadline1: 'Field-proven technology, ',
      trustedHeadlineBrand: 'Heimdex',
      useCasesHeadline1: "Less time 'watching' videos,",
      useCasesHeadline2: "'thinking'",
      useCasesHeadline3: ' more time focusing',
      case1Tag: 'Thousands of hours of CCTV, legal evidence in 1 second',
      case1Title: 'Law · Investigation',
      case1Desc: 'No need to review entire evidence footage.\nInstantly identify decisive evidence scenes with behavior and context search/summary.',
      case2Tag: 'HDD · NAS archive search in 1 second, instant shorts creation',
      case2Title: 'Marketer · PD',
      case2Desc: 'No need to search all scattered storage.\nFrom source browsing to AI shorts with just one scene search.',
      case3Tag: 'From edge case exploration to analysis reports',
      case3Title: 'Data · Research',
      case3Desc: "No need to manually find specific actions or error segments.\nSearch to extract desired scenes and auto-generate analysis reports.",
      techHeadline1: 'Without upload delays,',
      techHeadline2: "Heimdex's technology to instantly handle massive video work",
      tech1Title: 'Analysis without upload wait',
      tech1Desc: 'Analyze gigabyte-heavy videos instantly from the original storage location without server upload delays.',
      tech2Title: 'Compatible with all work environments',
      tech2Desc: 'Internal servers, NAS, local PCs. Seamlessly integrates with existing video storage without cloud migration burden.',
      tech3Title: '90% time reduction',
      tech3Desc: 'Search with text instead of watching entire videos. Auto-generate custom clips and reports from targeted segments.',
      tech4Title: 'Block leak risks at source',
      tech4Desc: 'Analyzed in the safest environment with external access completely blocked.',
      ctaBannerHeadline: 'Overwhelming video work efficiency with Heimdex,',
      ctaBannerHighlight: 'Start with a free 1-month PoC.',
      ctaBannerBtn: 'Contact Us',
      floatingContact: 'Contact',
    },
  }

  const text = t[locale]
  const bookingLink = getBookingLink(locale)

  const trustedLogos = [
    { src: '/images/logos/antler-horizontal.png', alt: 'Antler', width: 120, height: 40 },
    { src: '/images/logos/kibo.png', alt: 'Kibo', width: 120, height: 40 },
    { src: '/images/logos/nvidia-inception-program-badge-rgb-for-screen.png', alt: 'NVIDIA', width: 120, height: 40 },
    { src: '/images/logos/yonsei-university.png', alt: 'Yonsei University', width: 140, height: 40 },
    { src: '/images/logos/chxxta.png', alt: 'Chxxta', width: 120, height: 40 },
  ]

  const useCases = [
    {
      tag: text.case1Tag,
      title: text.case1Title,
      description: text.case1Desc,
      imageSrc: '/images/usecases/law-investigation.jpg',
      imageAlt: text.case1Title,
    },
    {
      tag: text.case2Tag,
      title: text.case2Title,
      description: text.case2Desc,
      imageSrc: '/images/usecases/marketer-pd.jpg',
      imageAlt: text.case2Title,
    },
    {
      tag: text.case3Tag,
      title: text.case3Title,
      description: text.case3Desc,
      imageSrc: '/images/usecases/data-research.jpg',
      imageAlt: text.case3Title,
    },
  ]

  const techFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        </svg>
      ),
      title: text.tech1Title,
      description: text.tech1Desc,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: text.tech2Title,
      description: text.tech2Desc,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
          <path d="M12 16l-2 4" />
        </svg>
      ),
      title: text.tech3Title,
      description: text.tech3Desc,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: text.tech4Title,
      description: text.tech4Desc,
    },
  ]

  return (
    <>
      <Hero
        headline={
          <>
            <span>{text.heroHeadline1}</span>
            <br />
            <span className="text-accent-blue">{text.heroHeadlineBrand}</span>
          </>
        }
        description={text.heroDesc}
        ctaLabel={text.ctaPrimary}
        ctaHref={bookingLink}
        secondaryCtaLabel={text.ctaSecondary}
        secondaryCtaHref={bookingLink}
        imageSrc="/images/products/search-view.png"
        imageAlt="HEIMDEX Product"
      />

      <TrustedBy
        label={text.trustedLabel}
        headline={
          <>
            {text.trustedHeadline1}
            <span className="text-accent-blue">{text.trustedHeadlineBrand}</span>
          </>
        }
        logos={trustedLogos}
      />

      <UseCases
        headline={
          <>
            {text.useCasesHeadline1}
            <br />
            <span className="text-accent-blue">{text.useCasesHeadline2}</span>
            {text.useCasesHeadline3}
          </>
        }
        cases={useCases}
      />

      <TechFeatures
        headline={
          <>
            <span className="text-accent-blue">{text.techHeadline1}</span>
            <br />
            {text.techHeadline2}
          </>
        }
        features={techFeatures}
      />

      <CTABanner
        headline={text.ctaBannerHeadline}
        highlight={text.ctaBannerHighlight}
        ctaLabel={text.ctaBannerBtn}
        ctaHref={bookingLink}
      />

      <FloatingContact
        label={text.floatingContact}
        href={bookingLink}
      />
    </>
  )
}
