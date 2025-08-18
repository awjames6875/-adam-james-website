import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, message } = body

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Store in database
    // 3. Integrate with CRM
    
    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending (in production, use Resend, SendGrid, etc.)
    // await sendContactEmail({ firstName, lastName, email, phone, service, message })

    return NextResponse.json(
      { 
        message: 'Thank you for your message. We will get back to you soon!',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  )
}