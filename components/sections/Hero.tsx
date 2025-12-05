import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, Badge, Typography } from '@/components/ui';
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle } from 'lucide-react';

export interface HeroProps {
  variant?: 'home' | 'page' | 'minimal';
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  badge?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  variant = 'home',
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  badge,
  stats,
  className,
}) => {
  const variants = {
    home: 'py-20 lg:py-32',
    page: 'py-16 lg:py-24',
    minimal: 'py-12 lg:py-16',
  };

  return (
    <section 
      className={cn(
        'relative overflow-hidden',
        variants[variant],
        className
      )}
    >
      {/* Background with modern gradient */}
      <div className="absolute inset-0 gradient-hero">
        {backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover opacity-10"
              priority
            />
          </div>
        )}
      </div>

      {/* Modern geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className={cn(
            'text-center lg:text-left',
            variant === 'home' ? 'lg:col-span-7' : 'lg:col-span-8'
          )}>
            {badge && (
              <div className="mb-6 flex justify-center lg:justify-start">
                <Badge variant="accent" className="animate-fade-in shadow-soft">
                  <Star className="h-3 w-3 mr-1" />
                  {badge}
                </Badge>
              </div>
            )}

            {subtitle && (
              <Typography 
                variant="lead" 
                className="text-primary font-semibold mb-4 animate-slide-up tracking-wide uppercase"
              >
                {subtitle}
              </Typography>
            )}

            <Typography 
              variant={variant === 'home' ? 'h1' : 'h2'}
              className={cn(
                'text-white mb-6 animate-slide-up leading-tight',
                variant === 'home' && 'text-5xl lg:text-7xl'
              )}
            >
              {title}
            </Typography>

            {description && (
              <Typography 
                variant="lead"
                className={cn(
                  'text-white/90 mb-8 animate-slide-up max-w-2xl leading-relaxed',
                  'mx-auto lg:mx-0'
                )}
              >
                {description}
              </Typography>
            )}

            {/* CTAs with conversion focus */}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-scale-in">
                {primaryCTA && (
                  <Button
                    variant="secondary"
                    size={variant === 'home' ? 'xl' : 'lg'}
                    className="shadow-glow hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href={primaryCTA.href}>
                      {primaryCTA.text}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                )}
                
                {secondaryCTA && (
                  <Button
                    variant="outline"
                    size={variant === 'home' ? 'xl' : 'lg'}
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                    asChild
                  >
                    <Link href={secondaryCTA.href}>
                      <Phone className="w-4 h-4 mr-2" />
                      {secondaryCTA.text}
                    </Link>
                  </Button>
                )}
              </div>
            )}

            {/* Trust indicators */}
            {variant === 'home' && (
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start text-white/80 text-sm animate-fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Tulsa Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Proven Results</span>
                </div>
              </div>
            )}

            {/* Stats - Enhanced with cards */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-bounce-in">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center lg:text-left hover-lift">
                    <Typography variant="h3" className="text-white font-bold mb-1">
                      {stat.value}
                    </Typography>
                    <Typography variant="small" className="text-white/70 uppercase tracking-wider">
                      {stat.label}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image/Visual Element - Enhanced */}
          {variant === 'home' && (
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image with modern styling */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/20 animate-fade-in hover-lift">
                  <Image
                    src="/images/infrontofcomputer.png"
                    alt="Adam James - Tulsa Business Leader"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px] lg:h-[600px]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <Typography variant="h4" className="text-foreground mb-2">
                        Adam James
                      </Typography>
                      <Typography variant="small" className="text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        Tulsa, Oklahoma
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Cards */}
                <div className="absolute -top-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl shadow-lg p-4 animate-slide-in-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <Typography variant="small" className="font-medium">
                      Available for Consultation
                    </Typography>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6 animate-slide-in-left border border-border">
                  <div className="text-center">
                    <Typography variant="h3" className="text-primary mb-1">
                      15+
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground">
                      Years Experience
                    </Typography>
                    <div className="flex justify-center mt-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional floating element */}
                <div className="absolute top-1/2 -left-8 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-bounce-in">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modern scroll indicator */}
      {variant === 'home' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;