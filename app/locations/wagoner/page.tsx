import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wagoner Business Owner Adam James | Oklahoma Development',
  description: 'Explore Adam James\' impact in Wagoner through business development, investment consulting, and community-focused entrepreneurship in Oklahoma.',
  keywords: 'Wagoner business owner Adam James, Adam James Wagoner, business development Wagoner',
  openGraph: {
    title: 'Wagoner Business Owner Adam James | Oklahoma Development',
    description: 'Explore Adam James\' impact in Wagoner through business development, investment consulting, and community-focused entrepreneurship in Oklahoma.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function WagonerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wagoner Business Excellence <br />
              <span className="text-amber-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100">
              Strategic Development in Oklahoma's Historic River Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-amber-400 hover:bg-amber-500 text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors">Connect with Adam James</a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Wagoner's Strategic Business Leader</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6"><strong>Wagoner business owner Adam James</strong> has established himself as a key partner in one of Oklahoma's most historically significant and strategically positioned communities. As the county seat of Wagoner County and a community with deep roots in agriculture and transportation, Wagoner offers unique opportunities for businesses that understand how to serve both traditional industries and emerging market segments.</p>
            <p className="mb-6">Wagoner's location along the Arkansas River and its role as a regional center create distinctive advantages for businesses seeking to serve both local and regional markets. <strong>Adam James Wagoner</strong> operations are designed to leverage these geographic and economic benefits while building the community relationships essential for long-term success in this established market.</p>
            <p className="mb-6">The community character of Wagoner, characterized by strong family values, agricultural heritage, and civic engagement, creates favorable conditions for businesses that can demonstrate their commitment to community benefit and traditional values. Adam James's approach to business development reflects these characteristics while providing modern business solutions.</p>
            <p className="mb-6">Through his comprehensive business services, Adam James provides Wagoner businesses with access to strategic consulting, corporate housing, and technology solutions that help them compete effectively while maintaining their community focus and traditional industry connections.</p>
            <p className="mb-6"><strong>Business development Wagoner</strong> strategies implemented by Adam James emphasize sustainable growth that honors the community's heritage while creating new opportunities for economic development and business expansion.</p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Heritage-Focused Business Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Traditional Industry Support</h3>
              <p className="text-gray-700 mb-4">Business consulting services designed for Wagoner's traditional industries including agriculture, transportation, and regional commerce.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Agricultural business development</li>
                <li>• Transportation industry consulting</li>
                <li>• Regional commerce strategies</li>
                <li>• Traditional industry modernization</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Community-Centered Services</h3>
              <p className="text-gray-700 mb-4">Family and community support services that serve Wagoner's heritage-focused population through Safe Harbor Mental Health's traditional values approach.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family business consulting</li>
                <li>• Community mental health services</li>
                <li>• Generational business planning</li>
                <li>• Rural family support programs</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Modern Technology Integration</h3>
              <p className="text-gray-700 mb-4">Technology solutions that help traditional Wagoner businesses enhance efficiency while maintaining their community focus through GrowthGenix AI.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Agricultural technology consulting</li>
                <li>• Traditional business modernization</li>
                <li>• Rural connectivity solutions</li>
                <li>• Heritage business technology</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-amber-900 to-orange-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Wagoner's Heritage Business Expert</h2>
            <p className="text-xl mb-8 text-amber-100">Discover how Adam James can help your business honor Wagoner's heritage while building for the future.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-amber-400 hover:bg-amber-500 text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors">Schedule Consultation</a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors">Call Adam James</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}