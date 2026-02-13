import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'GrowthGenix.ai | AI-Powered Business Growth Solutions in Tulsa',
  description: 'GrowthGenix.ai helps Tulsa businesses leverage AI technology for explosive growth. Founded by Adam James to democratize AI and help local businesses compete nationally.',
  keywords: 'GrowthGenix ai Tulsa, AI business growth, AI consulting Oklahoma, Adam James AI, Tulsa technology, business automation Tulsa',
  openGraph: {
    title: 'GrowthGenix.ai | AI Business Growth Solutions Tulsa',
    description: 'AI-powered business growth solutions helping Tulsa companies leverage cutting-edge technology.',
    url: 'https://adamjamestulsa.com/businesses/growthgenix-ai',
    type: 'website',
    images: [
      {
        url: '/images/growthgenix-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'GrowthGenix.ai Tulsa',
      },
    ],
  },
}

const growthGenixBusinessData = {
  '@type': 'ProfessionalService',
  name: 'GrowthGenix.ai',
  description: 'AI-powered business growth and automation solutions',
  founder: {
    '@type': 'Person',
    name: 'Adam James',
    url: 'https://adamjamestulsa.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US',
  },
  url: 'https://adamjamestulsa.com/businesses/growthgenix-ai',
  serviceArea: {
    '@type': 'AdministrativeArea' as const,
    name: 'Oklahoma',
  },
}

export default function GrowthGenixPage() {
  return (
    <>
      <LocalBusinessSchema business={growthGenixBusinessData} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold">AI-Powered Growth</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  GrowthGenix.ai
                </h1>
                <p className="text-2xl md:text-3xl mb-6 text-purple-200">
                  Accelerate Your Business with AI
                </p>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Transform your Tulsa business with cutting-edge AI technology. Automate operations, 
                  boost efficiency, and achieve exponential growth with custom AI solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all text-center shadow-lg"
                  >
                    Get Free AI Audit
                  </Link>
                  <a 
                    href="tel:+14696096436"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
                  >
                    Call: +1 (469) 609-6436
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/growthgenix-ai.jpg"
                  alt="GrowthGenix.ai AI technology solutions in Tulsa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Dashboard */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">300%</div>
                <div className="text-gray-600">Average Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">25+</div>
                <div className="text-gray-600">Businesses Transformed</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">70%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">10x</div>
                <div className="text-gray-600">Faster Operations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Democratizing AI for Tulsa Businesses
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              GrowthGenix.ai was founded with a clear vision: to bring enterprise-level AI capabilities 
              to small and medium-sized businesses in Tulsa and across Oklahoma.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by Adam James, a Tulsa entrepreneur who understands the challenges local businesses 
              face, GrowthGenix.ai makes cutting-edge AI technology accessible and affordable. We believe 
              every business deserves the competitive advantage that AI provides—not just the Fortune 500.
            </p>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              AI Solutions That Drive Results
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Phone Agents */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A.I. Phone Agents</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  AI-powered phone agents that handle customer calls, qualify leads, and provide 
                  24/7 phone support with natural conversation capabilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>24/7 Phone Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Lead Qualification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Natural Conversations</span>
                  </li>
                </ul>
              </div>

              {/* AI Chatbots */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A.I. Chatbots</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Automated and A.I.-powered chatbots that provide instant customer support, 
                  answer questions, and engage visitors 24/7 on your website.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Instant Responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Website Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Multi-Platform Support</span>
                  </li>
                </ul>
              </div>

              {/* Custom Solutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-green-500">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Custom-built A.I. and automations tailored specifically to your business needs, 
                  workflows, and industry requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Tailored Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Industry-Specific AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Workflow Integration</span>
                  </li>
                </ul>
              </div>

              {/* Sales AI */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-orange-500">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales AI</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Supercharge your sales team with AI that identifies hot leads, optimizes pricing, 
                  and predicts customer behavior.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Lead Scoring AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Price Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Forecasting Models</span>
                  </li>
                </ul>
              </div>

              {/* Content AI */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-pink-500">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content AI</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Generate high-quality content at scale with AI-powered writing, editing, and 
                  optimization tools.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>AI Content Generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>SEO Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Multi-Platform Publishing</span>
                  </li>
                </ul>
              </div>

              {/* Operations AI */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-indigo-500">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations AI</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Optimize inventory, scheduling, resource allocation, and supply chain management 
                  with intelligent AI systems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Inventory Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Smart Scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Resource Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How We Transform Your Business
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free AI Audit</h3>
                <p className="text-gray-600">
                  We analyze your business operations and identify AI opportunities for maximum ROI.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Strategy</h3>
                <p className="text-gray-600">
                  We develop a tailored AI implementation plan specific to your business goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Integration</h3>
                <p className="text-gray-600">
                  We implement AI solutions with minimal disruption to your current operations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide continuous optimization, training, and support to maximize results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Real Results from Tulsa Businesses
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-sm font-semibold text-purple-600 mb-2">RETAIL</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Boutique Chain</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue Increase:</span>
                    <span className="text-2xl font-bold text-green-600">+285%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time Saved:</span>
                    <span className="text-2xl font-bold text-blue-600">40hrs/wk</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI-powered inventory management and customer personalization transformed operations 
                  and tripled online sales.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-sm font-semibold text-purple-600 mb-2">PROFESSIONAL SERVICES</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tulsa Law Firm</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Client Capacity:</span>
                    <span className="text-2xl font-bold text-green-600">+150%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Admin Costs:</span>
                    <span className="text-2xl font-bold text-blue-600">-65%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI automation of document review and client intake allowed the firm to serve 150% 
                  more clients without hiring.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-sm font-semibold text-purple-600 mb-2">HEALTHCARE</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Practice</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Patient Satisfaction:</span>
                    <span className="text-2xl font-bold text-green-600">+92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">No-Shows:</span>
                    <span className="text-2xl font-bold text-blue-600">-78%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI-powered scheduling and patient communication dramatically improved efficiency 
                  and patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose GrowthGenix */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose GrowthGenix.ai?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Tulsa Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We understand the unique challenges and opportunities of Tulsa businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    25+ successful implementations with an average 300% growth increase.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Technical Skills Required</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We handle all the complexity—you just enjoy the results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Custom packages designed for businesses of all sizes and budgets.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Implementation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    See results in weeks, not months, with our agile deployment process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuous updates and improvements as AI technology evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Get a free AI audit ($2,500 value) and discover how AI can 10x your business growth. 
              No obligation, no technical jargon—just actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                Get Free AI Audit
              </Link>
              <a 
                href="tel:+14696096436"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Call: +1 (469) 609-6436
              </a>
            </div>

            <p className="text-sm text-purple-100">
              5955 Alpha Rd, Ste 102-1708, Dallas, TX 75240 | Serving nationwide<br/>
              Founded by Adam James | <a href="https://growthgenix.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">growthgenix.ai</a>
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Explore More from Adam James Tulsa
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/businesses/integrity-corporate-housing"
                className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
              >
                Integrity Corporate Housing →
              </Link>
              <Link 
                href="/businesses/safe-harbor-mental-health"
                className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
              >
                Safe Harbor Behavioral Health →
              </Link>
              <Link 
                href="/my-story"
                className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
              >
                Adam's Story →
              </Link>
              <Link 
                href="/about"
                className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
              >
                About Adam James →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

