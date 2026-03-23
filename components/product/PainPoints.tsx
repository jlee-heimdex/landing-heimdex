interface PainPointItem {
  text: string
  accent: string
  suffix?: string
}

interface PainPointsProps {
  items: PainPointItem[]
}

export default function PainPoints({ items }: PainPointsProps) {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 text-center text-sm leading-relaxed text-gray-700"
          >
            <span className="whitespace-pre-line">
              {item.text}
              <span className="text-accent-blue font-medium">{item.accent}</span>
              {item.suffix && item.suffix}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
