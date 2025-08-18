import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'East Tulsa Entrepreneur Adam James | Oklahoma Business',
  description: 'Adam James brings business expertise to east Tulsa with consulting services, real estate solutions, and community-focused entrepreneurship throughout Oklahoma.',
  keywords: 'east Tulsa entrepreneur Adam James, Adam James east Tulsa, business consulting east Tulsa',
  openGraph: {
    title: 'East Tulsa Entrepreneur Adam James | Oklahoma Business',
    description: 'Adam James brings business expertise to east Tulsa with consulting services, real estate solutions, and community-focused entrepreneurship throughout Oklahoma.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function EastTulsaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              East Tulsa Business Innovation <br />
              <span className="text-cyan-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Fostering Growth and Opportunity in East Tulsa's Diverse Communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-cyan-400 hover:bg-cyan-500 text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Connect with Adam James
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: East Tulsa's Entrepreneurial Catalyst</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              <strong>East Tulsa entrepreneur Adam James</strong> has recognized the untapped potential and emerging opportunities within one of Tulsa's most diverse and rapidly evolving districts. As a visionary business leader committed to inclusive growth, Adam James has developed innovative strategies that serve east Tulsa's multicultural communities while building sustainable enterprises that contribute to the area's economic development.
            </p>

            <p className="mb-6">
              East Tulsa represents a unique blend of established neighborhoods, emerging business corridors, and diverse cultural communities that create both challenges and opportunities for entrepreneurs. <strong>Adam James east Tulsa</strong> initiatives are specifically designed to bridge gaps, build connections, and create value across this varied landscape.
            </p>

            <p className="mb-6">
              The demographic diversity of east Tulsa, including significant Hispanic, Native American, and immigrant populations, requires business approaches that are culturally sensitive and community-focused. Adam James has developed specialized services and partnerships that serve these communities while building bridges between different cultural and economic groups.
            </p>

            <p className="mb-6">
              Through Safe Harbor Mental Health, Adam James provides culturally competent pediatric therapy and family mental health services that serve east Tulsa's diverse population. These services are delivered with attention to language needs, cultural preferences, and community-specific challenges that affect mental health and family wellbeing.
            </p>

            <p className="mb-6">
              <strong>Business consulting east Tulsa</strong> services provided by Adam James focus on helping local entrepreneurs navigate regulatory requirements, access capital, develop marketing strategies, and build sustainable business models that serve their communities while achieving financial success.
            </p>
          </div>
        </section>

        {/* East Tulsa Focus Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving East Tulsa's Diverse Business Landscape</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">Multicultural Business Development</h3>
              <p className="text-gray-700">
                Adam James specializes in supporting minority-owned businesses and immigrant entrepreneurs who are building enterprises that serve east Tulsa's diverse communities while contributing to the broader Oklahoma economy.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">Community-Centered Services</h3>
              <p className="text-gray-700">
                Understanding that east Tulsa's strength lies in its community connections, Adam James develops business solutions that strengthen neighborhood ties while creating economic opportunities for residents.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The <strong>east Tulsa entrepreneur Adam James</strong> approach recognizes that successful business development in this area requires understanding and respecting the cultural diversity that defines the community. His services are designed to be accessible, culturally appropriate, and focused on building long-term relationships rather than short-term transactions.
            </p>

            <p className="mb-6">
              East Tulsa's location along major transportation corridors and its proximity to industrial areas create unique opportunities for logistics, manufacturing support, and business services that Adam James helps entrepreneurs identify and capitalize upon. His consulting work includes market analysis, site selection, and operational planning that takes advantage of these geographic benefits.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Services for East Tulsa</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">Multicultural Mental Health</h3>
              <p className="text-gray-700 mb-4">
                Culturally competent pediatric therapy and family mental health services that serve east Tulsa's diverse population through Safe Harbor Mental Health's specialized programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bilingual therapy services</li>
                <li>• Culturally sensitive counseling</li>
                <li>• Community-based mental health advocacy</li>
                <li>• Family support programs</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">Small Business Development</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive consulting and support services designed specifically for east Tulsa's diverse entrepreneurial community, including minority-owned and immigrant-led businesses.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multicultural business consulting</li>
                <li>• Access to capital resources</li>
                <li>• Regulatory compliance assistance</li>
                <li>• Marketing and customer development</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Technology Integration</h3>
              <p className="text-gray-700 mb-4">
                Technology education and implementation services that help east Tulsa businesses leverage digital tools to expand their reach and improve their operations through GrowthGenix AI.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital literacy training</li>
                <li>• E-commerce development</li>
                <li>• Bilingual website creation</li>
                <li>• Social media marketing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">East Tulsa Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-teal-900 mb-4">Hispanic Family Business Expansion</h3>
            <p className="text-gray-700 mb-4">
              A family-owned restaurant serving authentic Mexican cuisine in east Tulsa approached Adam James for help expanding their business while maintaining their cultural authenticity and community connections. The family had operated successfully for five years but wanted to reach broader markets without losing their neighborhood focus.
            </p>
            <p className="text-gray-700 mb-4">
              Adam James worked with the family to develop a comprehensive growth strategy that included catering services, food truck operations, and expanded hours while preserving their community-centered approach. GrowthGenix AI helped implement point-of-sale systems, inventory management, and multilingual marketing materials.
            </p>
            <p className="text-gray-700 mb-4">
              The business increased revenue by 180% over two years while expanding employment from 7 to 19 people, most hired from the local community. They now operate two food trucks and provide catering services throughout Tulsa while maintaining their east Tulsa restaurant as their community anchor.
            </p>
            <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-600">
              "Adam James understood that our success wasn't just about making money—it was about serving our community and preserving our culture. He helped us grow while staying true to who we are."
            </blockquote>
          </div>
        </section>

        {/* Contact and Call to Action */}
        <section id="contact" className="bg-gradient-to-r from-teal-900 to-cyan-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with East Tulsa's Business Champion</h2>
            <p className="text-xl mb-8 text-teal-100">
              Discover how Adam James can help your business thrive while strengthening east Tulsa's diverse communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Multicultural Consulting</h3>
                <p className="text-sm text-teal-100">Culturally sensitive business development services</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Development</h3>
                <p className="text-sm text-teal-100">Collaborative initiatives for neighborhood growth</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Technology Solutions</h3>
                <p className="text-sm text-teal-100">Digital tools for business expansion</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-cyan-400 hover:bg-cyan-500 text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Adam James
              </a>
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Adam James's Impact Across Tulsa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/locations/north-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-red-900 mb-2">North Tulsa</h3>
              <p className="text-gray-600">Learn about Adam James's community development work in north Tulsa</p>
            </a>
            <a href="/locations/west-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">West Tulsa</h3>
              <p className="text-gray-600">Discover business opportunities in west Tulsa</p>
            </a>
            <a href="/locations/catoosa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Catoosa</h3>
              <p className="text-gray-600">Explore Adam James's business services in nearby Catoosa</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}