import Head from 'next/head';
import { Metadata } from 'next';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  alternateLanguages?: Array<{
    hrefLang: string;
    href: string;
  }>;
}

// For app directory - use this to generate metadata
export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/images/adam-james-og-default.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  publishedDate,
  modifiedDate,
  author = 'Adam James',
  alternateLanguages = [],
}: SEOHeadProps): Metadata {
  const baseUrl = 'https://adamjamestulsa.com';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  // Enhanced title with branding
  const enhancedTitle = title.includes('Adam James') 
    ? title 
    : `${title} | Adam James Tulsa - Business Leader & Entrepreneur`;

  // Enhanced description with local SEO
  const enhancedDescription = description.includes('Tulsa') 
    ? description 
    : `${description} Serving Tulsa, Oklahoma and surrounding areas.`;

  // Comprehensive keywords
  const defaultKeywords = [
    'Adam James',
    'Adam James Tulsa',
    'Tulsa business leader',
    'Oklahoma entrepreneur',
    'corporate housing Tulsa',
    'mental health services Tulsa',
    'business consulting Tulsa',
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords];

  const metadata: Metadata = {
    title: enhancedTitle,
    description: enhancedDescription,
    keywords: allKeywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: 'Adam James Tulsa',
    
    // Canonical URL
    alternates: {
      canonical: fullCanonicalUrl,
      languages: alternateLanguages.reduce((acc, lang) => {
        acc[lang.hrefLang] = `${baseUrl}${lang.href}`;
        return acc;
      }, {} as Record<string, string>),
    },

    // Open Graph
    openGraph: {
      type: ogType,
      title: enhancedTitle,
      description: enhancedDescription,
      url: fullCanonicalUrl,
      siteName: 'Adam James Tulsa',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
    },

    // Twitter
    twitter: {
      card: twitterCard,
      title: enhancedTitle,
      description: enhancedDescription,
      images: [fullOgImage],
      creator: '@adamjamestulsa',
      site: '@adamjamestulsa',
    },

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Additional metadata
    other: {
      'application-name': 'Adam James Tulsa',
      'apple-mobile-web-app-title': 'Adam James Tulsa',
      'format-detection': 'telephone=yes',
      'geo.region': 'US-OK',
      'geo.placename': 'Tulsa',
      'geo.position': '36.1540;-95.9928',
      'ICBM': '36.1540, -95.9928',
    },
  };

  // Add published/modified dates for articles
  if (publishedDate && ogType === 'article') {
    metadata.openGraph!.publishedTime = publishedDate;
  }
  
  if (modifiedDate && ogType === 'article') {
    metadata.openGraph!.modifiedTime = modifiedDate;
  }

  return metadata;
}

// For pages directory (legacy support)
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/images/adam-james-og-default.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  publishedDate,
  modifiedDate,
  author = 'Adam James',
  alternateLanguages = [],
}) => {
  const baseUrl = 'https://adamjamestulsa.com';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  const enhancedTitle = title.includes('Adam James') 
    ? title 
    : `${title} | Adam James Tulsa - Business Leader & Entrepreneur`;

  const enhancedDescription = description.includes('Tulsa') 
    ? description 
    : `${description} Serving Tulsa, Oklahoma and surrounding areas.`;

  const defaultKeywords = [
    'Adam James',
    'Adam James Tulsa',
    'Tulsa business leader',
    'Oklahoma entrepreneur',
    'corporate housing Tulsa',
    'mental health services Tulsa',
    'business consulting Tulsa',
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Alternate Languages */}
      {alternateLanguages.map((lang) => (
        <link
          key={lang.hrefLang}
          rel="alternate"
          hrefLang={lang.hrefLang}
          href={`${baseUrl}${lang.href}`}
        />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Adam James Tulsa" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      
      {publishedDate && ogType === 'article' && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      
      {modifiedDate && ogType === 'article' && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@adamjamestulsa" />
      <meta name="twitter:site" content="@adamjamestulsa" />

      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noIndex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} />

      {/* Additional Meta Tags */}
      <meta name="application-name" content="Adam James Tulsa" />
      <meta name="apple-mobile-web-app-title" content="Adam James Tulsa" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="US-OK" />
      <meta name="geo.placename" content="Tulsa" />
      <meta name="geo.position" content="36.1540;-95.9928" />
      <meta name="ICBM" content="36.1540, -95.9928" />

      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
    </Head>
  );
};

export default SEOHead;