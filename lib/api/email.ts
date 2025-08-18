import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is required');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
}

export interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
  urgency: string;
  source?: string;
}

export interface AppointmentEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  meetingType: string;
  message?: string;
}

const FROM_EMAIL = 'Adam James <noreply@adamjamestulsa.com>';
const ADMIN_EMAIL = 'adam@adamjamestulsa.com';

export async function sendEmail(options: EmailOptions) {
  try {
    const response = await resend.emails.send({
      from: options.from || FROM_EMAIL,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      replyTo: options.replyTo,
      cc: options.cc,
      bcc: options.bcc,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
}

export async function sendContactFormEmail(data: ContactEmailData) {
  const urgencyBadge = {
    low: '🟢',
    medium: '🟡',
    high: '🟠',
    urgent: '🔴'
  }[data.urgency];

  const subject = `${urgencyBadge} New Contact Form Submission - ${data.firstName} ${data.lastName}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a365d;">New Contact Form Submission</h2>
      
      <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #2d3748;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        <p><strong>Urgency:</strong> ${urgencyBadge} ${data.urgency.toUpperCase()}</p>
        ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ''}
        ${data.source ? `<p><strong>Source:</strong> ${data.source}</p>` : ''}
      </div>
      
      <div style="background: #edf2f7; padding: 20px; border-radius: 8px;">
        <h3 style="margin-top: 0; color: #2d3748;">Message</h3>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #e6fffa; border-radius: 8px;">
        <p style="margin: 0; color: #065f46;"><strong>Next Steps:</strong></p>
        <ul style="color: #065f46; margin: 10px 0;">
          <li>Respond within ${data.urgency === 'urgent' ? '1 hour' : data.urgency === 'high' ? '4 hours' : '24 hours'}</li>
          <li>Add to CRM system</li>
          <li>Schedule follow-up if needed</li>
        </ul>
      </div>
    </div>
  `;

  // Send to admin
  const adminResult = await sendEmail({
    to: ADMIN_EMAIL,
    subject,
    html,
    replyTo: data.email,
  });

  // Send confirmation to user
  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a365d;">Thank you for contacting Adam James!</h2>
      
      <p>Hi ${data.firstName},</p>
      
      <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
      
      <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Your Message Summary:</h3>
        <p><strong>Subject:</strong> ${data.service ? `${data.service} inquiry` : 'General inquiry'}</p>
        <p><strong>Urgency:</strong> ${data.urgency}</p>
        <p><strong>Expected Response Time:</strong> ${data.urgency === 'urgent' ? 'Within 1 hour' : data.urgency === 'high' ? 'Within 4 hours' : 'Within 24 hours'}</p>
      </div>
      
      <p>In the meantime, feel free to explore more about my services:</p>
      <ul>
        <li><a href="https://adamjamestulsa.com/integrity-stone">Integrity Stone Construction</a></li>
        <li><a href="https://adamjamestulsa.com/safe-harbor">Safe Harbor Financial</a></li>
        <li><a href="https://adamjamestulsa.com/growthgenix">GrowthGenix Marketing</a></li>
      </ul>
      
      <p>Best regards,<br>Adam James</p>
    </div>
  `;

  const userResult = await sendEmail({
    to: data.email,
    subject: 'Thank you for contacting Adam James - We\'ll be in touch soon!',
    html: confirmationHtml,
  });

  return {
    adminEmail: adminResult,
    userEmail: userResult,
  };
}

export async function sendAppointmentEmail(data: AppointmentEmailData) {
  const subject = `📅 New Appointment Request - ${data.firstName} ${data.lastName}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a365d;">New Appointment Request</h2>
      
      <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #2d3748;">Client Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Service:</strong> ${data.service}</p>
      </div>
      
      <div style="background: #fff5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #2d3748;">Appointment Details</h3>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
        <p><strong>Meeting Type:</strong> ${data.meetingType}</p>
        ${data.message ? `<p><strong>Additional Notes:</strong><br>${data.message}</p>` : ''}
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #e6fffa; border-radius: 8px;">
        <p style="margin: 0; color: #065f46;"><strong>Action Required:</strong></p>
        <ul style="color: #065f46; margin: 10px 0;">
          <li>Check calendar availability</li>
          <li>Send calendar invite</li>
          <li>Confirm meeting details</li>
        </ul>
      </div>
    </div>
  `;

  return await sendEmail({
    to: ADMIN_EMAIL,
    subject,
    html,
    replyTo: data.email,
  });
}

export async function sendNewsletterWelcomeEmail(email: string, firstName?: string) {
  const name = firstName || 'Friend';
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a365d;">Welcome to Adam James Updates!</h2>
      
      <p>Hi ${name},</p>
      
      <p>Thank you for subscribing to my newsletter! You'll now receive:</p>
      
      <ul>
        <li>🏗️ Updates on Integrity Stone Construction projects</li>
        <li>💰 Safe Harbor Financial insights and tips</li>
        <li>📈 GrowthGenix marketing strategies</li>
        <li>🌟 Personal updates and industry news</li>
      </ul>
      
      <p>I typically send updates weekly, and I promise to keep them valuable and relevant.</p>
      
      <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Get Started:</h3>
        <p>Check out my latest content:</p>
        <ul>
          <li><a href="https://adamjamestulsa.com/blog">Latest Blog Posts</a></li>
          <li><a href="https://adamjamestulsa.com/services">My Services</a></li>
          <li><a href="https://adamjamestulsa.com/about">About Me</a></li>
        </ul>
      </div>
      
      <p>Best regards,<br>Adam James</p>
      
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 12px; color: #718096;">
        You're receiving this because you subscribed to updates from adamjamestulsa.com. 
        <a href="{unsubscribe_url}">Unsubscribe</a> at any time.
      </p>
    </div>
  `;

  return await sendEmail({
    to: email,
    subject: 'Welcome to Adam James Updates! 🎉',
    html,
  });
}