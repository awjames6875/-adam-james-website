# 🔑 Environment Variables Setup Guide

## Required Setup

Create a `.env.local` file in the root of your project with the following variables:

```env
# ============================================
# REQUIRED - SendGrid Email Configuration
# ============================================
# Get your API key from: https://app.sendgrid.com/settings/api_keys
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Email addresses for sending/receiving
FROM_EMAIL=contact@adamjamestulsa.com
CONTACT_EMAIL=adam@adamjamestulsa.com

# ============================================
# OPTIONAL - Analytics & Tracking
# ============================================

# Google Analytics 4 (Recommended for tracking visitors)
# Create GA4 property at: https://analytics.google.com/
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification
# Get verification code from: https://search.google.com/search-console
NEXT_PUBLIC_GSC_VERIFICATION_ID=your_verification_code_here

# ============================================
# OPTIONAL - Social Media Tracking
# ============================================

# Facebook Pixel ID
# Get from: https://www.facebook.com/events_manager2/
NEXT_PUBLIC_FB_PIXEL_ID=your_facebook_pixel_id

# LinkedIn Insight Tag Partner ID
# Get from: https://www.linkedin.com/help/lms/answer/a418880
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=your_linkedin_partner_id

# ============================================
# Site Configuration
# ============================================

# Site URL (Update when deployed to production)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Production: https://adamjamestulsa.com
```

## 📋 Setup Steps

### 1. Create `.env.local` File

In your project root, create a file named `.env.local` and copy the template above.

### 2. Configure SendGrid (Required)

1. **Get API Key:**
   - Go to https://app.sendgrid.com/settings/api_keys
   - Click "Create API Key"
   - Name it "Adam James Website"
   - Give it "Full Access" permissions
   - Copy the API key (you'll only see it once!)
   - Paste into `SENDGRID_API_KEY`

2. **Verify Sender Email:**
   - Go to https://app.sendgrid.com/settings/sender_auth/senders
   - Add and verify `contact@adamjamestulsa.com`
   - Follow email verification steps
   - Update `FROM_EMAIL` with verified address

3. **Set Contact Email:**
   - Update `CONTACT_EMAIL` with your actual email
   - This is where form submissions will be sent

### 3. Configure Google Analytics (Optional but Recommended)

1. Go to https://analytics.google.com/
2. Create a new GA4 property for "adamjamestulsa.com"
3. Get your Measurement ID (starts with "G-")
4. Add to `NEXT_PUBLIC_GA_ID`

### 4. Configure Google Search Console (Optional)

1. Go to https://search.google.com/search-console
2. Add property for "adamjamestulsa.com"
3. Choose HTML tag verification method
4. Copy the verification code
5. Add to `NEXT_PUBLIC_GSC_VERIFICATION_ID`

### 5. Update Site URL

- **Development:** `http://localhost:3000`
- **Production:** `https://adamjamestulsa.com`

---

## ✅ Testing Your Setup

### Test SendGrid Email:

```bash
# Run development server
npm run dev

# Visit http://localhost:3000/contact
# Fill out the contact form
# Check your CONTACT_EMAIL for the message
# Check the sender's email for confirmation
```

### Test Analytics:

```bash
# Open browser console while on site
# You should see GA4 pageview events
# OR check Real-time view in Google Analytics
```

---

## 🚨 Important Security Notes

1. **.env.local is in .gitignore** - Never commit this file
2. **Keep API keys secret** - Don't share them publicly
3. **Use environment variables** - Don't hardcode keys in code
4. **Rotate keys periodically** - Change keys every 90 days

---

## 🔧 Troubleshooting

### Emails Not Sending?

- ✅ Check SENDGRID_API_KEY is correct
- ✅ Verify sender email in SendGrid dashboard
- ✅ Check SendGrid activity log for errors
- ✅ Ensure FROM_EMAIL matches verified sender

### Analytics Not Working?

- ✅ Check NEXT_PUBLIC_GA_ID format (starts with G-)
- ✅ Clear browser cache
- ✅ Check browser console for errors
- ✅ Verify GA4 property is active

---

## 📞 Need Help?

- SendGrid Documentation: https://docs.sendgrid.com/
- Next.js Environment Variables: https://nextjs.org/docs/basic-features/environment-variables
- Google Analytics Setup: https://support.google.com/analytics/

---

**Status:** Ready for development! 🚀
















