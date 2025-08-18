import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'West Tulsa Business Owner Adam James | Professional Services',
  description: 'Explore Adam James\' impact in west Tulsa through innovative business solutions, corporate housing services, and entrepreneurial leadership in Oklahoma.',
  keywords: 'west Tulsa business owner Adam James, Adam James west Tulsa, professional services Tulsa',
  openGraph: {
    title: 'West Tulsa Business Owner Adam James | Professional Services',
    description: 'Explore Adam James\' impact in west Tulsa through innovative business solutions, corporate housing services, and entrepreneurial leadership in Oklahoma.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function WestTulsaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              West Tulsa Professional Excellence <br />
              <span className="text-yellow-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Building Sustainable Success in West Tulsa's Growing Business Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Connect with Adam James
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg font-semibold transition-colors">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: West Tulsa's Professional Services Leader</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              <strong>West Tulsa business owner Adam James</strong> has established a strong presence in one of Tulsa's most industrious and community-oriented districts, where blue-collar work ethic meets emerging professional opportunities. His approach to business development in west Tulsa reflects deep respect for the area's working-class heritage while building bridges to new economic opportunities that serve both established residents and growing businesses.
            </p>

            <p className="mb-6">
              West Tulsa's strategic location along the Arkansas River and its proximity to major industrial facilities create unique opportunities for businesses that understand how to serve both traditional industries and emerging sectors. <strong>Adam James west Tulsa</strong> operations are specifically designed to bridge these different economic environments while maintaining the community focus that defines the area.
            </p>

            <p className="mb-6">
              The demographic profile of west Tulsa, characterized by strong family values, community loyalty, and practical approaches to problem-solving, has shaped Adam James's service delivery model. His businesses prioritize reliability, value, and personal relationships—qualities that resonate strongly with west Tulsa residents and business owners.
            </p>

            <p className="mb-6">
              Through Integrity Corporate Housing, Adam James provides practical, affordable temporary housing solutions for workers, contractors, and professionals working in west Tulsa's industrial and commercial sectors. These accommodations are designed to meet the needs of people who value functionality and convenience over luxury amenities.
            </p>

            <p className="mb-6">
              <strong>Professional services Tulsa</strong> offerings in west Tulsa through Adam James's various enterprises focus on practical solutions that help local businesses improve their operations, access new markets, and navigate regulatory requirements while maintaining their core values and community connections.
            </p>
          </div>
        </section>

        {/* West Tulsa Strengths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leveraging West Tulsa's Industrial Heritage</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Industrial Infrastructure</h3>
              <p className="text-gray-700">
                West Tulsa's well-developed industrial infrastructure and transportation access create opportunities for logistics, manufacturing support, and industrial services that Adam James helps businesses identify and develop.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Community Stability</h3>
              <p className="text-gray-700">
                The strong sense of community and neighborhood stability in west Tulsa provides an excellent foundation for businesses that value long-term relationships and consistent, reliable service delivery.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The <strong>west Tulsa business owner Adam James</strong> approach recognizes that success in this market requires understanding and respecting the practical, no-nonsense culture that characterizes the area. His services are designed to deliver real value without unnecessary complexity or premium pricing that doesn't align with local expectations.
            </p>

            <p className="mb-6">
              West Tulsa's location provides excellent access to both downtown Tulsa's business district and the broader Oklahoma market, making it an ideal base for businesses that need to serve diverse customer bases. Adam James helps entrepreneurs and established businesses capitalize on these geographic advantages while maintaining their west Tulsa community connections.
            </p>
          </div>
        </section>

        {/* Services for West Tulsa */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Services for West Tulsa Businesses</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Industrial Housing Solutions</h3>
              <p className="text-gray-700 mb-4">
                Practical, affordable temporary housing for industrial workers, contractors, and professionals through Integrity Corporate Housing's west Tulsa accommodations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Worker accommodation programs</li>
                <li>• Contractor housing solutions</li>
                <li>• Extended stay options</li>
                <li>• Group housing arrangements</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Family Mental Health</h3>
              <p className="text-gray-700 mb-4">
                Accessible mental health and family counseling services that serve west Tulsa families through Safe Harbor Mental Health's community-focused programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family therapy services</li>
                <li>• Pediatric mental health support</li>
                <li>• Community counseling programs</li>
                <li>• Crisis intervention services</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Business Optimization</h3>
              <p className="text-gray-700 mb-4">
                Practical technology and business consulting services that help west Tulsa businesses improve efficiency and expand opportunities through GrowthGenix AI.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Operations improvement consulting</li>
                <li>• Technology implementation</li>
                <li>• Market expansion strategies</li>
                <li>• Regulatory compliance assistance</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              <strong>Adam James west Tulsa</strong> service delivery emphasizes practical solutions that provide measurable benefits without requiring significant changes to established business practices. This approach has proven highly effective in building trust and long-term relationships with west Tulsa business owners who value proven results over theoretical innovations.
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">West Tulsa Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-amber-900 mb-4">Manufacturing Support Services Expansion</h3>
            <p className="text-gray-700 mb-4">
              A west Tulsa manufacturing support company that provides maintenance and repair services to industrial facilities approached Adam James for help expanding their capacity and improving their operational efficiency. The family-owned business had steady contracts but wanted to grow without compromising their reputation for reliable service.
            </p>
            <p className="text-gray-700 mb-4">
              Adam James worked with the company to implement inventory management systems, develop preventive maintenance scheduling software, and create employee training programs that improved both efficiency and service quality. Integrity Corporate Housing provided temporary accommodations for skilled contractors brought in for major projects.
            </p>
            <p className="text-gray-700 mb-4">
              The company increased its capacity by 75% over 18 months while maintaining their high standards for service quality. They now employ 31 people and have expanded their service area throughout Oklahoma while maintaining their west Tulsa headquarters and community focus.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-600">
              "Adam James understood our business and our community. His solutions were practical, affordable, and designed to help us grow without losing what made us successful in the first place."
            </blockquote>
          </div>
        </section>

        {/* Contact and Call to Action */}
        <section id="contact" className="bg-gradient-to-r from-amber-900 to-orange-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with West Tulsa's Trusted Business Leader</h2>
            <p className="text-xl mb-8 text-amber-100">
              Discover practical business solutions that help your west Tulsa enterprise achieve sustainable growth and success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Practical Consulting</h3>
                <p className="text-sm text-amber-100">No-nonsense business solutions for real results</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
                <p className="text-sm text-amber-100">Services designed for west Tulsa businesses</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-amber-100">Track record of successful west Tulsa partnerships</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-yellow-400 hover:bg-yellow-500 text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Adam James
              </a>
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Adam James's Impact Across Tulsa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/locations/sand-springs" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Sand Springs</h3>
              <p className="text-gray-600">Discover Adam James's business services in nearby Sand Springs</p>
            </a>
            <a href="/locations/sapulpa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Sapulpa</h3>
              <p className="text-gray-600">Learn about opportunities in growing Sapulpa</p>
            </a>
            <a href="/locations/downtown-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Downtown Tulsa</h3>
              <p className="text-gray-600">Explore Adam James's downtown business leadership</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}