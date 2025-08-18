import React from 'react';

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email: string;
  url: string;
  logo?: string;
  image?: string[];
  priceRange?: string;
  openingHours?: string[];
  areaServed?: string[];
  serviceType?: string[];
  founder?: string;
  foundingDate?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  sameAs?: string[];
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  description,
  address,
  phone,
  email,
  url,
  logo,
  image = [],
  priceRange = "$$",
  openingHours = [],
  areaServed = [],
  serviceType = [],
  founder,
  foundingDate,
  aggregateRating,
  sameAs = [],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    telephone: phone,
    email,
    url,
    ...(logo && { logo }),
    ...(image.length > 0 && { image }),
    priceRange,
    ...(openingHours.length > 0 && { openingHours }),
    ...(areaServed.length > 0 && { areaServed }),
    ...(serviceType.length > 0 && { hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: serviceType.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
        position: index + 1,
      })),
    }}),
    ...(founder && { founder: {
      '@type': 'Person',
      name: founder,
    }}),
    ...(foundingDate && { foundingDate }),
    ...(aggregateRating && { aggregateRating: {
      '@type': 'AggregateRating',
      ...aggregateRating,
    }}),
    ...(sameAs.length > 0 && { sameAs }),
    // Additional local business properties
    paymentAccepted: 'Cash, Credit Card, Check, Bank Transfer',
    currenciesAccepted: 'USD',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1540,
      longitude: -95.9928,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      areaServed: 'US-OK',
      availableLanguage: 'English',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
};

// Predefined Adam James Tulsa Local Business Schema
export const AdamJamesTulsaLocalBusiness: React.FC = () => (
  <LocalBusinessSchema
    name="Adam James - Tulsa Business Leader"
    description="Premier business consulting, corporate housing, and mental health services in Tulsa, Oklahoma. Expert entrepreneur driving economic growth and innovation across the region."
    address={{
      streetAddress: "123 Main Street, Suite 100",
      addressLocality: "Tulsa",
      addressRegion: "OK",
      postalCode: "74103",
      addressCountry: "US",
    }}
    phone="+1-918-555-0123"
    email="contact@adamjamestulsa.com"
    url="https://adamjamestulsa.com"
    logo="https://adamjamestulsa.com/images/adam-james-logo.png"
    image={[
      "https://adamjamestulsa.com/images/adam-james-professional.jpg",
      "https://adamjamestulsa.com/images/tulsa-office-exterior.jpg",
      "https://adamjamestulsa.com/images/adamj-holdings-office.jpg",
    ]}
    priceRange="$$$"
    openingHours={[
      "Mo-Fr 08:00-17:00",
      "Sa 09:00-15:00",
    ]}
    areaServed={[
      "Tulsa",
      "Broken Arrow",
      "Jenks",
      "Bixby",
      "Owasso",
      "Sand Springs",
      "Sapulpa",
      "Glenpool",
      "Claremore",
      "Catoosa",
      "Collinsville",
      "Coweta",
      "Skiatook",
      "Verdigris",
      "Wagoner",
      "Oklahoma",
    ]}
    serviceType={[
      "Business Consulting",
      "Corporate Housing",
      "Mental Health Services",
      "Real Estate Investment",
      "Strategic Planning",
      "Investment Advisory",
      "Property Management",
      "Therapy Services",
      "Executive Coaching",
      "Market Analysis",
    ]}
    founder="Adam James"
    foundingDate="2015"
    aggregateRating={{
      ratingValue: 4.9,
      reviewCount: 127,
    }}
    sameAs={[
      "https://linkedin.com/in/adamjamestulsa",
      "https://facebook.com/adamjamestulsa",
      "https://twitter.com/adamjamestulsa",
      "https://instagram.com/adamjamestulsa",
      "https://youtube.com/@adamjamestulsa",
    ]}
  />
);

export default LocalBusinessSchema;