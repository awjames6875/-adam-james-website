import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
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
  title: 'Adam James - Tulsa Entrepreneur & Business Leader',
  description: 'Adam James is a leading Tulsa entrepreneur, business innovator, and community leader driving growth and success in Oklahoma.',
  keywords: 'Adam James, Tulsa, entrepreneur, business leader, Oklahoma, innovation',
  authors: [{ name: 'Adam James' }],
  creator: 'Adam James',
  publisher: 'Adam James',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adamjamestulsa.com',
    siteName: 'Adam James Tulsa',
    title: 'Adam James - Tulsa Entrepreneur & Business Leader',
    description: 'Leading Tulsa entrepreneur driving business innovation and community growth in Oklahoma.',
    images: [
      {
        url: '/images/adam-james-tulsa.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James - Tulsa Business Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam James - Tulsa Entrepreneur',
    description: 'Leading business innovation in Tulsa, Oklahoma',
    images: ['/images/adam-james-tulsa.jpg'],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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