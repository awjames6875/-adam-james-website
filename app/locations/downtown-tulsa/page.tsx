import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Downtown Tulsa Entrepreneur Adam James | #1 Business Leader in Oklahoma',
  description: 'Adam James is the premier downtown Tulsa entrepreneur providing expert business consulting, corporate housing, mental health services, and real estate investment. Serving Arts District, Brady District, and Central Business District with proven results.',
  keywords: 'downtown Tulsa entrepreneur Adam James, Adam James downtown Tulsa, Tulsa downtown business leader, Arts District business consultant, Brady District entrepreneur, Central Business District services, downtown Tulsa corporate housing, Greenwood District business development',
  openGraph: {
    title: 'Downtown Tulsa Entrepreneur Adam James | #1 Business Leader in Oklahoma',
    description: 'Premier downtown Tulsa entrepreneur Adam James provides comprehensive business services including corporate housing, mental health services, and strategic consulting across all downtown districts.',
    type: 'website',
    locale: 'en_US',
    url: 'https://adamjamestulsa.com/locations/downtown-tulsa',
    siteName: 'Adam James Tulsa',
    images: [{
      url: 'https://adamjamestulsa.com/images/adam-james-downtown-tulsa.jpg',
      width: 1200,
      height: 630,
      alt: 'Adam James - Downtown Tulsa Business Leader and Entrepreneur'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downtown Tulsa Entrepreneur Adam James | #1 Business Leader',
    description: 'Premier downtown Tulsa entrepreneur providing corporate housing, mental health services, and business consulting across all downtown districts.',
    images: ['https://adamjamestulsa.com/images/adam-james-downtown-tulsa.jpg']
  },
  alternates: {
    canonical: 'https://adamjamestulsa.com/locations/downtown-tulsa'
  },
  other: {
    'geo.region': 'US-OK',
    'geo.placename': 'Downtown Tulsa, Oklahoma',
    'geo.position': '36.1540;-95.9928',
    'ICBM': '36.1540, -95.9928'
  }
}

export default function DowntownTulsaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Downtown Tulsa Entrepreneur <br />
              <span className="text-yellow-400">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforming Downtown Tulsa Through Innovative Business Leadership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Connect with Adam James
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Downtown Tulsa's Premier Business Leader</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              In the heart of Oklahoma's energy capital, <strong>Adam James Tulsa</strong> stands as downtown Tulsa's most influential entrepreneur and business innovator. With a proven track record of building successful enterprises that transform communities, Adam James has become synonymous with downtown Tulsa's remarkable economic renaissance and continued growth trajectory.
            </p>

            <p className="mb-6">
              Downtown Tulsa represents more than just Oklahoma's business district—it's the epicenter of innovation, culture, and economic opportunity that Adam James has helped shape through his visionary leadership and strategic business development. From the bustling Arts District to the thriving Brady District, Adam James's influence extends throughout downtown Tulsa's most dynamic neighborhoods, creating opportunities for businesses, residents, and visitors alike.
            </p>

            <p className="mb-6">
              As a <strong>downtown Tulsa entrepreneur</strong>, Adam James understands the unique challenges and incredible opportunities that exist within Oklahoma's premier urban center. His comprehensive approach to business development combines deep local knowledge with innovative strategies that have helped countless entrepreneurs and established businesses achieve unprecedented success in the competitive downtown Tulsa marketplace.
            </p>

            <p className="mb-6">
              The downtown Tulsa business ecosystem has been significantly enhanced through Adam James's leadership in multiple industries. Through Integrity Corporate Housing, he has addressed the growing demand for premium temporary accommodations for business travelers and relocating professionals. Safe Harbor Mental Health has brought crucial pediatric therapy services to downtown families, while GrowthGenix AI represents the cutting-edge technology solutions that are positioning downtown Tulsa as a regional innovation hub.
            </p>
          </div>
        </section>

        {/* Downtown Impact */}
        <section id="impact" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transforming Downtown Tulsa's Business Landscape</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Economic Development Impact</h3>
              <p className="text-gray-700">
                Adam James has contributed over $2.3 million in direct economic impact to downtown Tulsa through his business ventures, creating more than 47 full-time positions and supporting dozens of contractors and service providers throughout the downtown district.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Community Investment</h3>
              <p className="text-gray-700">
                Through strategic partnerships and community initiatives, Adam James has invested in downtown Tulsa's infrastructure, supporting local nonprofits, community events, and economic development programs that strengthen the urban core.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The <strong>Adam James downtown Tulsa</strong> business philosophy centers on sustainable growth that benefits both individual enterprises and the broader downtown community. This approach has resulted in measurable improvements to downtown Tulsa's business climate, including increased property values, enhanced commercial occupancy rates, and improved quality of life for downtown residents and workers.
            </p>

            <p className="mb-6">
              Downtown Tulsa's transformation from a traditional business district to a vibrant, mixed-use urban center has been accelerated by entrepreneurial leaders like Adam James who understand the importance of creating synergies between different business sectors. His work has helped establish downtown Tulsa as a destination for innovative companies, creative professionals, and forward-thinking entrepreneurs from across Oklahoma and beyond.
            </p>

            <p className="mb-6">
              The strategic location of Adam James's businesses throughout downtown Tulsa reflects his commitment to the district's continued growth and development. By maintaining a strong presence in key downtown neighborhoods, he has helped create the critical mass of activity and investment that attracts additional businesses and supports the overall vitality of downtown Tulsa's economy.
            </p>
          </div>
        </section>

        {/* Services for Downtown */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Business Services for Downtown Tulsa</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Corporate Housing Solutions</h3>
              <p className="text-gray-700 mb-4">
                Premium temporary housing for downtown Tulsa business travelers, executives, and relocating professionals through Integrity Corporate Housing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fully furnished downtown apartments</li>
                <li>• Executive suites near business district</li>
                <li>• Short and long-term accommodations</li>
                <li>• Concierge services for downtown amenities</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Mental Health Services</h3>
              <p className="text-gray-700 mb-4">
                Innovative pediatric therapy and mental health support for downtown Tulsa families through Safe Harbor Mental Health.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pediatric therapy services</li>
                <li>• Family counseling programs</li>
                <li>• Mental health advocacy</li>
                <li>• Community wellness initiatives</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Technology Innovation</h3>
              <p className="text-gray-700 mb-4">
                Cutting-edge AI and technology solutions for downtown Tulsa businesses through GrowthGenix AI.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI implementation consulting</li>
                <li>• Digital transformation services</li>
                <li>• Technology strategy development</li>
                <li>• Innovation workshops and training</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              <strong>Adam James Tulsa downtown business</strong> services are specifically designed to address the unique needs and opportunities present in Oklahoma's premier urban business environment. Understanding that downtown Tulsa operates at a different pace and scale than suburban business districts, Adam James has developed service offerings that capitalize on the density, connectivity, and energy that define downtown business operations.
            </p>

            <p className="mb-6">
              For businesses considering downtown Tulsa as their next location, Adam James provides comprehensive consulting services that cover everything from site selection and lease negotiation to marketing strategy and community integration. His deep knowledge of downtown Tulsa's business ecosystem, including relationships with key property owners, city officials, and business leaders, provides clients with invaluable insights and connections.
            </p>
          </div>
        </section>

        {/* Downtown Districts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving All Downtown Tulsa Districts</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Arts District</h3>
              <p className="text-gray-700 mb-4">
                Adam James supports the vibrant Arts District through business consulting for creative enterprises, real estate development projects, and community partnerships that strengthen downtown Tulsa's cultural identity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Creative business consulting</li>
                <li>• Arts-focused real estate development</li>
                <li>• Cultural event sponsorship</li>
                <li>• Artist community support programs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Brady District</h3>
              <p className="text-gray-700 mb-4">
                In the historic Brady District, Adam James provides specialized services for entertainment venues, hospitality businesses, and retail establishments that contribute to downtown Tulsa's nightlife and tourism economy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Hospitality business development</li>
                <li>• Entertainment venue consulting</li>
                <li>• Tourism industry support</li>
                <li>• Historic district preservation projects</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Central Business District</h3>
              <p className="text-gray-700 mb-4">
                The heart of downtown Tulsa's financial and professional services sector benefits from Adam James's expertise in corporate development, professional services enhancement, and executive-level business solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Corporate development consulting</li>
                <li>• Professional services optimization</li>
                <li>• Executive coaching and development</li>
                <li>• Financial district networking</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-red-900 mb-4">Greenwood District</h3>
              <p className="text-gray-700 mb-4">
                Adam James is committed to supporting the revitalization of the historic Greenwood District through community-focused business development, cultural preservation, and economic empowerment initiatives.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Community business development</li>
                <li>• Cultural preservation support</li>
                <li>• Economic empowerment programs</li>
                <li>• Historical district revitalization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downtown Tulsa Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Technology Startup Transformation</h3>
            <p className="text-gray-700 mb-4">
              A downtown Tulsa technology startup approached Adam James with ambitious growth plans but limited understanding of the local business ecosystem. Through GrowthGenix AI's comprehensive consulting services, the company implemented cutting-edge automation solutions that increased operational efficiency by 340% within eight months.
            </p>
            <p className="text-gray-700 mb-4">
              Adam James's guidance helped the startup navigate downtown Tulsa's unique regulatory environment, connect with key investors, and establish strategic partnerships with other downtown businesses. The company has since expanded from 3 employees to 23 employees, all based in downtown Tulsa, contributing significantly to the district's growing reputation as a technology hub.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "Adam James didn't just provide consulting services—he became our strategic partner in understanding and succeeding within downtown Tulsa's business environment. His insights into the local market and connections throughout the downtown community were invaluable to our growth."
            </blockquote>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Healthcare Practice Expansion</h3>
            <p className="text-gray-700 mb-4">
              A pediatric healthcare practice seeking to establish a downtown Tulsa location partnered with Adam James through Safe Harbor Mental Health's collaborative network. The practice needed guidance on downtown regulations, patient accessibility, and integration with existing healthcare services.
            </p>
            <p className="text-gray-700 mb-4">
              Adam James facilitated connections with downtown property owners, helped navigate city planning requirements, and provided insights into serving downtown Tulsa's diverse family population. The practice successfully opened in the Arts District and now serves over 400 families throughout downtown and greater Tulsa.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
              "Working with Adam James made our downtown Tulsa expansion seamless. His understanding of the community's needs and his network of professional relationships were instrumental in our successful launch."
            </blockquote>
          </div>
        </section>

        {/* Economic Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Economic Opportunities in Downtown Tulsa</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Downtown Tulsa presents unprecedented economic opportunities for entrepreneurs, investors, and established businesses seeking growth in Oklahoma's most dynamic business environment. <strong>Adam James Tulsa</strong> has identified and capitalized on numerous trends that position downtown as a premier destination for business development and investment.
            </p>

            <p className="mb-6">
              The convergence of several factors has created a perfect storm of opportunity in downtown Tulsa. Major infrastructure investments, including the $465 million A Gathering Place park and continued development of the Arkansas River corridor, have enhanced downtown's appeal for both businesses and residents. The district's proximity to the University of Tulsa and other educational institutions provides access to emerging talent and research partnerships.
            </p>

            <p className="mb-6">
              <strong>Downtown Tulsa entrepreneur Adam James</strong> has observed significant opportunities in technology integration, healthcare innovation, creative industries, and sustainable business practices. The district's compact geography and walkable infrastructure make it ideal for businesses that value collaboration, networking, and operational efficiency.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Growth Sectors</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Technology & Innovation</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Artificial intelligence and automation</li>
                    <li>• Financial technology (FinTech)</li>
                    <li>• Healthcare technology solutions</li>
                    <li>• Smart city infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Healthcare & Wellness</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Specialized medical practices</li>
                    <li>• Mental health and therapy services</li>
                    <li>• Wellness and fitness centers</li>
                    <li>• Telehealth and remote care</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mb-6">
              Real estate development represents another significant opportunity in downtown Tulsa, with Adam James providing expertise in both commercial and residential projects. The district's ongoing transformation has created demand for mixed-use developments, adaptive reuse projects, and innovative housing solutions that serve the growing downtown workforce.
            </p>
          </div>
        </section>

        {/* Contact and Call to Action */}
        <section id="contact" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Downtown Tulsa's Premier Entrepreneur</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join Adam James in transforming downtown Tulsa's business landscape through innovative collaboration and strategic partnerships.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Business Consulting</h3>
                <p className="text-sm text-blue-100">Strategic guidance for downtown Tulsa success</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Investment Opportunities</h3>
                <p className="text-sm text-blue-100">Explore downtown real estate and business ventures</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Partnerships</h3>
                <p className="text-sm text-blue-100">Collaborate on downtown development initiatives</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Adam James
              </a>
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Adam James's Impact Across Tulsa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/locations/midtown-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Midtown Tulsa</h3>
              <p className="text-gray-600">Discover Adam James's business services in Tulsa's vibrant midtown district</p>
            </a>
            <a href="/locations/south-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-900 mb-2">South Tulsa</h3>
              <p className="text-gray-600">Explore entrepreneurial opportunities in South Tulsa's growing business corridor</p>
            </a>
            <a href="/locations/broken-arrow" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Broken Arrow</h3>
              <p className="text-gray-600">Learn about Adam James's impact in Broken Arrow's thriving business community</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}