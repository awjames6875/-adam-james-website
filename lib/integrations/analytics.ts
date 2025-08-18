/**
 * Google Analytics 4 Integration
 * Handles all analytics tracking for the adamjamestulsa.com website
 */

import { config } from '@/lib/config';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export interface GAPageView {
  page_title: string;
  page_location: string;
  page_referrer?: string;
  custom_parameters?: Record<string, any>;
}

// Initialize Google Analytics
export function initGA(): void {
  if (!config.analytics.googleAnalyticsId || typeof window === 'undefined') {
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', config.analytics.googleAnalyticsId, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
  });
}

// Track page views
export function trackPageView(data: GAPageView): void {
  if (!config.analytics.googleAnalyticsId || typeof window === 'undefined') {
    return;
  }

  window.gtag('config', config.analytics.googleAnalyticsId, {
    page_title: data.page_title,
    page_location: data.page_location,
    page_referrer: data.page_referrer,
    custom_map: data.custom_parameters,
  });
}

// Track custom events
export function trackEvent(event: GAEvent): void {
  if (!config.analytics.googleAnalyticsId || typeof window === 'undefined') {
    return;
  }

  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
    ...event.custom_parameters,
  });
}

// Predefined event tracking functions for common actions
export const GAEvents = {
  // Contact form submissions
  contactFormSubmission: (service?: string, urgency?: string) => {
    trackEvent({
      action: 'contact_form_submit',
      category: 'engagement',
      label: service,
      custom_parameters: {
        service,
        urgency,
        timestamp: Date.now(),
      },
    });
  },

  // Newsletter signups
  newsletterSignup: (source?: string) => {
    trackEvent({
      action: 'newsletter_signup',
      category: 'engagement',
      label: source,
      custom_parameters: {
        source,
        timestamp: Date.now(),
      },
    });
  },

  // Service page visits
  servicePageView: (service: string) => {
    trackEvent({
      action: 'service_page_view',
      category: 'engagement',
      label: service,
      custom_parameters: {
        service,
        timestamp: Date.now(),
      },
    });
  },

  // Location page visits
  locationPageView: (location: string) => {
    trackEvent({
      action: 'location_page_view',
      category: 'engagement',
      label: location,
      custom_parameters: {
        location,
        timestamp: Date.now(),
      },
    });
  },

  // Phone number clicks
  phoneClick: (source: string) => {
    trackEvent({
      action: 'phone_click',
      category: 'contact',
      label: source,
      custom_parameters: {
        source,
        timestamp: Date.now(),
      },
    });
  },

  // Email clicks
  emailClick: (source: string) => {
    trackEvent({
      action: 'email_click',
      category: 'contact',
      label: source,
      custom_parameters: {
        source,
        timestamp: Date.now(),
      },
    });
  },

  // External link clicks
  externalLinkClick: (url: string, source: string) => {
    trackEvent({
      action: 'external_link_click',
      category: 'engagement',
      label: url,
      custom_parameters: {
        url,
        source,
        timestamp: Date.now(),
      },
    });
  },

  // File downloads
  fileDownload: (fileName: string, fileType: string) => {
    trackEvent({
      action: 'file_download',
      category: 'engagement',
      label: fileName,
      custom_parameters: {
        file_name: fileName,
        file_type: fileType,
        timestamp: Date.now(),
      },
    });
  },

  // Search usage
  siteSearch: (searchTerm: string, resultsCount: number) => {
    trackEvent({
      action: 'site_search',
      category: 'engagement',
      label: searchTerm,
      value: resultsCount,
      custom_parameters: {
        search_term: searchTerm,
        results_count: resultsCount,
        timestamp: Date.now(),
      },
    });
  },

  // Video interactions
  videoPlay: (videoTitle: string, videoUrl: string) => {
    trackEvent({
      action: 'video_play',
      category: 'engagement',
      label: videoTitle,
      custom_parameters: {
        video_title: videoTitle,
        video_url: videoUrl,
        timestamp: Date.now(),
      },
    });
  },

  // Social media interactions
  socialShare: (platform: string, url: string) => {
    trackEvent({
      action: 'social_share',
      category: 'engagement',
      label: platform,
      custom_parameters: {
        platform,
        url,
        timestamp: Date.now(),
      },
    });
  },

  // Business-specific events
  integrityStoneInquiry: () => {
    trackEvent({
      action: 'integrity_stone_inquiry',
      category: 'business',
      label: 'construction',
      custom_parameters: {
        service: 'integrity-stone',
        timestamp: Date.now(),
      },
    });
  },

  safeHarborInquiry: () => {
    trackEvent({
      action: 'safe_harbor_inquiry',
      category: 'business',
      label: 'financial',
      custom_parameters: {
        service: 'safe-harbor',
        timestamp: Date.now(),
      },
    });
  },

  growthGenixInquiry: () => {
    trackEvent({
      action: 'growth_genix_inquiry',
      category: 'business',
      label: 'marketing',
      custom_parameters: {
        service: 'growth-genix',
        timestamp: Date.now(),
      },
    });
  },
};

// Enhanced ecommerce tracking (for future use with services)
export function trackPurchase(transactionId: string, value: number, currency: string = 'USD', items: any[] = []) {
  if (!config.analytics.googleAnalyticsId || typeof window === 'undefined') {
    return;
  }

  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: items,
  });
}

// Performance tracking
export function trackPerformance() {
  if (typeof window === 'undefined' || !window.performance) {
    return;
  }

  // Track Core Web Vitals
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navigation) {
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
    const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

    trackEvent({
      action: 'page_performance',
      category: 'performance',
      custom_parameters: {
        load_time: Math.round(loadTime),
        dom_content_loaded: Math.round(domContentLoaded),
        first_paint: Math.round(firstPaint),
        first_contentful_paint: Math.round(firstContentfulPaint),
        timestamp: Date.now(),
      },
    });
  }
}

// Conversion tracking
export function trackConversion(conversionLabel: string, value?: number) {
  if (!config.analytics.googleAnalyticsId || typeof window === 'undefined') {
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${config.analytics.googleAnalyticsId}/${conversionLabel}`,
    value: value,
    currency: 'USD',
  });
}

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackPurchase,
  trackPerformance,
  trackConversion,
  GAEvents,
};