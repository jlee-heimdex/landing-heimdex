import { Locale } from '@/lib/types'
import Hero from '@/components/sections/Hero'
import ContentSection from '@/components/sections/ContentSection'
import FeatureCard from '@/components/sections/FeatureCard'
import { getBookingLink } from '@/lib/i18n'

interface ProductPageProps {
  params: Promise<{ locale: string }>
}

export default async function ProductEntertainmentPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const t = {
    ko: {
      headline: 'HEIMDEX FOR ENTERTAINMENT',
      subhead: 'AI로 크리에이티브 데이터를 이해하고 연결합니다',
      description: 'HEIMDEX는 흩어진 영상과 데이터를 하나로 통합해, AI가 자동으로 분석·정리·검색 가능한 형태로 구조화합니다.',
      cta: '등록하기',
      solutionsTitle: 'HEIMDEX 핵심 솔루션',
      solutionsSubtitle: 'AI가 영상을 이해하고 관리하는 세 가지 솔루션',
      sol1Title: 'AI Scene Intelligence',
      sol1Search: '키워드만 입력하면 영상의 몇 분 몇 초, 어떤 파일에 있는지 즉시 찾아냅니다.',
      sol1Summary: 'AI가 장면과 대사를 분석해 베스트 컷을 정리하고, 필요한 구간만 빠르게 찾아드립니다.',
      sol2Title: 'Rights Monitor',
      sol2Desc: 'AI가 24/7 실시간으로 YouTube·TikTok·Instagram을 모니터링하여 무단 복제·유출된 영상을 즉시 알려드립니다.',
      sol3Title: 'Auto Recut',
      sol3Desc: '이전 영상을 TikTok / YouTube Shorts / Instagram Reels 형식으로 자동 재편집하여 쉽고 빠르게 재배포할 수 있습니다.',
      diffTitle: 'HEIMDEX만의 차별점',
      diff1: '업로드 없는 분석 구조 (No Upload Architecture)',
      diff1Desc: '로컬·온프레미스·HDD 속 원본 파일을 그대로 분석하여 보안 위험 0%, 처리 속도 최대 3배 향상',
      diff2: '80% 빠르고, 86% 정확한 자동 불법 유통 탐지',
      diff2Desc: 'AI Rights Monitor는 24/7 모니터링을 통해 탐색 시간 80% 단축, 탐지 정확도 86% 이상',
      diff3: '감(感)에 의존하지 않는 하이라이트 자동 추출',
      diff3Desc: 'AI가 대사·장면·객체 기반의 의미 단위 분석을 통해 관심도 높은 구간을 자동으로 추천',
    },
    en: {
      headline: 'HEIMDEX FOR ENTERTAINMENT',
      subhead: 'AI understands and connects creative data',
      description: 'HEIMDEX integrates scattered videos and data into one, automatically analyzing, organizing, and structuring them into searchable format with AI.',
      cta: 'Sign Up',
      solutionsTitle: 'HEIMDEX Core Solutions',
      solutionsSubtitle: 'Three solutions where AI understands and manages videos',
      sol1Title: 'AI Scene Intelligence',
      sol1Search: 'Just enter a keyword and instantly find which video, which minute and second the scene is in.',
      sol1Summary: 'AI analyzes scenes and dialogues to organize best cuts and quickly find only the sections you need.',
      sol2Title: 'Rights Monitor',
      sol2Desc: 'AI monitors YouTube, TikTok, and Instagram 24/7 in real-time, notifying you immediately when unauthorized copies or leaked videos are detected.',
      sol3Title: 'Auto Recut',
      sol3Desc: 'Automatically re-edit previous videos into TikTok / YouTube Shorts / Instagram Reels format for easy and fast redistribution.',
      diffTitle: 'HEIMDEX Differentiators',
      diff1: 'No Upload Architecture',
      diff1Desc: 'Analyzes original files in local, on-premise, or HDDs directly, achieving 0% security risk and up to 3x faster processing',
      diff2: '80% faster, 86% accurate automatic illegal distribution detection',
      diff2Desc: 'AI Rights Monitor achieves 80% reduction in search time and 86%+ detection accuracy through 24/7 monitoring',
      diff3: 'Automatic highlight extraction without relying on intuition',
      diff3Desc: 'AI analyzes based on dialogue, scenes, and objects to automatically recommend high-interest sections',
    },
  }

  const text = t[locale]

  return (
    <>
      <Hero
        headline={text.headline}
        subhead={text.subhead}
        description={text.description}
        ctaText={text.cta}
        ctaHref={getBookingLink(locale)}
      />

      <ContentSection title={text.solutionsTitle} subtitle={text.solutionsSubtitle}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="text-sm font-semibold text-accent-cyan mb-2">⚙️ Solution 1</div>
            <h3 className="text-xl font-bold mb-4">{text.sol1Title}</h3>
            <p className="text-surface-400 mb-3">{text.sol1Search}</p>
            <p className="text-surface-400">{text.sol1Summary}</p>
          </div>
          <div className="card border-accent-violet/30">
            <div className="inline-block px-2 py-1 rounded text-xs font-semibold bg-accent-violet/20 text-accent-violet mb-2">PREMIUM</div>
            <div className="text-sm font-semibold text-accent-violet mb-2">🛡️ Solution 2</div>
            <h3 className="text-xl font-bold mb-4">{text.sol2Title}</h3>
            <p className="text-surface-400">{text.sol2Desc}</p>
          </div>
          <div className="card border-accent-pink/30">
            <div className="inline-block px-2 py-1 rounded text-xs font-semibold bg-accent-pink/20 text-accent-pink mb-2">PREMIUM</div>
            <div className="text-sm font-semibold text-accent-pink mb-2">✂️ Solution 3</div>
            <h3 className="text-xl font-bold mb-4">{text.sol3Title}</h3>
            <p className="text-surface-400">{text.sol3Desc}</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title={text.diffTitle} dark>
        <div className="space-y-6 max-w-4xl mx-auto">
          <FeatureCard title={text.diff1} description={text.diff1Desc} />
          <FeatureCard title={text.diff2} description={text.diff2Desc} />
          <FeatureCard title={text.diff3} description={text.diff3Desc} />
        </div>
      </ContentSection>
    </>
  )
}
