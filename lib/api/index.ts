/**
 * Adam James Tulsa Website API Library
 * 
 * This module provides a centralized export for all API utilities, types, and helpers.
 * Use this as the main entry point for API-related functionality.
 */

// Validation schemas and types
export * from './validation';

// Response utilities
export * from './response';

// Middleware and security
export * from './middleware';
export * from './auth';

// Email services
export * from './email';

// Storage utilities
export * from './storage';

// API Client (for frontend consumption)
export interface ApiClient {
  contact: {
    submit: (data: any) => Promise<any>;
    getStats: () => Promise<any>;
  };
  newsletter: {
    subscribe: (data: any) => Promise<any>;
    unsubscribe: (email: string) => Promise<any>;
    getStats: () => Promise<any>;
  };
  appointment: {
    request: (data: any) => Promise<any>;
    getAvailableSlots: (date: string, service?: string) => Promise<any>;
    getStats: () => Promise<any>;
  };
  services: {
    submitInquiry: (data: any) => Promise<any>;
    requestQuote: (data: any) => Promise<any>;
    getInquiries: (filters?: any) => Promise<any>;
    getQuotes: (filters?: any) => Promise<any>;
  };
  analytics: {
    trackPageView: (data: any) => Promise<any>;
    trackEvent: (data: any) => Promise<any>;
    getPageViews: (filters?: any) => Promise<any>;
    getEvents: (filters?: any) => Promise<any>;
  };
  search: {
    query: (q: string, filters?: any) => Promise<any>;
  };
  socialProof: {
    getTestimonials: (filters?: any) => Promise<any>;
    getStats: () => Promise<any>;
    getAchievements: () => Promise<any>;
    getCertifications: () => Promise<any>;
    getPortfolio: (filters?: any) => Promise<any>;
    submitTestimonial: (data: any) => Promise<any>;
  };
  seo: {
    getSitemap: (format?: string) => Promise<any>;
    getRssFeed: (format?: string) => Promise<any>;
  };
}

/**
 * Creates an API client instance for frontend use
 */
export function createApiClient(baseUrl = '/api'): ApiClient {
  const request = async (endpoint: string, options: RequestInit = {}) => {
    const url = `${baseUrl}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(error.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  };

  return {
    contact: {
      submit: (data) => request('/contact', { method: 'POST', body: JSON.stringify(data) }),
      getStats: () => request('/contact'),
    },
    newsletter: {
      subscribe: (data) => request('/newsletter', { method: 'POST', body: JSON.stringify(data) }),
      unsubscribe: (email) => request(`/newsletter?email=${encodeURIComponent(email)}`, { method: 'DELETE' }),
      getStats: () => request('/newsletter'),
    },
    appointment: {
      request: (data) => request('/appointment', { method: 'POST', body: JSON.stringify(data) }),
      getAvailableSlots: (date, service) => {
        const params = new URLSearchParams({ date });
        if (service) params.append('service', service);
        return request(`/appointment?${params}`);
      },
      getStats: () => request('/appointment'),
    },
    services: {
      submitInquiry: (data) => request('/services/inquiry', { method: 'POST', body: JSON.stringify(data) }),
      requestQuote: (data) => request('/services/quote', { method: 'POST', body: JSON.stringify(data) }),
      getInquiries: (filters) => {
        const params = new URLSearchParams(filters || {});
        return request(`/services/inquiry?${params}`);
      },
      getQuotes: (filters) => {
        const params = new URLSearchParams(filters || {});
        return request(`/services/quote?${params}`);
      },
    },
    analytics: {
      trackPageView: (data) => request('/analytics/pageview', { method: 'POST', body: JSON.stringify(data) }),
      trackEvent: (data) => request('/analytics/event', { method: 'POST', body: JSON.stringify(data) }),
      getPageViews: (filters) => {
        const params = new URLSearchParams(filters || {});
        return request(`/analytics/pageview?${params}`);
      },
      getEvents: (filters) => {
        const params = new URLSearchParams(filters || {});
        return request(`/analytics/event?${params}`);
      },
    },
    search: {
      query: (q, filters) => {
        const params = new URLSearchParams({ q, ...filters });
        return request(`/search?${params}`);
      },
    },
    socialProof: {
      getTestimonials: (filters) => {
        const params = new URLSearchParams({ type: 'testimonials', ...filters });
        return request(`/social-proof?${params}`);
      },
      getStats: () => request('/social-proof?type=stats'),
      getAchievements: () => request('/social-proof?type=achievements'),
      getCertifications: () => request('/social-proof?type=certifications'),
      getPortfolio: (filters) => {
        const params = new URLSearchParams({ type: 'portfolio', ...filters });
        return request(`/social-proof?${params}`);
      },
      submitTestimonial: (data) => request('/social-proof', { method: 'POST', body: JSON.stringify(data) }),
    },
    seo: {
      getSitemap: (format) => {
        const params = format ? `?format=${format}` : '';
        return request(`/sitemap${params}`);
      },
      getRssFeed: (format) => {
        const params = format ? `?format=${format}` : '';
        return request(`/rss${params}`);
      },
    },
  };
}

/**
 * Default API client instance
 */
export const api = createApiClient();

/**
 * API endpoint constants
 */
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  APPOINTMENT: '/api/appointment',
  SERVICE_INQUIRY: '/api/services/inquiry',
  QUOTE_REQUEST: '/api/services/quote',
  ANALYTICS_PAGEVIEW: '/api/analytics/pageview',
  ANALYTICS_EVENT: '/api/analytics/event',
  SEARCH: '/api/search',
  SOCIAL_PROOF: '/api/social-proof',
  SITEMAP: '/api/sitemap',
  RSS: '/api/rss',
  ADMIN_DASHBOARD: '/api/admin/dashboard',
} as const;

/**
 * Rate limit configurations
 */
export const RATE_LIMITS = {
  CONTACT_FORM: { windowMs: 15 * 60 * 1000, maxRequests: 5 },
  NEWSLETTER: { windowMs: 5 * 60 * 1000, maxRequests: 3 },
  APPOINTMENT: { windowMs: 15 * 60 * 1000, maxRequests: 3 },
  SERVICE_INQUIRY: { windowMs: 15 * 60 * 1000, maxRequests: 3 },
  QUOTE_REQUEST: { windowMs: 30 * 60 * 1000, maxRequests: 2 },
  ANALYTICS: { windowMs: 1 * 60 * 1000, maxRequests: 100 },
  SEARCH: { windowMs: 1 * 60 * 1000, maxRequests: 30 },
  GENERAL: { windowMs: 15 * 60 * 1000, maxRequests: 100 },
} as const;

/**
 * Error codes used throughout the API
 */
export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  ALREADY_SUBSCRIBED: 'ALREADY_SUBSCRIBED',
  INVALID_DATE: 'INVALID_DATE',
  INVALID_TIME: 'INVALID_TIME',
  INVALID_DAY: 'INVALID_DAY',
  INVALID_TOKEN: 'INVALID_TOKEN',
  MISSING_EMAIL: 'MISSING_EMAIL',
} as const;