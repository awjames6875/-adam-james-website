'use client';

interface LocalBusiness {
  name: string;
  description: string;
  url: string;
  image?: string;
  telephone?: string;
  email?: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  paymentAccepted?: string[];
  currenciesAccepted?: string[];
  founder?: {
    name: string;
    url: string;
  };
  sameAs?: string[];
  serviceArea?: {
    '@type': string;
    name?: string;
    geoMidpoint?: {
      latitude: number;
      longitude: number;
    };
    geoRadius?: number;
  };
  hasOfferCatalog?: {
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
      };
    }>;
  };
}

interface LocalBusinessSchemaProps {
  business: LocalBusiness;
}

export function LocalBusinessSchema({ business }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.url,
    ...(business.image && { image: business.image }),
    ...(business.telephone && { telephone: business.telephone }),
    ...(business.email && { email: business.email }),
    address: {
      '@type': 'PostalAddress',
      ...(business.address.streetAddress && { streetAddress: business.address.streetAddress }),
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      addressCountry: business.address.addressCountry,
      ...(business.address.postalCode && { postalCode: business.address.postalCode }),
    },
    ...(business.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      }
    }),
    ...(business.openingHours && { openingHours: business.openingHours }),
    ...(business.priceRange && { priceRange: business.priceRange }),
    ...(business.paymentAccepted && { paymentAccepted: business.paymentAccepted }),
    ...(business.currenciesAccepted && { currenciesAccepted: business.currenciesAccepted }),
    ...(business.founder && {
      founder: {
        '@type': 'Person',
        name: business.founder.name,
        url: business.founder.url,
      }
    }),
    ...(business.sameAs && { sameAs: business.sameAs }),
    ...(business.serviceArea && { serviceArea: business.serviceArea }),
    ...(business.hasOfferCatalog && { hasOfferCatalog: business.hasOfferCatalog }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default business data for Adam James Tulsa
export const adamJamesBusinessData: LocalBusiness = {
  name: 'Adam James Tulsa',
  description: 'Tulsa entrepreneur and business leader specializing in mental health services, corporate housing solutions, and business development. Serving the Tulsa community with compassion and excellence.',
  url: 'https://adamjamestulsa.com',
  image: 'https://adamjamestulsa.com/images/adam-james-business.jpg',
  telephone: '(918) 553-5746',
  email: 'adam@adamjamestulsa.com',
  address: {
    streetAddress: '123 Main Street',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US',
    postalCode: '74103'
  },
  geo: {
    latitude: 36.1540,
    longitude: -95.9928
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-16:00'
  ],
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Credit Card', 'Check'],
  currenciesAccepted: ['USD'],
  founder: {
    name: 'Adam James',
    url: 'https://adamjamestulsa.com'
  },
  sameAs: [
    'https://linkedin.com/in/adamjamestulsa',
    'https://facebook.com/adamjamestulsa',
    'https://instagram.com/adamjamestulsa'
  ],
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'Tulsa Metropolitan Area'
  },
  hasOfferCatalog: {
    name: 'Adam James Tulsa Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Housing',
          description: 'Premium corporate housing solutions for Tulsa businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mental Health Services',
          description: 'Comprehensive mental health support for Tulsa families'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Consulting',
          description: 'Strategic business development and growth consulting'
        }
      }
    ]
  }
};