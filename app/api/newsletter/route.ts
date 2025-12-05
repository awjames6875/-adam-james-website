import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // Send confirmation email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        from: process.env.FROM_EMAIL || 'newsletter@adamjamestulsa.com',
        to: email,
        subject: 'Welcome to Adam James Tulsa Newsletter',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1B3A57 0%, #2C5F87 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; background: #1B3A57; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to the Community!</h1>
              </div>
              <div class="content">
                <p>Hi there,</p>
                <p>Thank you for subscribing to the Adam James Tulsa newsletter! I'm excited to share insights on entrepreneurship, mental health, and community building in Tulsa.</p>
                <p>You'll receive updates about:</p>
                <ul>
                  <li>Business growth strategies and tips</li>
                  <li>Mental health resources and support</li>
                  <li>Tulsa community events and initiatives</li>
                  <li>Corporate housing insights</li>
                  <li>Success stories from our community</li>
                </ul>
                <a href="https://adamjamestulsa.com" class="button">Visit My Website</a>
                <p>If you have any questions or want to connect, feel free to reply to this email or visit my website.</p>
                <p>Best regards,<br><strong>Adam James</strong><br>Tulsa Entrepreneur</p>
              </div>
              <div class="footer">
                <p>Adam James Tulsa | 123 Main Street, Suite 100 | Tulsa, OK 74103</p>
                <p><a href="https://adamjamestulsa.com">www.adamjamestulsa.com</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
      });

      // Also notify admin
      await sgMail.send({
        from: process.env.FROM_EMAIL || 'newsletter@adamjamestulsa.com',
        to: process.env.CONTACT_EMAIL || 'adam@adamjamestulsa.com',
        subject: `New Newsletter Subscription: ${email}`,
        html: `
          <p><strong>New newsletter subscriber:</strong></p>
          <p>Email: ${email}</p>
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        `,
      });
    }

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ message: 'Failed to subscribe. Please try again.' }, { status: 500 });
  }
}

