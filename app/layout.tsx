import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yatharth Shrirame — AI & Machine Learning',
  description:
    'B.Tech Artificial Intelligence candidate building governed predictive-maintenance and data systems.',
  metadataBase: new URL('https://yatharthshrirame.xyz'),
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Yatharth Shrirame — AI & Machine Learning',
    description:
      'B.Tech Artificial Intelligence candidate building governed predictive-maintenance and data systems.',
    type: 'website',
    url: 'https://yatharthshrirame.xyz',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yatharth Shrirame',
  email: 'yatharth.shrirame@gmail.com',
  telephone: '+91 8793774341',
  url: 'https://yatharthshrirame.xyz',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'GH Raisoni College of Engineering',
  },
  knowsAbout: [
    'Python',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Scikit-learn',
    'Pandas',
    'SQL',
    'Data Science',
    'Machine Learning',
    'Predictive Maintenance',
  ],
  worksOn: [{ '@type': 'CreativeWork', name: 'Predictive OS' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}