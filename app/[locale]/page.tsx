import { Locale } from '@/lib/types'
import Hero from '@/components/sections/Hero'
import ContentSection from '@/components/sections/ContentSection'
import FeatureCard from '@/components/sections/FeatureCard'
import BackedBy from '@/components/sections/BackedBy'
import { getBookingLink } from '@/lib/i18n'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const t = {
    ko: {
      badge: 'AI 기반 영상 관리·검색·유통 보호를 한 번에',
      headline1: '보지 않아도,',
      headline2: '찾을 수 있는 영상',
      subhead: 'From Storage to Meaning — HEIMDEX',
      description: 'AI가 당신의 영상을 분석해, 탐색·제작·활용·보호까지 한 번에 해결합니다',
      cta: '시작하기',
      problemTitle: '계속 늘어나는 영상, 관리가 되지 않으신가요?',
      problem1Title: '영상 찾다가 하루가 끝나지 않나요?',
      problem1Desc: '컷 하나 찾으려다, 외장하드만 세 번 열었죠. "빨간 셔츠 입은 장면" 기억은 나는데, 어디 있는지 몰라요.',
      problem2Title: '있는 영상인데, 결국 새로 만듭니다',
      problem2Desc: '수천 개의 영상이 NAS와 구글드라이브에 쌓여 있습니다. 하지만 누가, 언제, 어디서 찍었는지조차 몰라 다시 찾을 수 없죠.',
      problem3Title: '불펌당한 내 영상, 먼저 찾지 못하나요?',
      problem3Desc: '유튜브, 틱톡, 인스타에서 내 영상이 돌아다닙니다. 검색해서 잡으려 해도 이미 수천 개가 노출된 뒤죠.',
      featuresTitle: 'AI로 영상들의 의미를 이해하고 연결합니다',
      featuresSubtitle: 'HEIMDEX는 흩어진 영상과 데이터를 하나로 통합해, AI가 자동으로 분석·정리·검색 가능한 형태로 구조화합니다.',
      feature1Title: '필요한 장면을 단어로 찾으세요',
      feature1Desc: '키워드만 입력하면 영상의 몇 분 몇 초, 어떤 파일에 있는지 즉시 찾아냅니다.',
      feature2Title: 'AI 장면 요약',
      feature2Desc: '보지 않아도 긴 영상의 핵심을 한눈에. AI가 장면과 대사를 분석해 베스트 컷을 정리합니다.',
      feature3Title: '불법 유통 자동 감지',
      feature3Desc: 'AI가 24/7 실시간으로 YouTube·TikTok·Instagram을 모니터링하여 무단 복제를 탐지합니다.',
      backedByHeadline: '믿을 수 있는 파트너와 함께',
      backedBySubhead: 'HEIMDEX는 글로벌 벤처캐피탈 Antler의 투자를 받아 성장하고 있습니다.',
    },
    en: {
      badge: 'AI-powered video management, search, and distribution protection all-in-one',
      headline1: 'Find Your Videos',
      headline2: 'Without Watching Them',
      subhead: 'From Storage to Meaning — HEIMDEX',
      description: 'AI analyzes your videos to solve search, production, utilization, and protection all at once',
      cta: 'Get Started',
      problemTitle: 'Overwhelmed by growing video libraries?',
      problem1Title: 'Spending all day searching for videos?',
      problem1Desc: 'Looking for one cut? You\'ve opened three external drives. You remember "the scene with the red shirt" but don\'t know where it is.',
      problem2Title: 'You have the footage, but end up creating it again',
      problem2Desc: 'Thousands of videos are stored on NAS and Google Drive. But you don\'t know who shot it, when, or where, so you can\'t find it.',
      problem3Title: 'Can\'t find stolen content before it spreads?',
      problem3Desc: 'Your videos are circulating on YouTube, TikTok, and Instagram. By the time you try to search and stop it, thousands are already exposed.',
      featuresTitle: 'AI understands and connects the meaning of your videos',
      featuresSubtitle: 'HEIMDEX integrates scattered videos and data into one, automatically analyzing, organizing, and structuring them into a searchable format with AI.',
      feature1Title: 'Find the scenes you need with words',
      feature1Desc: 'Just enter a keyword and instantly find which video, which minute and second the scene is in.',
      feature2Title: 'AI Scene Summary',
      feature2Desc: 'See the key points of long videos at a glance without watching. AI analyzes scenes and dialogues to organize best cuts.',
      feature3Title: 'Automatic illegal distribution detection',
      feature3Desc: 'AI monitors YouTube, TikTok, and Instagram 24/7 in real-time to detect unauthorized copies.',
      backedByHeadline: 'Trusted Partners',
      backedBySubhead: 'HEIMDEX is backed by Antler, a global early-stage venture capital firm.',
    },
  }

  const text = t[locale]

  return (
    <>
      <Hero
        badge={text.badge}
        headline={
          <>
            <span className="text-surface-100">{text.headline1}</span>
            <br />
            <span className="gradient-text">{text.headline2}</span>
          </>
        }
        subhead={text.subhead}
        description={text.description}
        ctaText={text.cta}
        ctaHref={getBookingLink(locale)}
      />

      <ContentSection title={text.problemTitle} dark>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title={text.problem1Title} description={text.problem1Desc} />
          <FeatureCard title={text.problem2Title} description={text.problem2Desc} />
          <FeatureCard title={text.problem3Title} description={text.problem3Desc} />
        </div>
      </ContentSection>

      <ContentSection title={text.featuresTitle} subtitle={text.featuresSubtitle}>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title={text.feature1Title} description={text.feature1Desc} />
          <FeatureCard title={text.feature2Title} description={text.feature2Desc} />
          <FeatureCard title={text.feature3Title} description={text.feature3Desc} />
        </div>
      </ContentSection>

      <BackedBy headline={text.backedByHeadline} subhead={text.backedBySubhead} />
    </>
  )
}
