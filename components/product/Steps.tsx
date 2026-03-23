interface Step {
  label: string
  title: string
  description: string
}

interface StepsProps {
  steps: Step[]
}

export default function Steps({ steps }: StepsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={index}>
            {/* Arrow between steps */}
            {index > 0 && (
              <div className="flex justify-center py-8">
                <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            )}

            <div className="text-center">
              <p className="text-accent-blue font-bold text-lg mb-3">{step.label}</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
