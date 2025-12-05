import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Safe Harbor Mental Health | Comprehensive Mental Health Services in Tulsa',
  description: 'Safe Harbor Mental Health provides compassionate, comprehensive mental health services to Tulsa families. Founded by Adam James Tulsa to make quality mental health care accessible to everyone.',
  keywords: 'Safe Harbor Mental Health, mental health Tulsa, therapy Tulsa, counseling Oklahoma, Adam James mental health, Tulsa mental health services',
  openGraph: {
    title: 'Safe Harbor Mental Health | Mental Health Services Tulsa',
    description: 'Compassionate mental health services for Tulsa families. Safe Harbor Mental Health makes quality care accessible.',
    url: 'https://adamjamestulsa.com/businesses/safe-harbor-mental-health',
    type: 'website',
    images: [
      {
        url: '/images/safe-harbor-mental-health.jpg',
        width: 1200,
        height: 630,
        alt: 'Safe Harbor Mental Health Tulsa',
      },
    ],
  },
}

const safeHarborBusinessData = {
  '@type': 'MedicalBusiness',
  name: 'Safe Harbor Mental Health',
  description: 'Comprehensive mental health services for Tulsa families',
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
  url: 'https://adamjamestulsa.com/businesses/safe-harbor-mental-health',
  serviceArea: {
    '@type': 'City',
    name: 'Tulsa',
  },
}

export default function SafeHarborPage() {
  return (
    <>
      <LocalBusinessSchema business={safeHarborBusinessData} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold">Mental Health Services</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Safe Harbor Mental Health
                </h1>
                <p className="text-2xl md:text-3xl mb-6 text-teal-100">
                  Your Safe Haven for Mental Wellness
                </p>
                <p className="text-xl text-teal-50 mb-8 leading-relaxed">
                  Compassionate, comprehensive mental health services helping Tulsa families 
                  navigate life's challenges with dignity, support, and hope.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors text-center shadow-lg"
                  >
                    Schedule Consultation
                  </Link>
                  <a 
                    href="tel:918-555-0100"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
                  >
                    Call: (918) 555-0100
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/safe-harbor-mental-health.jpg"
                  alt="Safe Harbor Mental Health facility in Tulsa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">1,000+</div>
                <div className="text-gray-600">Individuals Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-gray-600">Families Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                <div className="text-gray-600">Specialized Programs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-gray-600">Crisis Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission: Making Mental Health Care Accessible
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Safe Harbor Mental Health was founded with a simple but powerful mission: to provide 
              compassionate, evidence-based mental health services to every family in Tulsa who needs them.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As someone who understands the importance of support during difficult times, Adam James 
              created Safe Harbor to be a beacon of hope—a place where individuals and families can 
              find the professional care, understanding, and resources they need to heal and thrive.
            </p>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Mental Health Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Individual Therapy */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Therapy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  One-on-one counseling with licensed therapists specializing in anxiety, depression, 
                  trauma, and life transitions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Cognitive Behavioral Therapy (CBT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Trauma-Focused Therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Solution-Focused Therapy</span>
                  </li>
                </ul>
              </div>

              {/* Family Therapy */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Therapy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Strengthening family bonds through guided communication, conflict resolution, 
                  and healing from shared trauma.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Parent-Child Therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Couples Counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Blended Family Support</span>
                  </li>
                </ul>
              </div>

              {/* Group Therapy */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Group Therapy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Peer support groups led by licensed professionals covering various mental health 
                  challenges and life stages.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Anxiety & Depression Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Grief & Loss Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Life Transitions Group</span>
                  </li>
                </ul>
              </div>

              {/* Crisis Intervention */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🚨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Crisis Intervention</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  24/7 emergency mental health support for individuals experiencing acute mental 
                  health crises.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>24/7 Crisis Hotline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Emergency Assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Safety Planning</span>
                  </li>
                </ul>
              </div>

              {/* Psychiatric Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">💊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Psychiatric Services</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Medication management and psychiatric evaluations by board-certified psychiatrists.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Psychiatric Evaluations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Medication Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Treatment Plan Development</span>
                  </li>
                </ul>
              </div>

              {/* Substance Abuse Support */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Substance Abuse Support</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive support for individuals and families affected by substance use disorders.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Individual Counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Family Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Recovery Support Groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Safe Harbor */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Safe Harbor Mental Health?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Professionals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team consists of licensed therapists, psychiatrists, and counselors with 
                    extensive experience in various mental health specialties.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Evidence-Based Treatment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use proven therapeutic approaches backed by research and clinical evidence 
                    to ensure the best outcomes for our clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compassionate Care</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We treat every client with dignity, respect, and compassion, creating a safe 
                    space for healing and growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer flexible appointment times including evenings and weekends to 
                    accommodate busy schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Accepted</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We accept most major insurance plans and offer affordable self-pay options 
                    to make care accessible to everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teletherapy Available</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Can't make it to our office? We offer secure video therapy sessions from 
                    the comfort of your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Stories of Hope & Healing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-teal-600 text-5xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Safe Harbor gave me hope when I had none. The therapists truly care and helped 
                  me work through years of trauma. I'm finally living again.
                </p>
                <div className="font-semibold text-gray-900">— Jennifer M.</div>
                <div className="text-sm text-gray-500">Tulsa Resident</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-teal-600 text-5xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our family was struggling, and Safe Harbor brought us back together. The family 
                  therapy sessions changed our lives. Forever grateful.
                </p>
                <div className="font-semibold text-gray-900">— Michael R.</div>
                <div className="text-sm text-gray-500">Father of Three</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-teal-600 text-5xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I called the crisis line at my lowest point. They saved my life. The support I 
                  received was incredible, and I'm now thriving in recovery.
                </p>
                <div className="font-semibold text-gray-900">— Sarah K.</div>
                <div className="text-sm text-gray-500">Tulsa Community Member</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Your journey to better mental health starts here. Contact Safe Harbor Mental Health 
              today to schedule a consultation or learn more about our services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact"
                className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors shadow-lg"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:918-555-0100"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Call: (918) 555-0100
              </a>
            </div>

            <p className="text-sm text-teal-100">
              24/7 Crisis Support: <a href="tel:988" className="font-bold hover:underline">Call 988</a> | 
              Serving all of Tulsa, Oklahoma and surrounding areas
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
                className="text-teal-600 hover:text-teal-700 font-semibold hover:underline"
              >
                Integrity Corporate Housing →
              </Link>
              <Link 
                href="/businesses/growthgenix-ai"
                className="text-teal-600 hover:text-teal-700 font-semibold hover:underline"
              >
                GrowthGenix.ai →
              </Link>
              <Link 
                href="/my-story"
                className="text-teal-600 hover:text-teal-700 font-semibold hover:underline"
              >
                Adam's Story →
              </Link>
              <Link 
                href="/about"
                className="text-teal-600 hover:text-teal-700 font-semibold hover:underline"
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

