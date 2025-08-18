'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

// Google Tag Manager Configuration
const GTM_ID = 'GTM-XXXXXXX'; // Replace with actual GTM ID

interface AnalyticsProps {
  enableGA4?: boolean;
  enableGTM?: boolean;
  enableHotjar?: boolean;
  enableMouseflow?: boolean;
}

export const Analytics: React.FC<AnalyticsProps> = ({
  enableGA4 = true,
  enableGTM = false,
  enableHotjar = false,
  enableMouseflow = false,
}) => {
  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== 'undefined' && enableGA4) {
      // Custom events for SEO tracking
      trackSEOEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, [enableGA4]);

  return (
    <>
      {/* Google Analytics 4 */}
      {enableGA4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                // Enhanced measurement for SEO
                allow_google_signals: true,
                allow_ad_personalization_signals: true,
                cookie_expires: 63072000, // 2 years
                custom_map: {
                  'custom_parameter_1': 'adam_james_tulsa_visitor'
                },
                // Local business tracking
                send_page_view: true,
                transport_type: 'beacon',
                anonymize_ip: false
              });
              
              // Track Adam James Tulsa specific events
              gtag('event', 'adam_james_tulsa_page_view', {
                event_category: 'SEO',
                event_label: 'Adam James Tulsa Homepage',
                value: 1
              });
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {enableGTM && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Hotjar Analytics */}
      {enableHotjar && (
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3835000,hjsv:6}; // Replace with actual Hotjar ID
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "n7x8x8x8x8"); // Replace with actual Clarity ID
        `}
      </Script>

      {/* Schema.org WebSite Search Action */}
      <Script id="website-search-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Adam James Tulsa",
            "alternateName": "Adam James - Tulsa Business Leader",
            "url": "https://adamjamestulsa.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://adamjamestulsa.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
    </>
  );
};

// SEO Event Tracking Functions
export const trackSEOEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'SEO',
      ...parameters,
    });
  }
};

export const trackBusinessEvent = (eventName: string, businessType: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Business',
      event_label: businessType,
      custom_parameter_business: businessType,
      ...parameters,
    });
  }
};

export const trackLocationEvent = (eventName: string, location: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Location',
      event_label: location,
      custom_parameter_location: location,
      ...parameters,
    });
  }
};

export const trackContactEvent = (eventName: string, contactMethod: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Contact',
      event_label: contactMethod,
      custom_parameter_contact: contactMethod,
      value: 10, // Assign value to contact events
      ...parameters,
    });
  }
};

// Conversion tracking for Adam James Tulsa
export const trackConversion = (conversionType: string, value: number = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/adam_james_tulsa_conversion`,
      event_category: 'Conversion',
      event_label: conversionType,
      value: value,
      currency: 'USD',
    });
  }
};

// Search Console and Bing Webmaster Tools verification
export const SearchConsoleVerification: React.FC = () => (
  <>
    {/* Google Search Console */}
    <meta name="google-site-verification" content="google-search-console-verification-code" />
    
    {/* Bing Webmaster Tools */}
    <meta name="msvalidate.01" content="bing-webmaster-verification-code" />
    
    {/* Yandex Webmaster */}
    <meta name="yandex-verification" content="yandex-verification-code" />
    
    {/* Pinterest Domain Verification */}
    <meta name="p:domain_verify" content="pinterest-verification-code" />
  </>
);

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default Analytics;