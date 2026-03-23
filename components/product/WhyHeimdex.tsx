import { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface WhyHeimdexProps {
  headline: ReactNode
  features: Feature[]
}

export default function WhyHeimdex({ headline, features }: WhyHeimdexProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {headline}
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
