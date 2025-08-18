import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-primary-600">Adam James</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2">Home</a>
                  <a href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2">About</a>
                  <a href="/businesses" className="text-gray-700 hover:text-primary-600 px-3 py-2">Businesses</a>
                  <a href="/services" className="text-gray-700 hover:text-primary-600 px-3 py-2">Services</a>
                  <a href="/locations" className="text-gray-700 hover:text-primary-600 px-3 py-2">Locations</a>
                  <a href="/contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-2xl font-bold">Adam James</span>
                <p className="text-gray-400">Tulsa Business Leader</p>
              </div>
              <p className="text-gray-400 mb-4">
                © 2024 Adam James. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy</a>
                <a href="/terms" className="text-gray-400 hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}