import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, Typography, Input } from '@/components/ui';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export interface CTASectionProps {
  variant?: 'primary' | 'secondary' | 'newsletter' | 'contact';
  title: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  secondaryCTA?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  backgroundImage?: string;
  features?: string[];
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  variant = 'primary',
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  features,
  className,
}) => {
  const variants = {
    primary: 'gradient-primary text-white',
    secondary: 'bg-muted text-foreground',
    newsletter: 'gradient-hero text-white',
    contact: 'bg-foreground text-background',
  };

  return (
    <section className={cn('relative py-16 lg:py-24', variants[variant], className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full transform -translate-x-48 translate-y-48" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {variant === 'newsletter' ? (
          <NewsletterCTA title={title} description={description} />
        ) : variant === 'contact' ? (
          <ContactCTA 
            title={title} 
            description={description} 
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
          />
        ) : (
          <StandardCTA
            title={title}
            description={description}
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
            features={features}
            variant={variant}
          />
        )}
      </div>
    </section>
  );
};

interface StandardCTAProps {
  title: string;
  description?: string;
  primaryCTA?: CTASectionProps['primaryCTA'];
  secondaryCTA?: CTASectionProps['secondaryCTA'];
  features?: string[];
  variant: 'primary' | 'secondary';
}

const StandardCTA: React.FC<StandardCTAProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  features,
  variant,
}) => (
  <div className="text-center max-w-4xl mx-auto">
    <h2 className="text-h1 lg:text-display-lg font-display font-bold mb-6">
      {title}
    </h2>
    
    {description && (
      <p className={cn(
        'text-body-xl mb-8 max-w-3xl mx-auto',
        variant === 'primary' ? 'text-white/90' : 'text-gray-600'
      )}>
        {description}
      </p>
    )}

    {features && features.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center space-x-3">
            <svg 
              className={cn(
                'w-5 h-5 flex-shrink-0',
                variant === 'primary' ? 'text-white' : 'text-success'
              )} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={cn(
              'text-body',
              variant === 'primary' ? 'text-white/90' : 'text-gray-700'
            )}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    )}

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {primaryCTA && (
        <Button
          variant={primaryCTA.variant || (variant === 'primary' ? 'secondary' : 'primary')}
          size="xl"
          className={cn(
            'shadow-large',
            variant === 'primary' && 'bg-white text-primary hover:bg-gray-100'
          )}
          asChild
        >
          <Link href={primaryCTA.href}>
            {primaryCTA.text}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Button>
      )}
      
      {secondaryCTA && (
        <Button
          variant={secondaryCTA.variant || 'outline'}
          size="xl"
          className={cn(
            variant === 'primary' && 'border-white text-white hover:bg-white hover:text-primary'
          )}
          asChild
        >
          <Link href={secondaryCTA.href}>
            {secondaryCTA.text}
          </Link>
        </Button>
      )}
    </div>
  </div>
);

interface NewsletterCTAProps {
  title: string;
  description?: string;
}

const NewsletterCTA: React.FC<NewsletterCTAProps> = ({ title, description }) => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add newsletter signup logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-h1 lg:text-display-lg font-display font-bold mb-6 text-white">
        {title}
      </h2>
      
      {description && (
        <p className="text-body-xl text-white/90 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          />
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            isLoading={isSubmitting}
            className="bg-white text-primary hover:bg-gray-100 px-8"
          >
            Subscribe
          </Button>
        </div>
        <p className="text-body-sm text-white/70 mt-3">
          Join 1000+ business leaders getting weekly insights. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

interface ContactCTAProps {
  title: string;
  description?: string;
  primaryCTA?: CTASectionProps['primaryCTA'];
  secondaryCTA?: CTASectionProps['secondaryCTA'];
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-h1 lg:text-display-lg font-display font-bold mb-6 text-white">
        {title}
      </h2>
      
      {description && (
        <p className="text-body-xl text-gray-300 mb-8">
          {description}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        {primaryCTA && (
          <Button
            variant={primaryCTA.variant || 'primary'}
            size="xl"
            asChild
          >
            <Link href={primaryCTA.href}>
              {primaryCTA.text}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        )}
        
        {secondaryCTA && (
          <Button
            variant={secondaryCTA.variant || 'outline'}
            size="xl"
            className="border-white text-white hover:bg-white hover:text-gray-900"
            asChild
          >
            <Link href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Link>
          </Button>
        )}
      </div>
    </div>

    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h3 className="text-h5 font-semibold text-white mb-2">Call Directly</h3>
          <p className="text-body text-gray-300 mb-1">Available Mon-Fri, 8AM-6PM CST</p>
          <a href="tel:9185550123" className="text-body font-medium text-primary hover:text-primary-400 transition-colors">
            (918) 555-0123
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-h5 font-semibold text-white mb-2">Email Me</h3>
          <p className="text-body text-gray-300 mb-1">Typically respond within 2 hours</p>
          <a href="mailto:adam@adamjamestulsa.com" className="text-body font-medium text-primary hover:text-primary-400 transition-colors">
            adam@adamjamestulsa.com
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-h5 font-semibold text-white mb-2">Visit Office</h3>
          <p className="text-body text-gray-300">
            123 Main Street, Suite 100<br />
            Tulsa, OK 74103
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CTASection;