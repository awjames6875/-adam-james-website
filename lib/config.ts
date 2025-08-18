/**
 * Environment Configuration and Validation
 * Centralizes all environment variable access and validation
 */

interface Config {
  // Email Configuration
  email: {
    resendApiKey: string;
    fromEmail: string;
    adminEmail: string;
  };
  
  // Database Configuration
  database: {
    kvUrl: string;
    kvToken: string;
    kvReadOnlyToken: string;
  };
  
  // Analytics Configuration
  analytics: {
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
  };
  
  // Security Configuration
  security: {
    apiSecretKey?: string;
    webhookSecret?: string;
    csrfSecret?: string;
    jwtSecret?: string;
  };
  
  // External API Configuration
  external: {
    googleMapsApiKey?: string;
    calendlyApiKey?: string;
    calendlyUserUri?: string;
    facebookAccessToken?: string;
    googleBusinessApiKey?: string;
  };
  
  // Environment Configuration
  environment: {
    nodeEnv: string;
    siteUrl: string;
    apiUrl: string;
    isDevelopment: boolean;
    isProduction: boolean;
  };
  
  // Rate Limiting Configuration
  rateLimiting: {
    windowMs: number;
    maxRequests: number;
  };
  
  // Feature Flags
  features: {
    enableBlog: boolean;
    enableAppointments: boolean;
    enableChat: boolean;
    enableSocialLogin: boolean;
  };
  
  // Business Configuration
  business: {
    phone?: string;
    address?: string;
    hoursWeekdays?: string;
    hoursWeekend?: string;
    integrityStoneEmail?: string;
    safeHarborEmail?: string;
    growthgenixEmail?: string;
  };
}

function getRequiredEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Required environment variable ${name} is not set`);
  }
  return value;
}

function getOptionalEnvVar(name: string, defaultValue?: string): string | undefined {
  return process.env[name] || defaultValue;
}

function getBooleanEnvVar(name: string, defaultValue: boolean = false): boolean {
  const value = process.env[name];
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true';
}

function getNumberEnvVar(name: string, defaultValue: number): number {
  const value = process.env[name];
  if (!value) return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export const config: Config = {
  email: {
    resendApiKey: getRequiredEnvVar('RESEND_API_KEY'),
    fromEmail: getOptionalEnvVar('FROM_EMAIL', 'noreply@adamjamestulsa.com') || 'noreply@adamjamestulsa.com',
    adminEmail: getOptionalEnvVar('ADMIN_EMAIL', 'adam@adamjamestulsa.com') || 'adam@adamjamestulsa.com',
  },
  
  database: {
    kvUrl: getRequiredEnvVar('KV_REST_API_URL'),
    kvToken: getRequiredEnvVar('KV_REST_API_TOKEN'),
    kvReadOnlyToken: getOptionalEnvVar('KV_REST_API_READ_ONLY_TOKEN') || '',
  },
  
  analytics: {
    googleAnalyticsId: getOptionalEnvVar('NEXT_PUBLIC_GA_MEASUREMENT_ID') || getOptionalEnvVar('GOOGLE_ANALYTICS_ID'),
    googleTagManagerId: getOptionalEnvVar('GOOGLE_TAG_MANAGER_ID'),
  },
  
  security: {
    apiSecretKey: getOptionalEnvVar('API_SECRET_KEY'),
    webhookSecret: getOptionalEnvVar('WEBHOOK_SECRET'),
    csrfSecret: getOptionalEnvVar('CSRF_SECRET'),
    jwtSecret: getOptionalEnvVar('JWT_SECRET'),
  },
  
  external: {
    googleMapsApiKey: getOptionalEnvVar('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'),
    calendlyApiKey: getOptionalEnvVar('CALENDLY_API_KEY'),
    calendlyUserUri: getOptionalEnvVar('CALENDLY_USER_URI'),
    facebookAccessToken: getOptionalEnvVar('FACEBOOK_ACCESS_TOKEN') || getOptionalEnvVar('FACEBOOK_PAGE_ACCESS_TOKEN'),
    googleBusinessApiKey: getOptionalEnvVar('GOOGLE_BUSINESS_API_KEY'),
  },
  
  environment: {
    nodeEnv: getOptionalEnvVar('NODE_ENV', 'development') || 'development',
    siteUrl: getOptionalEnvVar('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000') || 'http://localhost:3000',
    apiUrl: getOptionalEnvVar('NEXT_PUBLIC_API_URL') || '',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  },
  
  rateLimiting: {
    windowMs: getNumberEnvVar('RATE_LIMIT_WINDOW_MS', 15 * 60 * 1000), // 15 minutes
    maxRequests: getNumberEnvVar('RATE_LIMIT_MAX_REQUESTS', 100),
  },
  
  features: {
    enableBlog: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_BLOG', true),
    enableAppointments: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_APPOINTMENTS', true),
    enableChat: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_CHAT', false),
    enableSocialLogin: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN', false),
  },
  
  business: {
    phone: getOptionalEnvVar('BUSINESS_PHONE'),
    address: getOptionalEnvVar('BUSINESS_ADDRESS'),
    hoursWeekdays: getOptionalEnvVar('BUSINESS_HOURS_WEEKDAYS'),
    hoursWeekend: getOptionalEnvVar('BUSINESS_HOURS_WEEKEND'),
    integrityStoneEmail: getOptionalEnvVar('INTEGRITY_STONE_LEAD_EMAIL'),
    safeHarborEmail: getOptionalEnvVar('SAFE_HARBOR_LEAD_EMAIL'),
    growthgenixEmail: getOptionalEnvVar('GROWTHGENIX_LEAD_EMAIL'),
  },
};

// Validation function to check if all required environment variables are set
export function validateConfig(): { isValid: boolean; missingVars: string[] } {
  const missingVars: string[] = [];
  
  try {
    // Test required variables
    getRequiredEnvVar('RESEND_API_KEY');
    getRequiredEnvVar('KV_REST_API_URL');
    getRequiredEnvVar('KV_REST_API_TOKEN');
  } catch (error) {
    if (error instanceof Error) {
      const varName = error.message.split(' ')[4]; // Extract variable name
      missingVars.push(varName);
    }
  }
  
  return {
    isValid: missingVars.length === 0,
    missingVars,
  };
}

// Helper function to get service-specific email based on service type
export function getServiceEmail(service: string): string {
  switch (service) {
    case 'integrity-stone':
      return config.business.integrityStoneEmail || config.email.adminEmail;
    case 'safe-harbor':
      return config.business.safeHarborEmail || config.email.adminEmail;
    case 'growthgenix':
      return config.business.growthgenixEmail || config.email.adminEmail;
    default:
      return config.email.adminEmail;
  }
}

// Helper function to check if a feature is enabled
export function isFeatureEnabled(feature: keyof Config['features']): boolean {
  return config.features[feature];
}

// Helper function to get Google Analytics config for client-side use
export function getAnalyticsConfig() {
  return {
    googleAnalyticsId: config.analytics.googleAnalyticsId,
    googleTagManagerId: config.analytics.googleTagManagerId,
  };
}

// Helper function to get public configuration (safe to expose to client)
export function getPublicConfig() {
  return {
    siteUrl: config.environment.siteUrl,
    features: config.features,
    analytics: {
      googleAnalyticsId: config.analytics.googleAnalyticsId,
    },
    business: {
      phone: config.business.phone,
      address: config.business.address,
      hoursWeekdays: config.business.hoursWeekdays,
      hoursWeekend: config.business.hoursWeekend,
    },
  };
}

export default config;