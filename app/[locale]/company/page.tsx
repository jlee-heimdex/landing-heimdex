import { Locale } from '@/lib/types'
import Hero from '@/components/sections/Hero'
import ContentSection from '@/components/sections/ContentSection'
import { getBookingLink } from '@/lib/i18n'

interface CompanyPageProps {
  params: Promise<{ locale: string }>
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const t = {
    ko: {
      headline: '영상 인텔리전스의 미래를 만듭니다',
      subhead: 'HEIMDEX는 모든 영상을 검색 가능하고, 재사용 가능하며, 보호된 상태로 만듭니다',
      description: '우리는 모든 영상이 즉시 접근 가능한 가치 있는 인사이트를 담고 있다고 믿습니다. AI 기반 분석과 지능형 조직화를 통해 영상 콘텐츠의 잠재력을 완전히 발휘하는 것이 우리의 미션입니다.',
      cta: '문의하기',
      missionTitle: '우리의 미션',
      missionStatement: '영상을 수동적인 콘텐츠에서 더 나은 의사결정과 창작 작업을 이끄는 능동적이고 검색 가능한 지식으로 변환합니다.',
      missionDesc: '영상에는 대사, 얼굴, 객체, 장면, 감정 등 풍부한 정보가 담겨 있습니다. 그러나 대부분의 조직은 수천 시간 분량의 영상에서 특정 순간을 찾는 데 어려움을 겪습니다. 우리는 영상을 의미론적 수준에서 이해하는 AI를 통해 이를 바꾸고 있으며, 모든 초를 검색 가능하고 모든 장면을 재사용 가능하게 만듭니다.',
      valuesTitle: '우리의 가치',
      techTitle: '우리의 기술',
      techDesc: 'HEIMDEX의 AI Scene Intelligence는 컴퓨터 비전, 자연어 처리, 오디오 분석을 결합하여 영상 콘텐츠를 의미론적 수준에서 이해합니다.',
    },
    en: {
      headline: 'Building the future of video intelligence',
      subhead: 'HEIMDEX makes every video searchable, reusable, and protected',
      description: 'We believe that every video contains valuable insights that should be accessible instantly. Our mission is to unlock the full potential of video content through AI-powered analysis and intelligent organization.',
      cta: 'Contact Us',
      missionTitle: 'Our Mission',
      missionStatement: 'To transform video from passive content into active, searchable knowledge that drives better decisions and creative work.',
      missionDesc: 'Videos contain rich information - dialogues, faces, objects, scenes, and emotions. Yet most organizations struggle to find specific moments across thousands of hours of footage. We\'re changing that with AI that understands video at the semantic level, making every second searchable and every scene reusable.',
      valuesTitle: 'Our Values',
      techTitle: 'Our Technology',
      techDesc: 'HEIMDEX\'s AI Scene Intelligence combines computer vision, natural language processing, and audio analysis to understand video content at a semantic level.',
    },
  }

  const text = t[locale]

  const values = locale === 'ko' ? [
    { title: '혁신', desc: '영상 AI 기술로 가능한 것의 경계를 넓힙니다' },
    { title: '프라이버시 우선', desc: '영상은 절대 인프라를 떠나지 않습니다. 클라우드가 아닌 제자리에서 분석합니다.' },
    { title: '크리에이터 역량 강화', desc: '인간의 창의성을 대체하는 것이 아니라 증폭시키는 도구를 만듭니다' },
    { title: '투명성', desc: '우리의 AI는 설명 가능합니다. 결과가 어떻게, 왜 생성되는지 항상 알 수 있습니다.' },
  ] : [
    { title: 'Innovation', desc: 'We push the boundaries of what\'s possible with video AI technology' },
    { title: 'Privacy First', desc: 'Your videos never leave your infrastructure. We analyze in place, not in the cloud.' },
    { title: 'Creator Empowerment', desc: 'We build tools that amplify human creativity, not replace it' },
    { title: 'Transparency', desc: 'Our AI is explainable. You always know how and why results are generated.' },
  ]

  return (
    <>
      <Hero
        headline={text.headline}
        subhead={text.subhead}
        description={text.description}
        ctaText={text.cta}
        ctaHref={getBookingLink(locale)}
      />

      <ContentSection title={text.missionTitle}>
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-semibold mb-6 text-center">{text.missionStatement}</p>
          <p className="text-lg text-surface-400 leading-relaxed">{text.missionDesc}</p>
        </div>
      </ContentSection>

      <ContentSection title={text.valuesTitle} dark>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <div key={i} className="card">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-surface-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title={text.techTitle}>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-surface-400 leading-relaxed mb-8">{text.techDesc}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {locale === 'ko' ? (
              <>
                <div className="card"><strong>멀티 모달 이해</strong>: 영상, 오디오, 텍스트, 메타데이터를 함께 분석</div>
                <div className="card"><strong>의미론적 검색</strong>: 키워드가 아닌 의미로 장면 검색</div>
                <div className="card"><strong>제로 업로드 아키텍처</strong>: 영상이 있는 곳에서 바로 처리</div>
                <div className="card"><strong>실시간 모니터링</strong>: 플랫폼 전반에 걸쳐 무단 배포를 자동으로 감지</div>
              </>
            ) : (
              <>
                <div className="card"><strong>Multimodal Understanding</strong>: Analyzes video, audio, text, and metadata together</div>
                <div className="card"><strong>Semantic Search</strong>: Find scenes by meaning, not just keywords</div>
                <div className="card"><strong>Zero Upload Architecture</strong>: Process videos where they are</div>
                <div className="card"><strong>Real-time Monitoring</strong>: Detect unauthorized distribution automatically</div>
              </>
            )}
          </div>
        </div>
      </ContentSection>
    </>
  )
}
