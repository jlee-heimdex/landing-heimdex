'use client'

interface LegalFloatingContactProps {
  label: string
  href: string
}

export default function LegalFloatingContact({ label, href }: LegalFloatingContactProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-1"
    >
      <div
        className="w-[52px] h-[52px] bg-[#3991FF] rounded-full flex items-center justify-center"
        style={{ boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.25)' }}
      >
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M7 9h10" />
          <path d="M7 13h6" />
        </svg>
      </div>
      <span className="text-[12px] font-semibold leading-[1.4] tracking-[-0.025em] text-[#3991FF]">
        {label}
      </span>
    </a>
  )
}
