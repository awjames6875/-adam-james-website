import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catoosa Business Owner Adam James | Oklahoma Enterprise',
  description: 'Explore how Adam James supports Catoosa businesses with strategic consulting, corporate housing services, and innovative solutions for Oklahoma growth.',
  keywords: 'Catoosa business owner Adam James, Adam James Catoosa, enterprise services Catoosa',
  openGraph: {
    title: 'Catoosa Business Owner Adam James | Oklahoma Enterprise',
    description: 'Explore how Adam James supports Catoosa businesses with strategic consulting, corporate housing services, and innovative solutions for Oklahoma growth.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function CatoosaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Catoosa Enterprise Excellence <br />
              <span className="text-slate-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Strategic Business Development in Oklahoma's Industrial Hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-slate-400 hover:bg-slate-500 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Connect with Adam James
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Catoosa's Industrial Business Partner</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              <strong>Catoosa business owner Adam James</strong> has established himself as a key partner in one of Oklahoma's most strategically important industrial communities. Known for its Port of Catoosa - the nation's furthest inland seaport - and its concentration of manufacturing and logistics operations, Catoosa represents unique opportunities for businesses that understand industrial operations and supply chain management.
            </p>

            <p className="mb-6">
              Catoosa's strategic location at the intersection of major transportation corridors, including the McClellan-Kerr Arkansas River Navigation System, creates unparalleled advantages for businesses in manufacturing, logistics, and industrial services. <strong>Adam James Catoosa</strong> operations are designed to help businesses leverage these transportation and infrastructure benefits while building the relationships necessary for success in this specialized market.
            </p>

            <p className="mb-6">
              The industrial character of Catoosa creates demand for specialized business services that support manufacturing operations, logistics coordination, and workforce development. Adam James has developed expertise in serving these unique needs while maintaining the personal relationships and community focus that define successful business operations in the Catoosa environment.
            </p>

            <p className="mb-6">
              Through Integrity Corporate Housing, Adam James provides practical accommodations for industrial workers, technical specialists, and business professionals working on projects throughout the Catoosa industrial complex. These services address both short-term project needs and longer-term assignments that support the area's economic development.
            </p>

            <p className="mb-6">
              <strong>Enterprise services Catoosa</strong> delivered through Adam James's integrated approach focus on practical solutions that enhance operational efficiency, support workforce development, and contribute to the continued growth and competitiveness of Catoosa's industrial base.
            </p>

            <p className="mb-6">
              The business environment in Catoosa values reliability, technical competence, and practical problem-solving over flashy marketing or theoretical solutions. Adam James's success reflects his understanding of these priorities and his ability to deliver results that meet the demanding standards of industrial operations.
            </p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Industrial-Focused Business Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Industrial Housing Solutions</h3>
              <p className="text-gray-700 mb-4">
                Specialized temporary housing for industrial workers, technical specialists, and project teams through Integrity Corporate Housing's Catoosa operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Industrial worker accommodations</li>
                <li>• Technical specialist housing</li>
                <li>• Project team lodging</li>
                <li>• Extended assignment housing</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Workforce Mental Health</h3>
              <p className="text-gray-700 mb-4">
                Mental health and family support services designed for industrial workers and their families through Safe Harbor Mental Health's specialized programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Industrial worker counseling</li>
                <li>• Family support programs</li>
                <li>• Stress management services</li>
                <li>• Crisis intervention support</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Industrial Technology Solutions</h3>
              <p className="text-gray-700 mb-4">
                Advanced technology consulting specifically designed for industrial operations through GrowthGenix AI's manufacturing and logistics expertise.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Industrial automation consulting</li>
                <li>• Supply chain optimization</li>
                <li>• Manufacturing technology integration</li>
                <li>• Logistics management systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Catoosa Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Manufacturing Efficiency Improvement</h3>
            <p className="text-gray-700 mb-4">
              A mid-size manufacturing company operating near the Port of Catoosa approached Adam James for assistance improving their operational efficiency and reducing costs while maintaining their high quality standards and on-time delivery record.
            </p>
            <p className="text-gray-700 mb-4">
              Adam James provided comprehensive consulting that included process automation through GrowthGenix AI, workflow optimization, and employee training programs. Integrity Corporate Housing accommodated technical specialists brought in for equipment installation and process improvement implementation.
            </p>
            <p className="text-gray-700 mb-4">
              The company achieved a 35% improvement in operational efficiency while reducing waste by 28% and maintaining their reputation for quality and reliability. The improvements enabled them to expand their customer base and increase employment by 15 positions over 18 months.
            </p>
            <blockquote className="border-l-4 border-slate-500 pl-4 italic text-gray-600">
              "Adam James understood our industrial environment and provided practical solutions that delivered real results. His team's expertise in manufacturing operations made all the difference in our success."
            </blockquote>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-slate-900 to-zinc-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Catoosa's Industrial Business Expert</h2>
            <p className="text-xl mb-8 text-slate-100">
              Discover how Adam James can help your industrial enterprise achieve operational excellence and sustainable growth in Catoosa.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Industrial Expertise</h3>
                <p className="text-sm text-slate-100">Specialized knowledge of manufacturing and logistics operations</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Practical Solutions</h3>
                <p className="text-sm text-slate-100">Results-driven approaches for industrial challenges</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Operational Excellence</h3>
                <p className="text-sm text-slate-100">Systems and processes that enhance efficiency and quality</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-slate-400 hover:bg-slate-500 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Adam James
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Adam James's Impact Across Oklahoma</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/locations/claremore" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Claremore</h3>
              <p className="text-gray-600">Discover Adam James's regional business expertise in Claremore</p>
            </a>
            <a href="/locations/verdigris" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Verdigris</h3>
              <p className="text-gray-600">Learn about business services in neighboring Verdigris</p>
            </a>
            <a href="/locations/owasso" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Owasso</h3>
              <p className="text-gray-600">Explore Adam James's business innovation in Owasso</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}