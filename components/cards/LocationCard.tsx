import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, Badge } from '@/components/ui';

export interface LocationCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  population?: string;
  zipCodes?: string[];
  highlights: string[];
  distance?: {
    value: number;
    unit: 'mi' | 'km';
    fromLocation: string;
  };
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  title,
  description,
  image,
  href,
  population,
  zipCodes,
  highlights,
  distance,
  variant = 'default',
  className,
}) => {
  return (
    <Card
      variant={variant === 'featured' ? 'elevated' : 'default'}
      padding="none"
      hover
      className={cn(
        'h-full overflow-hidden',
        variant === 'featured' && 'border-2 border-primary shadow-primary',
        className
      )}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={`${title} - Adam James Services`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        {/* Distance Badge */}
        {distance && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-900">
              {distance.value} {distance.unit} from {distance.fromLocation}
            </Badge>
          </div>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-h4 font-bold text-white mb-1">
            {title}
          </h3>
          <div className="flex items-center space-x-3 text-white/90">
            {population && (
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-body-sm">Pop: {population}</span>
              </div>
            )}
            {zipCodes && zipCodes.length > 0 && (
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-body-sm">
                  {zipCodes.length > 1 ? `${zipCodes[0]}+` : zipCodes[0]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-body text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-h6 font-semibold text-gray-900 mb-3">
            Key Services Available:
          </h4>
          <div className="space-y-2">
            {highlights.slice(0, 3).map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-body-sm text-gray-700">
                  {highlight}
                </span>
              </div>
            ))}
            {highlights.length > 3 && (
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                <span className="text-body-sm text-gray-500">
                  +{highlights.length - 3} more services
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ZIP Codes */}
        {zipCodes && zipCodes.length > 0 && (
          <div className="mb-6">
            <h4 className="text-h6 font-semibold text-gray-900 mb-3">
              ZIP Codes Served:
            </h4>
            <div className="flex flex-wrap gap-2">
              {zipCodes.slice(0, 4).map((zip) => (
                <Badge key={zip} variant="secondary" size="sm">
                  {zip}
                </Badge>
              ))}
              {zipCodes.length > 4 && (
                <Badge variant="outline" size="sm">
                  +{zipCodes.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="group flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-primary hover:text-white rounded-xl transition-colors"
        >
          <div>
            <div className="text-h6 font-semibold group-hover:text-white">
              Explore {title}
            </div>
            <div className="text-body-sm text-gray-600 group-hover:text-white/90">
              View detailed service information
            </div>
          </div>
          <svg 
            className="w-5 h-5 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </Card>
  );
};

// Compact version for lists
export const LocationCardCompact: React.FC<Omit<LocationCardProps, 'variant'>> = ({
  title,
  description,
  image,
  href,
  population,
  distance,
  highlights,
  className,
}) => {
  return (
    <Card hover clickable className={cn('p-4', className)}>
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-h6 font-semibold text-gray-900 truncate">
              {title}
            </h3>
            {distance && (
              <Badge variant="outline" size="sm" className="ml-2 flex-shrink-0">
                {distance.value} {distance.unit}
              </Badge>
            )}
          </div>
          
          <p className="text-body-sm text-gray-600 mb-2 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-body-sm text-gray-500">
              {population && (
                <span>Pop: {population}</span>
              )}
              <span>{highlights.length} services</span>
            </div>
            
            <Link
              href={href}
              className="text-body-sm font-medium text-primary hover:text-primary-700 transition-colors inline-flex items-center"
            >
              View
              <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LocationCard;