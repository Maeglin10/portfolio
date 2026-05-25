import type { MetadataRoute } from 'next'

const BASE = 'https://aevia.vercel.app'
const LOCALES = ['fr', 'en', 'es', 'de', 'pt'] as const

const ROUTES: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/products/launch', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/products/inbox', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/products/security', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/templates', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/legal', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/legal/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/legal/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/legal/cookies', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      const url = `${BASE}/${locale}${route.path}`
      const languages = Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE}/${l}${route.path}`]),
      )
      entries.push({
        url,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      })
    }
  }

  return entries
}
