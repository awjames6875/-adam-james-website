import { Metadata } from 'next'
import { PersonSchema, adamJamesData } from '@/components/seo/PersonSchema'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Story - Adam James Tulsa | From Challenges to Champion',
  description: 'The inspiring redemption story of Adam James Tulsa. Learn how second chances, determination, and community support transformed challenges into three thriving businesses serving thousands in Oklahoma.',
  keywords: 'Adam James Tulsa story, second chance entrepreneur, redemption story Tulsa, Adam James transformation, overcoming adversity Tulsa',
  openGraph: {
    title: 'My Story - Adam James Tulsa | From Challenges to Champion',
    description: 'The inspiring redemption story of Adam James Tulsa. Second chances, determination, and community support transformed challenges into success.',
    url: 'https://adamjamestulsa.com/my-story',
    type: 'article',
    images: [
      {
        url: '/images/adam-james-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James Tulsa - Redemption Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Story - Adam James Tulsa',
    description: 'From challenges to champion - an inspiring story of second chances and transformation.',
    images: ['/images/adam-james-profile.jpg'],
  },
}

export default function MyStoryPage() {
  return (
    <>
      {/* SEO Schema Markup */}
      <PersonSchema person={adamJamesData} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section with Conference Photo */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  My Story
                </h1>
                <p className="text-2xl md:text-3xl mb-4 text-blue-200">
                  From Challenges to Champion
                </p>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Every great story has chapters of struggle, transformation, and triumph.
                  This is mine - and why I believe in second chances for everyone.
                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/adam-professional-portrait.jpg"
                  alt="Adam James - Professional Portrait"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Opening Statement */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
                Adam James builds companies that help people see themselves differently.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Three years after being homeless and living secretly at his job, Adam's companies were generating over $2 million in annual revenue. Today, he is the founder of <strong>Safe Harbor Behavioral Health</strong>, <strong>Integrity Corporate Housing</strong>, and <strong>Growthgenix.ai</strong>—and he's just getting started.
              </p>
            </div>
          </section>

          {/* The Path */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Path Here Wasn't Straight
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I grew up in <strong>Toledo, Ohio</strong>—the youngest of ten children, raised by a father who pastored for 65 years. I attended <strong>Oral Roberts University</strong>, served as a missionary in Cameroon, and later moved to Nice, France, where I worked as a translator in the hospitality industry while mastering the language.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    When my father died and September 11th changed the world, I returned home and rebuilt. I worked at Key Bank, then Merrill Lynch, then launched a real estate company worth millions. During this season, I also founded <strong>Victory Learning Academy</strong>—a charter school for at-risk youth still operating today—and started a free tax preparation program for economically disadvantaged families.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-2xl">✓</span>
                    <span className="text-gray-700"><strong>Resilience:</strong> Rebuilding after every fall</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-2xl">✓</span>
                    <span className="text-gray-700"><strong>Service:</strong> Helping others see their greatness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-2xl">✓</span>
                    <span className="text-gray-700"><strong>Innovation:</strong> Finding new ways to solve old problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-2xl">✓</span>
                    <span className="text-gray-700"><strong>Faith:</strong> Trusting the journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-2xl">✓</span>
                    <span className="text-gray-700"><strong>Identity:</strong> Knowing who you truly are</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Crash & Move to Tulsa */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Crash & The Move
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Then came the crash of 2008. I lost everything. Homeless and on food stamps, I enrolled in personal development training that removed the blind spots holding me back. I completed graduate coursework in Financial Engineering at <strong>Kent State University</strong>. And I started taking action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With my church and family divided after my father's death, I moved to <strong>Tulsa, Oklahoma</strong> to build my own legacy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In Tulsa, I became a founding member of the initiative that raised $4.5 million to build a grocery store in a food desert—work featured in <a href="https://www.washingtonpost.com/business/economy/as-dollar-stores-move-into-cities-residents-see-a-steep-downside/2019/02/15/b367aa2a-2e03-11e9-984d-9b8fba003e81_story.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Washington Post</a>. Around 2014, I pioneered the Airbnb rental arbitrage model, sharing the strategy on a podcast that helped popularize it nationwide. That innovation grew into <strong>Integrity Corporate Housing</strong>, now providing fully furnished accommodations across Tulsa, Dallas, Oklahoma City, and New York.
              </p>
            </div>
          </section>

          {/* The Fall */}
          <section className="mb-16 bg-gradient-to-r from-amber-50 to-orange-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Then Came The Fall
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  During COVID-19, I made a decision rooted in fear—misrepresenting information on a PPP loan application. I wasn't caught. I turned myself in, returned the money, and took full responsibility. In 2022, I served one year in federal prison.
                </p>

                <blockquote className="text-2xl font-semibold text-blue-900 italic border-l-4 border-blue-500 pl-6 my-8">
                  "I don't hide from this. I own it completely. Prison clarified what I was meant to build."
                </blockquote>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Today, <strong>Safe Harbor Behavioral Health</strong> provides licensed mental health services to individuals, families, and communities across Oklahoma. While the agency serves clients of all ages and backgrounds, it specializes in early childhood intervention through its signature Mind & Body Program—bringing play therapy directly into daycares, reaching children before trauma becomes crisis.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I also founded <strong>Growthgenix.ai</strong>, helping businesses scale through AI-powered agents and automations. I am currently writing my first book, <em>Identity Theft: Reclaiming Who I Am</em>—a transformational memoir about losing yourself to other people's expectations and finding the courage to take your identity back.
                </p>
              </div>
            </div>
          </section>

          {/* Vision & Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Vision & Philosophy
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My philosophy is simple: <strong>You are not guilty of the labels others have placed on you.</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In the courtroom of life, we often face a prosecutor—a voice of shame that lists every mistake, every failure, and every moment of weakness. But we also have a choice. We can choose to listen to the judge—the voice of truth that says we are free to define ourselves.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I believe that business is more than just profit; it's a vehicle for transformation. Whether it's providing a home for a traveling nurse, a safe space for a child to process trauma, or the tools for a business owner to scale, every interaction is an opportunity to help someone reclaim their time, their peace, or their identity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't just build companies; we build second chances.
              </p>
            </div>
          </section>

          {/* My Transformation Story - Video */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              My Transformation Story
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This interview captures my journey from homelessness to building a $2 million per year
                real estate investment business through short-term and corporate rentals. It's the story
                of how Integrity Corporate Housing was born from personal struggle and transformed into
                a thriving business serving hundreds of families.
              </p>
            </div>

            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/SuXFK-EXjTk"
                title="From Homeless to $2M REI Business - Adam James Transformation Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* The Journey */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Journey
            </h2>

            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Foundations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Growing up in Toledo, attending ORU, and working in France laid the groundwork for resilience and adaptability.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Building & Losing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Success in real estate and founding Victory Learning Academy, followed by the 2008 crash and homelessness.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Rebuilding in Tulsa</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Moving to Tulsa, helping raise $4.5M for a grocery store, and pioneering the Airbnb rental arbitrage model.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Accountability & Clarity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Taking responsibility for my actions during COVID and serving time in prison clarified my purpose: to help others see their own greatness.
                  </p>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="flex">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Building for Others</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Today, through Safe Harbor, Integrity Corporate Housing, and GrowthGenix.ai, I'm building platforms that empower people and solve real problems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Impact Today */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              The Impact Today
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-blue-600">
                <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700 font-semibold mb-2">Families Housed</div>
                <p className="text-sm text-gray-600">Through Integrity Corporate Housing</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-600">
                <div className="text-5xl font-bold text-green-600 mb-2">1,000+</div>
                <div className="text-gray-700 font-semibold mb-2">Lives Transformed</div>
                <p className="text-sm text-gray-600">Through Safe Harbor Mental Health</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-purple-600">
                <div className="text-5xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-700 font-semibold mb-2">Businesses Grown</div>
                <p className="text-sm text-gray-600">Through GrowthGenix.ai</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These numbers represent real people, real families, and real transformations.
                Every business I've built is designed to serve others and create opportunities.
                Because I know firsthand what it's like to need a chance, I'm committed to
                giving others that same opportunity.
              </p>
            </div>
          </section>

          {/* Why I Share My Story */}
          <section className="mb-16 bg-gradient-to-r from-blue-900 to-indigo-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-lg text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why I Share My Story
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-blue-100 leading-relaxed mb-6">
                  I share my story not because I'm proud of my past, but because I'm proud of
                  where second chances can lead. I share it because:
                </p>

                <ul className="text-lg text-blue-100 space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-2xl">→</span>
                    <span><strong>You Need to Hear It:</strong> If you're struggling, you need to know that transformation is possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-2xl">→</span>
                    <span><strong>Second Chances Work:</strong> When given the opportunity and support, people can achieve incredible things</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-2xl">→</span>
                    <span><strong>Labels Don't Define You:</strong> Your past doesn't determine your future unless you let it</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-2xl">→</span>
                    <span><strong>Community Matters:</strong> We need to support each other and believe in redemption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-2xl">→</span>
                    <span><strong>It's Never Too Late:</strong> No matter where you are, you can start today</span>
                  </li>
                </ul>
              </div>


              <p className="text-2xl font-bold text-blue-900 mb-6">
                If I can do it, so can you.
              </p>
            </div>
          </section>

          {/* Beyond Business - Living Life Fully */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Beyond Business - Living Life Fully
            </h2>

            <div className="prose prose-lg max-w-none mb-12 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Success isn't just about business—it's about living a full, balanced life.
                When I'm not building businesses or serving our community, you'll find me
                pursuing my passions around the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Salsa Dancing */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gradient-to-br from-red-100 to-pink-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">💃</span>
                  </div>
                  {/* Photo placeholder - user will add: /images/adam-salsa-dancing.jpg */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Salsa Dancing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The rhythm, the passion, the connection—salsa dancing is my way of
                    staying energized and connected to different cultures.
                  </p>
                </div>
              </div>

              {/* Skiing */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">⛷️</span>
                  </div>
                  {/* Photo placeholder - user will add: /images/adam-skiing.jpg */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Skiing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    There's nothing like the rush of carving down a mountain. Skiing teaches
                    me to embrace challenges and enjoy the journey.
                  </p>
                </div>
              </div>

              {/* Brazilian Jiu-Jitsu */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-indigo-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🥋</span>
                  </div>
                  {/* Photo placeholder - user will add: /images/adam-bjj.jpg */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Brazilian Jiu-Jitsu</h3>
                  <p className="text-gray-600 leading-relaxed">
                    BJJ is more than a martial art—it's a philosophy of continuous improvement,
                    resilience, and respect that applies to every area of life.
                  </p>
                </div>
              </div>

              {/* Travel */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/paris-photo.jpg"
                    alt="Adam James in Paris - I miss my second home"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">I miss my second home</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">World Travel</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Exploring new cultures and perspectives around the world enriches my
                    understanding and brings fresh ideas to my businesses.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you need business guidance, support, or just want to connect with someone
              who believes in second chances, I'm here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get In Touch
              </Link>
              <Link
                href="/businesses"
                className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Explore My Businesses
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Follow my journey on <a href="https://linkedin.com/in/adamjamestulsa" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
              {' '}<a href="https://facebook.com/adamjamestulsa" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>,
              and <a href="https://instagram.com/adamjamestulsa" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </section>

        </div >
      </div >
    </>
  )
}
