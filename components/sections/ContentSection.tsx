import { ReactNode } from 'react'

interface ContentSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  dark?: boolean
}

export default function ContentSection({
  title,
  subtitle,
  children,
  dark = false,
}: ContentSectionProps) {
  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-surface-950' : ''}`}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-surface-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
