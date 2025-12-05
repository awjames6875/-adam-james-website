import { Metadata } from 'next'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Midtown Tulsa Entrepreneur Adam James | Business Services & Community Leadership',
  description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in Midtown Tulsa. Serving Tulsa\'s vibrant midtown community with excellence and compassion.',
  keywords: 'midtown Tulsa entrepreneur Adam James, Adam James midtown Tulsa business, midtown Tulsa mental health services, midtown Tulsa corporate housing, Cherry Street business services',
  openGraph: {
    title: 'Midtown Tulsa Entrepreneur Adam James | Business Services',
    description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in Midtown Tulsa. Serving Tulsa\'s vibrant midtown community.',
    url: 'https://adamjamestulsa.com/locations/midtown-tulsa',
    images: [
      {
        url: '/images/midtown-tulsa-adam-james.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James Midtown Tulsa Business Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midtown Tulsa Entrepreneur Adam James',
    description: 'Business consulting, mental health services, and corporate housing solutions in Midtown Tulsa.',
    images: ['/images/midtown-tulsa-adam-james.jpg'],
  },
}

const midtownTulsaBusinessData = {
  name: 'Adam James - Midtown Tulsa Services',
  description: 'Business consulting, mental health services, and corporate housing solutions in Midtown Tulsa, Oklahoma. Serving Tulsa\'s vibrant midtown community.',
  url: 'https://adamjamestulsa.com/locations/midtown-tulsa',
  address: {
    addressLocality: 'Midtown Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US',
    postalCode: '74120'
  },
  geo: {
    latitude: 36.1322,
    longitude: -95.9989
  },
  sameAs: [
    'https://linkedin.com/in/adamjamestulsa',
    'https://facebook.com/adamjamestulsa',
    'https://instagram.com/adamjamestulsa'
  ],
  serviceArea: {
    '@type': 'AdministrativeArea' as const,
    name: 'Midtown Tulsa'
  }
}

export default function MidtownTulsaPage() {
  return (
    <>
      {/* SEO Schema Markup */}
      <LocalBusinessSchema business={midtownTulsaBusinessData} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Midtown Tulsa Entrepreneur
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Adam James serves Tulsa's vibrant midtown community with corporate housing, 
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
                Serving Midtown Tulsa's Diverse Community
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Midtown Tulsa is the heart of our city's cultural and residential life, featuring 
                historic neighborhoods, thriving business districts, and a strong sense of community. 
                From Cherry Street's vibrant dining scene to the beautiful neighborhoods of Brookside 
                and Florence Park, Midtown Tulsa offers the perfect blend of urban convenience and 
                residential charm.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a Midtown Tulsa entrepreneur, I understand the unique character and needs of this 
                diverse community. Whether you're a family looking for mental health support, a 
                business professional needing corporate housing, or a local business seeking growth 
                consulting, I'm here to serve Midtown Tulsa with the same dedication and excellence 
                that defines our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Cherry Street
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Brookside
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Florence Park
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Midtown Tulsa Map</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
                <p className="text-gray-600">Midtown Tulsa & Surrounding Areas</p>
                <p className="text-gray-600">Within 5 miles of midtown center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Midtown Tulsa Business Climate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Midtown Tulsa Business Climate
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Midtown Tulsa has evolved into one of the most desirable business and residential 
                areas in the city. The Cherry Street District continues to attract innovative 
                businesses, restaurants, and professional services, while maintaining its historic 
                charm. The area's walkable streets, diverse dining options, and thriving retail 
                scene make it an ideal location for both businesses and residents.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Brookside neighborhood has become a hub for boutique businesses and professional 
                services, while Florence Park offers a mix of residential and commercial development. 
                Midtown Tulsa's central location, excellent schools, and strong community engagement 
                make it a prime destination for businesses looking to establish roots in Tulsa.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Recent developments include new mixed-use projects, enhanced streetscaping, and 
                continued investment in local businesses. These improvements ensure that Midtown 
                Tulsa will remain a vibrant and thriving community for years to come.
              </p>
            </div>
          </div>
          </div>
        </section>

      {/* Services in Midtown Tulsa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Adam James Services in Midtown Tulsa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Housing */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-amber-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Housing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium corporate housing solutions in Midtown Tulsa's most desirable neighborhoods. 
                Perfect for executives and professionals working in the midtown area.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Historic charm with modern amenities</li>
                <li>• Walking distance to Cherry Street</li>
                <li>• Pet-friendly options available</li>
                <li>• Concierge services</li>
              </ul>
            </div>
            
            {/* Mental Health Services */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">💚</span>
            </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Health Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive mental health support for Midtown Tulsa families and professionals. 
                Convenient location with a focus on community-based care.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Family therapy & counseling</li>
                <li>• Individual therapy sessions</li>
                <li>• Group therapy programs</li>
                <li>• Sliding scale fees available</li>
              </ul>
            </div>
            
            {/* Business Consulting */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Strategic business development for Midtown Tulsa companies. From Cherry Street 
                startups to established Brookside businesses.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Local market expertise</li>
                <li>• Community partnership development</li>
                <li>• Growth strategy planning</li>
                <li>• Operational efficiency</li>
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
              Midtown Tulsa Community Involvement
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm deeply involved in Midtown Tulsa's community life, from supporting Cherry Street 
                events to participating in neighborhood associations. The sense of community in 
                Midtown Tulsa is what makes this area special, and I'm committed to contributing 
                to that spirit.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I regularly participate in Brookside business networking events, support Florence 
                Park community initiatives, and collaborate with local organizations to address 
                community needs. My goal is to help strengthen the bonds that make Midtown Tulsa 
                such a wonderful place to live and work.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through partnerships with local businesses, participation in neighborhood 
                improvement projects, and support for community events, I'm dedicated to 
                contributing to the continued growth and success of Midtown Tulsa.
              </p>
            </div>
          </div>
          </div>
        </section>

      {/* Demographics & Market */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Midtown Tulsa Demographics & Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Population & Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Total Population</span>
                  <span className="text-xl font-bold text-green-600">45,000+</span>
          </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Age</span>
                  <span className="text-xl font-bold text-green-600">38 years</span>
          </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">College Educated</span>
                  <span className="text-xl font-bold text-green-600">72%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Income</span>
                  <span className="text-xl font-bold text-green-600">$85,000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Environment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Local Businesses</span>
                  <span className="text-xl font-bold text-green-600">300+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Restaurants & Cafes</span>
                  <span className="text-xl font-bold text-green-600">150+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Professional Services</span>
                  <span className="text-xl font-bold text-green-600">100+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Annual Events</span>
                  <span className="text-xl font-bold text-green-600">50+</span>
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
            Midtown Tulsa Client Success Stories
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
                "Adam's corporate housing in Midtown Tulsa is perfect for our visiting executives. 
                The location near Cherry Street is ideal for business meetings and networking."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Jennifer Martinez</p>
                  <p className="text-sm text-gray-600">Business Owner, Cherry Street</p>
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
                "The mental health services Adam provides have been invaluable for our family. 
                His understanding of the Midtown Tulsa community makes all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                  <p className="font-semibold text-gray-900">David Thompson</p>
                  <p className="text-sm text-gray-600">Brookside Resident</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Work Together in Midtown Tulsa?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you need corporate housing, mental health services, or business consulting 
              in Midtown Tulsa, I'm here to help you succeed. Let's discuss how we can work 
              together to achieve your goals in our vibrant midtown community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/businesses" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-green-500/30">
              <p className="text-green-200 mb-4">Service Areas in Midtown Tulsa</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-green-500/20 text-green-100 px-4 py-2 rounded-full text-sm">
                  Cherry Street District
                </span>
                <span className="bg-green-500/20 text-green-100 px-4 py-2 rounded-full text-sm">
                  Brookside
                </span>
                <span className="bg-green-500/20 text-green-100 px-4 py-2 rounded-full text-sm">
                  Florence Park
                </span>
                <span className="bg-green-500/20 text-green-100 px-4 py-2 rounded-full text-sm">
                  Pearl District
                </span>
              </div>
            </div>
          </div>
          </div>
        </section>
    </>
  )
}