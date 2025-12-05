import { Metadata } from 'next'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Downtown Tulsa Entrepreneur Adam James | Business Services & Community Leadership',
  description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in Downtown Tulsa. Serving the heart of Tulsa\'s business community with excellence and compassion.',
  keywords: 'downtown Tulsa entrepreneur Adam James, Adam James downtown Tulsa business, downtown Tulsa mental health services, downtown Tulsa corporate housing, Tulsa Arts District business services',
  openGraph: {
    title: 'Downtown Tulsa Entrepreneur Adam James | Business Services',
    description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in Downtown Tulsa. Serving the heart of Tulsa\'s business community.',
    url: 'https://adamjamestulsa.com/locations/downtown-tulsa',
    images: [
      {
        url: '/images/downtown-tulsa-adam-james.jpg',
      width: 1200,
      height: 630,
        alt: 'Adam James Downtown Tulsa Business Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downtown Tulsa Entrepreneur Adam James',
    description: 'Business consulting, mental health services, and corporate housing solutions in Downtown Tulsa.',
    images: ['/images/downtown-tulsa-adam-james.jpg'],
  },
}

const downtownTulsaBusinessData = {
  name: 'Adam James - Downtown Tulsa Services',
  description: 'Business consulting, mental health services, and corporate housing solutions in Downtown Tulsa, Oklahoma. Serving the heart of Tulsa\'s business community.',
  url: 'https://adamjamestulsa.com/locations/downtown-tulsa',
  address: {
    addressLocality: 'Downtown Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US',
    postalCode: '74103'
  },
  geo: {
    latitude: 36.1540,
    longitude: -95.9928
  },
  sameAs: [
    'https://linkedin.com/in/adamjamestulsa',
    'https://facebook.com/adamjamestulsa',
    'https://instagram.com/adamjamestulsa'
  ],
  serviceArea: {
    '@type': 'AdministrativeArea' as const,
    name: 'Downtown Tulsa'
  }
}

export default function DowntownTulsaPage() {
  return (
    <>
      {/* SEO Schema Markup */}
      <LocalBusinessSchema business={downtownTulsaBusinessData} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Downtown Tulsa Entrepreneur
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Adam James serves the heart of Tulsa's business community with corporate housing, 
              mental health services, and strategic business consulting
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Downtown Tulsa's Business Community
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Downtown Tulsa represents the heart of our city's business community, and I'm proud 
                to serve this vibrant area through my businesses and community involvement. From the 
                Tulsa Arts District to the bustling business district, Downtown Tulsa is where innovation 
                meets tradition, and where businesses come to grow and thrive.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a Downtown Tulsa entrepreneur, I understand the unique needs of businesses and 
                professionals in this dynamic area. Whether you need corporate housing for visiting 
                executives, mental health support for your team, or strategic business consulting 
                to accelerate growth, I'm here to help you succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Tulsa Arts District
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Business District
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Corporate Center
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Downtown Tulsa Map</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
                <p className="text-gray-600">Downtown Tulsa & Surrounding Areas</p>
                <p className="text-gray-600">Within 5 miles of city center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Tulsa Business Climate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Downtown Tulsa Business Climate
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Downtown Tulsa is experiencing unprecedented growth and development. The Tulsa Arts 
                District has become a cultural hub, attracting creative professionals and innovative 
                businesses. Meanwhile, the traditional business district continues to evolve with 
                new corporate headquarters, technology companies, and professional services.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The area's economic development initiatives, combined with its central location and 
                excellent transportation access, make Downtown Tulsa an ideal place for businesses 
                to establish roots and grow. From startups to Fortune 500 companies, Downtown Tulsa 
                offers the infrastructure, talent, and community support that businesses need to succeed.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Future development plans include additional mixed-use projects, enhanced public 
                transportation, and continued investment in arts and culture. These initiatives 
                ensure that Downtown Tulsa will remain a premier business destination for years to come.
              </p>
            </div>
          </div>
          </div>
        </section>

      {/* Services in Downtown Tulsa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Adam James Services in Downtown Tulsa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Housing */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-amber-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Housing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium corporate housing solutions for Downtown Tulsa businesses. Located within 
                walking distance of major corporate offices and business centers.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Fully furnished apartments</li>
                <li>• High-speed internet & utilities</li>
                <li>• Flexible lease terms</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
            
            {/* Mental Health Services */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Health Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive mental health support for Downtown Tulsa professionals and families. 
                Convenient location with flexible scheduling options.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Individual & family therapy</li>
                <li>• Workplace mental health programs</li>
                <li>• Stress management counseling</li>
                <li>• Insurance accepted</li>
              </ul>
            </div>
            
            {/* Business Consulting */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Strategic business development and growth consulting for Downtown Tulsa companies. 
                From startups to established businesses.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Growth strategy development</li>
                <li>• Operations optimization</li>
                <li>• Team building & leadership</li>
                <li>• Financial planning</li>
              </ul>
            </div>
          </div>
          </div>
        </section>

      {/* Community Involvement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Downtown Tulsa Community Involvement
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm actively involved in Downtown Tulsa's business community and cultural scene. 
                From participating in Tulsa Arts District events to supporting local business 
                initiatives, I believe in giving back to the community that has given me so much.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I regularly attend Downtown Tulsa business networking events, support local arts 
                organizations, and participate in community development projects. My goal is to 
                help make Downtown Tulsa an even better place to live, work, and do business.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through partnerships with local businesses, participation in Downtown Tulsa 
                development initiatives, and support for community events, I'm committed to 
                contributing to the continued growth and success of our downtown area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics & Market */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Downtown Tulsa Demographics & Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Population & Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Total Population</span>
                  <span className="text-xl font-bold text-blue-600">15,000+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Age</span>
                  <span className="text-xl font-bold text-blue-600">34 years</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">College Educated</span>
                  <span className="text-xl font-bold text-blue-600">68%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Income</span>
                  <span className="text-xl font-bold text-blue-600">$75,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Environment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Major Employers</span>
                  <span className="text-xl font-bold text-blue-600">50+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Office Buildings</span>
                  <span className="text-xl font-bold text-blue-600">25+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Restaurants & Retail</span>
                  <span className="text-xl font-bold text-blue-600">200+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Annual Events</span>
                  <span className="text-xl font-bold text-blue-600">100+</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Downtown Tulsa Client Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="ml-2 text-gray-600">5.0/5</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Adam's corporate housing service has been a game-changer for our Downtown Tulsa 
                operations. The quality and convenience are unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">HR Director, Tech Startup</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
          </div>
                <span className="ml-2 text-gray-600">5.0/5</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The mental health services Adam provides have helped our team manage workplace 
                stress and maintain work-life balance in Downtown Tulsa."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-600">Operations Manager</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Work Together in Downtown Tulsa?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you need corporate housing, mental health services, or business consulting 
              in Downtown Tulsa, I'm here to help you succeed. Let's discuss how we can work 
              together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/businesses" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-500/30">
              <p className="text-blue-200 mb-4">Service Areas in Downtown Tulsa</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm">
                  Tulsa Arts District
                </span>
                <span className="bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm">
                  Business District
                </span>
                <span className="bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm">
                  Blue Dome District
                </span>
                <span className="bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm">
                  Brady District
                </span>
              </div>
            </div>
          </div>
          </div>
        </section>
    </>
  )
}