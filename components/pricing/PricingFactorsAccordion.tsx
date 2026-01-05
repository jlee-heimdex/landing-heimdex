'use client'

import { useState } from 'react'

interface PricingFactorsAccordionProps {
  title: string
  factors: string[]
}

export default function PricingFactorsAccordion({
  title,
  factors,
}: PricingFactorsAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card max-w-2xl mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isOpen}
        aria-controls="pricing-factors-content"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <svg
          className={`w-6 h-6 text-accent-cyan transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id="pricing-factors-content"
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-6' : 'max-h-0'
        }`}
        role="region"
        aria-labelledby="pricing-factors-title"
      >
        <ul className="space-y-3">
          {factors.map((factor, index) => (
            <li key={index} className="flex items-start gap-3 text-surface-300">
              <svg
                className="w-5 h-5 text-accent-violet flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
