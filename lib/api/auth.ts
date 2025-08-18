import { NextRequest } from 'next/server';
import { createHash } from 'crypto';

export interface AdminAuthResult {
  authenticated: boolean;
  user?: {
    id: string;
    email: string;
    role: string;
  };
  error?: string;
}

export async function authenticateAdmin(req: NextRequest): Promise<AdminAuthResult> {
  try {
    const authHeader = req.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        authenticated: false,
        error: 'Missing or invalid authorization header',
      };
    }

    const token = authHeader.replace('Bearer ', '');
    
    // Verify API key
    const expectedKey = process.env.API_SECRET_KEY;
    if (!expectedKey) {
      console.error('API_SECRET_KEY not configured');
      return {
        authenticated: false,
        error: 'Server configuration error',
      };
    }

    // Simple API key authentication (in production, use JWT or OAuth)
    const hashedToken = createHash('sha256').update(token).digest('hex');
    const hashedExpected = createHash('sha256').update(expectedKey).digest('hex');

    if (hashedToken !== hashedExpected) {
      return {
        authenticated: false,
        error: 'Invalid authentication token',
      };
    }

    return {
      authenticated: true,
      user: {
        id: 'admin',
        email: process.env.ADMIN_EMAIL || 'adam@adamjamestulsa.com',
        role: 'admin',
      },
    };

  } catch (error) {
    console.error('Authentication error:', error);
    return {
      authenticated: false,
      error: 'Authentication failed',
    };
  }
}

export function requireAuth(handler: (req: NextRequest, auth: AdminAuthResult) => Promise<Response>) {
  return async (req: NextRequest): Promise<Response> => {
    const auth = await authenticateAdmin(req);
    
    if (!auth.authenticated) {
      return new Response(
        JSON.stringify({
          success: false,
          error: auth.error || 'Authentication required',
          code: 'UNAUTHORIZED',
        }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return handler(req, auth);
  };
}

export function generateApiKey(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < 64; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return result;
}

export function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const usedSalt = salt || Math.random().toString(36).substring(2);
  const hash = createHash('sha256').update(password + usedSalt).digest('hex');
  
  return { hash, salt: usedSalt };
}

export function verifyPassword(password: string, hash: string, salt: string): boolean {
  const { hash: computedHash } = hashPassword(password, salt);
  return computedHash === hash;
}

export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function validateWebhookSignature(
  payload: string, 
  signature: string, 
  secret: string
): boolean {
  const expectedSignature = createHash('sha256')
    .update(payload + secret)
    .digest('hex');
  
  return signature === expectedSignature;
}