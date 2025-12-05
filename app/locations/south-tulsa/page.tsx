import { Metadata } from 'next'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'South Tulsa Entrepreneur Adam James | Business Services & Community Leadership',
  description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in South Tulsa. Serving Tulsa\'s thriving southside community with excellence and compassion.',
  keywords: 'south Tulsa entrepreneur Adam James, Adam James south Tulsa business, south Tulsa mental health services, south Tulsa corporate housing, Bixby business services',
  openGraph: {
    title: 'South Tulsa Entrepreneur Adam James | Business Services',
    description: 'Adam James provides business consulting, mental health services, and corporate housing solutions in South Tulsa. Serving Tulsa\'s thriving southside community.',
    url: 'https://adamjamestulsa.com/locations/south-tulsa',
    images: [
      {
        url: '/images/south-tulsa-adam-james.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James South Tulsa Business Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Tulsa Entrepreneur Adam James',
    description: 'Business consulting, mental health services, and corporate housing solutions in South Tulsa.',
    images: ['/images/south-tulsa-adam-james.jpg'],
  },
}

const southTulsaBusinessData = {
  name: 'Adam James - South Tulsa Services',
  description: 'Business consulting, mental health services, and corporate housing solutions in South Tulsa, Oklahoma. Serving Tulsa\'s thriving southside community.',
  url: 'https://adamjamestulsa.com/locations/south-tulsa',
  address: {
    addressLocality: 'South Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US',
    postalCode: '74137'
  },
  geo: {
    latitude: 36.0834,
    longitude: -95.8690
  },
  sameAs: [
    'https://linkedin.com/in/adamjamestulsa',
    'https://facebook.com/adamjamestulsa',
    'https://instagram.com/adamjamestulsa'
  ],
  serviceArea: {
    '@type': 'AdministrativeArea' as const,
    name: 'South Tulsa'
  }
}

export default function SouthTulsaPage() {
  return (
    <>
      {/* SEO Schema Markup */}
      <LocalBusinessSchema business={southTulsaBusinessData} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              South Tulsa Entrepreneur
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Adam James serves Tulsa's thriving southside community with corporate housing, 
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
                Serving South Tulsa's Growing Community
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                South Tulsa represents one of the fastest-growing areas in our city, featuring 
                beautiful residential neighborhoods, thriving business districts, and excellent 
                schools. From the bustling Woodland Hills area to the family-friendly neighborhoods 
                near Bixby, South Tulsa offers a perfect blend of suburban comfort and urban convenience.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a South Tulsa entrepreneur, I understand the unique needs of families and 
                businesses in this rapidly expanding area. Whether you're looking for corporate 
                housing for your growing business, mental health support for your family, or 
                strategic consulting to help your company thrive, I'm here to serve South Tulsa 
                with dedication and excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Woodland Hills
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Bixby Area
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Jenks Area
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">South Tulsa Map</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
                <p className="text-gray-600">South Tulsa & Surrounding Areas</p>
                <p className="text-gray-600">Within 10 miles of south Tulsa center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South Tulsa Business Climate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              South Tulsa Business Climate
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                South Tulsa has experienced remarkable growth and development over the past decade. 
                The Woodland Hills area has become a major business hub, attracting corporate 
                headquarters, professional services, and retail developments. The area's strategic 
                location, excellent infrastructure, and business-friendly environment make it an 
                ideal destination for companies looking to establish or expand their operations.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The proximity to Bixby and Jenks adds to the area's appeal, creating a dynamic 
                business ecosystem that serves both local residents and the broader Tulsa metropolitan 
                area. South Tulsa's continued development includes new office complexes, retail 
                centers, and mixed-use projects that further enhance the business environment.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Future growth plans include additional commercial development, improved transportation 
                infrastructure, and continued investment in local businesses. These initiatives 
                ensure that South Tulsa will remain a premier business destination for years to come.
              </p>
            </div>
          </div>
          </div>
        </section>

      {/* Services in South Tulsa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Adam James Services in South Tulsa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Housing */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-amber-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Housing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium corporate housing solutions in South Tulsa's most desirable neighborhoods. 
                Perfect for executives and professionals working in the Woodland Hills area.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Spacious family-friendly homes</li>
                <li>• Near top-rated schools</li>
                <li>• Easy access to business districts</li>
                <li>• Premium amenities included</li>
              </ul>
            </div>
            
            {/* Mental Health Services */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">💚</span>
            </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Health Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive mental health support for South Tulsa families and professionals. 
                Convenient location with flexible scheduling and family-focused care.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Family counseling & therapy</li>
                <li>• Child & adolescent services</li>
                <li>• Couples therapy</li>
                <li>• Evening & weekend appointments</li>
              </ul>
            </div>
            
            {/* Business Consulting */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Strategic business development for South Tulsa companies. From Woodland Hills 
                corporations to local Bixby businesses.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Growth strategy development</li>
                <li>• Market expansion planning</li>
                <li>• Operational efficiency</li>
                <li>• Team development programs</li>
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
              South Tulsa Community Involvement
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm actively involved in South Tulsa's community life, from supporting local 
                schools and youth programs to participating in business development initiatives. 
                The strong sense of community and family values in South Tulsa align perfectly 
                with my mission to serve and support families and businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I regularly participate in South Tulsa business networking events, support local 
                schools and youth organizations, and collaborate with community leaders on 
                initiatives that benefit families and businesses. My goal is to help strengthen 
                the community bonds that make South Tulsa such a wonderful place to live and work.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through partnerships with local businesses, participation in community 
                development projects, and support for family-focused initiatives, I'm dedicated 
                to contributing to the continued growth and success of South Tulsa.
              </p>
            </div>
          </div>
          </div>
        </section>

      {/* Demographics & Market */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            South Tulsa Demographics & Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Population & Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Total Population</span>
                  <span className="text-xl font-bold text-purple-600">75,000+</span>
          </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Age</span>
                  <span className="text-xl font-bold text-purple-600">42 years</span>
          </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">College Educated</span>
                  <span className="text-xl font-bold text-purple-600">65%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Median Income</span>
                  <span className="text-xl font-bold text-purple-600">$95,000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Environment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Corporate Headquarters</span>
                  <span className="text-xl font-bold text-purple-600">25+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Professional Services</span>
                  <span className="text-xl font-bold text-purple-600">150+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Retail & Dining</span>
                  <span className="text-xl font-bold text-purple-600">200+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Annual Growth Rate</span>
                  <span className="text-xl font-bold text-purple-600">8.5%</span>
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
            South Tulsa Client Success Stories
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
                "Adam's corporate housing in South Tulsa is perfect for our executives. The 
                family-friendly environment and proximity to schools make it ideal for long-term stays."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Robert Wilson</p>
                  <p className="text-sm text-gray-600">CEO, Woodland Hills Corp</p>
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
                "The family counseling services Adam provides in South Tulsa have been life-changing 
                for our family. His understanding of our community values makes all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Lisa Anderson</p>
                  <p className="text-sm text-gray-600">South Tulsa Parent</p>
                </div>
            </div>
            </div>
          </div>
          </div>
        </section>

      {/* Contact Information */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Work Together in South Tulsa?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you need corporate housing, mental health services, or business consulting 
              in South Tulsa, I'm here to help you succeed. Let's discuss how we can work 
              together to achieve your goals in our thriving southside community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/businesses" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-purple-500/30">
              <p className="text-purple-200 mb-4">Service Areas in South Tulsa</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-purple-500/20 text-purple-100 px-4 py-2 rounded-full text-sm">
                  Woodland Hills
                </span>
                <span className="bg-purple-500/20 text-purple-100 px-4 py-2 rounded-full text-sm">
                  Bixby Area
                </span>
                <span className="bg-purple-500/20 text-purple-100 px-4 py-2 rounded-full text-sm">
                  Jenks Area
                </span>
                <span className="bg-purple-500/20 text-purple-100 px-4 py-2 rounded-full text-sm">
                  Glenpool
                </span>
              </div>
            </div>
          </div>
          </div>
        </section>
    </>
  )
}