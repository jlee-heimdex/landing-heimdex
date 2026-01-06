import Image from 'next/image'

interface ProductShowcaseProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  className?: string
}

export default function ProductShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  className = '',
}: ProductShowcaseProps) {
  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="section-container">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text Content */}
          <div
            className={`${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'} animate-slide-up`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-surface-400 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Product Image */}
          <div
            className={`${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'} animate-slide-up`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/20 via-accent-violet/20 to-accent-pink/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden border border-surface-700/50 bg-surface-900/50 backdrop-blur-sm">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
