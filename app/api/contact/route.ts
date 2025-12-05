import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import sgMail from '@sendgrid/mail'

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject must be less than 200 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  service: z.enum(['corporate-housing', 'mental-health', 'business-consulting', 'general']).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactSchema.parse(body)
    
    // In a real implementation, you would:
    // 1. Send email via Resend API
    // 2. Save to database
    // 3. Send confirmation email to user
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData)
    
    // Simulate email sending
    const emailData = {
      to: 'adam@adamjamestulsa.com',
      from: 'contact@adamjamestulsa.com',
      subject: `New Contact Form: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${validatedData.service || 'General inquiry'}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        
        <hr>
        <p><small>Submitted from adamjamestulsa.com contact form</small></p>
      `,
    }
    
    // Send email via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        
        await sgMail.send({
          to: process.env.CONTACT_EMAIL || 'adam@adamjamestulsa.com',
          from: process.env.FROM_EMAIL || 'contact@adamjamestulsa.com',
          subject: emailData.subject,
          html: emailData.html,
        })
        
        // Send confirmation email to user
        await sgMail.send({
          to: validatedData.email,
          from: process.env.FROM_EMAIL || 'contact@adamjamestulsa.com',
          subject: 'Thank you for contacting Adam James',
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${validatedData.name},</p>
            <p>Thank you for your message. Adam will review your inquiry and get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p>${validatedData.message}</p>
            <br>
            <p>Best regards,<br>Adam James<br>Tulsa, Oklahoma</p>
          `,
        })
      } catch (emailError) {
        console.error('SendGrid error:', emailError)
        // Continue even if email fails - don't block the response
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! Adam will get back to you within 24 hours.',
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        error: 'Please check your form data and try again.',
        details: error.errors 
      }, { status: 400 })
    }
    
    return NextResponse.json({ 
      error: 'Something went wrong. Please try again later.' 
    }, { status: 500 })
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}