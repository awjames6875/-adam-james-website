import React from 'react';
import Link from 'next/link';
import { cn, generateBreadcrumbs } from '@/lib/utils';
import { BreadcrumbSchema } from './SchemaMarkup';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isLast?: boolean;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  pathname?: string;
  className?: string;
  showHome?: boolean;
  separator?: 'slash' | 'chevron' | 'arrow';
  includeSchema?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  pathname,
  className,
  showHome = true,
  separator = 'chevron',
  includeSchema = true,
}) => {
  // Generate breadcrumbs from pathname if items not provided
  const breadcrumbItems = items || (pathname ? generateBreadcrumbs(pathname) : []);

  // Filter out home if showHome is false
  const displayItems = showHome ? breadcrumbItems : breadcrumbItems.slice(1);

  if (displayItems.length <= 1) {
    return null;
  }

  // Generate schema markup
  const schemaData = {
    '@type': 'BreadcrumbList' as const,
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.label,
      item: `https://adamjamestulsa.com${item.href}`,
    })),
  };

  const separatorIcons = {
    slash: (
      <span className="text-gray-400 mx-2">/</span>
    ),
    chevron: (
      <svg
        className="w-4 h-4 text-gray-400 mx-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    ),
    arrow: (
      <svg
        className="w-4 h-4 text-gray-400 mx-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    ),
  };

  return (
    <>
      {includeSchema && <BreadcrumbSchema breadcrumbs={schemaData} />}
      
      <nav
        aria-label="Breadcrumb"
        className={cn('flex items-center text-body-sm', className)}
      >
        <ol className="flex items-center space-x-0">
          {displayItems.map((item, index) => {
            const isLast = item.isLast || index === displayItems.length - 1;
            
            return (
              <li key={item.href} className="flex items-center">
                {isLast ? (
                  <span
                    className="text-gray-900 font-medium truncate max-w-xs"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-primary transition-colors truncate max-w-xs"
                    >
                      {item.label}
                    </Link>
                    {separatorIcons[separator]}
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

// Specialized breadcrumb components for common patterns
export interface LocationBreadcrumbsProps {
  locationName: string;
  className?: string;
}

export const LocationBreadcrumbs: React.FC<LocationBreadcrumbsProps> = ({
  locationName,
  className,
}) => {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: locationName, href: `/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`, isLast: true },
  ];

  return (
    <Breadcrumbs 
      items={items} 
      className={className}
      includeSchema={true}
    />
  );
};

export interface ServiceBreadcrumbsProps {
  serviceName: string;
  className?: string;
}

export const ServiceBreadcrumbs: React.FC<ServiceBreadcrumbsProps> = ({
  serviceName,
  className,
}) => {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: serviceName, href: `/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`, isLast: true },
  ];

  return (
    <Breadcrumbs 
      items={items} 
      className={className}
      includeSchema={true}
    />
  );
};

export interface BusinessBreadcrumbsProps {
  businessName: string;
  className?: string;
}

export const BusinessBreadcrumbs: React.FC<BusinessBreadcrumbsProps> = ({
  businessName,
  className,
}) => {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Businesses', href: '/businesses' },
    { label: businessName, href: `/businesses/${businessName.toLowerCase().replace(/\s+/g, '-')}`, isLast: true },
  ];

  return (
    <Breadcrumbs 
      items={items} 
      className={className}
      includeSchema={true}
    />
  );
};

export interface BlogBreadcrumbsProps {
  postTitle: string;
  postSlug: string;
  category?: string;
  className?: string;
}

export const BlogBreadcrumbs: React.FC<BlogBreadcrumbsProps> = ({
  postTitle,
  postSlug,
  category,
  className,
}) => {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  if (category) {
    items.push({
      label: category,
      href: `/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
    });
  }

  items.push({
    label: postTitle,
    href: `/blog/${postSlug}`,
    isLast: true,
  });

  return (
    <Breadcrumbs 
      items={items} 
      className={className}
      includeSchema={true}
    />
  );
};

// Rich breadcrumbs with icons
export interface RichBreadcrumbsProps extends BreadcrumbsProps {
  showIcons?: boolean;
}

export const RichBreadcrumbs: React.FC<RichBreadcrumbsProps> = ({
  showIcons = true,
  ...props
}) => {
  const getIcon = (href: string) => {
    if (href === '/') {
      return (
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    }
    
    if (href.includes('/services')) {
      return (
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
        </svg>
      );
    }
    
    if (href.includes('/locations')) {
      return (
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    }
    
    if (href.includes('/businesses')) {
      return (
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    }
    
    if (href.includes('/blog')) {
      return (
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    }
    
    return null;
  };

  if (!showIcons) {
    return <Breadcrumbs {...props} />;
  }

  // Custom render with icons - simplified version
  const breadcrumbItems = props.items || (props.pathname ? generateBreadcrumbs(props.pathname) : []);
  const displayItems = props.showHome !== false ? breadcrumbItems : breadcrumbItems.slice(1);

  if (displayItems.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-body-sm', props.className)}
    >
      <ol className="flex items-center space-x-0">
        {displayItems.map((item, index) => {
          const isLast = item.isLast || index === displayItems.length - 1;
          const icon = getIcon(item.href);
          
          return (
            <li key={item.href} className="flex items-center">
              {isLast ? (
                <span
                  className="text-gray-900 font-medium truncate max-w-xs flex items-center"
                  aria-current="page"
                >
                  {icon}
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors truncate max-w-xs flex items-center"
                  >
                    {icon}
                    {item.label}
                  </Link>
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;