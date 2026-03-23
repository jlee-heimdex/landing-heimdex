import { Locale } from '@/lib/types'
import { getBookingLink } from '@/lib/i18n'
import ProductPageClient from '@/components/product/ProductPage'

interface ProductPageProps {
  params: Promise<{ locale: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  return <ProductPageClient locale={locale} bookingLink={getBookingLink(locale)} />
}
