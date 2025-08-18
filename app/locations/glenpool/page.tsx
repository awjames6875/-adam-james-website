import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glenpool Entrepreneur Adam James | Oklahoma Business',
  description: 'Adam James provides Glenpool entrepreneurs with expert consulting, real estate solutions, and business development services throughout Oklahoma.',
  keywords: 'Glenpool entrepreneur Adam James, Adam James Glenpool, business development Glenpool',
  openGraph: {
    title: 'Glenpool Entrepreneur Adam James | Oklahoma Business',
    description: 'Adam James provides Glenpool entrepreneurs with expert consulting, real estate solutions, and business development services throughout Oklahoma.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function GlenpoolPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Glenpool Business Growth <br />
              <span className="text-indigo-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering Success in Oklahoma's Dynamic Growing Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-indigo-400 hover:bg-indigo-500 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">Connect with Adam James</a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Glenpool's Strategic Business Partner</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6"><strong>Glenpool entrepreneur Adam James</strong> has positioned himself as a key driver of business development in one of Oklahoma's most promising and rapidly evolving communities. Glenpool's strategic location between Tulsa and the Arkansas River corridor creates unique opportunities for businesses seeking growth while maintaining small-town advantages and community connections.</p>
            <p className="mb-6">The city of Glenpool represents the perfect balance of accessibility to major markets and the cost advantages of operating in a smaller community. <strong>Adam James Glenpool</strong> operations leverage these geographic and economic benefits while building the strong community relationships that are essential for sustainable business success in this market.</p>
            <p className="mb-6">Glenpool's business-friendly environment and growing population create expanding opportunities across multiple sectors. Adam James has developed comprehensive services that address the needs of both established businesses and emerging entrepreneurs who are discovering Glenpool's advantages for business operations and growth.</p>
            <p className="mb-6">Through his integrated business portfolio, Adam James provides Glenpool businesses with access to corporate housing solutions, mental health services, and advanced technology consulting that help them compete effectively while maintaining their community focus and values.</p>
            <p className="mb-6"><strong>Business development Glenpool</strong> strategies implemented by Adam James emphasize sustainable growth that benefits both individual enterprises and the broader community, creating a positive cycle of economic development and opportunity creation.</p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Business Services for Glenpool</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Strategic Business Consulting</h3>
              <p className="text-gray-700 mb-4">Comprehensive business development services that help Glenpool businesses capitalize on the city's growth momentum and strategic advantages.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Strategic planning and development</li>
                <li>• Market expansion consulting</li>
                <li>• Operations optimization</li>
                <li>• Growth strategy implementation</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Community Mental Health</h3>
              <p className="text-gray-700 mb-4">Family-focused mental health and counseling services that serve Glenpool's growing population through Safe Harbor Mental Health.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family therapy and counseling</li>
                <li>• Pediatric mental health services</li>
                <li>• Community wellness programs</li>
                <li>• Mental health advocacy</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-violet-900 mb-4">Technology Solutions</h3>
              <p className="text-gray-700 mb-4">Advanced technology consulting and implementation that helps Glenpool businesses enhance competitiveness through GrowthGenix AI.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital transformation consulting</li>
                <li>• Process automation solutions</li>
                <li>• Technology training programs</li>
                <li>• Innovation strategy development</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-blue-900 to-violet-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Glenpool's Business Growth Expert</h2>
            <p className="text-xl mb-8 text-blue-100">Discover how Adam James can help your business thrive in Glenpool's growing market.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-indigo-400 hover:bg-indigo-500 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">Schedule Consultation</a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">Call Adam James</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}