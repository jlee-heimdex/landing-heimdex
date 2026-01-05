import { MetadataRoute } from 'next'
import { locales } from '@/lib/types'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://heimdex.co'

  const routes = ['', '/company', '/product/entertainment', '/pricing', '/contact']

  const sitemap: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      })
    })
  })

  return sitemap
}
