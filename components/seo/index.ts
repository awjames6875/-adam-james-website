// SEO Components
export { default as SEOHead, generateSEOMetadata } from './SEOHead';
export type { SEOHeadProps } from './SEOHead';

export { 
  default as SchemaMarkup,
  PersonSchema,
  OrganizationSchema,
  ArticleSchema,
  ServiceSchema,
  ReviewSchema,
  WebSiteSchema,
  BreadcrumbSchema,
  CombinedSchema,
  adamJamesPersonSchema,
  adamJHoldingsSchema,
  tulsaTherapeuticServicesSchema,
  tulsaCorporateHousingSchema,
  adamJamesWebsiteSchema
} from './SchemaMarkup';
export type { 
  PersonSchemaProps,
  OrganizationSchemaProps,
  ArticleSchemaProps,
  ServiceSchemaProps,
  ReviewSchemaProps,
  WebSiteSchemaProps,
  BreadcrumbSchemaProps,
  MainSchemaMarkupProps
} from './SchemaMarkup';

export { 
  default as Breadcrumbs,
  LocationBreadcrumbs,
  ServiceBreadcrumbs,
  BusinessBreadcrumbs,
  BlogBreadcrumbs,
  RichBreadcrumbs
} from './Breadcrumbs';
export type { 
  BreadcrumbsProps,
  BreadcrumbItem,
  LocationBreadcrumbsProps,
  ServiceBreadcrumbsProps,
  BusinessBreadcrumbsProps,
  BlogBreadcrumbsProps,
  RichBreadcrumbsProps
} from './Breadcrumbs';

// Local Business Schema
export { 
  default as LocalBusinessSchema,
  AdamJamesTulsaLocalBusiness
} from './LocalBusinessSchema';

// FAQ Schema for Rich Snippets
export { 
  default as FAQSchema,
  AdamJamesTulsaFAQ
} from './FAQSchema';

// Analytics and Tracking
export { 
  default as Analytics,
  SearchConsoleVerification,
  trackSEOEvent,
  trackBusinessEvent,
  trackLocationEvent,
  trackContactEvent,
  trackConversion
} from './Analytics';

// Internal Linking Strategy
export {
  default as InternalLinking,
  RelatedPages,
  ContextualLinks,
  ServiceAreaLinks
} from './InternalLinking';

// Content Optimization
export {
  OptimizedContent,
  KeywordDensityAnalyzer,
  SemanticContent,
  LocalSEOContent,
  TrustSignals
} from './ContentOptimizer';