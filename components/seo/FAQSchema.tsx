import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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

// Predefined FAQ schema for Adam James Tulsa
export const AdamJamesTulsaFAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Who is Adam James in Tulsa?",
      answer: "Adam James is a premier business leader and entrepreneur in Tulsa, Oklahoma, known for founding multiple successful companies including AdamJ Holdings LLC, Tulsa Therapeutic Services, and Tulsa Corporate Housing. He specializes in business consulting, corporate housing solutions, and mental health services across the Tulsa metro area.",
    },
    {
      question: "What services does Adam James offer in Tulsa?",
      answer: "Adam James offers comprehensive business services in Tulsa including corporate housing solutions, mental health and therapeutic services, business consulting, strategic planning, real estate investment advisory, and executive coaching. His companies serve businesses and individuals throughout Tulsa, Broken Arrow, Jenks, Bixby, and surrounding Oklahoma communities.",
    },
    {
      question: "Where is Adam James located in Tulsa?",
      answer: "Adam James operates throughout the greater Tulsa area with offices serving downtown Tulsa, midtown Tulsa, south Tulsa, and surrounding communities including Broken Arrow, Jenks, Bixby, Owasso, Sand Springs, and Sapulpa. His businesses maintain a strong presence across multiple Tulsa districts to better serve clients.",
    },
    {
      question: "What companies has Adam James founded in Tulsa?",
      answer: "Adam James has founded several successful companies in Tulsa including AdamJ Holdings LLC (investment and business management), Tulsa Therapeutic Services (mental health and therapy services), and Tulsa Corporate Housing (premium furnished accommodations for business travelers). These companies collectively serve hundreds of clients across Oklahoma.",
    },
    {
      question: "How can I contact Adam James in Tulsa?",
      answer: "You can contact Adam James in Tulsa by calling (918) 555-0123, emailing contact@adamjamestulsa.com, or visiting his office at 123 Main Street, Suite 100, Tulsa, OK 74103. He also maintains an active presence on LinkedIn, Facebook, and other social media platforms for business networking and communication.",
    },
    {
      question: "What makes Adam James different from other Tulsa entrepreneurs?",
      answer: "Adam James stands out as a Tulsa entrepreneur through his diverse portfolio of successful businesses, commitment to community development, and proven track record of creating over 50 jobs and generating $10M+ in local economic impact. His integrated approach combines corporate housing, mental health services, and business consulting to provide comprehensive solutions for Tulsa businesses and residents.",
    },
    {
      question: "Does Adam James provide corporate housing in Tulsa?",
      answer: "Yes, Adam James operates Tulsa Corporate Housing, which provides premium furnished apartment solutions for business travelers, relocating professionals, and extended stay guests throughout the Tulsa metro area. Services include fully furnished luxury accommodations, flexible lease terms, prime Tulsa locations, and 24/7 concierge service.",
    },
    {
      question: "What mental health services does Adam James offer in Tulsa?",
      answer: "Through Tulsa Therapeutic Services, Adam James offers comprehensive mental health services including individual therapy sessions, family counseling, corporate wellness programs, group therapy options, and trauma-informed care. These services are available throughout the Tulsa area and focus on evidence-based treatment approaches.",
    },
  ];

  return <FAQSchema faqs={faqs} />;
};

export default FAQSchema;