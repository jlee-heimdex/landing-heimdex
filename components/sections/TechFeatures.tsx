import { ReactNode } from 'react'

interface TechFeature {
  icon: ReactNode
  title: string
  description: string
}

interface TechFeaturesProps {
  headline: ReactNode
  features: TechFeature[]
}

export default function TechFeatures({ headline, features }: TechFeaturesProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            {headline}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-x-12 gap-y-14">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
