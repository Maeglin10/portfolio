import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/login', '/private/'],
      },
    ],
    sitemap: 'https://aevia.vercel.app/sitemap.xml',
    host: 'https://aevia.vercel.app',
  }
}
