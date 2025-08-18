// SEO Configuration for Adam James Tulsa website
// Optimized for #1 Google ranking

export const SEO_CONFIG = {
  // Primary target keywords
  PRIMARY_KEYWORDS: [
    'Adam James Tulsa',
    'Adam James Oklahoma',
    'Tulsa entrepreneur Adam James',
  ],
  
  // Secondary target keywords
  SECONDARY_KEYWORDS: [
    'Oklahoma business leader',
    'corporate housing Tulsa',
    'mental health services Oklahoma',
    'business consulting Tulsa',
    'Tulsa business development',
    'real estate investment Tulsa',
  ],

  // Long-tail keywords for location pages
  LOCATION_KEYWORDS: {
    'downtown-tulsa': [
      'downtown Tulsa entrepreneur',
      'Arts District business',
      'Brady District consultant',
      'Central Business District services',
      'Greenwood District development',
    ],
    'midtown-tulsa': [
      'midtown Tulsa business leader',
      'Brookside entrepreneur',
      'Cherry Street business services',
      'Utica Square consultant',
    ],
    'south-tulsa': [
      'south Tulsa entrepreneur',
      'Jenks business services',
      'Bixby consultant',
      'Riverwalk business leader',
    ],
    'broken-arrow': [
      'Broken Arrow entrepreneur',
      'Broken Arrow business consultant',
      'Broken Arrow corporate housing',
    ],
  },

  // Semantic keywords for content optimization
  SEMANTIC_KEYWORDS: [
    'business innovation',
    'economic development',
    'community investment',
    'strategic planning',
    'wealth management',
    'property development',
    'therapeutic services',
    'corporate relocation',
    'executive coaching',
    'market analysis',
  ],

  // Content structure for optimal SEO
  CONTENT_STRUCTURE: {
    MIN_WORD_COUNT: 2000,
    KEYWORD_DENSITY: {
      primary: 1.5, // 1.5% density for primary keywords
      secondary: 1.0, // 1.0% density for secondary keywords
      semantic: 0.5, // 0.5% density for semantic keywords
    },
    INTERNAL_LINKS: {
      min: 3,
      max: 8,
      anchor_text_variation: true,
    },
    HEADINGS: {
      h1_count: 1,
      h2_min: 3,
      h2_max: 7,
      h3_min: 2,
    },
  },

  // Local SEO configuration
  LOCAL_SEO: {
    business_name: 'Adam James',
    business_type: 'Business Consultant & Entrepreneur',
    service_area: [
      'Tulsa',
      'Broken Arrow',
      'Jenks',
      'Bixby',
      'Owasso',
      'Sand Springs',
      'Sapulpa',
      'Glenpool',
      'Claremore',
      'Catoosa',
      'Collinsville',
      'Coweta',
      'Skiatook',
      'Verdigris',
      'Wagoner',
    ],
    coordinates: {
      latitude: 36.1540,
      longitude: -95.9928,
    },
    address: {
      street: '123 Main Street, Suite 100',
      city: 'Tulsa',
      state: 'OK',
      zip: '74103',
      country: 'US',
    },
    contact: {
      phone: '+1-918-555-0123',
      email: 'contact@adamjamestulsa.com',
    },
  },

  // Technical SEO settings
  TECHNICAL_SEO: {
    crawl_budget_optimization: true,
    internal_link_distribution: 'strategic',
    url_structure: 'keyword-rich',
    canonical_urls: true,
    ssl_certificate: true,
    mobile_first: true,
    core_web_vitals_targets: {
      lcp: 2.5, // Largest Contentful Paint (seconds)
      fid: 100, // First Input Delay (milliseconds)
      cls: 0.1, // Cumulative Layout Shift
    },
  },

  // Content templates for pages
  PAGE_TEMPLATES: {
    location: {
      title_template: '{location} Entrepreneur Adam James | #1 Business Leader in Oklahoma',
      description_template: 'Adam James is the premier {location} entrepreneur providing expert business consulting, corporate housing, mental health services, and strategic planning. Serving {location} and surrounding areas with proven results.',
      content_sections: [
        'introduction',
        'local_impact',
        'services',
        'success_stories',
        'economic_opportunities',
        'contact_cta',
      ],
    },
    service: {
      title_template: '{service} in Tulsa | Adam James - Oklahoma Business Leader',
      description_template: 'Expert {service} by Adam James in Tulsa, Oklahoma. Comprehensive solutions for businesses and individuals throughout the Tulsa metro area.',
      content_sections: [
        'service_overview',
        'benefits',
        'process',
        'pricing',
        'testimonials',
        'contact_form',
      ],
    },
    business: {
      title_template: '{business_name} | Adam James Tulsa Business Portfolio',
      description_template: 'Learn about {business_name}, one of Adam James\'s successful Tulsa businesses providing {services} to the Oklahoma market.',
      content_sections: [
        'company_overview',
        'services_offered',
        'team',
        'achievements',
        'case_studies',
        'contact_info',
      ],
    },
  },

  // Structured data priorities
  SCHEMA_PRIORITIES: {
    person: 1.0,
    local_business: 1.0,
    organization: 0.9,
    service: 0.8,
    article: 0.7,
    faq: 0.9,
    breadcrumb: 0.6,
    review: 0.8,
  },

  // Social media configuration
  SOCIAL_MEDIA: {
    platforms: {
      linkedin: 'https://linkedin.com/in/adamjamestulsa',
      facebook: 'https://facebook.com/adamjamestulsa',
      twitter: 'https://twitter.com/adamjamestulsa',
      instagram: 'https://instagram.com/adamjamestulsa',
      youtube: 'https://youtube.com/@adamjamestulsa',
    },
    sharing_enabled: true,
    og_image_dimensions: {
      width: 1200,
      height: 630,
    },
  },

  // Conversion tracking
  CONVERSION_GOALS: {
    contact_form: { value: 50, category: 'lead' },
    phone_call: { value: 75, category: 'lead' },
    email_signup: { value: 25, category: 'engagement' },
    service_inquiry: { value: 100, category: 'qualified_lead' },
    consultation_booking: { value: 200, category: 'appointment' },
  },

  // Competitor analysis
  COMPETITORS: [
    'tulsa-business-consultant.com',
    'oklahoma-entrepreneur.com',
    'tulsa-corporate-housing.com',
  ],

  // Link building targets
  LINK_BUILDING: {
    target_domains: [
      'tulsachamber.com',
      'tulsabusinessjournal.com',
      'oklahoma.gov',
      'cityoftulsa.org',
      'tulsaworld.com',
    ],
    anchor_text_distribution: {
      exact_match: 0.1, // 10% exact match
      partial_match: 0.3, // 30% partial match
      branded: 0.4, // 40% branded
      generic: 0.2, // 20% generic
    },
  },
};

// Generate meta tags for specific page types
export function generatePageMeta(pageType: keyof typeof SEO_CONFIG.PAGE_TEMPLATES, variables: Record<string, string>) {
  const template = SEO_CONFIG.PAGE_TEMPLATES[pageType];
  
  let title = template.title_template;
  let description = template.description_template;
  
  // Replace variables in templates
  Object.entries(variables).forEach(([key, value]) => {
    title = title.replace(`{${key}}`, value);
    description = description.replace(`{${key}}`, value);
  });
  
  return { title, description };
}

// Calculate keyword density for content optimization
export function calculateKeywordDensity(content: string, keyword: string): number {
  const words = content.toLowerCase().split(/\s+/);
  const keywordWords = keyword.toLowerCase().split(/\s+/);
  const keywordCount = words.filter((word, index) => {
    return keywordWords.every((kw, kwIndex) => words[index + kwIndex] === kw);
  }).length;
  
  return (keywordCount / words.length) * 100;
}

// Generate internal linking suggestions
export function generateInternalLinks(currentPage: string, pageType: string): Array<{ url: string; anchor: string; }> {
  const links: Array<{ url: string; anchor: string; }> = [];
  
  // Base internal links for all pages
  if (currentPage !== '/') {
    links.push({ url: '/', anchor: 'Adam James Tulsa' });
  }
  
  if (currentPage !== '/services') {
    links.push({ url: '/services', anchor: 'business services' });
  }
  
  if (currentPage !== '/businesses') {
    links.push({ url: '/businesses', anchor: 'our companies' });
  }
  
  // Add location-specific links
  if (pageType === 'location' && !currentPage.includes('broken-arrow')) {
    links.push({ url: '/locations/broken-arrow', anchor: 'Broken Arrow business services' });
  }
  
  if (pageType === 'location' && !currentPage.includes('downtown-tulsa')) {
    links.push({ url: '/locations/downtown-tulsa', anchor: 'downtown Tulsa entrepreneur' });
  }
  
  // Add service-specific links
  if (pageType !== 'service') {
    links.push({ url: '/services/corporate-housing', anchor: 'corporate housing Tulsa' });
    links.push({ url: '/services/mental-health', anchor: 'mental health services' });
    links.push({ url: '/services/business-consulting', anchor: 'business consulting' });
  }
  
  return links.slice(0, SEO_CONFIG.CONTENT_STRUCTURE.INTERNAL_LINKS.max);
}

export default SEO_CONFIG;