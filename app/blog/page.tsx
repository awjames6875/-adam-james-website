'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Blog post data - in production, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'building-successful-businesses-tulsa',
    title: 'Building Successful Businesses in Tulsa: A Strategic Guide',
    excerpt: 'Learn how Adam James Tulsa builds thriving businesses in Oklahoma. Expert insights on entrepreneurship, market opportunities, and success strategies for Tulsa business owners.',
    category: 'Business Growth',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: '/images/adam-james-business.jpg',
    featured: true
  },
  // More posts will be added as they're created
];

type Category = 'All Posts' | 'My Story' | 'Business Growth' | 'Mental Health' | 'Tulsa Community';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Posts');

  const categories: Category[] = ['All Posts', 'My Story', 'Business Growth', 'Mental Health', 'Tulsa Community'];

  const filteredPosts = activeCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Adam James Tulsa Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Insights on entrepreneurship, second chances, mental health, and building
            businesses that matter in Tulsa and beyond.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeCategory === category
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-blue-600 font-semibold text-sm">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 mx-2">•</span>
                      <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                      <span className="text-gray-400 mx-2">•</span>
                      <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Read Full Article
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Recent Posts Grid */}
        {regularPosts.length > 0 ? (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {post.category}
                        </span>
                        <span className="text-gray-400 mx-2">•</span>
                        <span className="text-gray-600 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                          Read More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Articles Coming Soon
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're working on bringing you valuable insights on entrepreneurship, second chances,
                mental health, and business growth. Check back soon!
              </p>
              <Link
                href="/my-story"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read My Story
              </Link>
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Never Miss an Update
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest insights on business, second chances, and community
            development delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </section>

        {/* Topics/Tags */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Topics</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/blog?tag=second-chances" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #SecondChances
            </Link>
            <Link href="/blog?tag=entrepreneurship" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #Entrepreneurship
            </Link>
            <Link href="/blog?tag=mental-health" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #MentalHealth
            </Link>
            <Link href="/blog?tag=tulsa" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #TulsaOklahoma
            </Link>
            <Link href="/blog?tag=business-growth" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #BusinessGrowth
            </Link>
            <Link href="/blog?tag=community" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #Community
            </Link>
            <Link href="/blog?tag=leadership" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #Leadership
            </Link>
            <Link href="/blog?tag=corporate-housing" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
              #CorporateHousing
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}

