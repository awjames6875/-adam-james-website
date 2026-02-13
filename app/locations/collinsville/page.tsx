import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collinsville Business Owner Adam James | Oklahoma Growth',
  description: 'Learn how Adam James helps Collinsville businesses achieve growth through strategic consulting, real estate expertise, and innovative Oklahoma solutions.',
  keywords: 'Collinsville business owner Adam James, Adam James Collinsville, business growth Collinsville',
  openGraph: {
    title: 'Collinsville Business Owner Adam James | Oklahoma Growth',
    description: 'Learn how Adam James helps Collinsville businesses achieve growth through strategic consulting, real estate expertise, and innovative Oklahoma solutions.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function CollinsvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-rose-900 via-red-800 to-pink-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Collinsville Business Growth <br />
              <span className="text-rose-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Strategic Development in Oklahoma's Community-Focused City
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-rose-400 hover:bg-rose-500 text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">Connect with Adam James</a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Collinsville's Strategic Business Leader</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6"><strong>Collinsville business owner Adam James</strong> has established himself as a key partner in one of Oklahoma's most community-oriented and strategically positioned cities. Collinsville's combination of small-town character, regional accessibility, and business-friendly environment creates ideal conditions for entrepreneurs seeking growth opportunities while maintaining community connections.</p>
            <p className="mb-6">The city of Collinsville represents authentic Oklahoma values combined with modern business opportunities. <strong>Adam James Collinsville</strong> operations are designed to help businesses leverage the city's strategic location and community advantages while building the relationships necessary for long-term success in this market.</p>
            <p className="mb-6">Collinsville's proximity to both Tulsa and northeast Oklahoma markets, combined with its affordable operating costs and supportive business environment, creates significant advantages for companies seeking regional market access with competitive operational expenses. Adam James helps businesses understand and capitalize on these geographic and economic benefits.</p>
            <p className="mb-6">Through his comprehensive business services, Adam James provides Collinsville businesses with access to strategic consulting, technology solutions, and support services that enhance competitiveness while maintaining the community focus that defines successful businesses in this market.</p>
            <p className="mb-6"><strong>Business growth Collinsville</strong> strategies developed by Adam James emphasize sustainable development that benefits both individual enterprises and the broader community, creating lasting prosperity that reflects Collinsville's values and aspirations.</p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategic Business Services for Collinsville</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-900 mb-4">Regional Market Development</h3>
              <p className="text-gray-700 mb-4">Strategic business consulting that helps Collinsville businesses access regional markets while maintaining their community base and values.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regional market analysis and development</li>
                <li>• Strategic business planning</li>
                <li>• Operations optimization</li>
                <li>• Growth strategy implementation</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Community Business Support</h3>
              <p className="text-gray-700 mb-4">Family-focused business and mental health services that serve Collinsville's community-oriented population through integrated support systems.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family business consulting</li>
                <li>• Community mental health services</li>
                <li>• Small business development</li>
                <li>• Local partnership facilitation</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pink-900 mb-4">Technology Integration</h3>
              <p className="text-gray-700 mb-4">Practical technology solutions that help Collinsville businesses improve efficiency and reach new markets through GrowthGenix AI's community-focused approach.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Small business technology consulting</li>
                <li>• Digital marketing solutions</li>
                <li>• Process automation</li>
                <li>• Customer management systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-rose-900 to-pink-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Collinsville's Growth Strategy Expert</h2>
            <p className="text-xl mb-8 text-rose-100">Discover how Adam James can help your business achieve sustainable growth while strengthening Collinsville's community bonds.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-rose-400 hover:bg-rose-500 text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">Schedule Consultation</a>
              <a href="tel:+1-918-553-5746" className="border-2 border-white text-white hover:bg-white hover:text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">Call Adam James</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}