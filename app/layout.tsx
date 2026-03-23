import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HEIMDEX - Smart Video Management Platform',
  description: 'Manage scattered videos in one place, summarize with AI, and automatically detect illegal distribution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
