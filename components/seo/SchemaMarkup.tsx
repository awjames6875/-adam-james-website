import React from 'react';

// Base schema interfaces
interface Organization {
  '@type': 'Organization' | 'Corporation' | 'LocalBusiness';
  name: string;
  url: string;
  logo?: string;
  image?: string[];
  description?: string;
  email?: string;
  telephone?: string;
  address?: PostalAddress;
  foundingDate?: string;
  founder?: Person;
  sameAs?: string[];
  areaServed?: string[];
  serviceArea?: string[];
}

interface Person {
  '@type': 'Person';
  name: string;
  url?: string;
  image?: string;
  description?: string;
  jobTitle?: string;
  worksFor?: Organization;
  address?: PostalAddress;
  email?: string;
  telephone?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  alumniOf?: string[];
  award?: string[];
}

interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface Article {
  '@type': 'Article' | 'BlogPosting' | 'NewsArticle';
  headline: string;
  description: string;
  image: string[];
  author: Person;
  publisher: Organization;
  datePublished: string;
  dateModified?: string;
  mainEntityOfPage: string;
  wordCount?: number;
  keywords?: string[];
}

interface Service {
  '@type': 'Service';
  name: string;
  description: string;
  provider: Organization;
  areaServed?: string[];
  serviceType?: string;
  url?: string;
  image?: string;
}

interface Review {
  '@type': 'Review';
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: number;
  };
  reviewBody: string;
  author: Person;
  datePublished: string;
  itemReviewed: Organization | Service;
}

interface WebSite {
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

interface BreadcrumbList {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

// Component props interfaces
export interface PersonSchemaProps {
  person: Person;
}

export interface OrganizationSchemaProps {
  organization: Organization;
}

export interface ArticleSchemaProps {
  article: Article;
}

export interface ServiceSchemaProps {
  service: Service;
}

export interface ReviewSchemaProps {
  review: Review;
}

export interface WebSiteSchemaProps {
  website: WebSite;
}

export interface BreadcrumbSchemaProps {
  breadcrumbs: BreadcrumbList;
}

// Utility function to create JSON-LD script
const createJSONLD = (schema: any) => {
  const jsonLD = {
    '@context': 'https://schema.org',
    ...schema,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLD, null, 2),
      }}
    />
  );
};

// Individual schema components
export const PersonSchema: React.FC<PersonSchemaProps> = ({ person }) => {
  return createJSONLD(person);
};

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({ organization }) => {
  return createJSONLD(organization);
};

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ article }) => {
  return createJSONLD(article);
};

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service }) => {
  return createJSONLD(service);
};

export const ReviewSchema: React.FC<ReviewSchemaProps> = ({ review }) => {
  return createJSONLD(review);
};

export const WebSiteSchema: React.FC<WebSiteSchemaProps> = ({ website }) => {
  return createJSONLD(website);
};

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ breadcrumbs }) => {
  return createJSONLD(breadcrumbs);
};

// Combined schema for complex pages
interface CombinedSchemaProps {
  schemas: Array<Person | Organization | Article | Service | Review | WebSite | BreadcrumbList>;
}

export const CombinedSchema: React.FC<CombinedSchemaProps> = ({ schemas }) => {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              ...schema,
            }, null, 2),
          }}
        />
      ))}
    </>
  );
};

// Predefined schemas for Adam James website
export const adamJamesPersonSchema: Person = {
  '@type': 'Person',
  name: 'Adam James',
  url: 'https://adamjamestulsa.com',
  image: 'https://adamjamestulsa.com/images/adam-james-professional.jpg',
  description: 'Adam James is a leading business entrepreneur and consultant in Tulsa, Oklahoma, specializing in corporate housing, mental health services, and strategic business development.',
  jobTitle: 'CEO & Founder',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street, Suite 100',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    postalCode: '74103',
    addressCountry: 'US',
  },
  email: 'adam@adamjamestulsa.com',
  telephone: '+1-918-555-0123',
  sameAs: [
    'https://linkedin.com/in/adamjamestulsa',
    'https://facebook.com/adamjamestulsa',
    'https://twitter.com/adamjamestulsa',
    'https://instagram.com/adamjamestulsa',
  ],
  knowsAbout: [
    'Business Consulting',
    'Corporate Housing',
    'Mental Health Services',
    'Real Estate',
    'Strategic Planning',
    'Entrepreneurship',
    'Investment',
  ],
  award: [
    'Tulsa Business Journal 40 Under 40',
    'Oklahoma Small Business Leader',
  ],
};

export const adamJHoldingsSchema: Organization = {
  '@type': 'Corporation',
  name: 'AdamJ Holdings LLC',
  url: 'https://adamjamestulsa.com/businesses/adamj-holdings',
  logo: 'https://adamjamestulsa.com/images/adamj-holdings-logo.png',
  image: ['https://adamjamestulsa.com/images/adamj-holdings-office.jpg'],
  description: 'AdamJ Holdings LLC is a diversified investment and business management company based in Tulsa, Oklahoma, focusing on strategic acquisitions and business development.',
  email: 'info@adamjholdings.com',
  telephone: '+1-918-555-0123',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street, Suite 100',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    postalCode: '74103',
    addressCountry: 'US',
  },
  foundingDate: '2015',
  founder: adamJamesPersonSchema,
  sameAs: [
    'https://linkedin.com/company/adamj-holdings',
  ],
  areaServed: ['Tulsa', 'Oklahoma', 'United States'],
};

export const tulsaTherapeuticServicesSchema: Organization = {
  '@type': 'LocalBusiness',
  name: 'Tulsa Therapeutic Services',
  url: 'https://adamjamestulsa.com/businesses/tulsa-therapeutic-services',
  logo: 'https://adamjamestulsa.com/images/tulsa-therapeutic-logo.png',
  description: 'Tulsa Therapeutic Services provides comprehensive mental health and wellness services to individuals and families in the Tulsa metro area.',
  email: 'contact@tulsatherapeutic.com',
  telephone: '+1-918-555-0124',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '456 Wellness Way',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    postalCode: '74104',
    addressCountry: 'US',
  },
  foundingDate: '2018',
  founder: adamJamesPersonSchema,
  areaServed: [
    'Tulsa',
    'Broken Arrow',
    'Jenks',
    'Bixby',
    'Owasso',
    'Sand Springs',
    'Sapulpa',
  ],
};

export const tulsaCorporateHousingSchema: Organization = {
  '@type': 'LocalBusiness',
  name: 'Tulsa Corporate Housing',
  url: 'https://adamjamestulsa.com/businesses/tulsa-corporate-housing',
  logo: 'https://adamjamestulsa.com/images/tulsa-corporate-housing-logo.png',
  description: 'Tulsa Corporate Housing provides premium furnished apartment solutions for business travelers, relocating professionals, and extended stay guests in the Tulsa area.',
  email: 'reservations@tulsacorporatehousing.com',
  telephone: '+1-918-555-0125',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '789 Corporate Drive',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    postalCode: '74105',
    addressCountry: 'US',
  },
  foundingDate: '2016',
  founder: adamJamesPersonSchema,
  areaServed: [
    'Downtown Tulsa',
    'Midtown Tulsa',
    'South Tulsa',
    'Broken Arrow',
    'Jenks',
  ],
};

export const adamJamesWebsiteSchema: WebSite = {
  '@type': 'WebSite',
  name: 'Adam James Tulsa',
  url: 'https://adamjamestulsa.com',
  description: 'Official website of Adam James, Tulsa business leader and entrepreneur. Explore services in corporate housing, mental health, and business consulting.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://adamjamestulsa.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

// Main Schema component that combines common schemas
export interface MainSchemaMarkupProps {
  includeWebsite?: boolean;
  includePerson?: boolean;
  includeOrganizations?: boolean;
  additionalSchemas?: Array<any>;
}

const SchemaMarkup: React.FC<MainSchemaMarkupProps> = ({
  includeWebsite = true,
  includePerson = true,
  includeOrganizations = true,
  additionalSchemas = [],
}) => {
  const schemas: any[] = [];

  if (includeWebsite) {
    schemas.push(adamJamesWebsiteSchema);
  }

  if (includePerson) {
    schemas.push(adamJamesPersonSchema);
  }

  if (includeOrganizations) {
    schemas.push(adamJHoldingsSchema, tulsaTherapeuticServicesSchema, tulsaCorporateHousingSchema);
  }

  schemas.push(...additionalSchemas);

  return <CombinedSchema schemas={schemas} />;
};

export default SchemaMarkup;