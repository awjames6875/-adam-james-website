export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Adam James
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-primary mb-8">
            Tulsa Entrepreneur & Business Leader
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Driving innovation and growth in Tulsa, Oklahoma. Building successful businesses 
            and empowering the next generation of entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Learn More About Adam
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Businesses</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3">Business Venture 1</h4>
              <p className="text-gray-600">
                Leading innovation in the Tulsa business community with cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3">Business Venture 2</h4>
              <p className="text-gray-600">
                Creating opportunities and driving economic growth in Oklahoma.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-3">Business Venture 3</h4>
              <p className="text-gray-600">
                Building sustainable businesses that make a positive impact.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Why Tulsa?</h3>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              Tulsa, Oklahoma represents the heartland of American entrepreneurship. As a business 
              leader in this vibrant city, Adam James is committed to fostering innovation, 
              creating jobs, and building a stronger economic future for the region. From the 
              historic Oil Capital legacy to the modern tech boom, Tulsa continues to be a 
              hub for business excellence and community growth.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}