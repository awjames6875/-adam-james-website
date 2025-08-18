import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)\.]+$/, 'Invalid phone number').optional(),
  company: z.string().max(100).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  service: z.enum(['integrity-stone', 'safe-harbor', 'growthgenix', 'consultation', 'other']).optional(),
  urgency: z.enum(['low', 'medium', 'high', 'urgent']).default('medium'),
  source: z.string().max(100).optional(),
  preferredContact: z.enum(['email', 'phone', 'both']).default('email'),
});

// Newsletter signup validation schema
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(2).max(50).optional(),
  interests: z.array(z.string()).optional(),
  source: z.string().max(100).optional(),
});

// Appointment booking validation schema
export const appointmentSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)\.]+$/),
  service: z.enum(['integrity-stone', 'safe-harbor', 'growthgenix', 'consultation']),
  preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  preferredTime: z.string().regex(/^\d{2}:\d{2}$/),
  timezone: z.string().default('America/Chicago'),
  message: z.string().max(500).optional(),
  meetingType: z.enum(['in-person', 'video', 'phone']).default('video'),
});

// Service inquiry validation schema
export const serviceInquirySchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)\.]+$/).optional(),
  company: z.string().max(100).optional(),
  service: z.enum(['integrity-stone', 'safe-harbor', 'growthgenix']),
  projectDetails: z.string().min(20).max(2000),
  budget: z.enum(['under-10k', '10k-50k', '50k-100k', 'over-100k', 'discuss']).optional(),
  timeline: z.enum(['asap', '1-month', '3-months', '6-months', 'flexible']).optional(),
  requirements: z.array(z.string()).optional(),
});

// Quote request validation schema
export const quoteRequestSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)\.]+$/).optional(),
  company: z.string().max(100).optional(),
  service: z.enum(['integrity-stone', 'safe-harbor', 'growthgenix']),
  projectDescription: z.string().min(50).max(3000),
  requirements: z.array(z.string()),
  budget: z.enum(['under-10k', '10k-50k', '50k-100k', 'over-100k', 'discuss']),
  timeline: z.enum(['asap', '1-month', '3-months', '6-months', 'flexible']),
  additionalFiles: z.array(z.string()).optional(),
});

// Analytics event validation schema
export const analyticsEventSchema = z.object({
  event: z.string().min(1).max(50),
  category: z.string().min(1).max(50),
  label: z.string().max(100).optional(),
  value: z.number().optional(),
  page: z.string().url().optional(),
  sessionId: z.string().optional(),
  userId: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

// Page view tracking validation schema
export const pageViewSchema = z.object({
  page: z.string().url(),
  title: z.string().max(200).optional(),
  referrer: z.string().url().optional(),
  userAgent: z.string().max(500).optional(),
  sessionId: z.string().optional(),
  userId: z.string().optional(),
  loadTime: z.number().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

// Search validation schema
export const searchSchema = z.object({
  query: z.string().min(1).max(200),
  filters: z.object({
    type: z.enum(['all', 'pages', 'services', 'locations', 'blog']).optional(),
    location: z.string().optional(),
    service: z.string().optional(),
  }).optional(),
  limit: z.number().min(1).max(50).default(10),
  offset: z.number().min(0).default(0),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type AppointmentData = z.infer<typeof appointmentSchema>;
export type ServiceInquiryData = z.infer<typeof serviceInquirySchema>;
export type QuoteRequestData = z.infer<typeof quoteRequestSchema>;
export type AnalyticsEventData = z.infer<typeof analyticsEventSchema>;
export type PageViewData = z.infer<typeof pageViewSchema>;
export type SearchData = z.infer<typeof searchSchema>;