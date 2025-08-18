import { NextRequest } from 'next/server';
import { kv } from '@vercel/kv';

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: NextRequest) => string;
}

const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
};

export async function rateLimit(
  req: NextRequest,
  config: RateLimitConfig = DEFAULT_RATE_LIMIT
): Promise<{ success: boolean; remaining?: number; resetTime?: number }> {
  const key = config.keyGenerator 
    ? config.keyGenerator(req)
    : getClientIP(req);
  
  const rateLimitKey = `rate_limit:${key}`;
  
  try {
    const current = await kv.get<number>(rateLimitKey) || 0;
    
    if (current >= config.maxRequests) {
      const ttl = await kv.ttl(rateLimitKey);
      return {
        success: false,
        remaining: 0,
        resetTime: Date.now() + (ttl * 1000),
      };
    }
    
    const newCount = current + 1;
    
    if (current === 0) {
      // First request in window, set expiration
      await kv.setex(rateLimitKey, Math.ceil(config.windowMs / 1000), newCount);
    } else {
      // Increment existing counter
      await kv.incr(rateLimitKey);
    }
    
    return {
      success: true,
      remaining: config.maxRequests - newCount,
    };
  } catch (error) {
    console.error('Rate limit error:', error);
    // Fail open - allow request if rate limiting fails
    return { success: true };
  }
}

export function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  // Fallback to a default for development
  return req.ip || '127.0.0.1';
}

export function validateContentType(req: NextRequest, expectedType: string): boolean {
  const contentType = req.headers.get('content-type');
  return contentType?.includes(expectedType) || false;
}

export function addSecurityHeaders(response: Response): Response {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Content-Security-Policy', "default-src 'self'");
  
  return response;
}

export async function logRequest(req: NextRequest, response?: Response): Promise<void> {
  const logData = {
    method: req.method,
    url: req.url,
    userAgent: req.headers.get('user-agent'),
    ip: getClientIP(req),
    timestamp: new Date().toISOString(),
    status: response?.status,
  };
  
  // In production, this would go to a proper logging service
  console.log('API Request:', JSON.stringify(logData));
}

// CSRF protection for state-changing operations
export function validateCSRFToken(req: NextRequest): boolean {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return true; // No CSRF protection needed for safe methods
  }
  
  const token = req.headers.get('x-csrf-token');
  const sessionToken = req.cookies.get('csrf-token')?.value;
  
  return token === sessionToken;
}

export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}