'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn, isValidEmail, isValidPhone, formatPhoneNumber } from '@/lib/utils';
import { Button, Card } from '@/components/ui';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export interface ContactFormProps {
  variant?: 'default' | 'inline' | 'modal';
  showBudget?: boolean;
  defaultService?: string;
  className?: string;
  onSubmit?: (data: FormData) => Promise<void>;
}

const services = [
  'Corporate Housing',
  'Mental Health Services',
  'Business Consulting',
  'Real Estate Services',
  'Investment Opportunities',
  'General Inquiry',
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Prefer not to say',
];

const timelineOptions = [
  'ASAP',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring',
];

const ContactForm: React.FC<ContactFormProps> = ({
  variant = 'default',
  showBudget = true,
  defaultService = '',
  className,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'either',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission logic
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Format phone number
    if (field === 'phone' && typeof value === 'string') {
      setFormData(prev => ({ ...prev, phone: formatPhoneNumber(value) }));
    }
  };

  const nextStep = () => {
    const step1Fields = ['firstName', 'lastName', 'email'];
    const step1Errors: FormErrors = {};

    step1Fields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        step1Errors[field] = 'This field is required';
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      step1Errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(step1Errors).length === 0) {
      setCurrentStep(2);
    } else {
      setErrors(step1Errors);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={cn('text-center p-8', className)}>
        <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-h3 font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-body text-gray-600 mb-6">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              company: '',
              service: defaultService,
              budget: '',
              timeline: '',
              message: '',
              preferredContact: 'either',
              consent: false,
            });
            setCurrentStep(1);
          }}
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  const isMultiStep = variant === 'default';

  return (
    <Card className={cn('max-w-2xl mx-auto', className)}>
      {/* Progress Bar (for multi-step) */}
      {isMultiStep && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-body-sm text-gray-600">Step {currentStep} of 2</span>
            <span className="text-body-sm text-gray-600">{currentStep === 1 ? 'Basic Info' : 'Project Details'}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1 or Single Step */}
        {(!isMultiStep || currentStep === 1) && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-h6 font-medium text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                    errors.firstName ? 'border-error' : 'border-gray-300'
                  )}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="mt-1 text-body-sm text-error">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-h6 font-medium text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                    errors.lastName ? 'border-error' : 'border-gray-300'
                  )}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="mt-1 text-body-sm text-error">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-h6 font-medium text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                    errors.email ? 'border-error' : 'border-gray-300'
                  )}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-body-sm text-error">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-h6 font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                    errors.phone ? 'border-error' : 'border-gray-300'
                  )}
                  placeholder="(918) 555-0123"
                />
                {errors.phone && (
                  <p className="mt-1 text-body-sm text-error">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-h6 font-medium text-gray-900 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your Company Name"
              />
            </div>

            {/* Service (show in single step or compact forms) */}
            {!isMultiStep && (
              <div>
                <label htmlFor="service" className="block text-h6 font-medium text-gray-900 mb-2">
                  Service of Interest *
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                    errors.service ? 'border-error' : 'border-gray-300'
                  )}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-body-sm text-error">{errors.service}</p>
                )}
              </div>
            )}

            {isMultiStep && (
              <div className="flex justify-end">
                <Button type="button" onClick={nextStep} size="lg">
                  Next Step
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            )}
          </>
        )}

        {/* Step 2 */}
        {isMultiStep && currentStep === 2 && (
          <>
            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-h6 font-medium text-gray-900 mb-2">
                Service of Interest *
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                className={cn(
                  'w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
                  errors.service ? 'border-error' : 'border-gray-300'
                )}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-body-sm text-error">{errors.service}</p>
              )}
            </div>

            {/* Budget and Timeline */}
            {showBudget && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-h6 font-medium text-gray-900 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-h6 font-medium text-gray-900 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-h6 font-medium text-gray-900 mb-3">
                Preferred Contact Method
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'email', label: 'Email' },
                  { value: 'phone', label: 'Phone' },
                  { value: 'either', label: 'Either' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      checked={formData.preferredContact === option.value}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value as 'email' | 'phone' | 'either')}
                      className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <span className="text-body text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Message (always show in step 2 or single step) */}
        {(!isMultiStep || currentStep === 2) && (
          <div>
            <label htmlFor="message" className="block text-h6 font-medium text-gray-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={cn(
                'w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical',
                errors.message ? 'border-error' : 'border-gray-300'
              )}
              placeholder="Tell me about your project or inquiry..."
            />
            {errors.message && (
              <p className="mt-1 text-body-sm text-error">{errors.message}</p>
            )}
          </div>
        )}

        {/* Consent (always show in step 2 or single step) */}
        {(!isMultiStep || currentStep === 2) && (
          <>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => handleInputChange('consent', e.target.checked)}
                className={cn(
                  'mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded',
                  errors.consent ? 'border-error' : ''
                )}
              />
              <label htmlFor="consent" className="text-body-sm text-gray-600">
                I agree to receive communications from Adam James Tulsa and understand that I can 
                unsubscribe at any time. By submitting this form, I agree to the{' '}
                <Link href="/privacy" className="text-primary hover:text-primary-700 underline">
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link href="/terms" className="text-primary hover:text-primary-700 underline">
                  Terms of Service
                </Link>
                .
              </label>
            </div>
            {errors.consent && (
              <p className="text-body-sm text-error">{errors.consent}</p>
            )}

            {errors.submit && (
              <div className="p-4 bg-error-50 border border-error-200 rounded-xl">
                <p className="text-body-sm text-error">{errors.submit}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              {isMultiStep && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  size="lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Previous
                </Button>
              )}
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className={cn(isMultiStep ? 'ml-auto' : 'w-full')}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;