'use client'

import { useState } from 'react'
import { Locale } from '@/lib/types'
import PainPoints from './PainPoints'
import Steps from './Steps'
import WhyHeimdex from './WhyHeimdex'
import Testimonials from './Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import FloatingContact from '@/components/sections/FloatingContact'

type Tab = 'creative' | 'legal' | 'research'

interface ProductPageClientProps {
  locale: Locale
  bookingLink: string
}

const clockIcon = (
  <svg className="w-10 h-10 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M12 16l-2 4" />
  </svg>
)

const aiIcon = (
  <svg className="w-10 h-10 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
)

const shieldIcon = (
  <svg className="w-10 h-10 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

function getContent(locale: Locale) {
  if (locale === 'ko') {
    return {
      tabs: { creative: 'for Creative', legal: 'for Legal', research: 'for Research' },
      floatingContact: '문의하기',
      ctaBannerHeadline: '하임덱스 도입으로 변화될 압도적인 영상 업무 효율,',
      ctaBannerHighlight: '무료 1달 PoC로 먼저 검토해 보세요.',
      ctaBannerBtn: '문의하기',
      creative: {
        heroTitle: 'HEIMDEX for ',
        heroAccent: 'Creative',
        sub1: '수많은 하드 속 어디 있는지 모르는 장면,',
        sub2: '단어로 바로 검색하고, 쇼츠까지',
        cta: '웹에서 체험하기',
        pains: [
          { text: '멤버별 쇼츠를 일일이 따는 단순 반복 노동,\n', accent: '자동화', suffix: ' 하고 싶지 않으신가요?' },
          { text: '수 테라의 소스가 흩어진 외장하드,\n어디에 무엇이 있는지 ', accent: '기억에만 의존할 순 없습니다.' },
          { text: '기가급 고화질 영상을 클라우드에 올리는 ', accent: '대기 시간,', suffix: '\n편집의 흐름을 끊을 수밖에 없습니다.' },
        ],
        steps: [
          { label: 'Step 1', title: "업로드 없는 '즉시 인덱싱'", description: '영상이 저장되어있는 클라우드,외장하드,NAS를 연결만 하세요.\n업로드 필요없이 영상이 보관된 곳에서 모든 소스를 검색 지도로 만듭니다.' },
          { label: 'Step 2', title: 'A멤버 단독 구간 찾아줘', description: '"웃는 표정", "특정 출연자" 등 원하는 상황만 입력하세요.\n수 테라의 영상 속에서 필요한 장면을 1초 만에 소환합니다.' },
          { label: 'Step 3', title: '바이럴되는 알고리즘 쇼츠 자동화', description: "찾은 장면들을 선택하여 즉시 쇼츠로 추출하세요.\n소스 탐색이 아닌 '디렉팅'에만 시간을 쓰세요." },
        ],
        why: [
          { icon: clockIcon, title: '편집 효율 90%', description: '바이럴 되는 쇼츠를 10초만에 만드세요.\n수천 시간의 단순 영상 검토에 소모되던 에너지를\n영상 기획시간으로 사용하세요.' },
          { icon: aiIcon, title: '학계가 신뢰하는 AI 기술력', description: '인물은 물론, 멤버들의 애칭 인형, 앨범, 의상까지\n정확하게 찾을 수 있습니다.' },
          { icon: shieldIcon, title: '완벽한 보안 유지', description: '로컬 인덱싱 기술을 통해 영상 데이터가\n외부로 유출될 가능성을 원천 차단합니다.\n아티스트 IP를 소중하게 지키세요.' },
        ],
        testimonialsHeadline: (<>기록적인 업무 강도를 압도적 성과로 바꾼<br /><span className="text-accent-blue">제작자들의 목소리</span></>),
        testimonials: [
          { avatarSrc: '/images/avatars/pd-1.jpg', role: '라이브커머스 8년차 PD', quote: '"퇴사자가 많다보니 인수인계가 쉽지 않아요. 하드를 전부 라벨링 해놓지는 않거든요. NAS, 하드, 클라우드까지 인수인계 없이 ', accent: '하임덱스로 소스 찾는 시간 아껴서', suffix: ' 곧 편집에만 집중할 수 있어 살 것 같습니다."' },
          { avatarSrc: '/images/avatars/pd-2.jpg', role: '엔터테인먼트 7년차 PD', quote: '"다인원 그룹은 콘텐츠 양부터 압도적입니다. ', accent: '멤버별로 구간을 잘라서 만들어줄 수 있어서', suffix: ' 팬들도, 멤버들도 만족하고 있어요."' },
        ],
      },
      legal: {
        heroTitle: 'HEIMDEX for ',
        heroAccent: 'Legal',
        sub1: '수천 시간의 증거 영상,',
        sub2: '단 1초 만에 법적 증거로',
        cta: '웹에서 체험하기',
        pains: [
          { text: '수천 시간의 CCTV 속 ', accent: '결정적 1초,', suffix: '\n육안으로는 놓칠 수밖에 없습니다.' },
          { text: '', accent: '변호사의 시간', suffix: "은 '전수 조사'가 아닌\n'변론 전략'에 쓰여야 합니다." },
          { text: '육안으로는 도저히 찾을 수 없는 ', accent: '찰나의 순간,', suffix: '\n하임덱스는 절대 놓치지 않습니다.' },
        ],
        steps: [
          { label: 'Step 1', title: "업로드 없는 '즉시 분석'", description: '영상을 클라우드에 올릴 필요 없이,\n내 PC나 외장하드에 있는 그대로 인덱싱을 시작합니다.' },
          { label: 'Step 2', title: '행동·맥락 기반 장면 추출', description: '"폭행 장면", "피해자와 가해자의 접촉" 등 구체적인 상황을 입력하여\n수만 개의 파일 속 결정적 장면을 1초 만에 찾습니다.' },
          { label: 'Step 3', title: "법원 제출용 '증거 리포트 생성'", description: '식별된 장면은 즉시 클립으로 추출되며,\n해당 시점의 분석 데이터가 포함된 법률 리포트로 자동 변환됩니다.' },
        ],
        why: [
          { icon: clockIcon, title: '10시간 증거 영상을\n1분안에 확인', description: '단순 영상 검토에 쓰이던 시간을 법리 검토에\n집중하세요. 수많은 증거 영상과 녹취를\n반복해 볼 필요가 없습니다.' },
          { icon: aiIcon, title: '학계가 신뢰하는\nAI 기술력', description: '단순한 사물 식별을 넘어, 법적 다툼의 핵심이 되는\n미세한 행동 맥락까지 정교하게 포착합니다' },
          { icon: shieldIcon, title: '의뢰인의\n완벽한 비밀 유지', description: '영상 데이터가 유출될 가능성을 원천 차단합니다.\n폐쇄형 로컬 분석 인덱싱으로\n고객의 증거를 안전하게 보관하세요.' },
        ],
        testimonialsHeadline: (<>하임덱스로 승률을 높인<br /><span className="text-accent-blue">법률 전문가들의 목소리</span></>),
        testimonials: [
          { avatarSrc: '/images/avatars/lawyer-1.jpg', role: '이혼 전문 8년차 서OO 변호사', quote: '가정 법원 사건은 영상·녹취 보는 게 일도 일이지만 솔직히 정신적 고문이거든요. 하임덱스는 ', accent: '증거가 될 만한 걸 먼저 추리고 하이라이트', suffix: '해주니까, 다 안 봐도 제가 놓친 것까지 찾아내서 살 것 같습니다.' },
          { avatarSrc: '/images/avatars/lawyer-2.jpg', role: '이혼 전문 8년차 서OO 변호사', quote: '보안 때문에 녹취목조차 속기사를 써야하고, 클**도 못썼어요. ai 모델들을 쓰려면 증거영상을 클라우드에 올려야되니까요. 하지만 하임덱스는 ', accent: '따로 업로드도 하지 않아도 되어 기다릴 시간도 필요 없고 의뢰인 영상 유출 걱정 없이', suffix: ' 믿고 쓸 수 있어 좋습니다.' },
        ],
      },
      research: {
        heroTitle: 'HEIMDEX for ',
        heroAccent: 'Research',
        sub1: '수만 개의 실험 시퀀스 속 단 하나의 이상치,',
        sub2: '단 1초 만에 정리하세요',
        cta: '웹에서 체험하기',
        pains: [
          { text: '실험이 실패해도 방대한 데이터 속 어디서부터\n잘못됐는지 원인을 찾지 못해 ', accent: '연구가 정체되었나요?' },
          { text: '', accent: '민감한 원천 기술 영상', suffix: '이 유출되는 순간,\n연구의 모든 권리를 잃을 수 있습니다.' },
          { text: '', accent: '수천 회의 구동 테스트 영상', suffix: '을\n육안으로 다시 보고 있었나요?' },
        ],
        steps: [
          { label: 'Step 1', title: '연구망 내 로컬 인덱싱', description: '외부 전출 없이 연구실 내부 서버에서 모든 실험 시퀀스를\n즉시 인덱싱하여 완벽한 데이터 주권을 유지합니다.' },
          { label: 'Step 2', title: '멀티모달 맥락 검색', description: '"충돌 직전의 감속", "기구부 떨림" 등 로그 수치만으로는 설명하기\n힘든 비정형적 동작을 검색 한 줄로 소환합니다.' },
          { label: 'Step 3', title: '분석 데이터 동기화 리포트', description: '식별된 이상 시퀀스를 논문이나 보고서에 즉시 삽입 가능한\n정량적 리포트로 변환하여 실험 결과의 객관성을 높입니다.' },
        ],
        why: [
          { icon: clockIcon, title: '10시간의 연구 결과를\n1분안에 정리', description: '더 이상 실험 영상들을 돌려볼 필요가 없습니다.\n이상치를 자동으로 분석해보세요' },
          { icon: aiIcon, title: '학계가 신뢰하는\nAI 기술력', description: '"충돌 직전의 감속", "기구부 미세 진동" 등\n특정 물리적 거동 맥락을 입력하여 로그와 매칭되는\n결정적 장면을 즉시 소환합니다.' },
          { icon: shieldIcon, title: '유출 리스크\n원천 차단', description: '외부 전출 없이 연구소 내부 워크스테이션에서\n모든 실험 데이터를 인덱싱하여\n완벽한 데이터 주권을 보장합니다' },
        ],
        testimonialsHeadline: (<>하임덱스로 분석 정밀도를 혁신한 선도적인<br /><span className="text-accent-blue">AI 로보틱스 연구팀과 연구원들의 목소리</span></>),
        testimonials: [
          { avatarSrc: '/images/avatars/researcher-1.jpg', role: '피지컬 ai 기업 7년차 책임', quote: "로그는 깨끗한데 실제 구동이 뒤면 원인 찾느라 머리 터지거든요. 센서 데이터랑 영상을 일일이 대조하며 '이 지점이 맞나' 확인하는 건 연구가 아니라 그냥 노가다죠. ", accent: '하임덱스는 특정 동작 맥락만 치면 로그랑 일치하는 구간을 바로 하이라이트', suffix: '해주니까, 제가 놓친 미세 오류까지 다 보여서 살 것 같습니다.' },
          { avatarSrc: '/images/avatars/researcher-2.jpg', role: '피지컬 ai 기업 7년차 책임', quote: '외부 AI는 보안상 꿈도 못 꿨는데, 하임덱스는 온프레미스 기반이라 우리 연구실 안에서 ', accent: '원본 유출 걱정 없이 안심', suffix: '하고 쓰고 있습니다' },
        ],
      },
    }
  }

  // English content
  return {
    tabs: { creative: 'for Creative', legal: 'for Legal', research: 'for Research' },
    floatingContact: 'Contact',
    ctaBannerHeadline: 'See what Heimdex can do for your video workflows.',
    ctaBannerHighlight: 'Try it free for 1 month — no commitment.',
    ctaBannerBtn: 'Get in Touch',
    creative: {
      heroTitle: 'HEIMDEX for ',
      heroAccent: 'Creative',
      sub1: 'The scene you need is buried in terabytes.',
      sub2: 'Search by words. Get shorts in seconds.',
      cta: 'Try It Free',
      pains: [
        { text: 'Cutting member-by-member shorts is pure grunt work.\nReady to ', accent: 'automate it', suffix: '?' },
        { text: 'Terabytes of footage across scattered drives.\nYou ', accent: "can't run a team on memory alone." },
        { text: 'Uploading high-res footage to the cloud takes forever — ', accent: 'breaking your flow', suffix: '\nbefore you even start editing.' },
      ],
      steps: [
        { label: 'Step 1', title: 'Instant indexing — no upload', description: 'Connect your cloud storage, external drives, or NAS.\nHeimdex indexes everything in place — no upload, no waiting.' },
        { label: 'Step 2', title: '"Find all Member A solo shots"', description: 'Type what you need — "smiling", "a specific performer", any situation.\nThe right scene surfaces from terabytes of footage in one second.' },
        { label: 'Step 3', title: 'Auto-generate algorithm-ready shorts', description: "Pick the scenes you want, extract shorts instantly.\nSpend your time directing — not digging through drives." },
      ],
      why: [
        { icon: clockIcon, title: '90% faster editing', description: 'Create viral-ready shorts in 10 seconds.\nReclaim the hours you used to spend\nreviewing footage — and use them to plan.' },
        { icon: aiIcon, title: 'Research-grade AI', description: 'Recognizes people, nicknames, props, outfits,\nalbum covers — with precision that keeps up\nwith your creative needs.' },
        { icon: shieldIcon, title: 'Airtight security', description: 'Local-first indexing means video data\nnever leaves your environment.\nYour artists\' IP stays protected.' },
      ],
      testimonialsHeadline: (<>From overwhelming workloads to standout results —<br /><span className="text-accent-blue">hear from production teams</span></>),
      testimonials: [
        { avatarSrc: '/images/avatars/pd-1.jpg', role: 'Live Commerce PD, 8 years', quote: '"People come and go, and drives are never labeled. NAS, hard drives, cloud — no one knows where anything is. ', accent: 'Heimdex saves us the time we used to waste searching', suffix: ', so now we actually focus on editing."' },
        { avatarSrc: '/images/avatars/pd-2.jpg', role: 'Entertainment PD, 7 years', quote: '"With large idol groups, the content volume is staggering. Being able to ', accent: 'instantly clip each member\'s segments', suffix: ' keeps both the fans and the artists happy."' },
      ],
    },
    legal: {
      heroTitle: 'HEIMDEX for ',
      heroAccent: 'Legal',
      sub1: 'Thousands of hours of evidence footage.',
      sub2: 'Courtroom-ready in seconds.',
      cta: 'Try It Free',
      pains: [
        { text: 'The ', accent: 'one decisive second', suffix: ' buried in thousands of hours of CCTV —\nno human eye can catch it.' },
        { text: '', accent: "A lawyer's time", suffix: " belongs in case strategy,\nnot frame-by-frame video review." },
        { text: 'The ', accent: 'split-second moment', suffix: " that wins or loses a case —\nHeimdex doesn't miss it." },
      ],
      steps: [
        { label: 'Step 1', title: 'Instant analysis — no upload', description: 'No cloud upload needed.\nIndex directly from your local drives or external storage.' },
        { label: 'Step 2', title: 'Search by behavior and context', description: 'Describe what happened — "physical contact", "suspect approaching victim".\nPinpoint the decisive moment across tens of thousands of files.' },
        { label: 'Step 3', title: 'Generate court-ready evidence reports', description: 'Relevant scenes are clipped automatically\nand compiled into structured legal reports with timestamps and analysis.' },
      ],
      why: [
        { icon: clockIcon, title: '10 hours of evidence,\nreviewed in 1 minute', description: 'Stop watching footage on repeat.\nFree up your time for legal analysis\nwhere it actually matters.' },
        { icon: aiIcon, title: 'Research-grade AI', description: 'Goes far beyond object detection —\ncaptures the subtle behavioral context\nthat makes or breaks a legal argument.' },
        { icon: shieldIcon, title: 'Absolute client\nconfidentiality', description: 'Fully air-gapped, local-only analysis.\nNo data leaves your environment.\nYour client\'s evidence stays safe.' },
      ],
      testimonialsHeadline: (<>Winning more cases with Heimdex —<br /><span className="text-accent-blue">hear from legal professionals</span></>),
      testimonials: [
        { avatarSrc: '/images/avatars/lawyer-1.jpg', role: 'Family law attorney, 8 years', quote: '"Family court cases mean endless hours of video and audio review — honestly, it\'s draining. Heimdex ', accent: 'surfaces the evidence-worthy moments and highlights them', suffix: ', so I catch things I would have missed without watching everything."' },
        { avatarSrc: '/images/avatars/lawyer-2.jpg', role: 'Family law attorney, 8 years', quote: '"Security meant we couldn\'t touch cloud-based AI tools. But Heimdex runs locally — ', accent: 'no uploads, no wait times, and zero risk of client footage leaking', suffix: '. It\'s the only tool I trust."' },
      ],
    },
    research: {
      heroTitle: 'HEIMDEX for ',
      heroAccent: 'Research',
      sub1: 'One anomaly in tens of thousands of sequences.',
      sub2: 'Found and documented in seconds.',
      cta: 'Try It Free',
      pains: [
        { text: "When experiments fail, the cause is buried in mountains of data.\n", accent: 'Is your research stuck?' },
        { text: 'The moment ', accent: 'proprietary research footage', suffix: ' leaks,\nyou risk losing everything — IP, funding, competitive edge.' },
        { text: 'Still manually rewatching ', accent: 'thousands of test runs', suffix: '\nframe by frame?' },
      ],
      steps: [
        { label: 'Step 1', title: 'Index locally, inside your lab network', description: 'All experiment footage stays on your internal servers.\nNo external transfers — full data sovereignty from day one.' },
        { label: 'Step 2', title: 'Search by physical context', description: '"Deceleration before impact", "mechanism vibration" — describe the behavior,\nnot the file name. Surface hard-to-find anomalies in one search.' },
        { label: 'Step 3', title: 'Auto-generate analysis reports', description: 'Identified anomaly sequences are converted into quantitative,\npaper-ready reports — adding objectivity to your results.' },
      ],
      why: [
        { icon: clockIcon, title: '10 hours of footage,\nreviewed in 1 minute', description: 'Stop rewatching experiment recordings.\nLet AI surface the anomalies\nso you can focus on the science.' },
        { icon: aiIcon, title: 'Research-grade AI', description: 'Describe physical behaviors in plain language —\n"pre-collision deceleration", "micro-vibration" —\nand get log-matched results instantly.' },
        { icon: shieldIcon, title: 'Complete data\nsovereignty', description: 'Everything runs on your internal workstations.\nNo external transfers, no cloud dependency.\nYour research data stays yours.' },
      ],
      testimonialsHeadline: (<>Pushing the boundaries of analysis precision —<br /><span className="text-accent-blue">hear from AI robotics research teams</span></>),
      testimonials: [
        { avatarSrc: '/images/avatars/researcher-1.jpg', role: 'Physical AI lead, 7 years', quote: '"Logs look clean, but the real-world runs tell a different story. Cross-referencing sensor data with video frame by frame isn\'t research — it\'s busywork. ', accent: 'Heimdex matches motion context to log data instantly', suffix: ', catching micro-errors I never would have found on my own."' },
        { avatarSrc: '/images/avatars/researcher-2.jpg', role: 'Physical AI lead, 7 years', quote: '"External AI was out of the question for security reasons. Heimdex runs on-premise, so we use it ', accent: 'inside our own lab with zero concern about data exposure', suffix: '."' },
      ],
    },
  }
}

export default function ProductPageClient({ locale, bookingLink }: ProductPageClientProps) {
  const [activeTab, setActiveTab] = useState<Tab>('creative')
  const content = getContent(locale)
  const data = content[activeTab]

  return (
    <>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tabs */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            {(['creative', 'legal', 'research'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-accent-blue shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {content.tabs[tab]}
              </button>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-14 mb-6">
            {data.heroTitle}
            <span className="text-accent-blue">{data.heroAccent}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold mb-10 leading-snug">
            {data.sub1}
            <br />
            {data.sub2}
          </h2>

          <a
            href="https://playground.heimdex.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm px-6 py-3 inline-flex"
          >
            {data.cta}
          </a>
        </div>
      </section>

      <PainPoints items={data.pains} />
      <Steps steps={data.steps} />
      <WhyHeimdex
        headline={<>Why <span className="text-accent-blue">HEIMDEX?</span></>}
        features={data.why}
      />
      <Testimonials headline={data.testimonialsHeadline} items={data.testimonials} />
      <CTABanner
        headline={content.ctaBannerHeadline}
        highlight={content.ctaBannerHighlight}
        ctaLabel={content.ctaBannerBtn}
        ctaHref={bookingLink}
      />
      <FloatingContact label={content.floatingContact} href={bookingLink} />
    </>
  )
}
