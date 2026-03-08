import type { MetadataRoute } from 'next'

const baseUrl = 'https://casamariapresentacion.com'
const locales = ['es', 'en', 'de']

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/legal']

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1.0 : 0.5,
    }))
  )
}
