'use client'

interface FloatingContactProps {
  label: string
  href: string
}

export default function FloatingContact({ label, href }: FloatingContactProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-1 group"
    >
      <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M7 9h10" />
          <path d="M7 13h6" />
        </svg>
      </div>
      <span className="text-xs text-gray-500 font-medium">{label}</span>
    </a>
  )
}
