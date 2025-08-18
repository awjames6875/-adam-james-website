import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Broken Arrow Entrepreneur Adam James | Oklahoma Business',
  description: 'Adam James serves Broken Arrow with expert business consulting, real estate investment, and community development services throughout greater Tulsa Oklahoma.',
  keywords: 'Broken Arrow entrepreneur Adam James, Adam James Broken Arrow, business services Broken Arrow',
  openGraph: {
    title: 'Broken Arrow Entrepreneur Adam James | Oklahoma Business',
    description: 'Adam James serves Broken Arrow with expert business consulting, real estate investment, and community development services throughout greater Tulsa Oklahoma.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function BrokenArrowPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Broken Arrow Business Excellence <br />
              <span className="text-emerald-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Driving Innovation and Growth in Oklahoma's Premier Family City
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-emerald-400 hover:bg-emerald-500 text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Connect with Adam James
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Broken Arrow's Premier Business Leader</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              <strong>Broken Arrow entrepreneur Adam James</strong> has recognized and capitalized on the exceptional opportunities present in Oklahoma's fastest-growing and most family-oriented city. As the largest suburb in the Tulsa metropolitan area, Broken Arrow combines small-town values with metropolitan amenities, creating an ideal environment for innovative businesses and entrepreneurial ventures that serve both local residents and the broader Oklahoma market.
            </p>

            <p className="mb-6">
              Broken Arrow's reputation as one of America's best places to live and raise a family has attracted a diverse population of educated professionals, successful families, and forward-thinking entrepreneurs who value quality of life alongside economic opportunity. <strong>Adam James Broken Arrow</strong> operations are specifically designed to serve this sophisticated market while contributing to the community's continued growth and prosperity.
            </p>

            <p className="mb-6">
              The city's strategic location in the heart of the Tulsa metropolitan area, combined with excellent schools, modern infrastructure, and strong municipal leadership, has created an environment where businesses can thrive while maintaining the community connections that define Broken Arrow's character. Adam James has positioned his enterprises to take advantage of these strengths while supporting the values that make Broken Arrow special.
            </p>

            <p className="mb-6">
              Through Integrity Corporate Housing, Adam James provides premium temporary accommodations for the executives, consultants, and relocating professionals who are drawn to Broken Arrow's business opportunities. These services support both the companies expanding into the area and the families making Broken Arrow their new home.
            </p>

            <p className="mb-6">
              <strong>Business services Broken Arrow</strong> delivered through Adam James's comprehensive business portfolio address the full spectrum of needs present in this dynamic market, from Safe Harbor Mental Health's family-focused therapy services to GrowthGenix AI's cutting-edge technology solutions that help local businesses compete in national and international markets.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leveraging Broken Arrow's Competitive Advantages</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Educational Excellence</h3>
              <p className="text-gray-700">
                Broken Arrow's top-rated school system and proximity to universities create a highly educated workforce and attract families who prioritize education, creating demand for premium services and innovative businesses.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Strategic Location</h3>
              <p className="text-gray-700">
                Excellent highway access and proximity to Tulsa International Airport position Broken Arrow businesses for efficient operations and market reach throughout Oklahoma and beyond.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The <strong>Broken Arrow entrepreneur Adam James</strong> approach to business development recognizes that success in this market requires understanding and serving the sophisticated expectations of residents who have chosen Broken Arrow for its quality of life advantages. This market rewards businesses that can deliver excellence while maintaining the community focus that defines the Broken Arrow experience.
            </p>

            <p className="mb-6">
              Broken Arrow's rapid growth and economic diversification have created opportunities across multiple sectors, from professional services and healthcare to technology and retail. Adam James's businesses are positioned at the intersection of these trends, providing services that support both business development and the quality of life factors that continue to attract new residents and businesses to the area.
            </p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Services for Broken Arrow</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Premium Corporate Housing</h3>
              <p className="text-gray-700 mb-4">
                Executive-quality temporary accommodations that meet the high standards expected by professionals relocating to or working in Broken Arrow through Integrity Corporate Housing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Executive relocation services</li>
                <li>• Premium furnished accommodations</li>
                <li>• Family-friendly housing options</li>
                <li>• Extended stay corporate suites</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Family Mental Health Excellence</h3>
              <p className="text-gray-700 mb-4">
                Advanced pediatric therapy and family mental health services designed for Broken Arrow's health-conscious families through Safe Harbor Mental Health.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pediatric therapy specialization</li>
                <li>• Family counseling programs</li>
                <li>• Educational support services</li>
                <li>• Community wellness initiatives</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">Technology Leadership</h3>
              <p className="text-gray-700 mb-4">
                Cutting-edge AI and business technology solutions that help Broken Arrow businesses compete nationally while maintaining their community focus through GrowthGenix AI.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI strategy development</li>
                <li>• Digital transformation consulting</li>
                <li>• Innovation workshops</li>
                <li>• Technology implementation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Broken Arrow Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Healthcare Practice Network Expansion</h3>
            <p className="text-gray-700 mb-4">
              A multi-specialty healthcare practice with a strong reputation in Broken Arrow approached Adam James for assistance expanding their services to serve the city's growing population while maintaining their commitment to personalized care and community involvement.
            </p>
            <p className="text-gray-700 mb-4">
              The expansion required sophisticated technology integration, staff training, and facility development. Adam James coordinated services across his business portfolio, providing technology consulting through GrowthGenix AI, temporary housing for relocating specialists through Integrity Corporate Housing, and mental health integration through Safe Harbor Mental Health partnerships.
            </p>
            <p className="text-gray-700 mb-4">
              The practice successfully opened two new locations, expanded their service offerings to include specialized pediatric care, and increased their capacity by 140% while maintaining patient satisfaction scores above 95%. They now serve over 2,400 families throughout Broken Arrow and surrounding communities.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600">
              "Adam James understood that our success in Broken Arrow depended on maintaining our community focus while implementing the technology and systems needed to serve more families. His integrated approach made our expansion seamless and successful."
            </blockquote>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Broken Arrow's Business Excellence Leader</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Discover how Adam James can help your business achieve success while contributing to Broken Arrow's continued growth and prosperity.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Premium Consulting</h3>
                <p className="text-sm text-emerald-100">Strategic business development for Broken Arrow success</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Technology Innovation</h3>
                <p className="text-sm text-emerald-100">Advanced solutions for competitive advantage</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Partnership</h3>
                <p className="text-sm text-emerald-100">Collaborative growth initiatives</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-emerald-400 hover:bg-emerald-500 text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Adam James
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Adam James's Impact Across Oklahoma</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/locations/bixby" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Bixby</h3>
              <p className="text-gray-600">Discover Adam James's business services in rapidly growing Bixby</p>
            </a>
            <a href="/locations/owasso" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Owasso</h3>
              <p className="text-gray-600">Learn about opportunities in thriving Owasso</p>
            </a>
            <a href="/locations/south-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-900 mb-2">South Tulsa</h3>
              <p className="text-gray-600">Explore premium business services in south Tulsa</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}