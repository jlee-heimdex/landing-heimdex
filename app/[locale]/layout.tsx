import { Locale, locales } from '@/lib/types'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale as string }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  )
}
