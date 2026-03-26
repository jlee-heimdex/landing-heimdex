import { Locale } from '@/lib/types'
import { getBookingLink } from '@/lib/i18n'
import FloatingContact from '@/components/sections/FloatingContact'

interface CompanyPageProps {
  params: Promise<{ locale: string }>
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const bookingLink = getBookingLink(locale)

  const t = {
    ko: {
      heroQuote1: '"왜 방대한 영상 속 한 장면을 찾기 위해',
      heroQuote2: '소중한 시간을 낭비해야 할까요?"',
      heroSub1: '하임덱스는 전수 시청과 무거운 업로드가 필요 없는',
      heroSub2: 'AI 영상 탐색의 새로운 기준을 세웁니다.',
      mission1: 'HEIMDEX는 데이터가 쌓이는 구조에서 벗어나,',
      mission2: 'AI가 의미를 중심으로 콘텐츠를 관리·활용하는 시대의 표준을 만들어갑니다.',
      joinCta: '하임덱스의 여정에 동참하세요',
      value1Title1: '목표는 ',
      value1Accent1: '스스로 정의',
      value1Title2: '하고,',
      value1Title3: '성과는 ',
      value1Accent2: '결과로 증명',
      value1Title4: '합니다.',
      value1Desc: '우리는 각자가 자신의 KPI를 직접 설계하고 책임지는 \'자기 주도적 성장\'을 믿습니다.\n장소와 시간에 구애받지 않고, 오직 몰입에만 집중할 수 있는 최적의 환경을 스스로 디자인하세요.',
      value1Tags: ['유연한 근무 환경', '자기 주도적', '자율성'],
      value2Title1: '',
      value2Accent1: '직급의 벽',
      value2Title2: '을 허물고,',
      value2Title3: '',
      value2Accent2: '논리의 힘',
      value2Title4: '으로 소통합니다.',
      value2Desc: '모든 의견은 가감 없이 공유되고 치열하게 토론됩니다. 우리는 경청을 넘어 서로의 생각을 확장하는 수평적인 소통 구조 속에서 가장 정답에 가까운 결론을 찾아냅니다.',
      value2Tags: ['수평적인 소통', '열린문화', '협업'],
      value3Title1: '한계를 넘어서는 몰입,',
      value3Title2: '그 이상의 ',
      value3Accent: '성장을 지원',
      value3Title3: '합니다.',
      value3Desc: '난이도 높은 AI 기술적 과제를 해결하는 과정은 고되지만 확실한 성장을 보장합니다.\n하임덱스는 동료의 성장이 곧 팀의 경쟁력이라는 믿음으로, 필요한 모든 학습 리소스와 인프라를 전폭적으로 지원합니다.',
      value3Tags: ['성장지원', '학습문화', '동료'],
      statement1: 'HEIMDEX는 AI가 영상을 ',
      statement1Accent1: "'이해'",
      statement1Mid: '하고 ',
      statement1Accent2: "'연결'",
      statement1End: '하게 만듭니다.',
      statement2: '단순한 저장이나 관리가 아닌, 의미 단위로 콘텐츠를 인덱싱해\n필요한 장면을 찾고, 권리를 보호하며, 새로운 가치를 만들어냅니다.',
      statement3: '우리는 기업의 수많은 비정형 데이터를 단순한 비용이 아닌 새로운 자산으로 전환하도록 돕습니다.',
      floatingContact: '문의하기',
    },
    en: {
      heroQuote1: '"Why should finding one moment',
      heroQuote2: 'in a sea of footage cost you hours?"',
      heroSub1: 'Heimdex is redefining how teams work with video —',
      heroSub2: 'no full playback, no heavy uploads, just AI-powered search.',
      mission1: 'HEIMDEX is moving beyond the era of piling up data.',
      mission2: 'We\'re building the standard for AI that manages and activates content by its meaning.',
      joinCta: 'Join us on this journey',
      value1Title1: 'We ',
      value1Accent1: 'set our own goals',
      value1Title2: '',
      value1Title3: 'and ',
      value1Accent2: 'prove ourselves by results',
      value1Title4: '.',
      value1Desc: "Everyone here owns their own KPIs. We believe in self-driven growth.\nWork wherever, whenever — design the environment that lets you do your deepest work.",
      value1Tags: ['Remote-friendly', 'Self-driven', 'Autonomy'],
      value2Title1: 'No ',
      value2Accent1: 'hierarchy',
      value2Title2: '.',
      value2Title3: 'The best ',
      value2Accent2: 'argument',
      value2Title4: ' wins.',
      value2Desc: 'Every opinion is shared openly and debated honestly. We don\'t just listen — we challenge each other\'s thinking to arrive at the best possible answer.',
      value2Tags: ['Flat culture', 'Open debate', 'Collaboration'],
      value3Title1: 'Deep focus today,',
      value3Title2: 'real ',
      value3Accent: 'growth',
      value3Title3: ' tomorrow.',
      value3Desc: 'Hard AI problems are hard — but the growth is real.\nWe invest fully in learning resources and infrastructure because your growth is our competitive edge.',
      value3Tags: ['Growth investment', 'Learning culture', 'Team'],
      statement1: 'HEIMDEX teaches AI to ',
      statement1Accent1: "'understand'",
      statement1Mid: ' and ',
      statement1Accent2: "'connect'",
      statement1End: ' video.',
      statement2: 'Not just storage. Not just management.\nWe index content by meaning — so you can find the right scene, protect your rights, and unlock new value.',
      statement3: 'We help organizations turn mountains of unstructured video from a cost center into a strategic asset.',
      floatingContact: 'Contact',
    },
  }

  const text = t[locale]

  return (
    <>
      {/* Full-screen hero with background image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/company/hero-office.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-6 leading-snug">
            {text.heroQuote1}
            <br />
            {text.heroQuote2}
          </h1>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {text.heroSub1}
            <br />
            {text.heroSub2}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-6 h-6 text-white/60 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            {text.mission1}
            <br />
            {text.mission2}
          </p>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue font-semibold text-lg sm:text-xl underline underline-offset-4 decoration-accent-blue/40 hover:decoration-accent-blue transition-colors"
          >
            {text.joinCta}
          </a>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {/* Value 1 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-4 leading-snug">
                {text.value1Title1}<span className="text-accent-blue">{text.value1Accent1}</span>{text.value1Title2}
                <br />
                {text.value1Title3}<span className="text-accent-blue">{text.value1Accent2}</span>{text.value1Title4}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {text.value1Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {text.value1Tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Value 2 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-4 leading-snug">
                {text.value2Title1}<span className="text-accent-blue">{text.value2Accent1}</span>{text.value2Title2}
                <br />
                {text.value2Title3}<span className="text-accent-blue">{text.value2Accent2}</span>{text.value2Title4}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {text.value2Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {text.value2Tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Value 3 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-4 leading-snug">
                {text.value3Title1}
                <br />
                {text.value3Title2}<span className="text-accent-blue">{text.value3Accent}</span>{text.value3Title3}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {text.value3Desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {text.value3Tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-lg sm:text-xl font-bold">
            {text.statement1}
            <span className="text-accent-blue">{text.statement1Accent1}</span>
            {text.statement1Mid}
            <span className="text-accent-blue">{text.statement1Accent2}</span>
            {text.statement1End}
          </p>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed whitespace-pre-line">
            {text.statement2}
          </p>
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            {text.statement3}
          </p>
        </div>
      </section>

      <FloatingContact label={text.floatingContact} href={bookingLink} />
    </>
  )
}
