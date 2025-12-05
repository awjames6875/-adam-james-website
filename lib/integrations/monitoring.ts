/**
 * Monitoring and Error Tracking Integration
 * Handles performance monitoring, error tracking, and logging
 */

import { config } from '@/lib/config';
import { AnalyticsStorage } from '@/lib/api/storage';

interface ErrorReport {
    message: string;
    stack?: string;
    url: string;
    userAgent: string;
    timestamp: number;
    userId?: string;
    sessionId?: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    context?: Record<string, any>;
}

interface PerformanceMetrics {
    url: string;
    loadTime: number;
    domContentLoaded: number;
    firstPaint?: number;
    firstContentfulPaint?: number;
    largestContentfulPaint?: number;
    cumulativeLayoutShift?: number;
    firstInputDelay?: number;
    timeToInteractive?: number;
    timestamp: number;
    userAgent: string;
    connectionType?: string;
    deviceMemory?: number;
}

interface UserSession {
    sessionId: string;
    userId?: string;
    startTime: number;
    lastActivity: number;
    pageViews: number;
    events: any[];
    userAgent: string;
    referrer?: string;
    utm?: Record<string, string>;
}

// Generate a unique session ID
function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2)}`;
}

// Get or create session ID
function getSessionId(): string {
    if (typeof window === 'undefined') return generateSessionId();

    let sessionId = sessionStorage.getItem('adamjames_session_id');
    if (!sessionId) {
        sessionId = generateSessionId();
        sessionStorage.setItem('adamjames_session_id', sessionId);
    }
    return sessionId;
}

// Error tracking and reporting
export class ErrorTracker {
    private static isInitialized = false;

    static init(): void {
        if (this.isInitialized || typeof window === 'undefined') return;

        // Global error handler
        window.addEventListener('error', (event) => {
            this.reportError({
                message: event.message,
                stack: event.error?.stack,
                url: event.filename || window.location.href,
                userAgent: navigator.userAgent,
                timestamp: Date.now(),
                sessionId: getSessionId(),
                severity: 'high',
                context: {
                    line: event.lineno,
                    column: event.colno,
                    type: 'javascript_error',
                },
            });
        });

        // Unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.reportError({
                message: `Unhandled promise rejection: ${event.reason}`,
                stack: event.reason?.stack,
                url: window.location.href,
                userAgent: navigator.userAgent,
                timestamp: Date.now(),
                sessionId: getSessionId(),
                severity: 'high',
                context: {
                    type: 'unhandled_promise_rejection',
                    reason: event.reason,
                },
            });
        });

        this.isInitialized = true;
    }

    static async reportError(error: ErrorReport): Promise<void> {
        try {
            // Log to console in development
            if (config.environment.isDevelopment) {
                console.error('Error reported:', error);
            }

            // Send to backend for storage
            await fetch('/api/monitoring/error', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(error),
            });

            // If Sentry is configured, send there too
            if (typeof window !== 'undefined' && (window as any).Sentry) {
                (window as any).Sentry.captureException(new Error(error.message), {
                    extra: error.context,
                    tags: {
                        severity: error.severity,
                        sessionId: error.sessionId,
                    },
                });
            }
        } catch (reportingError) {
            console.error('Failed to report error:', reportingError);
        }
    }

    static reportClientError(
        message: string,
        severity: ErrorReport['severity'] = 'medium',
        context?: Record<string, any>
    ): void {
        this.reportError({
            message,
            url: typeof window !== 'undefined' ? window.location.href : '',
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
            timestamp: Date.now(),
            sessionId: getSessionId(),
            severity,
            context,
        });
    }
}

// Performance monitoring
export class PerformanceMonitor {
    private static isInitialized = false;

    static init(): void {
        if (this.isInitialized || typeof window === 'undefined') return;

        // Monitor page load performance
        window.addEventListener('load', () => {
            // Wait a bit for all resources to finish loading
            setTimeout(() => {
                this.reportPageLoadMetrics();
            }, 1000);
        });

        // Monitor Core Web Vitals
        this.initCoreWebVitals();

        this.isInitialized = true;
    }

    private static async reportPageLoadMetrics(): Promise<void> {
        if (!window.performance) return;

        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');

        const metrics: PerformanceMetrics = {
            url: window.location.href,
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
        };

        // Add paint metrics if available
        const firstPaint = paint.find(entry => entry.name === 'first-paint');
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');

        if (firstPaint) metrics.firstPaint = firstPaint.startTime;
        if (firstContentfulPaint) metrics.firstContentfulPaint = firstContentfulPaint.startTime;

        // Add connection info if available
        const connection = (navigator as any).connection;
        if (connection) {
            metrics.connectionType = connection.effectiveType;
        }

        // Add device memory if available
        if ('deviceMemory' in navigator) {
            metrics.deviceMemory = (navigator as any).deviceMemory;
        }

        await this.reportMetrics(metrics);
    }

    private static initCoreWebVitals(): void {
        // Use web-vitals library if available
        if (typeof window !== 'undefined' && (window as any).webVitals) {
            const { getCLS, getFID, getFCP, getLCP, getTTFB } = (window as any).webVitals;

            getCLS((metric: any) => this.reportWebVital('CLS', metric));
            getFID((metric: any) => this.reportWebVital('FID', metric));
            getFCP((metric: any) => this.reportWebVital('FCP', metric));
            getLCP((metric: any) => this.reportWebVital('LCP', metric));
            getTTFB((metric: any) => this.reportWebVital('TTFB', metric));
        }
    }

    private static async reportWebVital(name: string, metric: any): Promise<void> {
        try {
            await fetch('/api/monitoring/web-vitals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    value: metric.value,
                    delta: metric.delta,
                    id: metric.id,
                    url: window.location.href,
                    timestamp: Date.now(),
                    sessionId: getSessionId(),
                }),
            });
        } catch (error) {
            console.error('Failed to report web vital:', error);
        }
    }

    static async reportMetrics(metrics: PerformanceMetrics): Promise<void> {
        try {
            await fetch('/api/monitoring/performance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(metrics),
            });

            // Also store in analytics
            await AnalyticsStorage.trackEvent({
                type: 'performance',
                data: metrics,
            });
        } catch (error) {
            console.error('Failed to report performance metrics:', error);
        }
    }

    static measureApiCall<T>(
        apiCall: () => Promise<T>,
        endpoint: string
    ): Promise<T> {
        const startTime = Date.now();

        return apiCall().then(
            (result) => {
                const duration = Date.now() - startTime;
                this.reportApiMetrics(endpoint, duration, 'success');
                return result;
            },
            (error) => {
                const duration = Date.now() - startTime;
                this.reportApiMetrics(endpoint, duration, 'error', error.message);
                throw error;
            }
        );
    }

    private static async reportApiMetrics(
        endpoint: string,
        duration: number,
        status: 'success' | 'error',
        errorMessage?: string
    ): Promise<void> {
        try {
            await fetch('/api/monitoring/api-metrics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    endpoint,
                    duration,
                    status,
                    errorMessage,
                    timestamp: Date.now(),
                    sessionId: getSessionId(),
                }),
            });
        } catch (error) {
            console.error('Failed to report API metrics:', error);
        }
    }
}

// User session tracking
export class SessionTracker {
    private static session: UserSession | null = null;

    static init(): void {
        if (typeof window === 'undefined') return;

        const sessionId = getSessionId();

        this.session = {
            sessionId,
            startTime: Date.now(),
            lastActivity: Date.now(),
            pageViews: 0,
            events: [],
            userAgent: navigator.userAgent,
            referrer: document.referrer,
            utm: this.extractUTMParameters(),
        };

        // Track page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('page_hidden');
            } else {
                this.trackEvent('page_visible');
            }
        });

        // Track user activity
        ['click', 'scroll', 'keypress'].forEach(eventType => {
            document.addEventListener(eventType, () => {
                this.updateLastActivity();
            }, { passive: true });
        });

        // Save session periodically
        setInterval(() => {
            this.saveSession();
        }, 30000); // Every 30 seconds

        // Save session on page unload
        window.addEventListener('beforeunload', () => {
            this.saveSession();
        });
    }

    private static extractUTMParameters(): Record<string, string> {
        const params = new URLSearchParams(window.location.search);
        const utm: Record<string, string> = {};

        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
            const value = params.get(param);
            if (value) utm[param] = value;
        });

        return utm;
    }

    static trackPageView(url: string, title: string): void {
        if (!this.session) return;

        this.session.pageViews++;
        this.trackEvent('page_view', { url, title });
    }

    static trackEvent(eventType: string, data?: any): void {
        if (!this.session) return;

        this.session.events.push({
            type: eventType,
            data,
            timestamp: Date.now(),
        });

        this.updateLastActivity();
    }

    private static updateLastActivity(): void {
        if (this.session) {
            this.session.lastActivity = Date.now();
        }
    }

    private static async saveSession(): Promise<void> {
        if (!this.session) return;

        try {
            await fetch('/api/monitoring/session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.session),
            });
        } catch (error) {
            console.error('Failed to save session:', error);
        }
    }

    static getSession(): UserSession | null {
        return this.session;
    }
}

// Initialize all monitoring systems
export function initMonitoring(): void {
    if (typeof window === 'undefined') return;

    ErrorTracker.init();
    PerformanceMonitor.init();
    SessionTracker.init();

    // Initialize Sentry if configured
    /*
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      import('@sentry/nextjs').then((Sentry) => {
        Sentry.init({
          dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
          environment: config.environment.nodeEnv,
          tracesSampleRate: config.environment.isProduction ? 0.1 : 1.0,
          beforeSend(event) {
            // Filter out irrelevant errors
            if (event.exception) {
              const error = event.exception.values?.[0];
              if (error?.value?.includes('Non-Error promise rejection')) {
                return null;
              }
            }
            return event;
          },
        });
      });
    }
    */
}

// Health check endpoint data
export async function getHealthStatus(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    checks: Record<string, { status: 'pass' | 'fail'; message?: string; responseTime?: number }>;
    timestamp: number;
}> {
    const checks: Record<string, any> = {};

    // Database health check
    try {
        const start = Date.now();
        await fetch('/api/health/database');
        checks.database = {
            status: 'pass',
            responseTime: Date.now() - start,
        };
    } catch (error) {
        checks.database = {
            status: 'fail',
            message: error instanceof Error ? error.message : 'Unknown error',
        };
    }

    // Email service health check
    try {
        const start = Date.now();
        await fetch('/api/health/email');
        checks.email = {
            status: 'pass',
            responseTime: Date.now() - start,
        };
    } catch (error) {
        checks.email = {
            status: 'fail',
            message: error instanceof Error ? error.message : 'Unknown error',
        };
    }

    // Determine overall status
    const failedChecks = Object.values(checks).filter(check => check.status === 'fail');
    let status: 'healthy' | 'degraded' | 'unhealthy';

    if (failedChecks.length === 0) {
        status = 'healthy';
    } else if (failedChecks.length <= Object.keys(checks).length / 2) {
        status = 'degraded';
    } else {
        status = 'unhealthy';
    }

    return {
        status,
        checks,
        timestamp: Date.now(),
    };
}

export default {
    init: initMonitoring,
    ErrorTracker,
    PerformanceMonitor,
    SessionTracker,
    getHealthStatus,
};