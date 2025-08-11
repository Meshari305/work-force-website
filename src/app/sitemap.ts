import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://workforce.sa';
  const currentDate = new Date();

  // Define all routes with their priorities and change frequencies
  const routes = [
    {
      url: '',
      priority: 1.0,
      changeFreq: 'weekly' as const,
    },
    {
      url: '/about',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      url: '/services',
      priority: 0.9,
      changeFreq: 'monthly' as const,
    },
    {
      url: '/industries',
      priority: 0.8,
      changeFreq: 'monthly' as const,
    },
    {
      url: '/employers',
      priority: 1.0,
      changeFreq: 'weekly' as const,
    },
    {
      url: '/job-seekers',
      priority: 1.0,
      changeFreq: 'weekly' as const,
    },
    {
      url: '/contact',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
  ];

  // Generate sitemap entries for both English and Arabic
  const sitemapEntries = routes.flatMap((route) => [
    // English version
    {
      url: `${baseUrl}/en${route.url}`,
      lastModified: currentDate,
      changeFrequency: route.changeFreq,
      priority: route.priority,
    },
    // Arabic version  
    {
      url: `${baseUrl}/ar${route.url}`,
      lastModified: currentDate,
      changeFrequency: route.changeFreq,
      priority: route.priority,
    },
  ]);

  // Add root redirect
  sitemapEntries.unshift({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  });

  return sitemapEntries;
}