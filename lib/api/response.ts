import { NextResponse } from 'next/server';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  code?: string;
  timestamp?: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function createSuccessResponse<T>(
  data: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

export function createErrorResponse(
  error: string | Error,
  status: number = 500,
  code?: string
): NextResponse<ApiResponse> {
  const message = error instanceof Error ? error.message : error;
  
  return NextResponse.json(
    {
      success: false,
      error: message,
      code,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

export function createValidationErrorResponse(
  errors: Record<string, string[]>
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: 'Validation failed',
      code: 'VALIDATION_ERROR',
      data: { errors },
      timestamp: new Date().toISOString(),
    },
    { status: 400 }
  );
}

export function handleApiError(error: unknown): NextResponse<ApiResponse> {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    return createErrorResponse(error.message, error.statusCode, error.code);
  }

  if (error instanceof Error) {
    return createErrorResponse(error.message, 500, 'INTERNAL_ERROR');
  }

  return createErrorResponse('An unexpected error occurred', 500, 'UNKNOWN_ERROR');
}