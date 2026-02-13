import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verdigris Entrepreneur Adam James | Oklahoma Services',
  description: 'Adam James serves Verdigris with business consulting, corporate housing solutions, and entrepreneurial guidance for sustainable Oklahoma success.',
  keywords: 'Verdigris entrepreneur Adam James, Adam James Verdigris, business services Verdigris',
  openGraph: {
    title: 'Verdigris Entrepreneur Adam James | Oklahoma Services',
    description: 'Adam James serves Verdigris with business consulting, corporate housing solutions, and entrepreneurial guidance for sustainable Oklahoma success.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function VerdigrisPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-teal-900 via-green-800 to-emerald-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Verdigris Business Development <br />
              <span className="text-teal-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Cultivating Success in Oklahoma's Emerging Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-teal-400 hover:bg-teal-500 text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">Connect with Adam James</a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Verdigris' Strategic Business Partner</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6"><strong>Verdigris entrepreneur Adam James</strong> has positioned himself as a key partner in one of Oklahoma's most promising emerging communities. Verdigris' strategic location, growing infrastructure, and business-friendly environment create unique opportunities for entrepreneurs and established businesses seeking growth in a supportive, developing market.</p>
            <p className="mb-6">The city of Verdigris represents Oklahoma's entrepreneurial future, where community planning and business development work together to create sustainable growth opportunities. <strong>Adam James Verdigris</strong> operations are designed to support this vision while providing practical business solutions that help companies establish and expand their operations in this growing market.</p>
            <p className="mb-6">Verdigris' proximity to major transportation corridors and its commitment to planned development create advantages for businesses seeking modern infrastructure and room for growth. Adam James helps businesses understand and capitalize on these advantages while building the community relationships essential for success in a developing market.</p>
            <p className="mb-6">Through his comprehensive business services, Adam James provides Verdigris businesses with access to strategic consulting, corporate housing, and technology solutions that support both startup operations and established company expansions in this emerging market.</p>
            <p className="mb-6"><strong>Business services Verdigris</strong> delivered by Adam James emphasize scalable solutions that grow with the community, creating lasting partnerships that benefit both individual businesses and the overall development of Verdigris as a premier business destination.</p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Development-Focused Business Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">Startup and Development Support</h3>
              <p className="text-gray-700 mb-4">Comprehensive business development services designed for companies establishing operations in Verdigris' growing business environment.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Business establishment consulting</li>
                <li>• Market development strategies</li>
                <li>• Infrastructure planning support</li>
                <li>• Growth scalability planning</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Community Integration Services</h3>
              <p className="text-gray-700 mb-4">Family and business support services that help new residents and businesses integrate into Verdigris' developing community through Safe Harbor Behavioral Health.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Relocation support services</li>
                <li>• Community integration counseling</li>
                <li>• Family transition support</li>
                <li>• New resident orientation</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Technology Infrastructure</h3>
              <p className="text-gray-700 mb-4">Modern technology solutions that help Verdigris businesses establish efficient operations and compete effectively through GrowthGenix AI.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technology infrastructure planning</li>
                <li>• Digital business solutions</li>
                <li>• Scalable system development</li>
                <li>• Modern workflow implementation</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-teal-900 to-emerald-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Verdigris' Development Expert</h2>
            <p className="text-xl mb-8 text-teal-100">Discover how Adam James can help your business grow with Verdigris' expanding opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-teal-400 hover:bg-teal-500 text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">Schedule Consultation</a>
              <a href="tel:+1-918-553-5746" className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">Call Adam James</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}