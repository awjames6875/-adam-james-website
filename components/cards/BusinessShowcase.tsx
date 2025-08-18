import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, Button, Badge, Typography } from '@/components/ui';
import { ArrowRight, CheckCircle, Star, Award, Users, TrendingUp, MapPin } from 'lucide-react';

export interface BusinessShowcaseProps {
  name: string;
  description: string;
  services: string[];
  image: string;
  logo?: string;
  href: string;
  established?: string;
  employees?: string;
  revenue?: string;
  specialties: string[];
  awards?: string[];
  variant?: 'default' | 'featured' | 'horizontal';
  className?: string;
}

const BusinessShowcase: React.FC<BusinessShowcaseProps> = ({
  name,
  description,
  services,
  image,
  logo,
  href,
  established,
  employees,
  revenue,
  specialties,
  awards,
  variant = 'default',
  className,
}) => {
  if (variant === 'horizontal') {
    return (
      <Card
        variant="elevated"
        padding="none"
        hover
        className={cn('overflow-hidden', className)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {logo && (
              <div className="absolute bottom-4 left-4">
                <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-medium">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-h3 font-bold text-gray-900 mb-2">{name}</h3>
                {established && (
                  <Badge variant="secondary" size="sm">
                    Est. {established}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-body text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {employees && (
                <div>
                  <div className="text-h4 font-bold text-primary">{employees}</div>
                  <div className="text-body-sm text-gray-600">Employees</div>
                </div>
              )}
              {revenue && (
                <div>
                  <div className="text-h4 font-bold text-primary">{revenue}</div>
                  <div className="text-body-sm text-gray-600">Annual Revenue</div>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="mb-6">
              <h4 className="text-h6 font-semibold text-gray-900 mb-3">Key Services:</h4>
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 3).map((service) => (
                  <Badge key={service} variant="outline" size="sm">
                    {service}
                  </Badge>
                ))}
                {services.length > 3 && (
                  <Badge variant="outline" size="sm">
                    +{services.length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            <Button variant="primary" size="lg" asChild>
              <Link href={href}>
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant={variant === 'featured' ? 'elevated' : 'default'}
      padding="none"
      hover
      className={cn(
        'h-full overflow-hidden',
        variant === 'featured' && 'border-2 border-primary shadow-primary-lg',
        className
      )}
    >
      {/* Header Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        {/* Logo */}
        {logo && (
          <div className="absolute top-4 left-4">
            <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-medium">
              <Image
                src={logo}
                alt={`${name} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Established Badge */}
        {established && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-900">
              Est. {established}
            </Badge>
          </div>
        )}

        {/* Featured Badge */}
        {variant === 'featured' && (
          <div className="absolute bottom-4 right-4">
            <Badge variant="warning" className="animate-pulse">
              Flagship Business
            </Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Title */}
        <Typography variant="h3" className="mb-3">
          {name}
        </Typography>
        
        <Typography className="mb-6 leading-relaxed">
          {description}
        </Typography>

        {/* Stats Grid */}
        {(employees || revenue) && (
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
            {employees && (
              <div className="text-center">
                <div className="text-h5 font-bold text-primary mb-1">{employees}</div>
                <div className="text-body-sm text-gray-600">Employees</div>
              </div>
            )}
            {revenue && (
              <div className="text-center">
                <div className="text-h5 font-bold text-primary mb-1">{revenue}</div>
                <div className="text-body-sm text-gray-600">Revenue</div>
              </div>
            )}
          </div>
        )}

        {/* Specialties */}
        <div className="mb-6">
          <h4 className="text-h6 font-semibold text-gray-900 mb-3">Specialties:</h4>
          <ul className="space-y-2">
            {specialties.slice(0, 3).map((specialty, index) => (
              <li key={index} className="flex items-center space-x-3">
                <svg 
                  className="w-4 h-4 text-primary flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body-sm text-gray-700">{specialty}</span>
              </li>
            ))}
            {specialties.length > 3 && (
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
                <span className="text-body-sm text-gray-500">
                  +{specialties.length - 3} more specialties
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Services Tags */}
        <div className="mb-6">
          <h4 className="text-h6 font-semibold text-gray-900 mb-3">Services:</h4>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 4).map((service) => (
              <Badge key={service} variant="outline" size="sm">
                {service}
              </Badge>
            ))}
            {services.length > 4 && (
              <Badge variant="secondary" size="sm">
                +{services.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Awards */}
        {awards && awards.length > 0 && (
          <div className="mb-6">
            <h4 className="text-h6 font-semibold text-gray-900 mb-3">Recognition:</h4>
            <div className="space-y-2">
              {awards.slice(0, 2).map((award, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-warning flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-body-sm text-gray-700">{award}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <Button
            variant={variant === 'featured' ? 'primary' : 'outline'}
            size="lg"
            fullWidth
            asChild
          >
            <Link href={href}>
              Explore Business
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
          
          <Button variant="ghost" size="md" fullWidth asChild>
            <Link href="/contact">Get Consultation</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BusinessShowcase;