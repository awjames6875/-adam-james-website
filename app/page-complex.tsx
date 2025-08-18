import { Metadata } from 'next';
import { 
  Hero, 
  CTASection,
  BusinessShowcase,
  ServiceCard,
  TestimonialQuote
} from '@/components';
import { generateSEOMetadata } from '@/components/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Adam James Tulsa - Business Leader & Entrepreneur',
  description: 'Adam James is a leading business entrepreneur in Tulsa, Oklahoma, specializing in corporate housing, mental health services, and strategic business consulting. Discover how Adam is driving innovation and growth in the Tulsa business community.',
  keywords: [
    'Adam James Tulsa',
    'Tulsa entrepreneur',
    'Oklahoma business leader',
    'corporate housing Tulsa',
    'mental health services Oklahoma',
    'business consulting Tulsa',
    'AdamJ Holdings',
    'Tulsa Therapeutic Services',
    'Tulsa Corporate Housing'
  ],
  canonicalUrl: '/',
  ogImage: '/images/adam-james-hero.jpg',
});

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="home"
        title="Adam James"
        subtitle="Tulsa Business Leader & Entrepreneur"
        description="Driving innovation and growth in Tulsa, Oklahoma. Building successful businesses, creating opportunities, and empowering the next generation of entrepreneurs through strategic leadership and community investment."
        primaryCTA={{
          text: "Explore My Businesses",
          href: "/businesses"
        }}
        secondaryCTA={{
          text: "Get Consultation",
          href: "/contact"
        }}
        badge="15+ Years Experience"
        stats={[
          { value: "3", label: "Businesses Founded" },
          { value: "50+", label: "Jobs Created" },
          { value: "100+", label: "Clients Served" },
          { value: "$10M+", label: "Revenue Generated" }
        ]}
      />

      {/* Featured Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h1 lg:text-display-lg font-display font-bold text-gray-900 mb-6">
              Premier Business Services in Tulsa, Oklahoma
            </h2>
            <p className="text-body-xl text-gray-600 max-w-3xl mx-auto">
              From corporate housing solutions to mental health services, Adam James provides 
              comprehensive business solutions tailored to meet the unique needs of Tulsa and 
              Oklahoma businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Corporate Housing"
              description="Premium furnished apartment solutions for business travelers and relocating professionals in the Tulsa metro area."
              features={[
                "Fully furnished luxury apartments",
                "Flexible lease terms",
                "Prime Tulsa locations",
                "24/7 concierge service",
                "Corporate billing available"
              ]}
              image="/images/corporate-housing-tulsa.jpg"
              href="/services/corporate-housing"
              badge="Most Popular"
              price={{
                starting: "$85",
                period: "night"
              }}
              variant="featured"
            />

            <ServiceCard
              title="Mental Health Services"
              description="Comprehensive therapeutic and wellness services for individuals, families, and organizations throughout Oklahoma."
              features={[
                "Individual therapy sessions",
                "Family counseling",
                "Corporate wellness programs",
                "Group therapy options",
                "Trauma-informed care"
              ]}
              image="/images/mental-health-tulsa.jpg"
              href="/services/mental-health"
              price={{
                starting: "$120",
                period: "session"
              }}
            />

            <ServiceCard
              title="Business Consulting"
              description="Strategic business consulting and investment services to help Tulsa entrepreneurs and businesses achieve sustainable growth."
              features={[
                "Strategic planning",
                "Investment advisory",
                "Market analysis",
                "Operational optimization",
                "Growth strategies"
              ]}
              image="/images/business-consulting-tulsa.jpg"
              href="/services/business-consulting"
              price={{
                starting: "$200",
                period: "hour"
              }}
            />
          </div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h1 lg:text-display-lg font-display font-bold text-gray-900 mb-6">
              Building Tulsa&apos;s Economic Future Through Innovation
            </h2>
            <p className="text-body-xl text-gray-600 max-w-3xl mx-auto">
              Through strategic leadership and innovative thinking, Adam James has founded and grown 
              multiple successful businesses that contribute to Tulsa&apos;s economic development and 
              community well-being.
            </p>
          </div>

          <div className="space-y-12">
            <BusinessShowcase
              name="AdamJ Holdings LLC"
              description="A diversified investment and business management company focused on strategic acquisitions, business development, and creating value through operational excellence in the Tulsa market."
              services={["Investment Management", "Business Acquisitions", "Strategic Planning", "Portfolio Management"]}
              image="/images/adamj-holdings-office.jpg"
              logo="/images/adamj-holdings-logo.png"
              href="/businesses/adamj-holdings"
              established="2015"
              employees="25+"
              revenue="$5M+"
              specialties={[
                "Mergers & Acquisitions",
                "Business Development",
                "Strategic Investment",
                "Operational Excellence"
              ]}
              awards={[
                "Tulsa Business Journal Best Company 2023",
                "Oklahoma Small Business Excellence Award"
              ]}
              variant="horizontal"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <BusinessShowcase
                name="Tulsa Therapeutic Services"
                description="Providing comprehensive mental health and wellness services to individuals and families throughout the Tulsa metro area with a focus on evidence-based treatment and compassionate care."
                services={["Individual Therapy", "Family Counseling", "Group Sessions", "Wellness Programs"]}
                image="/images/tulsa-therapeutic-office.jpg"
                logo="/images/tulsa-therapeutic-logo.png"
                href="/businesses/tulsa-therapeutic-services"
                established="2018"
                employees="15+"
                specialties={[
                  "Trauma-Informed Care",
                  "Cognitive Behavioral Therapy",
                  "Family Systems Therapy"
                ]}
                variant="featured"
              />

              <BusinessShowcase
                name="Tulsa Corporate Housing"
                description="Premier furnished apartment solutions for business travelers, relocating professionals, and extended stay guests in Tulsa&apos;s most desirable neighborhoods."
                services={["Furnished Apartments", "Corporate Packages", "Relocation Services", "Extended Stays"]}
                image="/images/tulsa-corporate-housing.jpg"
                logo="/images/tulsa-corporate-housing-logo.png"
                href="/businesses/tulsa-corporate-housing"
                established="2016"
                employees="12+"
                specialties={[
                  "Luxury Accommodations",
                  "Flexible Lease Terms",
                  "Concierge Services"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialQuote
            content="Adam James has been instrumental in transforming our business approach. His strategic insights and deep understanding of the Tulsa market helped us achieve growth we never thought possible. His commitment to excellence and community development is truly inspiring."
            name="Sarah Mitchell"
            title="CEO, Tulsa Tech Solutions"
            avatar="/images/testimonial-sarah-mitchell.jpg"
          />
        </div>
      </section>

      {/* Why Tulsa Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h1 lg:text-display-lg font-display font-bold text-gray-900 mb-6">
              Why Choose Adam James in Tulsa, Oklahoma?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
                  Tulsa, Oklahoma represents the heartland of American entrepreneurship and innovation. 
                  As a lifelong Tulsan and business leader, Adam James is deeply committed to fostering 
                  economic growth, creating meaningful employment opportunities, and building a stronger, 
                  more prosperous future for our community.
                </p>
                <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
                  From our rich Oil Capital heritage to today&apos;s emerging technology sector, Tulsa 
                  continues to evolve as a dynamic hub for business excellence. The city&apos;s strategic 
                  location, skilled workforce, and business-friendly environment make it an ideal place 
                  for entrepreneurs and established companies alike.
                </p>
                <p className="text-body-lg text-gray-700 leading-relaxed">
                  Through strategic investments and innovative business practices, we&apos;re helping to 
                  write the next chapter of Tulsa&apos;s success story—one that honors our past while 
                  embracing the limitless possibilities of our future.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-medium">
                <h3 className="text-h4 font-semibold text-gray-900 mb-3">Economic Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-h3 font-bold text-primary">50+</div>
                    <div className="text-body-sm text-gray-600">Jobs Created</div>
                  </div>
                  <div>
                    <div className="text-h3 font-bold text-primary">$10M+</div>
                    <div className="text-body-sm text-gray-600">Local Investment</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-medium">
                <h3 className="text-h4 font-semibold text-gray-900 mb-3">Community Focus</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-body text-gray-700">
                    <svg className="w-4 h-4 text-success mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Supporting local entrepreneurs
                  </li>
                  <li className="flex items-center text-body text-gray-700">
                    <svg className="w-4 h-4 text-success mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Investing in workforce development
                  </li>
                  <li className="flex items-center text-body text-gray-700">
                    <svg className="w-4 h-4 text-success mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Building sustainable businesses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="primary"
        title="Ready to Transform Your Business?"
        description="Partner with Adam James to unlock your business potential in Tulsa and beyond. Whether you're looking for strategic consulting, investment opportunities, or premium services, we're here to help you succeed."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Services",
          href: "/services"
        }}
        features={[
          "Free initial consultation",
          "Customized solutions",
          "Proven track record"
        ]}
      />
    </main>
  );
}