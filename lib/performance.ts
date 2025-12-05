// Performance monitoring utilities

// Track Core Web Vitals
export const reportWebVitals = (metric: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric);
  }
};

// Prefetch critical resources
export const prefetchResources = () => {
  if (typeof window !== 'undefined') {
    const links = [
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ];

    links.forEach(({ rel, href }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (rel === 'preconnect') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }
};

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach((img) => imageObserver.observe(img));
  }
};

// Optimize font loading
export const optimizeFontLoading = () => {
  if ('fonts' in document) {
    Promise.all([
      (document as any).fonts.load('1em Geist Sans'),
      (document as any).fonts.load('1em Geist Mono'),
    ]).then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
};

// Measure page load time
export const measurePageLoadTime = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      console.log('[Performance]', {
        pageLoadTime: `${pageLoadTime}ms`,
        connectTime: `${connectTime}ms`,
        renderTime: `${renderTime}ms`,
      });

      // Track in Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          value: pageLoadTime,
          event_category: 'Performance',
          non_interaction: true,
        });
      }
    });
  }
};

// Check for slow network
export const detectSlowNetwork = (): boolean => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
  }
  return false;
};

// Enable service worker for caching
export const enableServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('[Service Worker] Registered successfully');
    } catch (error) {
      console.error('[Service Worker] Registration failed:', error);
    }
  }
};

