import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adam James Tulsa Business Portfolio - Corporate Housing, Consulting & Mental Health Services',
  description: 'Explore Adam James Tulsa\'s diverse business portfolio including corporate housing, mental health services, business consulting, real estate, and investment strategies across Oklahoma.',
  keywords: 'Adam James Tulsa businesses, corporate housing Tulsa, business consulting Oklahoma, mental health services, real estate investment, Tulsa entrepreneur portfolio',
  openGraph: {
    title: 'Adam James Tulsa Business Portfolio - Transforming Oklahoma Communities',
    description: 'Discover the comprehensive business portfolio of Adam James Tulsa, featuring innovative services that drive growth and create positive impact across Oklahoma.',
    url: 'https://adamjamestulsa.com/businesses',
    type: 'website',
  },
}

export default function BusinessesPage() {
  return (
    <>
      <SchemaMarkup 
        type="Organization"
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Adam James Tulsa Business Portfolio",
          "description": "Comprehensive business services including corporate housing, mental health services, business consulting, and real estate development in Oklahoma",
          "url": "https://adamjamestulsa.com/businesses",
          "founder": {
            "@type": "Person",
            "name": "Adam James"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tulsa",
            "addressRegion": "Oklahoma",
            "addressCountry": "United States"
          },
          "serviceArea": {
            "@type": "State",
            "name": "Oklahoma"
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Adam James Tulsa Business Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transforming communities across Oklahoma through innovative business solutions, 
              mental health advocacy, and strategic investments that create lasting positive impact.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The Adam James Tulsa business portfolio represents more than a decade of strategic 
                entrepreneurship, innovative problem-solving, and unwavering commitment to community 
                development. Each venture within our diverse portfolio addresses critical needs 
                within Oklahoma's business landscape while creating sustainable value for clients, 
                stakeholders, and the broader community.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                From corporate housing solutions that support Oklahoma's growing business sector 
                to comprehensive mental health services that address critical community needs, 
                every business venture reflects our core mission: transforming lives and communities 
                through excellence, innovation, and social responsibility.
              </p>
            </div>
          </section>

          {/* Core Business Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Business Divisions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Service-Based Businesses */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Service Excellence</h3>
                <div className="space-y-6">
                  
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Corporate Housing Solutions</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Premier corporate housing services designed to meet the evolving needs of 
                          businesses operating in Tulsa and throughout Oklahoma. Our comprehensive 
                          approach combines luxury accommodations with personalized service.
                        </p>
                        <Link 
                          href="/services/corporate-housing" 
                          className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Mental Health Services</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Culturally sensitive mental health programs that address the unique challenges 
                          facing Oklahoma communities. Our innovative approach combines evidence-based 
                          treatment with community-centered care delivery.
                        </p>
                        <Link 
                          href="/services/mental-health" 
                          className="text-green-600 font-medium hover:text-green-700 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Consulting</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Strategic business consulting services that help entrepreneurs and established 
                          companies achieve breakthrough results through customized solutions and 
                          proven methodologies.
                        </p>
                        <Link 
                          href="/services/business-consulting" 
                          className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Investment & Development */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Investment & Development</h3>
                <div className="space-y-6">
                  
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Real Estate Development</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Strategic real estate investments and development projects that revitalize 
                          communities while generating sustainable returns. Focus on mixed-use 
                          developments that enhance community livability.
                        </p>
                        <Link 
                          href="/services/real-estate" 
                          className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Investment Strategy</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Sophisticated investment strategies that balance risk and return while 
                          creating value for clients and communities. Expertise in both traditional 
                          and alternative investment vehicles.
                        </p>
                        <Link 
                          href="/services/investment-strategy" 
                          className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Consulting</h4>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Cutting-edge innovation consulting that helps traditional businesses 
                          adapt to changing markets through technology adoption, process 
                          optimization, and strategic transformation.
                        </p>
                        <Link 
                          href="/services/innovation-consulting" 
                          className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* Success Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Impact Across Oklahoma
            </h2>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Businesses Served</div>
                  <p className="text-sm text-blue-100 mt-2">
                    From startups to Fortune 500 companies across Oklahoma
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-blue-100">Lives Impacted</div>
                  <p className="text-sm text-blue-100 mt-2">
                    Through mental health services and community programs
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-bold mb-2">$50M+</div>
                  <div className="text-blue-100">Investment Value</div>
                  <p className="text-sm text-blue-100 mt-2">
                    In community development and business growth initiatives
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-blue-100">Communities</div>
                  <p className="text-sm text-blue-100 mt-2">
                    Across the greater Tulsa metropolitan area
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Business Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Business Philosophy
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                At the foundation of every Adam James Tulsa business venture lies a commitment 
                to sustainable value creation that extends far beyond traditional profit metrics. 
                We believe that true business success is measured not only by financial performance 
                but by the positive impact created within the communities we serve.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                This philosophy drives our approach to business development, client relationships, 
                and community engagement. Every project, every service, and every investment 
                decision is evaluated through the lens of long-term sustainability, ethical 
                responsibility, and positive social impact.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our integrated approach enables synergies across business divisions, creating 
                value that exceeds the sum of individual parts. For example, our real estate 
                development projects often incorporate spaces for mental health services, 
                while our business consulting work helps clients develop more socially 
                responsible practices that benefit their communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every business decision is guided by unwavering ethical standards 
                  and transparent communication with all stakeholders.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous innovation drives our ability to solve complex problems 
                  and create new opportunities for growth and impact.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sustainable community development is central to our mission, 
                  creating lasting positive change that benefits future generations.
                </p>
              </div>

            </div>
          </section>

          {/* Industry Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Industry Expertise and Specializations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Primary Industries</h3>
                <div className="space-y-4">
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Healthcare & Mental Health</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Comprehensive mental health service delivery, healthcare innovation, 
                        and wellness program development across urban and rural communities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real Estate & Development</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Commercial and residential development, property management, 
                        and strategic real estate investment across Oklahoma markets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technology & Innovation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Digital transformation consulting, technology integration, 
                        and innovation strategy for traditional and emerging businesses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hospitality & Corporate Services</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Corporate housing solutions, executive relocation services, 
                        and premium hospitality experiences for business travelers.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Specialized Services</h3>
                <div className="space-y-4">
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Leadership Development</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Executive coaching, leadership training programs, and organizational 
                        development initiatives for emerging and established leaders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Strategic Planning</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Comprehensive strategic planning, market analysis, and business 
                        development strategies for companies across multiple industries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Market Expansion</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Geographic expansion strategies, market entry analysis, and 
                        growth acceleration programs for regional and national companies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Investment Advisory</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Portfolio management, alternative investments, and strategic 
                        investment guidance for individuals and institutional clients.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* Partnership Network */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Strategic Partnerships and Collaborations
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                The success of Adam James Tulsa's business portfolio is amplified through 
                strategic partnerships with leading organizations across Oklahoma and beyond. 
                These collaborations enable us to leverage complementary expertise, expand 
                our service capabilities, and create more comprehensive solutions for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Healthcare Systems</h4>
                <p className="text-sm text-gray-600">
                  Partnerships with major healthcare providers to expand mental health 
                  service delivery across Oklahoma.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Educational Institutions</h4>
                <p className="text-sm text-gray-600">
                  Collaborations with universities and colleges to develop leadership 
                  and entrepreneurship programs.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Technology Partners</h4>
                <p className="text-sm text-gray-600">
                  Strategic alliances with technology companies to drive innovation 
                  and digital transformation initiatives.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Community Organizations</h4>
                <p className="text-sm text-gray-600">
                  Ongoing partnerships with nonprofits and community groups to 
                  maximize social impact and community benefit.
                </p>
              </div>

            </div>
          </section>

          {/* Future Vision */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Vision for the Future
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Looking ahead, the Adam James Tulsa business portfolio continues to evolve 
                in response to emerging opportunities and changing community needs. Our 
                strategic vision encompasses both organic growth within existing business 
                lines and selective expansion into new areas that align with our core 
                mission of positive community impact.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Planned initiatives include scaling successful service models to new 
                geographic markets, developing innovative technology solutions that 
                enhance service delivery, and creating new partnership structures that 
                amplify our collective impact across Oklahoma and the broader region.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Central to our future vision is the continued integration of sustainability 
                principles, social responsibility, and community engagement into every aspect 
                of our business operations. We envision a future where business success and 
                community prosperity are inseparably linked, creating a model for ethical 
                entrepreneurship that can be replicated across diverse markets and industries.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Partner with Adam James Tulsa
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              Whether you're seeking business consulting, exploring investment opportunities, 
              or looking to make a positive impact in your community, we invite you to 
              explore partnership possibilities with our diverse business portfolio.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/services" 
                className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}