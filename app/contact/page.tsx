import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Adam James - Get In Touch Today',
  description: 'Contact Adam James for business inquiries, corporate housing, mental health services, or consulting. Multiple ways to reach our Tulsa-based team.',
  openGraph: {
    title: 'Contact Adam James - Get In Touch Today',
    description: 'Contact Adam James for business inquiries, corporate housing, mental health services, or consulting. Multiple ways to reach our Tulsa-based team.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Contact Adam James
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to transform your business or explore opportunities? Let's connect and discuss how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <ContactForm variant="inline" showBudget={false} />

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Direct Contact */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch Directly</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(918) 555-0123</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 8:00 AM - 6:00 PM CST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@adamjamestulsa.com</p>
                      <p className="text-sm text-gray-500">We respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-600">
                        123 Main Street<br />
                        Tulsa, OK 74103
                      </p>
                      <p className="text-sm text-gray-500">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business-Specific Contact */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service-Specific Contact</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Corporate Housing</h4>
                    <p className="text-gray-600">housing@integritystone.com</p>
                    <p className="text-sm text-gray-500">(918) 555-0124</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Mental Health Services</h4>
                    <p className="text-gray-600">care@safeharbormh.com</p>
                    <p className="text-sm text-gray-500">(918) 555-0125</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Business Consulting</h4>
                    <p className="text-gray-600">consulting@growthgenix.ai</p>
                    <p className="text-sm text-gray-500">(918) 555-0126</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Mental Health Support</h3>
                <p className="text-red-800 mb-3">
                  If you're experiencing a mental health crisis, please reach out immediately:
                </p>
                <div className="space-y-2 text-red-800">
                  <p><strong>Crisis Hotline:</strong> (918) 555-0127</p>
                  <p><strong>24/7 Support:</strong> Available</p>
                  <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
          <p className="text-lg text-gray-600 mb-8">
            Located in the heart of downtown Tulsa, our office is easily accessible and offers a professional environment for meetings and consultations.
          </p>
          
          {/* Placeholder for Google Maps */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-500">Interactive map will be loaded here</p>
              <p className="text-sm text-gray-400 mt-2">123 Main Street, Tulsa, OK 74103</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}