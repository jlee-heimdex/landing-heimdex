import type { Metadata } from 'next'
import Script from 'next/script'
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-901NDKXHRJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-901NDKXHRJ');
          `}
        </Script>
      </head>
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
