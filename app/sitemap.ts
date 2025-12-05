import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adamjamestulsa.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/businesses`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Business pages
  const businessPages = [
    {
      url: `${baseUrl}/businesses/integrity-corporate-housing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/businesses/safe-harbor-mental-health`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/businesses/growthgenix-ai`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Location pages
  const locationPages = [
    'downtown-tulsa',
    'midtown-tulsa',
    'south-tulsa',
    'north-tulsa',
    'east-tulsa',
    'west-tulsa',
    'broken-arrow',
    'owasso',
    'jenks',
    'bixby',
    'sand-springs',
    'sapulpa',
    'claremore',
    'catoosa',
    'glenpool',
    'coweta',
    'skiatook',
    'collinsville',
    'verdigris',
    'wagoner'
  ].map(location => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Service pages
  const servicePages = [
    'corporate-housing',
    'mental-health-services',
    'business-consulting',
    'ai-technology'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Blog posts (example - would be dynamic in real implementation)
  const blogPosts = [
    'building-businesses-in-tulsa',
    'mental-health-advocacy-oklahoma',
    'corporate-housing-vs-hotels-tulsa',
    'second-chances-story-redemption',
    'supporting-tulsa-families-mental-health'
  ].map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...businessPages,
    ...locationPages,
    ...servicePages,
    ...blogPosts,
  ]
}
