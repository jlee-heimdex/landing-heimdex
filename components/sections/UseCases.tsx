import Image from 'next/image'
import { ReactNode } from 'react'

interface UseCase {
  tag: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

interface UseCasesProps {
  headline: ReactNode
  cases: UseCase[]
}

export default function UseCases({ headline, cases }: UseCasesProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            {headline}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="sm:w-2/5 flex-shrink-0">
                <Image
                  src={useCase.imageSrc}
                  alt={useCase.imageAlt}
                  width={400}
                  height={280}
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <p className="text-sm font-medium text-accent-blue mb-2">
                  {useCase.tag}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
