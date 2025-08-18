import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Adam James - Tulsa Entrepreneur & Business Leader',
  description: 'Learn about Adam James, a leading entrepreneur in Tulsa, Oklahoma. Discover his journey, businesses, and commitment to transforming lives through innovative ventures.',
  openGraph: {
    title: 'About Adam James - Tulsa Entrepreneur & Business Leader',
    description: 'Learn about Adam James, a leading entrepreneur in Tulsa, Oklahoma. Discover his journey, businesses, and commitment to transforming lives through innovative ventures.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            About Adam James
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Transforming Lives Through Innovation, Leadership, and Community Impact in Tulsa, Oklahoma
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Adam James has established himself as one of Tulsa's most innovative entrepreneurs, 
                building a diverse portfolio of businesses that address critical needs in corporate 
                housing, mental health services, and business consulting. With over a decade of 
                experience in the Oklahoma market, Adam James Tulsa represents excellence in 
                entrepreneurship and community leadership.
              </p>
              
              <p className="text-gray-700 mb-6">
                Born and raised in Oklahoma, Adam James developed a deep understanding of the 
                unique challenges and opportunities within the Tulsa business ecosystem. His 
                entrepreneurial journey began with a simple yet powerful vision: to create 
                businesses that not only generate success but also contribute meaningfully to 
                the community's growth and well-being.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Core Philosophy</h3>
              <p className="text-gray-700 mb-6">
                The Adam James Tulsa approach to business is built on three fundamental pillars:
                innovation that addresses real market needs, sustainable growth that benefits 
                all stakeholders, and community impact that creates lasting positive change. 
                This philosophy has guided every business decision and expansion, resulting in 
                a portfolio of companies that serve thousands of clients across Oklahoma.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Business Portfolio</h3>
              <p className="text-gray-700 mb-6">
                Today, Adam James Tulsa encompasses three primary business verticals. Integrity 
                Corporate Housing provides premium accommodations for business travelers and 
                relocating professionals throughout the Tulsa metropolitan area. Safe Harbor 
                Mental Health offers comprehensive mental health services with a focus on 
                accessibility and cultural sensitivity. GrowthGenix.ai represents the future 
                of business consulting, leveraging artificial intelligence to provide data-driven 
                insights for growth and optimization.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Community Leadership</h3>
              <p className="text-gray-700 mb-6">
                Beyond business success, Adam James is deeply committed to Tulsa's economic 
                development and community well-being. He serves on several local boards and 
                regularly mentors emerging entrepreneurs, sharing the knowledge and experience 
                that has made Adam James Tulsa synonymous with business excellence and ethical 
                leadership in the region.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vision for the Future</h3>
              <p className="text-gray-700 mb-6">
                Looking ahead, Adam James envisions Tulsa as a leading hub for innovation and 
                entrepreneurship in the Midwest. Through strategic business expansion, mentorship 
                programs, and community investment, the Adam James Tulsa enterprise continues to 
                grow while maintaining its core commitment to creating positive impact. The goal 
                is not just business success, but contributing to Tulsa's emergence as a premier 
                destination for businesses, families, and individuals seeking opportunity and growth.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Personal Values</h3>
              <p className="text-gray-700 mb-6">
                The success of Adam James Tulsa is built on a foundation of integrity, innovation, 
                and impact. These values guide every business decision, client interaction, and 
                community engagement. Whether developing new corporate housing solutions, expanding 
                mental health services, or implementing cutting-edge AI consulting tools, Adam James 
                remains committed to excellence and ethical business practices that benefit all 
                stakeholders.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Recognition and Achievements</h3>
              <p className="text-gray-700 mb-6">
                Adam James has been recognized by numerous organizations for his contributions to 
                Tulsa's business community. His companies have received awards for innovation, 
                customer service, and community impact. The Adam James Tulsa brand has become 
                synonymous with quality, reliability, and forward-thinking business solutions 
                that address real market needs while creating sustainable value for clients and 
                the broader community.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-lg mb-6">
              Discover how Adam James Tulsa can help transform your business or career.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/businesses"
                className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Businesses
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}