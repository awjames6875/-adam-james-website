import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Adam James Tulsa Business Solutions',
  description: 'Explore comprehensive business services from Adam James Tulsa including corporate housing, mental health services, business consulting, and more.',
  openGraph: {
    title: 'Services - Adam James Tulsa Business Solutions',
    description: 'Explore comprehensive business services from Adam James Tulsa including corporate housing, mental health services, business consulting, and more.',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: "Corporate Housing",
      description: "Premium furnished accommodations for business travelers and relocating professionals throughout Tulsa.",
      features: ["Fully furnished units", "Prime locations", "Flexible terms", "24/7 support"],
      icon: "🏢",
      link: "/services/corporate-housing",
      color: "blue"
    },
    {
      title: "Mental Health Services",
      description: "Comprehensive mental health support with culturally sensitive, accessible care for all communities.",
      features: ["Licensed therapists", "Crisis support", "Group therapy", "Telehealth options"],
      icon: "🧠",
      link: "/services/mental-health",
      color: "green"
    },
    {
      title: "Business Consulting",
      description: "Strategic consulting services powered by AI-driven insights to accelerate your business growth.",
      features: ["Growth strategy", "Market analysis", "Process optimization", "Digital transformation"],
      icon: "📈",
      link: "/services/business-consulting",
      color: "purple"
    },
    {
      title: "Real Estate",
      description: "Expert real estate services covering residential, commercial, and investment properties in Tulsa.",
      features: ["Property acquisition", "Investment analysis", "Market expertise", "Portfolio management"],
      icon: "🏠",
      link: "/services/real-estate",
      color: "orange"
    },
    {
      title: "Investment Strategy",
      description: "Sophisticated investment strategies tailored to your financial goals and risk tolerance.",
      features: ["Portfolio design", "Risk assessment", "Market research", "Performance tracking"],
      icon: "💰",
      link: "/services/investment-strategy",
      color: "emerald"
    },
    {
      title: "Leadership Coaching",
      description: "Executive coaching to develop leadership skills and drive organizational success.",
      features: ["Executive coaching", "Team development", "Leadership assessment", "Success planning"],
      icon: "👥",
      link: "/services/leadership-coaching",
      color: "indigo"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive business solutions designed to drive growth, enhance well-being, and create lasting success for individuals and organizations across Tulsa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.link}
                    className={`inline-block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                      service.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                      service.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                      service.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700 text-white' :
                      service.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' :
                      'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Adam James Tulsa?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Excellence</h3>
              <p className="text-gray-600">
                Years of successful outcomes and satisfied clients across all service areas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation-Driven</h3>
              <p className="text-gray-600">
                Cutting-edge solutions that leverage technology and data for superior results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Deep commitment to Tulsa's growth and the success of our local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals. Contact us today for a consultation.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </Link>
              <Link
                href="/about"
                className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}