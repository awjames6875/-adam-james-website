import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent, Badge, Typography } from '@/components/ui';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

export interface TestimonialCardProps {
  name: string;
  title: string;
  company?: string;
  avatar?: string;
  content: string;
  rating?: number;
  service?: string;
  location?: string;
  date?: string;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  company,
  avatar,
  content,
  rating = 5,
  service,
  location,
  date,
  variant = 'default',
  className,
}) => {
  const variants = {
    default: '',
    featured: 'border-2 border-primary shadow-primary-lg',
    compact: 'p-4',
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          'w-4 h-4',
          index < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
        )}
      />
    ));
  };

  if (variant === 'compact') {
    return (
      <Card className={cn('h-full', variants[variant], className)}>
        <div className="flex items-start space-x-3">
          {avatar && (
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover rounded-full"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex">{renderStars()}</div>
              {service && (
                <Badge variant="outline" size="sm">
                  {service}
                </Badge>
              )}
            </div>
            <blockquote className="text-body-sm text-gray-700 mb-3">
              &ldquo;{content}&rdquo;
            </blockquote>
            <div>
              <div className="text-h6 font-semibold text-gray-900">{name}</div>
              <div className="text-body-sm text-gray-600">
                {title}{company && `, ${company}`}
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant={variant === 'featured' ? 'elevated' : 'default'}
      className={cn('h-full', variants[variant], className)}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-primary/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Rating & Service */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars()}</div>
          <span className="text-body-sm text-gray-600">({rating}/5)</span>
        </div>
        {service && (
          <Badge variant="primary" size="sm">
            {service}
          </Badge>
        )}
      </div>

      {/* Content */}
      <blockquote className="text-body text-gray-700 mb-6 leading-relaxed">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-4">
        {avatar ? (
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover rounded-full"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-h6 font-semibold text-gray-600">
              {name.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <div className="text-h6 font-semibold text-gray-900">{name}</div>
          <div className="text-body-sm text-gray-600">
            {title}
            {company && <span className="block">{company}</span>}
          </div>
          <div className="flex items-center space-x-2 mt-1 text-body-sm text-gray-500">
            {location && (
              <>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{location}</span>
              </>
            )}
            {date && (
              <>
                {location && <span>•</span>}
                <span>{date}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Featured badge */}
      {variant === 'featured' && (
        <div className="absolute -top-3 left-6">
          <Badge variant="warning" className="shadow-medium">
            Featured Review
          </Badge>
        </div>
      )}
    </Card>
  );
};

// Testimonial Quote - for use in hero sections or as pull quotes
export interface TestimonialQuoteProps {
  content: string;
  name: string;
  title: string;
  avatar?: string;
  className?: string;
}

export const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({
  content,
  name,
  title,
  avatar,
  className,
}) => {
  return (
    <div className={cn('text-center max-w-3xl mx-auto', className)}>
      <svg
        className="w-12 h-12 text-primary/20 mx-auto mb-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
      </svg>
      
      <blockquote className="text-h3 lg:text-h2 font-display text-gray-900 mb-8 leading-relaxed">
        &ldquo;{content}&rdquo;
      </blockquote>
      
      <div className="flex items-center justify-center space-x-4">
        {avatar && (
          <div className="relative w-16 h-16">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover rounded-full"
            />
          </div>
        )}
        <div className="text-left">
          <div className="text-h5 font-semibold text-gray-900">{name}</div>
          <div className="text-body text-gray-600">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;