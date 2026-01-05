interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="card card-hover h-full">
      {icon && (
        <div className="mb-4 text-accent-cyan">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-surface-400 leading-relaxed">{description}</p>
    </div>
  )
}
