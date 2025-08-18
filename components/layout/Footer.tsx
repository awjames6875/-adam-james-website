import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn, formatPhoneNumber, formatPhoneForLink } from '@/lib/utils';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Corporate Housing', href: '/services/corporate-housing' },
      { label: 'Mental Health Services', href: '/services/mental-health' },
      { label: 'Business Consulting', href: '/services/business-consulting' },
      { label: 'Real Estate', href: '/services/real-estate' },
    ],
  },
  {
    title: 'Businesses',
    links: [
      { label: 'AdamJ Holdings LLC', href: '/businesses/adamj-holdings' },
      { label: 'Tulsa Therapeutic Services', href: '/businesses/tulsa-therapeutic-services' },
      { label: 'Tulsa Corporate Housing', href: '/businesses/tulsa-corporate-housing' },
    ],
  },
  {
    title: 'Popular Locations',
    links: [
      { label: 'Downtown Tulsa', href: '/locations/downtown-tulsa' },
      { label: 'Midtown Tulsa', href: '/locations/midtown-tulsa' },
      { label: 'South Tulsa', href: '/locations/south-tulsa' },
      { label: 'Broken Arrow', href: '/locations/broken-arrow' },
      { label: 'Jenks', href: '/locations/jenks' },
      { label: 'Owasso', href: '/locations/owasso' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Adam James', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adamjamestulsa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/adamjamestulsa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/adamjamestulsa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/adamjamestulsa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.492-3.826-1.297C3.342 14.498 2.9 13.51 2.9 12.443c0-1.067.442-2.055 1.723-3.248 1.378-.805 2.529-1.297 3.826-1.297s2.448.492 3.826 1.297c1.281 1.193 1.723 2.181 1.723 3.248 0 1.067-.442 2.055-1.723 3.248-1.378.805-2.529 1.297-3.826 1.297zm7.554-9.198c-.508 0-.919-.411-.919-.919s.411-.919.919-.919.919.411.919.919-.411.919-.919.919zm3.919 2.919c0-1.297-.492-2.448-1.297-3.826C17.432 4.602 16.444 4.16 15.377 4.16c-1.067 0-2.055.442-3.248 1.723-.805 1.378-1.297 2.529-1.297 3.826s.492 2.448 1.297 3.826c1.193 1.281 2.181 1.723 3.248 1.723 1.067 0 2.055-.442 3.248-1.723.805-1.378 1.297-2.529 1.297-3.826z"/>
      </svg>
    ),
  },
];

const contactInfo = {
  phone: '(918) 555-0123',
  email: 'adam@adamjamestulsa.com',
  address: {
    street: '123 Main Street',
    suite: 'Suite 100',
    city: 'Tulsa',
    state: 'OK',
    zipCode: '74103',
  },
};

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-gray-900 text-white', className)}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/adam-james-logo-white.png"
                  alt="Adam James Tulsa Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-h4 font-bold">Adam James</h3>
                <p className="text-body-sm text-gray-300">Tulsa Business Leader</p>
              </div>
            </Link>
            
            <p className="text-body text-gray-300 mb-6 leading-relaxed">
              Leading Tulsa&apos;s business community with innovative solutions in corporate housing, 
              mental health services, and strategic business consulting. Committed to excellence 
              and community growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${formatPhoneForLink(contactInfo.phone)}`}
                  className="text-body text-gray-300 hover:text-white transition-colors"
                >
                  {formatPhoneNumber(contactInfo.phone)}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-body text-gray-300 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-body text-gray-300">
                  <div>{contactInfo.address.street}</div>
                  <div>{contactInfo.address.suite}</div>
                  <div>
                    {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-h6 font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="text-h5 font-semibold mb-3">Stay Updated</h4>
            <p className="text-body text-gray-300 mb-4">
              Get the latest insights on Tulsa business and market trends.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-body-sm text-gray-400">
              © {currentYear} Adam James Tulsa. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-body-sm text-gray-400">Follow:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Follow Adam James on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;