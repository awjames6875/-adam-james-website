import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Integrity Corporate Housing | Premium Tulsa Corporate Housing - Adam James',
  description: 'Integrity Corporate Housing provides premium fully-furnished corporate housing solutions in Tulsa, Oklahoma. Founded by Adam James to serve businesses with excellence and integrity.',
  keywords: 'Integrity Corporate Housing, Tulsa corporate housing, Adam James business, furnished apartments Tulsa, business housing Oklahoma',
  openGraph: {
    title: 'Integrity Corporate Housing - Premium Tulsa Corporate Housing',
    description: 'Premium fully-furnished corporate housing solutions in Tulsa. Founded by Adam James with a commitment to integrity and excellence.',
    url: 'https://adamjamestulsa.com/businesses/integrity-corporate-housing',
    images: [
      {
        url: '/images/integrity-corporate-housing.jpg',
        width: 1200,
        height: 630,
        alt: 'Integrity Corporate Housing Tulsa',
      },
    ],
  },
}

const businessData = {
  name: 'Integrity Corporate Housing',
  description: 'Premium corporate housing solutions serving businesses and professionals in Tulsa, Oklahoma',
  url: 'https://adamjamestulsa.com/businesses/integrity-corporate-housing',
  address: {
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US',
    postalCode: '74103'
  },
  geo: {
    latitude: 36.1540,
    longitude: -95.9928
  },
  sameAs: [
    'https://linkedin.com/company/integrity-corporate-housing',
  ],
  serviceArea: {
    '@type': 'City' as const,
    name: 'Tulsa'
  }
}

export default function IntegrityCorporateHousingPage() {
  return (
    <>
      <LocalBusinessSchema business={businessData} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Founded by Adam James
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Integrity Corporate Housing
                </h1>
                <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                  Premium fully-furnished corporate housing solutions for businesses 
                  and professionals in Tulsa, Oklahoma
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3,253+ Bookings
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    9,325+ Restful Nights
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    53+ Fabulous Residences
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    1,539+ Happy Clients
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link 
                    href="/contact"
                    className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
                  >
                    Request Quote
                  </Link>
                  <Link 
                    href="#services"
                    className="inline-block border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/integrity-corporate-housing.jpg"
                  alt="Integrity Corporate Housing Property"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Integrity Corporate Housing was founded by <strong>Adam James</strong> with a simple but powerful mission: 
                provide corporate housing solutions that businesses can trust, with the integrity and excellence 
                that every professional deserves.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Drawing on years of experience in Tulsa's business community, Adam recognized that companies 
                needed more than just temporary housing - they needed a partner committed to making business 
                travel feel like home. Each property is carefully selected, professionally furnished, and maintained 
                to the highest standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, Integrity Corporate Housing has achieved over <strong>3,253 bookings</strong>, delivered <strong>9,325+ restful nights</strong>, 
                and served <strong>1,539+ happy clients</strong> across <strong>53+ fabulous residences</strong>. We provide the comfort and 
                reliability that allows businesses to focus on what matters most: their work and their people.
              </p>
              <div className="text-center">
                <a 
                  href="https://integritycorporatehousing.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Visit integritycorporatehousing.com →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Housing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fully-furnished, move-in ready apartments for business travelers, relocating employees, 
                  and project teams.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium furniture & appliances
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All utilities included
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    High-speed internet & cable
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Flexible lease terms
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Group Housing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Multiple units for large teams, training groups, or long-term projects requiring 
                  coordinated housing solutions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Coordinated check-ins
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Proximity housing options
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Volume discounts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated account manager
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Round-the-clock support ensuring your team has everything they need, when they need it.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Emergency maintenance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Concierge services
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Housekeeping available
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated support line
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Integrity Corporate Housing?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted by Top Companies</h3>
                  <p className="text-gray-600">
                    Over 50 corporate clients trust us with their most important asset: their people.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Properties</h3>
                  <p className="text-gray-600">
                    Carefully selected properties in the best locations across Tulsa.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    No hidden fees. All-inclusive pricing with utilities, internet, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Touch</h3>
                  <p className="text-gray-600">
                    Founded and led by Adam James with a commitment to integrity and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Integrity Corporate Housing made our business expansion to Tulsa seamless. 
                  The properties are top-notch and the service is unmatched."
                </p>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-600">HR Director, Tech Company</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Adam and his team went above and beyond. They truly care about making 
                  your stay comfortable and productive."
                </p>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-sm text-gray-600">Operations Manager</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Best corporate housing experience we've had. Professional, responsive, 
                  and always available when we needed them."
                </p>
                <div className="font-semibold text-gray-900">Jennifer Martinez</div>
                <div className="text-sm text-gray-600">Project Manager</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Integrity Difference?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your corporate housing needs and find the perfect solution for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors"
              >
                Request a Quote
              </Link>
              <Link 
                href="tel:9185550123"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-800 transition-colors"
              >
                Call (918) 553-5746
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

