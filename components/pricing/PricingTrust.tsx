interface PricingTrustProps {
  heading: string
  points: string[]
}

export default function PricingTrust({ heading, points }: PricingTrustProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">{heading}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {points.map((point, index) => (
          <div
            key={index}
            className="card text-center p-5 border-surface-700 hover:border-accent-cyan/30 transition-colors"
          >
            <p className="text-surface-300 text-sm leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
