import React from 'react';
import Link from 'next/link';
import { generateInternalLinks } from '@/lib/seo-config';

interface InternalLinkingProps {
  currentPage: string;
  pageType: 'location' | 'service' | 'business' | 'blog' | 'general';
  className?: string;
  maxLinks?: number;
}

interface RelatedPagesProps {
  currentLocation?: string;
  showSimilarLocations?: boolean;
  showServices?: boolean;
  showBusinesses?: boolean;
  className?: string;
}

// Strategic internal linking component
export const InternalLinking: React.FC<InternalLinkingProps> = ({
  currentPage,
  pageType,
  className = '',
  maxLinks = 6,
}) => {
  const links = generateInternalLinks(currentPage, pageType).slice(0, maxLinks);
  
  if (links.length === 0) return null;

  return (
    <nav className={`internal-links ${className}`} aria-label="Related pages">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Explore More Adam James Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="block p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all duration-200"
          >
            <span className="text-blue-600 font-medium hover:text-blue-800">
              {link.anchor}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

// Related pages component for location-specific linking
export const RelatedPages: React.FC<RelatedPagesProps> = ({
  currentLocation,
  showSimilarLocations = true,
  showServices = true,
  showBusinesses = true,
  className = '',
}) => {
  const locationLinks = [
    { url: '/locations/downtown-tulsa', name: 'Downtown Tulsa', description: 'Arts District and Central Business District services' },
    { url: '/locations/midtown-tulsa', name: 'Midtown Tulsa', description: 'Brookside and Cherry Street business solutions' },
    { url: '/locations/south-tulsa', name: 'South Tulsa', description: 'Premium residential and business services' },
    { url: '/locations/broken-arrow', name: 'Broken Arrow', description: 'Growing business community support' },
    { url: '/locations/jenks', name: 'Jenks', description: 'Riverwalk and residential business services' },
    { url: '/locations/bixby', name: 'Bixby', description: 'Emerging market business opportunities' },
  ].filter(link => !currentLocation || !link.url.includes(currentLocation));

  const serviceLinks = [
    { url: '/services/corporate-housing', name: 'Corporate Housing', description: 'Premium furnished accommodations for business travelers' },
    { url: '/services/mental-health', name: 'Mental Health Services', description: 'Comprehensive therapy and wellness programs' },
    { url: '/services/business-consulting', name: 'Business Consulting', description: 'Strategic planning and growth advisory' },
    { url: '/services/real-estate', name: 'Real Estate Investment', description: 'Property investment and development services' },
    { url: '/services/executive-coaching', name: 'Executive Coaching', description: 'Leadership development and performance optimization' },
  ];

  const businessLinks = [
    { url: '/businesses/adamj-holdings', name: 'AdamJ Holdings LLC', description: 'Investment and business management company' },
    { url: '/businesses/tulsa-therapeutic-services', name: 'Tulsa Therapeutic Services', description: 'Mental health and wellness provider' },
    { url: '/businesses/tulsa-corporate-housing', name: 'Tulsa Corporate Housing', description: 'Premium temporary accommodations' },
  ];

  return (
    <section className={`related-pages py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Discover Adam James Services Across Oklahoma
        </h2>
        
        {showSimilarLocations && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Other Tulsa Area Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationLinks.slice(0, 6).map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all duration-200"
                >
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{link.name}</h4>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {showServices && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Professional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-green-300 transition-all duration-200"
                >
                  <h4 className="text-lg font-semibold text-green-600 mb-2">{link.name}</h4>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {showBusinesses && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Companies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all duration-200"
                >
                  <h4 className="text-lg font-semibold text-purple-600 mb-2">{link.name}</h4>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Contextual internal links for content
export const ContextualLinks: React.FC<{ links: Array<{ url: string; text: string; }> }> = ({ links }) => {
  if (links.length === 0) return null;

  return (
    <div className="contextual-links inline-flex flex-wrap gap-2 my-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="inline-flex items-center px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
        >
          {link.text}
          <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      ))}
    </div>
  );
};

// Service area quick links
export const ServiceAreaLinks: React.FC<{ currentLocation?: string }> = ({ currentLocation }) => {
  const serviceAreas = [
    { name: 'Tulsa', url: '/locations/downtown-tulsa', popular: true },
    { name: 'Broken Arrow', url: '/locations/broken-arrow', popular: true },
    { name: 'Jenks', url: '/locations/jenks', popular: true },
    { name: 'Bixby', url: '/locations/bixby', popular: true },
    { name: 'Owasso', url: '/locations/owasso', popular: false },
    { name: 'Sand Springs', url: '/locations/sand-springs', popular: false },
    { name: 'Sapulpa', url: '/locations/sapulpa', popular: false },
    { name: 'Glenpool', url: '/locations/glenpool', popular: false },
    { name: 'Claremore', url: '/locations/claremore', popular: false },
    { name: 'Catoosa', url: '/locations/catoosa', popular: false },
  ].filter(area => !currentLocation || !area.url.includes(currentLocation));

  return (
    <div className="service-area-links bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Adam James Serves These Oklahoma Communities
      </h3>
      <div className="flex flex-wrap gap-2">
        {serviceAreas.map((area, index) => (
          <Link
            key={index}
            href={area.url}
            className={`inline-block px-3 py-1 text-sm rounded-full transition-colors ${
              area.popular 
                ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {area.name}
          </Link>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Click any location to learn about Adam James&apos;s services in that area
      </p>
    </div>
  );
};

export default InternalLinking;