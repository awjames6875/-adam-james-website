'use client';

interface Person {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  socialProfiles: string[];
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode?: string;
  };
  worksFor: {
    name: string;
    url: string;
  };
}

interface PersonSchemaProps {
  person: Person;
}

export function PersonSchema({ person }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    url: person.url,
    image: `https://adamjamestulsa.com${person.image || '/images/adam-james-profile.jpg'}`,
    sameAs: person.socialProfiles,
    worksFor: {
      '@type': 'Organization',
      name: person.worksFor.name,
      url: person.worksFor.url,
    },
    address: {
      '@type': 'PostalAddress',
      ...(person.address.streetAddress && { streetAddress: person.address.streetAddress }),
      addressLocality: person.address.addressLocality,
      addressRegion: person.address.addressRegion,
      addressCountry: person.address.addressCountry,
      ...(person.address.postalCode && { postalCode: person.address.postalCode }),
    },
    knowsAbout: [
      'Entrepreneurship',
      'Business Development',
      'Mental Health Services',
      'Corporate Housing',
      'AI Technology',
      'Community Leadership',
      'Tulsa Business'
    ],
    alumniOf: ['Oral Roberts University', 'Kent State University'],
    homeLocation: {
      '@type': 'Place',
      name: 'Tulsa, Oklahoma',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tulsa',
        addressRegion: 'OK',
        addressCountry: 'US'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default Adam James data
export const adamJamesData: Person = {
  name: 'Adam James',
  jobTitle: 'Entrepreneur & Owner of Integrity Corporate Housing',
  description: 'Adam James is the founder of Safe Harbor Behavioral Health, Integrity Corporate Housing, and Growthgenix.ai. A Toledo native and ORU alumnus, he is a dedicated community leader focused on business innovation, mental health advocacy, and helping people see themselves differently.',
  url: 'https://adamjamestulsa.com',
  image: '/images/adam-james-profile.jpg',
  socialProfiles: [
    'https://linkedin.com/in/adamjamestulsa',
    'https://facebook.com/adamjamestulsa',
    'https://instagram.com/adamjamestulsa',
    'https://twitter.com/adamjamestulsa',
    'https://integritycorporatehousing.com',
    'https://growthgenix.ai'
  ],
  address: {
    streetAddress: '5955 Alpha Rd',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
    postalCode: '75240'
  },
  worksFor: {
    name: 'Integrity Corporate Housing',
    url: 'https://integritycorporatehousing.com'
  }
};
