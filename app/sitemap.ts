import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

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