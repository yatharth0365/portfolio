import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = 'https://yatharthshrirame.xyz';
  return [
    {
      url,
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}