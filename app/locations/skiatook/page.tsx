import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skiatook Entrepreneur Adam James | Oklahoma Consulting',
  description: 'Adam James brings business expertise to Skiatook with consulting services, investment strategies, and community development throughout Oklahoma.',
  keywords: 'Skiatook entrepreneur Adam James, Adam James Skiatook, business consulting Skiatook',
  openGraph: {
    title: 'Skiatook Entrepreneur Adam James | Oklahoma Consulting',
    description: 'Adam James brings business expertise to Skiatook with consulting services, investment strategies, and community development throughout Oklahoma.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function SkiatookPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Skiatook Business Innovation <br />
              <span className="text-purple-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Fostering Growth in Oklahoma's Lake Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-purple-400 hover:bg-purple-500 text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">Connect with Adam James</a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Skiatook's Business Development Partner</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6"><strong>Skiatook entrepreneur Adam James</strong> has recognized the unique opportunities and community advantages present in one of Oklahoma's most scenic and family-friendly communities. Located near Skiatook Lake and characterized by strong community bonds and outdoor recreation opportunities, Skiatook offers distinctive advantages for businesses that understand how to serve both local residents and the broader regional market.</p>
            <p className="mb-6">Skiatook's combination of natural beauty, community spirit, and strategic location creates opportunities for businesses in recreation, hospitality, and services that serve both permanent residents and seasonal visitors. <strong>Adam James Skiatook</strong> operations are designed to help businesses capitalize on these unique market characteristics while building the community relationships essential for success.</p>
            <p className="mb-6">The community character of Skiatook, emphasized by family values, outdoor lifestyle, and civic engagement, creates favorable conditions for businesses that can demonstrate their commitment to community benefit and quality of life enhancement. Adam James's approach to business development reflects these values while providing sophisticated business solutions.</p>
            <p className="mb-6">Through his comprehensive business services, Adam James provides Skiatook businesses with access to consulting, technology solutions, and support services that help them compete effectively while maintaining their community focus and outdoor lifestyle advantages.</p>
            <p className="mb-6"><strong>Business consulting Skiatook</strong> services delivered by Adam James emphasize practical solutions that respect the community's recreational and family-oriented character while creating opportunities for sustainable business growth and community development.</p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recreation and Community-Focused Business Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Recreation Business Consulting</h3>
              <p className="text-gray-700 mb-4">Specialized business services for recreation, hospitality, and outdoor-focused businesses that serve Skiatook's lake community and visitors.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Recreation business development</li>
                <li>• Hospitality consulting services</li>
                <li>• Seasonal business planning</li>
                <li>• Tourism marketing strategies</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Community Mental Health</h3>
              <p className="text-gray-700 mb-4">Family and community mental health services that serve Skiatook's outdoor-oriented families through Safe Harbor Mental Health.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family therapy and counseling</li>
                <li>• Community wellness programs</li>
                <li>• Outdoor therapy programs</li>
                <li>• Seasonal adjustment support</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Community Technology Solutions</h3>
              <p className="text-gray-700 mb-4">Technology consulting designed for small businesses and community organizations in Skiatook's unique market environment.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Small business technology consulting</li>
                <li>• Recreation business software</li>
                <li>• Community engagement platforms</li>
                <li>• Local marketing solutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-purple-900 to-blue-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Skiatook's Community Business Expert</h2>
            <p className="text-xl mb-8 text-purple-100">Discover how Adam James can help your business thrive in Skiatook's unique lake community environment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-purple-400 hover:bg-purple-500 text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">Schedule Consultation</a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">Call Adam James</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}