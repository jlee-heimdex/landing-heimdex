import { Locale } from './types'

export interface PricingContent {
  metadata: {
    title: string
    description: string
  }
  hero: {
    h1: string
    subheadline: string
    cta: string
    ctaMicrocopy: string
  }
  plan: {
    name: string
    tagline: string
    pricingLabel: string
    features: string[]
    deploymentOptions: string
  }
  accordion: {
    title: string
    factors: string[]
  }
  finalCTA: {
    heading: string
    cta: string
    microcopy: string
  }
  trust: {
    heading: string
    points: string[]
  }
}

export const pricingContent: Record<Locale, PricingContent> = {
  ko: {
    metadata: {
      title: '가격 | HEIMDEX',
      description: 'HEIMDEX Access 단일 플랜. 영상 규모·검색 방식·배포 환경에 맞춘 워크플로우 기반 맞춤 견적.',
    },
    hero: {
      h1: '하나의 플랜. 당신의 워크플로우에 맞게.',
      subheadline: '영상 규모, 검색 방식, 배포 환경은 모두 다릅니다. HEIMDEX는 기능 단위가 아니라 운영 구조 전체를 기준으로 설계됩니다.',
      cta: 'HEIMDEX와 통화 예약하기',
      ctaMicrocopy: '15분이면 충분합니다.',
    },
    plan: {
      name: 'HEIMDEX Access',
      tagline: 'AI 기반 영상 이해·검색·재활용을 위한 단일 플랜',
      pricingLabel: '워크플로우 기반 맞춤 견적',
      features: [
        '자동 영상 처리 (장면 분석, 음성 인식, 시각 분석)',
        '다국어 음성 인식 (한국어, 영어 포함 90개 이상 언어)',
        '지능형 장면 분할 및 키프레임 추출',
        '하이브리드 시맨틱 검색 (Dense + BM25)',
        '인물 기반 검색 (참조 사진 활용)',
        'YouTube Shorts / 하이라이트 자동 생성',
        '분석 대시보드 및 검색 인사이트',
        '한영 이중 언어 UI',
        '보안 공유 및 임시 다운로드',
      ],
      deploymentOptions: '클라우드 / 온프레미스 / 하이브리드',
    },
    accordion: {
      title: '요금은 무엇에 따라 달라지나요?',
      factors: [
        '월 처리 영상량',
        '검색 빈도 및 채널 구성',
        '인물 검색 사용 여부',
        '배포 환경 (클라우드 / 온프레미스)',
        '팀 규모 및 협업 요구사항',
      ],
    },
    finalCTA: {
      heading: '당신의 워크플로우에 맞춘 견적을 받아보세요',
      cta: 'HEIMDEX와 통화 예약하기',
      microcopy: '15분 통화로 현재 영상 관리 방식과 문제를 빠르게 진단하고, HEIMDEX가 줄일 수 있는 작업 시간을 함께 계산해드립니다.',
    },
    trust: {
      heading: '안전하고 맞춤형으로',
      points: [
        '프라이버시 우선: 영상은 고객 인프라를 떠나지 않습니다',
        '맞춤 구성: 기존 워크플로우와 통합되도록 설계',
        '투명한 가격: 숨은 비용 없이 명확한 견적',
      ],
    },
  },
  en: {
    metadata: {
      title: 'Pricing | HEIMDEX',
      description: 'One plan, tailored to your workflow. HEIMDEX Access is priced by processing volume, search usage, and deployment environment.',
    },
    hero: {
      h1: 'One plan. Tailored to your workflow.',
      subheadline: 'Video volume, search behavior, and deployment constraints vary. HEIMDEX is designed around your operating workflow — not feature tiers.',
      cta: 'Arrange a call with Heimdex',
      ctaMicrocopy: '15 minutes is enough.',
    },
    plan: {
      name: 'HEIMDEX Access',
      tagline: 'A single plan for AI-powered video understanding, search, and reuse',
      pricingLabel: 'Workflow-based custom quote',
      features: [
        'Automated video processing (scene detection, transcription, visual analysis)',
        'Multi-language transcription (KO/EN + 90+ languages)',
        'Intelligent scene segmentation + keyframes',
        'Hybrid semantic search (dense + BM25)',
        'Person-aware search via reference photos',
        'YouTube Shorts / highlight reel exports',
        'Analytics dashboard + search insights',
        'Bilingual UI (Korean/English)',
        'Secure sharing + temporary downloads',
      ],
      deploymentOptions: 'Cloud / On-premise / Hybrid',
    },
    accordion: {
      title: 'What affects pricing?',
      factors: [
        'Monthly processing volume',
        'Search frequency and channel mix',
        'People search usage (reference photos)',
        'Deployment environment (cloud / on-prem / hybrid)',
        'Team size and collaboration needs',
      ],
    },
    finalCTA: {
      heading: 'Get a quote tailored to your workflow',
      cta: 'Arrange a call with Heimdex',
      microcopy: 'In a 15-minute call, we\'ll quickly diagnose your current video management methods and problems, and calculate the work hours HEIMDEX can save together.',
    },
    trust: {
      heading: 'Secure and tailored',
      points: [
        'Privacy-first: Videos never leave your infrastructure',
        'Custom configuration: Designed to integrate with existing workflows',
        'Transparent pricing: Clear quotes with no hidden costs',
      ],
    },
  },
}

export function getPricingContent(locale: Locale): PricingContent {
  return pricingContent[locale]
}
