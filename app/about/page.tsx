import { Metadata } from 'next'
import Image from 'next/image'
import { PersonSchema, adamJamesData } from '@/components/seo/PersonSchema'
import { LocalBusinessSchema, adamJamesBusinessData } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'About Adam James | Owner of Integrity Corporate Housing & GrowthGenix.ai',
  description: 'Adam James is a prominent Tulsa entrepreneur and the owner of Integrity Corporate Housing and GrowthGenix.ai. Discover his journey of building successful businesses in Oklahoma.',
  keywords: 'Adam James, Adam James Tulsa, Integrity Corporate Housing Owner, GrowthGenix Founder, Tulsa Entrepreneur, Adam James Business',
  openGraph: {
    title: 'About Adam James | Tulsa Entrepreneur & Business Owner',
    description: 'Adam James is the founder of Integrity Corporate Housing and GrowthGenix.ai. Learn about his commitment to Tulsa business and community growth.',
    url: 'https://adamjamestulsa.com/about',
    images: [
      {
        url: '/images/adam-james-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam James - Tulsa Entrepreneur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Adam James | Tulsa Business Leader',
    description: 'Entrepreneur and Founder of Integrity Corporate Housing & GrowthGenix.ai in Tulsa, OK.',
    images: ['/images/adam-james-profile.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* SEO Schema Markup */}
      <PersonSchema person={adamJamesData} />
      <LocalBusinessSchema business={adamJamesBusinessData} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Adam James
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I build companies that help people see themselves differently.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Homeless to 7 Figures
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Three years after being homeless and living secretly at my job, my companies were generating 7 figures in annual revenue. Today, I am the founder of <strong>Safe Harbor Behavioral Health</strong>, <strong>Integrity Corporate Housing</strong>, and <strong>Growthgenix.ai</strong>—and I&apos;m scaling all three.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  3 Companies
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  150+ Children Served
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  13+ Properties Managed
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="aspect-[4/3] rounded-lg mb-6 overflow-hidden shadow-xl">
                <Image
                  src="/images/adam-professional-portrait.jpg"
                  alt="Adam James - Professional Portrait"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adam James</h3>
                <p className="text-gray-600">Founder & Entrepreneur</p>
                <p className="text-gray-600">Tulsa, Oklahoma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Life */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Early Life & Background
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I grew up in Toledo, Ohio—the youngest of ten children, raised by a father who pastored for 65 years. I attended Oral Roberts University, served as a missionary in Cameroon, and later moved to Nice, France, where I worked as a translator in the hospitality industry while mastering the language.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When my father died and September 11th changed the world, I returned home and rebuilt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building & Losing It All */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Building & Losing It All
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I worked at Key Bank, then Merrill Lynch, then launched a real estate company worth millions. During this season, I also founded <strong>Victory Learning Academy</strong>—a charter school for at-risk youth still operating today—and started a free tax preparation program for economically disadvantaged families.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold">
                Then came the crash of 2008. I lost everything.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homeless and on food stamps, I enrolled in personal development training that removed the blind spots holding me back. I completed graduate coursework in Financial Engineering at Kent State University. And I started taking action.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With my church and family divided after my father&apos;s death, I moved to Tulsa, Oklahoma to build my own legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tulsa Impact */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Tulsa Impact
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In Tulsa, I became a founding member of the initiative that raised <strong>$4.5 million</strong> to build a grocery store in North Tulsa&apos;s food desert. That store is now open and serving the community—work featured in <em>The Washington Post</em> and <em>Tulsa World</em>.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In 2015, I introduced the Airbnb rental arbitrage model on a podcast—<strong>the first documented case</strong> of the strategy being taught publicly. That innovation grew into <strong>Integrity Corporate Housing</strong>, now managing over 13 properties across Tulsa, Dallas, Oklahoma City, and New York. <strong>At least 15 companies have launched directly from my coaching and mentorship</strong> in this space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Transformation Story - Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              My Transformation Story
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Watch my interview about going from homelessness to building a 7-figure real estate business through corporate housing and short-term rentals.
              </p>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/SuXFK-EXjTk"
                title="From Homeless to $2M REI Business - Adam James"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* The Fall & The Classroom */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              The Fall & The Classroom
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold">
                Then came the fall.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                During COVID-19, I made a decision rooted in fear—misrepresenting information on a PPP loan application. I wasn&apos;t caught. I turned myself in, returned the money, and took full responsibility. In 2022, I served one year in federal prison.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-semibold">
                But prison became the classroom that changed everything.
              </p>
              <div className="bg-slate-100 p-8 rounded-2xl border-l-4 border-blue-900 mb-8">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  I voluntarily enrolled in RDAP—the Residential Drug Abuse Program—even though I had never taken a drug in my life. I wanted to understand addiction from the inside out, and what I discovered transformed my entire mission.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Addiction isn&apos;t just about substances. It&apos;s about how people see themselves. It&apos;s about not having the tools to deal with feelings, stress, and trauma.
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Inside those walls, I met murderers. Drug dealers. Men who had done terrible things. And I realized something profound: most of them weren&apos;t evil—they were untreated. They had never been given tools to process their emotions. Men are taught to suppress what they feel, and when feelings have nowhere to go, they turn into violence, anger, and destruction.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                That experience planted a seed. What if these tools weren&apos;t just available in prison? What if everyone could access them—before they made the mistakes that landed them here?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Harbor Is Born */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Safe Harbor Is Born
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When I walked out of federal prison, I hit the ground running. I dove into AI and technology, creating a successful app for behavioral health agencies that transformed how staff operated. And from everything I&apos;d witnessed inside—the unmet needs, the untreated pain, the men who never learned how to feel—<strong>Safe Harbor Behavioral Health</strong> was born.
              </p>
              <div className="bg-blue-50 p-8 rounded-2xl mb-8">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  <strong>The results speak for themselves:</strong> Safe Harbor already serves over <strong>150 children</strong> and is completing its final phase of licensing—making it one of the fastest-growing behavioral health agencies in Oklahoma before even being fully licensed.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through the signature <strong>Mind & Body Program</strong>, Safe Harbor brings play therapy and mental health tools directly into daycares, nonprofits, and boxing gyms—reaching children and adults before trauma becomes crisis.
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold">
                The mission is simple: when you see yourself better, you do better. And if we can teach kids how to deal with stress, anxiety, and trauma early, they won&apos;t have to make the same mistakes I made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Businesses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Current Ventures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Safe Harbor Behavioral Health */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe Harbor Behavioral Health</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                One of the fastest-growing behavioral health agencies in Oklahoma. Serving over 150 children through the Mind & Body Program in daycares, nonprofits, and boxing gyms.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> 150+ children served
              </div>
            </div>

            {/* Integrity Corporate Housing */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity Corporate Housing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Managing 13+ properties across Tulsa, Dallas, Oklahoma City, and New York. Pioneer of the Airbnb rental arbitrage model—at least 15 companies launched from my mentorship.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> 13+ properties, 15+ companies launched
              </div>
            </div>

            {/* GrowthGenix.ai */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growthgenix.ai</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Helping businesses scale through AI-powered agents and automations. Transforming how companies operate and grow in the digital age.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Focus:</strong> AI agents & business automation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Book */}
      <section className="py-20 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Identity Theft: Reclaiming Who I Am
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I&apos;m currently writing my first book—a transformational memoir about losing yourself to other people&apos;s expectations and finding the courage to take your identity back.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              My mission is full circle: from felon to founder to someone who opens doors for others.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Philosophy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My philosophy is simple: <strong>knowledge without action is just an insight. Action is the catalyst for transformation.</strong>
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Everything I build exists for the same reason: to give people the space, tools, and opportunity to see their own greatness—not who the world says they are, but who they&apos;ve always been.
              </p>
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-blue-900">
                <p className="text-xl text-gray-800 italic leading-relaxed">
                  &ldquo;I don&apos;t fix people. I just clean their glasses so they can see themselves differently. That&apos;s all I do—I remind people who they are.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mind & Body Program CTA */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Bring the Mind & Body Program to Your Organization
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                Interested in bringing the <strong>Mind & Body Program</strong> to your daycare, nonprofit, gym, or organization? Contact Safe Harbor Behavioral Health to learn how you can join the mission.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                We&apos;re reaching children and adults <em>before trauma becomes crisis</em>—teaching them the tools to process emotions, handle stress, and see themselves differently.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  Contact Safe Harbor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you&apos;re interested in mental health services, corporate housing, AI solutions, or just want to have a conversation—I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/businesses"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore My Businesses
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}