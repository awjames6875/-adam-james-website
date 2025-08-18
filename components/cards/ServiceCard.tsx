import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, Button, Badge } from '@/components/ui';

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  badge?: string;
  price?: {
    starting: string;
    period?: string;
  };
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  image,
  href,
  badge,
  price,
  variant = 'default',
  className,
}) => {
  const variants = {
    default: 'h-full',
    featured: 'h-full border-2 border-primary shadow-primary-lg',
    compact: 'h-full',
  };

  return (
    <Card
      variant={variant === 'featured' ? 'elevated' : 'default'}
      padding="none"
      hover
      className={cn(variants[variant], className)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {badge && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary" className="bg-white/90 text-primary">
              {badge}
            </Badge>
          </div>
        )}

        {variant === 'featured' && (
          <div className="absolute top-4 right-4">
            <Badge variant="warning" className="animate-pulse">
              Most Popular
            </Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-h4 font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-body text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price */}
        {price && (
          <div className="mb-4 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <span className="text-body-sm text-gray-600">Starting at</span>
              <div className="text-h3 font-bold text-primary">
                {price.starting}
                {price.period && (
                  <span className="text-body text-gray-600 font-normal">
                    /{price.period}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-h6 font-semibold text-gray-900 mb-3">
            What&apos;s Included:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg 
                  className="w-5 h-5 text-success flex-shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="text-body text-gray-700">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <Button
            variant={variant === 'featured' ? 'primary' : 'outline'}
            size="lg"
            fullWidth
            asChild
          >
            <Link href={href}>
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            size="md"
            fullWidth
            asChild
          >
            <Link href="/contact">
              Get Quote
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Compact variant for use in smaller spaces
export const ServiceCardCompact: React.FC<Omit<ServiceCardProps, 'variant'>> = (props) => {
  return (
    <Card hover clickable className="h-full p-6">
      <div className="flex items-start space-x-4">
        <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-h6 font-semibold text-gray-900">
              {props.title}
            </h3>
            {props.badge && (
              <Badge variant="primary" size="sm">
                {props.badge}
              </Badge>
            )}
          </div>
          
          <p className="text-body-sm text-gray-600 mb-3 line-clamp-2">
            {props.description}
          </p>
          
          <Link
            href={props.href}
            className="text-body-sm font-medium text-primary hover:text-primary-700 transition-colors inline-flex items-center"
          >
            Learn more
            <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;