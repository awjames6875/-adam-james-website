import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { FacebookPixel } from '@/components/social/FacebookPixel'
import { LinkedInInsightTag } from '@/components/social/LinkedInInsightTag'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adamjamestulsa.com'),
  title: 'Adam James | Tulsa Entrepreneur & Owner of Integrity Corporate Housing',
  description: 'Adam James is a prominent Tulsa entrepreneur and the owner of Integrity Corporate Housing and GrowthGenix.ai. A dedicated business leader driving innovation in Oklahoma.',
  keywords: 'Adam James, Adam James Tulsa, Tulsa Entrepreneur, Integrity Corporate Housing Owner, GrowthGenix Founder, Business Leader Tulsa, Adam James Oklahoma',
  authors: [{ name: 'Adam James' }],
  creator: 'Adam James',
  publisher: 'Adam James',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://adamjamestulsa.com',
    siteName: 'Adam James Tulsa',
    title: 'Adam James - Tulsa Entrepreneur & Business Owner',
    description: 'Adam James is the founder of Integrity Corporate Housing and GrowthGenix.ai, serving the Tulsa community through business leadership and innovation.',
    images: [
      {
        url: '/images/adam-james-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James - Tulsa Entrepreneur',
      },
    ],
    firstName: 'Adam',
    lastName: 'James',
    username: 'adamjamestulsa',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam James | Tulsa Business Leader',
    description: 'Entrepreneur and Founder of Integrity Corporate Housing & GrowthGenix.ai in Tulsa, OK.',
    images: ['/images/adam-james-profile.jpg'],
    creator: '@adamjamestulsa',
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
    google: 'verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <FacebookPixel />
        <LinkedInInsightTag />
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}