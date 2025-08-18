import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jenks Entrepreneur Adam James | Oklahoma Business Growth',
  description: 'Adam James provides Jenks businesses with strategic consulting, real estate expertise, and innovative solutions for sustainable growth in Oklahoma.',
  keywords: 'Jenks entrepreneur Adam James, Adam James Jenks, business growth Jenks Oklahoma',
  openGraph: {
    title: 'Jenks Entrepreneur Adam James | Oklahoma Business Growth',
    description: 'Adam James provides Jenks businesses with strategic consulting, real estate expertise, and innovative solutions for sustainable growth in Oklahoma.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function JenksPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-rose-900 via-pink-800 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Jenks Business Excellence <br />
              <span className="text-rose-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Driving Growth in Oklahoma's Premier Educational Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-rose-400 hover:bg-rose-500 text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Connect with Adam James
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Jenks' Strategic Business Partner</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              <strong>Jenks entrepreneur Adam James</strong> has recognized the exceptional potential within one of Oklahoma's most prestigious and rapidly growing communities. Known for its award-winning school system and family-oriented environment, Jenks represents the perfect intersection of educational excellence and business opportunity, creating unique advantages for innovative entrepreneurs and established businesses alike.
            </p>

            <p className="mb-6">
              The city of Jenks has achieved national recognition for educational excellence while maintaining a strong focus on economic development and business attraction. <strong>Adam James Jenks</strong> operations are strategically positioned to serve this sophisticated market while contributing to the community's continued growth and prosperity through innovative business solutions and community-focused services.
            </p>

            <p className="mb-6">
              Jenks' strategic location in the southern Tulsa metropolitan area, combined with proximity to the Arkansas River and excellent transportation infrastructure, creates ideal conditions for businesses seeking to serve both local and regional markets. Adam James has developed specialized approaches that capitalize on these geographic and demographic advantages while maintaining the community focus that defines the Jenks experience.
            </p>

            <p className="mb-6">
              Through Integrity Corporate Housing, Adam James provides premium accommodations for the executives, educators, and professionals who are attracted to Jenks for both career opportunities and quality of life. These services support the city's economic development goals while providing practical solutions for businesses and individuals choosing Jenks as their home base.
            </p>

            <p className="mb-6">
              <strong>Business growth Jenks Oklahoma</strong> strategies implemented by Adam James recognize the unique characteristics of this market, where educational excellence, family values, and economic opportunity converge to create an environment where businesses can thrive while contributing to the community's educational and cultural mission.
            </p>

            <p className="mb-6">
              The demographic profile of Jenks, characterized by high educational attainment, strong household incomes, and community engagement, creates favorable market conditions for businesses that can deliver premium value and maintain community connections. Adam James's approach to business development is specifically designed to meet these sophisticated expectations while building sustainable, long-term relationships.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Educational Excellence Creates Business Opportunities</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-rose-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-rose-900 mb-4">Educational Infrastructure</h3>
              <p className="text-gray-700">
                Jenks' nationally recognized school system attracts families who prioritize education and are willing to invest in premium services and products that support their children's success and family wellbeing.
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-900 mb-4">Community Engagement</h3>
              <p className="text-gray-700">
                Strong community involvement and civic pride create opportunities for businesses that align with Jenks' values and contribute to the educational and cultural life of the community.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The <strong>Jenks entrepreneur Adam James</strong> approach to business development leverages the unique advantages created by the city's educational focus while building relationships with the families, educators, and professionals who choose Jenks for its commitment to excellence. This market rewards businesses that share these values and can demonstrate their commitment to community improvement.
            </p>

            <p className="mb-6">
              Safe Harbor Mental Health's services in Jenks are specifically designed to support the mental health and educational needs of families in this achievement-oriented environment. The practice provides specialized pediatric therapy and family counseling that helps children and families navigate the pressures and opportunities associated with high academic expectations while maintaining healthy relationships and personal wellbeing.
            </p>

            <p className="mb-6">
              GrowthGenix AI's technology solutions help Jenks businesses leverage advanced tools for customer engagement, operational efficiency, and market expansion while maintaining the personal relationships and community focus that define successful businesses in this market. The integration of cutting-edge technology with traditional values creates competitive advantages that serve both business goals and community objectives.
            </p>
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Premium Services Designed for Jenks</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-900 mb-4">Executive Accommodations</h3>
              <p className="text-gray-700 mb-4">
                Premium corporate housing solutions that meet the high standards expected by professionals choosing Jenks for its educational excellence and quality of life through Integrity Corporate Housing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family-oriented corporate housing</li>
                <li>• Educational district accommodations</li>
                <li>• Executive temporary housing</li>
                <li>• Extended stay family suites</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pink-900 mb-4">Educational Support Services</h3>
              <p className="text-gray-700 mb-4">
                Specialized mental health and family support services designed for Jenks' achievement-oriented families through Safe Harbor Mental Health's educational-focused programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Educational psychology services</li>
                <li>• Family academic stress counseling</li>
                <li>• Student mental health support</li>
                <li>• Parent and family guidance</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Educational Technology Solutions</h3>
              <p className="text-gray-700 mb-4">
                Advanced technology consulting and implementation services that help Jenks businesses serve the educational community through GrowthGenix AI's specialized programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Educational technology consulting</li>
                <li>• Student information systems</li>
                <li>• Parent communication platforms</li>
                <li>• Academic performance analytics</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Jenks Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-rose-900 mb-4">Educational Services Company Expansion</h3>
            <p className="text-gray-700 mb-4">
              An educational services company specializing in tutoring and test preparation approached Adam James for assistance expanding their operations to better serve Jenks' high-achieving student population. The company had a strong reputation but needed help with technology integration, facility expansion, and staff development to meet growing demand.
            </p>
            <p className="text-gray-700 mb-4">
              Adam James provided comprehensive business consulting that included technology platform development through GrowthGenix AI, temporary housing for specialized educators through Integrity Corporate Housing, and mental health consultation through Safe Harbor Mental Health partnerships to ensure their services supported student wellbeing alongside academic achievement.
            </p>
            <p className="text-gray-700 mb-4">
              The company successfully expanded from serving 85 students to over 340 students while maintaining their high success rates and student satisfaction scores. They opened two additional locations and now provide comprehensive educational support services throughout the Jenks area while maintaining their commitment to student-centered learning and family involvement.
            </p>
            <blockquote className="border-l-4 border-rose-500 pl-4 italic text-gray-600">
              "Adam James understood that our success in Jenks required more than just business growth—we needed to maintain our commitment to educational excellence and student wellbeing. His integrated approach helped us expand while staying true to our mission."
            </blockquote>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-rose-900 to-red-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Jenks' Educational Business Leader</h2>
            <p className="text-xl mb-8 text-rose-100">
              Discover how Adam James can help your business thrive while contributing to Jenks' educational excellence and community success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Educational Market Expertise</h3>
                <p className="text-sm text-rose-100">Specialized knowledge of education-focused business opportunities</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Premium Service Delivery</h3>
                <p className="text-sm text-rose-100">Excellence that meets Jenks' high standards</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Partnership</h3>
                <p className="text-sm text-rose-100">Collaborative relationships that support educational goals</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-rose-400 hover:bg-rose-500 text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-rose-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Adam James
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Adam James's Impact Across Oklahoma</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/locations/bixby" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Bixby</h3>
              <p className="text-gray-600">Discover Adam James's business services in neighboring Bixby</p>
            </a>
            <a href="/locations/glenpool" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Glenpool</h3>
              <p className="text-gray-600">Learn about opportunities in growing Glenpool</p>
            </a>
            <a href="/locations/south-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-900 mb-2">South Tulsa</h3>
              <p className="text-gray-600">Explore premium business services in south Tulsa</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}