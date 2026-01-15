import Image from 'next/image'

interface BackedByProps {
  headline: string
  subhead: string
  logos?: Array<{
    src: string
    alt: string
    width?: number
    height?: number
  }>
}

export default function BackedBy({
  headline,
  subhead,
  logos = [
    {
      src: '/images/logos/antler_no-bg.png',
      alt: 'Antler',
      width: 200,
      height: 60,
    },
    {
      src: '/images/logos/nvidia-inception-program-badge-rgb-for-screen.png',
      alt: 'NVIDIA Inception Program',
      width: 200,
      height: 60,
    },
  ],
}: BackedByProps) {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface-950">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-slide-up">
            {headline}
          </h2>

          {/* Subhead */}
          <p
            className="text-surface-400 mb-12 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            {subhead}
          </p>

          {/* Logo Grid */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-100 hover:opacity-50 hover:grayscale transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 200}
                  height={logo.height || 60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
