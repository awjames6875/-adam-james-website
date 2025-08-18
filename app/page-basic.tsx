import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adam James Tulsa - Business Leader & Entrepreneur',
  description: 'Adam James is a leading business entrepreneur in Tulsa, Oklahoma, specializing in corporate housing, mental health services, and strategic business consulting.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adam James
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Tulsa Business Leader & Entrepreneur
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-100">
              Driving innovation and growth in Tulsa, Oklahoma. Building successful businesses, 
              creating opportunities, and empowering the next generation of entrepreneurs through 
              strategic leadership and community investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/businesses" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Explore My Businesses
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-gray-600">Businesses Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Jobs Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$10M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premier Services in Tulsa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From corporate housing solutions to mental health services, Adam James provides 
              comprehensive business solutions tailored to meet the unique needs of Tulsa and 
              Oklahoma businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Corporate Housing</h3>
              <p className="text-gray-600 mb-4">
                Premium furnished apartment solutions for business travelers and relocating 
                professionals in the Tulsa metro area.
              </p>
              <div className="text-blue-600 font-semibold">Starting at $85/night</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Mental Health Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive therapeutic and wellness services for individuals, families, 
                and organizations throughout Oklahoma.
              </p>
              <div className="text-blue-600 font-semibold">Starting at $120/session</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic business consulting and investment services to help Tulsa entrepreneurs 
                and businesses achieve sustainable growth.
              </p>
              <div className="text-blue-600 font-semibold">Starting at $200/hour</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Tulsa Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Tulsa, Oklahoma?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Tulsa, Oklahoma represents the heartland of American entrepreneurship and innovation. 
                As a lifelong Tulsan and business leader, Adam James is deeply committed to fostering 
                economic growth, creating meaningful employment opportunities, and building a stronger, 
                more prosperous future for our community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From our rich Oil Capital heritage to today&apos;s emerging technology sector, Tulsa 
                continues to evolve as a dynamic hub for business excellence.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Economic Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Jobs Created</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$10M+</div>
                    <div className="text-sm text-gray-600">Local Investment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Partner with Adam James to unlock your business potential in Tulsa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule Consultation
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}