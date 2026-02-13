import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation, Footer } from '@/components/layout'
import { SchemaMarkup, Analytics, AdamJamesTulsaLocalBusiness, AdamJamesTulsaFAQ } from '@/components/seo'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Adam James Tulsa - #1 Business Leader & Entrepreneur in Oklahoma',
  description: 'Adam James is the leading Tulsa entrepreneur and business innovator driving economic growth across Oklahoma. Discover corporate housing, mental health services, and strategic business consulting solutions.',
  keywords: 'Adam James Tulsa, Tulsa entrepreneur, Oklahoma business leader, corporate housing Tulsa, mental health services Oklahoma, business consulting Tulsa, Adam James Oklahoma, Tulsa business development',
  authors: [{ name: 'Adam James' }],
  creator: 'Adam James',
  publisher: 'Adam James Tulsa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adamjamestulsa.com',
    siteName: 'Adam James Tulsa - Premier Business Leader',
    title: 'Adam James Tulsa - #1 Business Leader & Entrepreneur in Oklahoma',
    description: 'Leading Tulsa entrepreneur driving business innovation, corporate housing solutions, and mental health services across Oklahoma. Transform your business with Adam James.',
    images: [
      {
        url: 'https://adamjamestulsa.com/images/adam-james-tulsa-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James - Premier Tulsa Business Leader and Entrepreneur',
        type: 'image/jpeg',
      },
      {
        url: 'https://adamjamestulsa.com/images/adam-james-professional.jpg',
        width: 800,
        height: 600,
        alt: 'Adam James Professional Portrait - Tulsa Entrepreneur',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam James Tulsa - #1 Business Leader & Entrepreneur',
    description: 'Leading Tulsa entrepreneur driving business innovation, corporate housing, and mental health services across Oklahoma.',
    images: ['https://adamjamestulsa.com/images/adam-james-tulsa-hero.jpg'],
    creator: '@adamjamestulsa',
    site: '@adamjamestulsa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token-here',
    // bing: 'bing-site-verification-token-here',
  },
  other: {
    'application-name': 'Adam James Tulsa',
    'apple-mobile-web-app-title': 'Adam James Tulsa',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=yes',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#2563eb',
    // Local SEO Geo Tags
    'geo.region': 'US-OK',
    'geo.placename': 'Tulsa, Oklahoma',
    'geo.position': '36.1540;-95.9928',
    'ICBM': '36.1540, -95.9928',
    // Business Information
    'business:name': 'Adam James',
    'business:location': 'Tulsa, Oklahoma',
    'business:type': 'Entrepreneur, Business Consultant',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <SchemaMarkup />
        <AdamJamesTulsaLocalBusiness />
        <AdamJamesTulsaFAQ />
        <Analytics enableGA4={true} enableGTM={false} enableHotjar={false} />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}