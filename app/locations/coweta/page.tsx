import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coweta Business Owner Adam James | Entrepreneur Services',
  description: 'Discover Adam James\' business services in Coweta including consulting, corporate housing, and entrepreneurial support for Oklahoma business success.',
  keywords: 'Coweta business owner Adam James, Adam James Coweta, entrepreneur services Coweta',
  openGraph: {
    title: 'Coweta Business Owner Adam James | Entrepreneur Services',
    description: 'Discover Adam James\' business services in Coweta including consulting, corporate housing, and entrepreneurial support for Oklahoma business success.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function CowetaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Coweta Business Excellence <br />
              <span className="text-emerald-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Strategic Business Development in Oklahoma's Thriving Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-emerald-400 hover:bg-emerald-500 text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">Connect with Adam James</a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Coweta's Strategic Business Leader</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6"><strong>Coweta business owner Adam James</strong> has established himself as a key partner in one of Oklahoma's most family-oriented and rapidly growing communities. Coweta's combination of small-town values, excellent schools, and strategic location creates ideal conditions for businesses that value both growth opportunities and community connections.</p>
            <p className="mb-6">The city of Coweta represents the best of Oklahoma's community-focused business environment, where personal relationships and shared values create the foundation for sustainable business success. <strong>Adam James Coweta</strong> operations are designed to honor these community characteristics while providing the sophisticated business services that growing companies need to compete effectively.</p>
            <p className="mb-6">Coweta's proximity to both Tulsa and the broader Oklahoma market, combined with its reputation for quality of life and community engagement, attracts families and businesses seeking the advantages of metropolitan access with small-town benefits. Adam James has developed services that help businesses leverage these advantages while building the community relationships essential for long-term success.</p>
            <p className="mb-6">Through his comprehensive business portfolio, Adam James provides Coweta businesses and residents with access to corporate housing, mental health services, and technology consulting that enhance both business operations and quality of life in the community.</p>
            <p className="mb-6"><strong>Entrepreneur services Coweta</strong> delivered by Adam James emphasize the importance of balanced growth that benefits both individual businesses and the broader community, creating sustainable prosperity that reflects Coweta's values and aspirations.</p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community-Focused Business Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Family-Oriented Services</h3>
              <p className="text-gray-700 mb-4">Business and family support services designed specifically for Coweta's community-focused environment and family-oriented population.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family business consulting</li>
                <li>• Community-focused corporate housing</li>
                <li>• Family mental health services</li>
                <li>• Educational support programs</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Strategic Business Development</h3>
              <p className="text-gray-700 mb-4">Comprehensive business consulting that helps Coweta enterprises grow while maintaining their community connections and values.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Strategic planning and development</li>
                <li>• Market expansion strategies</li>
                <li>• Operations optimization</li>
                <li>• Community integration consulting</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-teal-900 mb-4">Technology Integration</h3>
              <p className="text-gray-700 mb-4">Modern technology solutions that enhance business efficiency while maintaining the personal touch that Coweta businesses and customers value.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Small business technology consulting</li>
                <li>• Community-focused digital solutions</li>
                <li>• Customer relationship management</li>
                <li>• Local marketing technology</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-green-900 to-teal-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Coweta's Community Business Leader</h2>
            <p className="text-xl mb-8 text-green-100">Discover how Adam James can help your business thrive while strengthening Coweta's community bonds.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-emerald-400 hover:bg-emerald-500 text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">Schedule Consultation</a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">Call Adam James</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}