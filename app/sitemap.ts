import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cronsolutions.com',
      lastModified: new Date(),
    },
    {
      url: 'https://cronsolutions.com/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://cronsolutions.com/terms',
      lastModified: new Date(),
    },
    {
      url: 'https://cronsolutions.com/cookies',
      lastModified: new Date(),
    },
  ]
}