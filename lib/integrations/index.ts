/**
 * Third-Party Integrations Export
 * Centralizes all external service integrations
 */

import Analytics, { GAEvents, trackPageView, trackEvent, initGA } from './analytics';
import GoogleMaps, { tulsaLocations, createLocationMap, loadGoogleMapsAPI } from './google-maps';
import Monitoring, { ErrorTracker, PerformanceMonitor, SessionTracker, initMonitoring } from './monitoring';

export {
    Analytics, GAEvents, trackPageView, trackEvent, initGA,
    GoogleMaps, tulsaLocations, createLocationMap, loadGoogleMapsAPI,
    Monitoring, ErrorTracker, PerformanceMonitor, SessionTracker, initMonitoring
};

// Re-export types
export type { GAEvent, GAPageView } from './analytics';
export type { LocationData, MapOptions } from './google-maps';

// Initialize all integrations (call this in your app root)
export function initializeIntegrations(): void {
    if (typeof window !== 'undefined') {
        // Client-side initializations
        import('./analytics').then(({ initGA }) => {
            initGA();
        });

        import('./monitoring').then(({ initMonitoring }) => {
            initMonitoring();
        });
    }
}

// Integration status checker
export async function checkIntegrationsStatus(): Promise<{
    analytics: boolean;
    maps: boolean;
    monitoring: boolean;
}> {
    const status = {
        analytics: false,
        maps: false,
        monitoring: false,
    };

    // Check Analytics
    if (typeof window !== 'undefined') {
        status.analytics = !!(window as any).gtag;
        status.maps = !!(window as any).google?.maps;
        status.monitoring = !!(window as any).adamJamesMonitoring;
    }

    return status;
}

// Utility to load all integration scripts
export function loadIntegrationScripts(): Promise<void[]> {
    const promises: Promise<void>[] = [];

    if (typeof window !== 'undefined') {
        // Load Google Analytics
        const gaPromise = import('./analytics').then(({ initGA }) => {
            initGA();
        });
        promises.push(gaPromise);

        // Load Google Maps (only if API key is available)
        if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
            const mapsPromise = import('./google-maps').then(({ loadGoogleMapsAPI }) => {
                return loadGoogleMapsAPI();
            });
            promises.push(mapsPromise);
        }

        // Initialize monitoring
        const monitoringPromise = import('./monitoring').then(({ initMonitoring }) => {
            initMonitoring();
            // Mark monitoring as loaded
            (window as any).adamJamesMonitoring = true;
        });
        promises.push(monitoringPromise);
    }

    return Promise.all(promises);
}

export default {
    initializeIntegrations,
    checkIntegrationsStatus,
    loadIntegrationScripts,
};