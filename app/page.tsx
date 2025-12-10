'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PersonSchema, adamJamesData } from '@/components/seo/PersonSchema';
import { LocalBusinessSchema, adamJamesBusinessData } from '@/components/seo/LocalBusinessSchema';
import ParticleTextEffect from '@/components/ui/ParticleTextEffect';

export default function Home() {
  const [showParticleEffect, setShowParticleEffect] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasViewed = sessionStorage.getItem('particle-text-animation-shown');
    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !hasViewed && !isMobile && !prefersReduced;
  });
  return (
    <>
      {/* SEO Schema Markup */}
      <PersonSchema person={adamJamesData} />
      <LocalBusinessSchema business={adamJamesBusinessData} />

      {/* Hero Section - Dribbble Inspired Premium Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Hero Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            {/*
              ⚠️ CRITICAL: Hero Video Background Implementation

              DO NOT MODIFY THESE ATTRIBUTES - All 4 are REQUIRED for proper functionality:
              • autoPlay: Starts video automatically on page load
              • muted: REQUIRED for autoPlay to work in modern browsers (Chrome, Safari, Firefox)
              • loop: Restarts video automatically when it ends (creates seamless looping)
              • playsInline: Prevents fullscreen on iOS devices (essential for mobile)

              ⚠️ Removing ANY of these attributes WILL BREAK the video background functionality.

              File Locations (DO NOT MOVE):
              • Video: /public/images/adamspeakingengagement.mp4 (12.65 MB)
              • Poster: /public/images/adam-speaking-hero.jpg (875 KB)

              For troubleshooting & documentation, see: docs/VIDEO-IMPLEMENTATION.md

              Issue History: Videos were moved to subdirectory and broke functionality.
              Resolution: Files must remain in /public/images/ root directory.
            */}
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/adam-speaking-hero.jpg"
              className="object-cover w-full h-full opacity-80"
            >
              <source src="/images/adamspeakingengagement.mp4" type="video/mp4" />
            </video>
            {/* Sophisticated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/30"></div>
          </motion.div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="flex flex-col items-center text-center">

            {/* Badge / Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Tulsa&apos;s Premier Entrepreneur</span>
            </motion.div>

            {/* Main Headline - With Particle Effect or Normal Text */}
            {!showParticleEffect ? (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
              >
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Legacy</span>.
                <br />
                Empowering <span className="italic font-serif font-light text-white/90">Community</span>.
              </motion.h1>
            ) : (
              <div className="relative w-full h-[200px] md:h-[280px] lg:h-[360px] mb-8">
                <ParticleTextEffect
                  lines={[
                    {
                      text: "Building Legacy.",
                      gradient: { from: "#60a5fa", to: "#818cf8" },
                      fontSize: 96,
                      fontWeight: "bold"
                    },
                    {
                      text: "Empowering Community.",
                      gradient: { from: "#ffffff", to: "#e0e7ff" },
                      fontSize: 96,
                      fontWeight: "300",
                      fontFamily: "Georgia, serif"
                    }
                  ]}
                  onComplete={() => {
                    setShowParticleEffect(false);
                    sessionStorage.setItem('particle-text-animation-shown', 'true');
                  }}
                />
              </div>
            )}

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: showParticleEffect ? 5.0 : 0.5 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            >
              From corporate housing to mental health advocacy, I build businesses that solve real problems and create second chances for families in Tulsa.
            </motion.p>

            {/* CTA Buttons - Glassmorphism & Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: showParticleEffect ? 5.5 : 0.7 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link href="/about" className="group">
                <div className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                  My Story
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </Link>
              <Link href="/contact" className="group">
                <div className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex items-center justify-center">
                  Let&apos;s Connect
                </div>
              </Link>
            </motion.div>

            {/* Trust Metrics - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: showParticleEffect ? 6.0 : 0.9 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl"
            >
              {[
                { label: "Families Housed", value: "500+" },
                { label: "Youth Supported", value: "1k+" },
                { label: "Businesses Built", value: "3" }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: showParticleEffect ? 6.5 : 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "500+", label: "Families Housed", delay: 0 },
              { number: "1,000+", label: "Youth Supported", delay: 0.1 },
              { number: "3", label: "Thriving Businesses", delay: 0.2 },
              { number: "15+", label: "Years in Tulsa", delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-amber-800 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: stat.delay + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-amber-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transformation Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Building Businesses That Transform Lives
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              I believe everyone deserves a second chance—including myself. From starting over with nothing to building three thriving companies in Tulsa, my journey proves that your past doesn&apos;t define your future. Today, I&apos;m committed to creating opportunities and serving our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">The Entrepreneur&apos;s Path</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From Toledo, Ohio to Tulsa, Oklahoma—I&apos;ve dedicated my career to building businesses
                that make a real difference. Every company I&apos;ve founded addresses a genuine need
                in our community, from housing to mental health to business growth.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through Integrity Corporate Housing, Safe Harbor Behavioral Health, and
                GrowthGenix.ai, I&apos;m committed to creating jobs, serving families, and
                helping Tulsa thrive. This is my home, and I&apos;m here to build something lasting.
              </p>
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Read My Full Story
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <h4 className="text-2xl font-bold mb-6 text-gray-900">Impact by the Numbers</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Families Housed</span>
                  <span className="text-2xl font-bold text-blue-600">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Youth Supported</span>
                  <span className="text-2xl font-bold text-blue-600">1,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Businesses Created</span>
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Years in Tulsa</span>
                  <span className="text-2xl font-bold text-blue-600">15+</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transformation Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Watch My Story</h3>
            <p className="text-gray-600 mb-6 text-center">
              From homelessness to building a $2 million per year business through corporate housing
            </p>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/-ZloJY6hLyM"
                title="Adam James Transformation Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Three Businesses, One Mission: Serving Our Tulsa Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each of my businesses is designed to address critical needs in our community,
              from providing safe housing to supporting mental health and driving business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity Corporate Housing",
                description: "Premium corporate housing solutions for Tulsa businesses. We provide beautiful, fully-furnished homes where productivity thrives and teams feel at home.",
                metrics: "50+ corporate clients, 200+ properties",
                gradient: "from-amber-600 to-amber-700",
                delay: 0,
                link: "/businesses/integrity-corporate-housing",
                icon: "🏠",
                image: "/images/integrity-corporate-housing.jpg"
              },
              {
                title: "Safe Harbor Mental Health",
                description: "Comprehensive mental health services supporting Tulsa families. Our caring therapeutic services help individuals and families find hope, healing, and new paths forward.",
                metrics: "1,000+ individuals served, 500+ families supported",
                gradient: "from-sky-500 to-sky-600",
                delay: 0.2,
                link: "/businesses/safe-harbor-mental-health",
                icon: "💚",
                image: "/images/safe-harbor-mental-health.jpg"
              },
              {
                title: "GrowthGenix.ai",
                description: "AI-powered business growth solutions for Tulsa companies. We help businesses leverage cutting-edge technology to streamline operations and accelerate growth.",
                metrics: "25+ businesses transformed, 300% average growth",
                gradient: "from-emerald-500 to-emerald-600",
                delay: 0.4,
                link: "/businesses/growthgenix-ai",
                icon: "🚀",
                image: "/images/growthgenix-ai.jpg"
              }
            ].map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: business.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  {business.image && (
                    <div className="mb-6 rounded-xl overflow-hidden h-48">
                      <img
                        src={business.image}
                        alt={business.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`w-12 h-12 bg-gradient-to-br ${business.gradient} rounded-xl mb-6 flex items-center justify-center text-2xl`}>
                    {business.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {business.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {business.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-4 font-medium">
                    {business.metrics}
                  </div>
                  <Link href={business.link}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block bg-gradient-to-r ${business.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer`}
                    >
                      Learn More
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tulsa Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Tulsa, Oklahoma? Because Home Is Where the Heart Is
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Tulsa, Oklahoma represents the heartland of American entrepreneurship and innovation.
                As a lifelong Tulsan and business leader, I&apos;m deeply committed to fostering
                economic growth, creating meaningful employment opportunities, and building a stronger,
                more prosperous future for our community.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                From our rich Oil Capital heritage to today&apos;s emerging technology sector, Tulsa
                continues to evolve as a dynamic hub for business excellence. This is where I
                built my businesses, raised my family, and found my purpose in serving others.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/locations/downtown-tulsa">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    Downtown Tulsa
                  </span>
                </Link>
                <Link href="/locations/midtown-tulsa">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    Midtown Tulsa
                  </span>
                </Link>
                <Link href="/locations/south-tulsa">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    South Tulsa
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Community Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        50+
                      </motion.div>
                      <div className="text-gray-600 font-medium">Jobs Created</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        $10M+
                      </motion.div>
                      <div className="text-gray-600 font-medium">Local Investment</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-amber-50"
          >
            Ready to Start Your Own Success Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed"
          >
            Every success story starts with a conversation. Whether you need business guidance,
            mental health support, or corporate housing solutions, I&apos;m here to help you build
            your future in Tulsa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-50 text-amber-900 px-10 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg cursor-pointer"
              >
                Let&apos;s Have Coffee
              </motion.div>
            </Link>
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-amber-50 text-amber-50 px-10 py-4 rounded-xl font-bold hover:bg-amber-50 hover:text-amber-900 transition-all duration-300 backdrop-blur-sm text-lg cursor-pointer"
              >
                My Story
              </motion.div>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-amber-600/30"
          >
            <p className="text-amber-200 mb-6">Connect with me on social media</p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/adamjamestulsa" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://facebook.com/adamjamestulsa" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://instagram.com/adamjamestulsa" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.492-3.826-1.297C3.342 14.498 2.9 13.51 2.9 12.443c0-1.067.442-2.055 1.723-3.248 1.378-.805 2.529-1.297 3.826-1.297s2.448.492 3.826 1.297c1.281 1.193 1.723 2.181 1.723 3.248 0 1.067-.442 2.055-1.723 3.248-1.378.805-2.529 1.297-3.826 1.297zm7.554-9.198c-.508 0-.919-.411-.919-.919s.411-.919.919-.919.919.411.919.919-.411.919-.919.919zm3.919 2.919c0-1.297-.492-2.448-1.297-3.826C17.432 4.602 16.444 4.16 15.377 4.16c-1.067 0-2.055.442-3.248 1.723-.805 1.378-1.297 2.529-1.297 3.826s.492 2.448 1.297 3.826c1.193 1.281 2.181 1.723 3.248 1.723 1.067 0 2.055-.442 3.248-1.723.805-1.378 1.297-2.529 1.297-3.826z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/5 to-transparent rounded-full"></div>
        </div>
      </section>
    </>
  );
}