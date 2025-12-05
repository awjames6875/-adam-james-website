import { Metadata } from 'next'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Jenks Entrepreneur Adam James | Business Services & Community Leadership',
  description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in Jenks, Oklahoma. Serving Jenks\' thriving community with excellence and compassion.',
  keywords: 'Jenks entrepreneur Adam James, Adam James Jenks business, Jenks mental health services, Jenks corporate housing, Jenks Oklahoma business services',
  openGraph: {
    title: 'Jenks Entrepreneur Adam James | Business Services',
    description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in Jenks, Oklahoma. Serving Jenks\' thriving community.',
    url: 'https://adamjamestulsa.com/locations/jenks',
    images: [
      {
        url: '/images/jenks-adam-james.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James Jenks Business Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenks Entrepreneur Adam James',
    description: 'Business consulting, mental health services, and corporate housing solutions in Jenks, Oklahoma.',
    images: ['/images/jenks-adam-james.jpg'],
  },
}

const jenksBusinessData = {
  name: 'Adam James - Jenks Services',
  description: 'Business consulting, mental health services, and corporate housing solutions in Jenks, Oklahoma. Serving Jenks\' thriving community.',
  url: 'https://adamjamestulsa.com/locations/jenks',
  address: {
    addressLocality: 'Jenks',
    addressRegion: 'OK',
    addressCountry: 'US',
    postalCode: '74037'
  },
  geo: {
    latitude: 36.0228,
    longitude: -95.9683
  },
  sameAs: [
    'https://linkedin.com/in/adamjamestulsa',
    'https://facebook.com/adamjamestulsa',
    'https://instagram.com/adamjamestulsa'
  ],
  serviceArea: {
    '@type': 'AdministrativeArea' as const,
    name: 'Jenks'
  }
}

export default function JenksPage() {
  return (
    <>
      {/* SEO Schema Markup */}
      <LocalBusinessSchema business={jenksBusinessData} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Jenks Entrepreneur
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Adam James serves Jenks' thriving community with corporate housing, 
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
                Serving Jenks' Vibrant Community
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Jenks, Oklahoma, known for its excellent schools and family-friendly environment, 
                is a rapidly growing community that perfectly balances suburban charm with modern 
                amenities. From the historic downtown area to the beautiful residential neighborhoods, 
                Jenks offers an exceptional quality of life for families and businesses alike.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a Jenks entrepreneur, I understand the unique needs of this vibrant community. 
                Whether you're a family seeking mental health support, a business professional 
                needing corporate housing, or a local business looking to grow and thrive, I'm 
                here to serve Jenks with the same dedication and excellence that defines our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Historic Downtown
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">
                  Residential Areas
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Business District
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Jenks Map</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
                <p className="text-gray-600">Jenks & Surrounding Areas</p>
                <p className="text-gray-600">Within 15 miles of Jenks center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jenks Business Climate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Jenks Business Climate
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Jenks has experienced remarkable growth and development, becoming one of the most 
                desirable communities in the Tulsa metropolitan area. The city's strategic location, 
                excellent schools, and business-friendly environment have attracted numerous 
                businesses and professionals seeking a high quality of life.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The historic downtown area continues to thrive with local businesses, while new 
                developments bring modern amenities and services. Jenks' commitment to maintaining 
                its community character while embracing growth has created a unique business 
                environment that supports both established companies and entrepreneurial ventures.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Future development plans include continued infrastructure improvements, enhanced 
                business districts, and preservation of Jenks' historic charm. These initiatives 
                ensure that Jenks will remain a premier destination for businesses and families.
              </p>
            </div>
          </div>
          </div>
        </section>

      {/* Services in Jenks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Adam James Services in Jenks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Housing */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-amber-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Housing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium corporate housing solutions in Jenks' most desirable neighborhoods. 
                Perfect for executives and professionals working in the Jenks area.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Family-friendly community</li>
                <li>• Near excellent schools</li>
                <li>• Safe, quiet neighborhoods</li>
                <li>• Modern amenities included</li>
              </ul>
            </div>
            
            {/* Mental Health Services */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Health Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive mental health support for Jenks families and individuals. 
                Community-focused care with flexible scheduling options.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Individual & family therapy</li>
                <li>• Child & adolescent counseling</li>
                <li>• Couples therapy</li>
                <li>• Community support groups</li>
              </ul>
            </div>
            
            {/* Business Consulting */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Strategic business development for Jenks companies. From downtown businesses 
                to growing enterprises.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Local market expertise</li>
                <li>• Community engagement strategies</li>
                <li>• Growth planning</li>
                <li>• Operational optimization</li>
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
              Jenks Community Involvement
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm deeply committed to Jenks' community life, from supporting local schools 
                and youth programs to participating in business development initiatives. The 
                strong sense of community and family values in Jenks align perfectly with my 
                mission to serve and support families and businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I regularly participate in Jenks business networking events, support local 
                schools and youth organizations, and collaborate with community leaders on 
                initiatives that benefit families and businesses. My goal is to help strengthen 
                the community bonds that make Jenks such a wonderful place to live and work.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through partnerships with local businesses, participation in community 
                development projects, and support for family-focused initiatives, I'm dedicated 
                to contributing to the continued growth and success of Jenks.
              </p>
            </div>
          </div>
          </div>
        </section>

      {/* Demographics & Market */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Jenks Demographics & Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Population & Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Total Population</span>
                  <span className="text-xl font-bold text-teal-600">24,000+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Age</span>
                  <span className="text-xl font-bold text-teal-600">36 years</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">College Educated</span>
                  <span className="text-xl font-bold text-teal-600">68%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Income</span>
                  <span className="text-xl font-bold text-teal-600">$82,000</span>
                </div>
              </div>
            </div>
            
              <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Environment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Local Businesses</span>
                  <span className="text-xl font-bold text-teal-600">180+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Professional Services</span>
                  <span className="text-xl font-bold text-teal-600">65+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Retail & Dining</span>
                  <span className="text-xl font-bold text-teal-600">120+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Annual Growth Rate</span>
                  <span className="text-xl font-bold text-teal-600">5.8%</span>
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
            Jenks Client Success Stories
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
                "Adam's corporate housing in Jenks is perfect for our visiting executives. The 
                family-friendly community and excellent schools make it ideal for extended stays."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                  <p className="font-semibold text-gray-900">Jennifer Smith</p>
                  <p className="text-sm text-gray-600">Business Owner, Jenks</p>
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
                "The family counseling services Adam provides in Jenks have been incredibly helpful. 
                His understanding of our community values makes all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Brown</p>
                  <p className="text-sm text-gray-600">Jenks Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Work Together in Jenks?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you need corporate housing, mental health services, or business consulting 
              in Jenks, I'm here to help you succeed. Let's discuss how we can work 
              together to achieve your goals in our wonderful community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/businesses" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-teal-500/30">
              <p className="text-teal-200 mb-4">Service Areas in Jenks</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-teal-500/20 text-teal-100 px-4 py-2 rounded-full text-sm">
                  Historic Downtown
                </span>
                <span className="bg-teal-500/20 text-teal-100 px-4 py-2 rounded-full text-sm">
                  Residential Areas
                </span>
                <span className="bg-teal-500/20 text-teal-100 px-4 py-2 rounded-full text-sm">
                  Business District
                </span>
                <span className="bg-teal-500/20 text-teal-100 px-4 py-2 rounded-full text-sm">
                  New Developments
                </span>
              </div>
            </div>
          </div>
          </div>
        </section>
    </>
  )
}