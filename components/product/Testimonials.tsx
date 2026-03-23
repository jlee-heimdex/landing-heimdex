import Image from 'next/image'
import { ReactNode } from 'react'

interface TestimonialItem {
  avatarSrc: string
  role: string
  quote: string
  accent: string
  suffix: string
}

interface TestimonialsProps {
  headline: ReactNode
  items: TestimonialItem[]
}

export default function Testimonials({ headline, items }: TestimonialsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="section-container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 leading-snug">
          {headline}
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              {/* Avatar + Role */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <Image
                    src={item.avatarSrc}
                    alt={item.role}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-sm">{item.role}</span>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.quote}
                <span className="text-accent-blue font-medium">{item.accent}</span>
                {item.suffix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
