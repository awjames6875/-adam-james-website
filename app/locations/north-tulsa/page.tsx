import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'North Tulsa Business Adam James | Community Development',
  description: 'Learn how Adam James impacts north Tulsa through business development, community initiatives, and entrepreneurial support for Oklahoma\'s underserved areas.',
  keywords: 'north Tulsa business Adam James, Adam James north Tulsa, community development Tulsa',
  openGraph: {
    title: 'North Tulsa Business Adam James | Community Development',
    description: 'Learn how Adam James impacts north Tulsa through business development, community initiatives, and entrepreneurial support for Oklahoma\'s underserved areas.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function NorthTulsaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              North Tulsa Community Leader <br />
              <span className="text-orange-300">Adam James</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Building Bridges and Creating Opportunities in North Tulsa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-orange-400 hover:bg-orange-500 text-red-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Connect with Adam James
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Initiatives
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adam James: Champion of North Tulsa Development</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              <strong>North Tulsa business Adam James</strong> represents more than entrepreneurial success—he embodies a commitment to community development, social equity, and economic empowerment that transforms lives and neighborhoods throughout one of Tulsa's most historically significant districts. His work in north Tulsa demonstrates how responsible business leadership can create lasting positive change while building sustainable enterprises.
            </p>

            <p className="mb-6">
              North Tulsa holds a special place in Oklahoma's history and Adam James's heart. This area, which includes the historic Greenwood District and surrounding neighborhoods, represents both the legacy of Black Wall Street and the ongoing potential for community-driven economic development. <strong>Adam James north Tulsa</strong> initiatives focus on honoring this history while creating new opportunities for current and future generations.
            </p>

            <p className="mb-6">
              The unique challenges and opportunities present in north Tulsa require a different approach to business development—one that prioritizes community benefit alongside commercial success. Adam James has developed specialized programs and partnerships that address real needs while building the foundation for long-term economic growth and community resilience.
            </p>

            <p className="mb-6">
              Through his work with Safe Harbor Mental Health, Adam James has brought crucial pediatric therapy and family counseling services to north Tulsa families who previously faced significant barriers to accessing quality mental healthcare. These services are provided with cultural sensitivity and community input, ensuring they truly serve the population's needs.
            </p>

            <p className="mb-6">
              <strong>Community development Tulsa</strong> efforts led by Adam James extend beyond his formal business operations to include mentorship programs, educational partnerships, and workforce development initiatives that create pathways to economic mobility for north Tulsa residents. His approach recognizes that sustainable business success requires healthy, thriving communities.
            </p>
          </div>
        </section>

        {/* Community Impact Focus */}
        <section id="impact" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community-Centered Business Development</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Workforce Development</h3>
              <p className="text-gray-700">
                Adam James partners with local organizations to provide job training, entrepreneurship education, and career development opportunities that connect north Tulsa residents with meaningful employment and business ownership prospects.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Community Health Services</h3>
              <p className="text-gray-700">
                Through Safe Harbor Mental Health and community partnerships, Adam James ensures north Tulsa families have access to quality healthcare services, with special attention to mental health support and pediatric therapy needs.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The <strong>north Tulsa business Adam James</strong> model demonstrates how entrepreneurship can serve as a catalyst for community development. Rather than extracting value from the community, his businesses are designed to reinvest locally, hire from the community, and address real needs identified by residents themselves.
            </p>

            <p className="mb-6">
              Adam James's commitment to north Tulsa extends to supporting local entrepreneurs and small business owners through mentorship, consulting services, and access to resources that might otherwise be unavailable. This ecosystem approach helps create a more robust and resilient local economy that benefits everyone in the community.
            </p>

            <p className="mb-6">
              Educational partnerships represent another key component of Adam James's north Tulsa work. By collaborating with local schools, community colleges, and training programs, he helps create pathways from education to employment that keep talented individuals in the community while building the skilled workforce that local businesses need to thrive.
            </p>
          </div>
        </section>

        {/* Historic Preservation and Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Honoring History While Building the Future</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-red-900 mb-4">Greenwood District Support</h3>
              <p className="text-gray-700 mb-4">
                Adam James actively supports the ongoing revitalization of the historic Greenwood District, providing business consulting and development expertise that honors the area's legacy while creating new opportunities for economic growth.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Historic preservation consulting</li>
                <li>• Black-owned business support</li>
                <li>• Cultural tourism development</li>
                <li>• Community event sponsorship</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-orange-900 mb-4">Neighborhood Revitalization</h3>
              <p className="text-gray-700 mb-4">
                Beyond Greenwood, Adam James works throughout north Tulsa to support neighborhood improvement initiatives, property development projects, and community infrastructure enhancements that improve quality of life for residents.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Property improvement consulting</li>
                <li>• Community planning support</li>
                <li>• Infrastructure development advocacy</li>
                <li>• Neighborhood business development</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              <strong>Adam James north Tulsa</strong> development philosophy recognizes the importance of building upon the community's strengths and assets rather than imposing external solutions. This approach has resulted in initiatives that are both culturally appropriate and economically sustainable, creating lasting benefits for the community.
            </p>

            <p className="mb-6">
              The historic significance of north Tulsa as the home of Black Wall Street provides both inspiration and responsibility for Adam James's work in the area. His projects are designed to honor this legacy while demonstrating that the entrepreneurial spirit and business acumen that once made Greenwood famous can be rekindled for the 21st century.
            </p>
          </div>
        </section>

        {/* Services and Programs */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community-Focused Services and Programs</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Mental Health Services</h3>
              <p className="text-gray-700 mb-4">
                Accessible pediatric therapy and family mental health support designed specifically for north Tulsa families, with culturally competent care and community-based service delivery.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pediatric therapy programs</li>
                <li>• Family counseling services</li>
                <li>• Community mental health advocacy</li>
                <li>• Crisis intervention support</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Business Development Support</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive consulting and support services for north Tulsa entrepreneurs and small business owners, including access to resources, mentorship, and strategic planning assistance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entrepreneurship education</li>
                <li>• Business plan development</li>
                <li>• Access to capital resources</li>
                <li>• Ongoing mentorship programs</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Technology Access Programs</h3>
              <p className="text-gray-700 mb-4">
                Technology education and access initiatives that help bridge the digital divide while preparing north Tulsa residents for opportunities in the modern economy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Computer literacy training</li>
                <li>• Internet access programs</li>
                <li>• Digital skills development</li>
                <li>• Technology career preparation</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              <strong>Community development Tulsa</strong> programs implemented by Adam James are designed with extensive community input and ongoing feedback to ensure they address real needs and produce meaningful results. This collaborative approach has resulted in services that are both effective and embraced by the community they serve.
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">North Tulsa Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-red-900 mb-4">Community Entrepreneur Program</h3>
            <p className="text-gray-700 mb-4">
              Adam James developed and funded a comprehensive entrepreneur support program for north Tulsa residents interested in starting businesses in their community. The program provides education, mentorship, and access to startup capital for qualifying participants.
            </p>
            <p className="text-gray-700 mb-4">
              Over three years, the program has supported the launch of 23 new businesses in north Tulsa, creating 47 full-time jobs and 31 part-time positions. The businesses range from retail and food service to professional services and technology companies, contributing to the diversification of the local economy.
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600">
              "Adam James didn't just provide business training—he invested in our community's future. His program gave me the tools, confidence, and connections I needed to turn my idea into a successful business that serves my neighbors and creates jobs."
            </blockquote>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-orange-900 mb-4">Youth Mental Health Initiative</h3>
            <p className="text-gray-700 mb-4">
              Recognizing the unique mental health challenges facing young people in north Tulsa, Adam James partnered with Safe Harbor Mental Health to develop specialized programs that provide accessible, culturally appropriate mental health services for children and adolescents.
            </p>
            <p className="text-gray-700 mb-4">
              The initiative has served over 340 young people and their families, providing therapy, counseling, and support services that were previously unavailable in the community. The program has achieved a 94% client satisfaction rate and has been recognized as a model for community-based mental health service delivery.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600">
              "This program has been transformative for our family and so many others in north Tulsa. Adam James understood that our children needed support that respected our community and culture while providing the highest quality care."
            </blockquote>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Partnership and Collaboration Opportunities</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              <strong>North Tulsa business Adam James</strong> actively seeks partnerships with organizations, institutions, and individuals who share his commitment to community development and economic empowerment. These collaborations multiply the impact of individual efforts while building the relationships necessary for sustained community transformation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Nonprofit Partnerships</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Collaborative opportunities with nonprofit organizations focused on education, healthcare, housing, and economic development in north Tulsa.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Program development and funding</li>
                  <li>• Shared resource initiatives</li>
                  <li>• Community outreach collaboration</li>
                  <li>• Advocacy and policy development</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Educational Institutions</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Partnerships with schools, colleges, and training programs to create pathways from education to employment and entrepreneurship.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Curriculum development support</li>
                  <li>• Internship and job placement programs</li>
                  <li>• Entrepreneurship education</li>
                  <li>• Community research projects</li>
                </ul>
              </div>
            </div>

            <p className="mb-6">
              Adam James believes that sustainable community development requires the involvement of multiple stakeholders working toward shared goals. His track record of successful partnerships and community collaboration makes him an ideal partner for organizations seeking to make a meaningful impact in north Tulsa.
            </p>
          </div>
        </section>

        {/* Contact and Call to Action */}
        <section id="contact" className="bg-gradient-to-r from-red-900 to-orange-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Adam James in Building North Tulsa's Future</h2>
            <p className="text-xl mb-8 text-red-100">
              Partner with a proven community leader committed to creating lasting positive change in north Tulsa.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Development</h3>
                <p className="text-sm text-red-100">Collaborative initiatives for community improvement</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Business Support</h3>
                <p className="text-sm text-red-100">Entrepreneurship and small business development</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Partnership Opportunities</h3>
                <p className="text-sm text-red-100">Strategic collaborations for community impact</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@adamjamestulsa.com" className="bg-orange-400 hover:bg-orange-500 text-red-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Discuss Partnership
              </a>
              <a href="tel:+1-918-555-0123" className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Adam James
              </a>
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Adam James's Impact Across Tulsa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/locations/downtown-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Downtown Tulsa</h3>
              <p className="text-gray-600">Discover Adam James's business leadership in downtown Tulsa</p>
            </a>
            <a href="/locations/east-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-900 mb-2">East Tulsa</h3>
              <p className="text-gray-600">Learn about business development in east Tulsa</p>
            </a>
            <a href="/locations/west-tulsa" className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">West Tulsa</h3>
              <p className="text-gray-600">Explore community-focused business initiatives in west Tulsa</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}