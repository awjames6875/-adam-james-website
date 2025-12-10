# Deployment Guide for adamjamestulsa.com

## Pre-Deployment Checklist

### 1. Environment Variables Setup
Create a `.env.local` file with the following variables:
```bash
# Required
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION_ID=your_verification_code

# Optional
NEXT_PUBLIC_FB_PIXEL_ID=your_facebook_pixel_id
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=your_linkedin_id
NEXT_PUBLIC_SITE_URL=https://adamjamestulsa.com
```

### 2. Code Quality Checks
```bash
# Run linting
npm run lint

# Type check
npm run type-check

# Build test
npm run build

# Test production build locally
npm run start
```

### 3. Performance Optimization
- [ ] All images optimized to WebP format
- [ ] Lazy loading implemented
- [ ] Bundle size analyzed and optimized
- [ ] Core Web Vitals meeting targets

### 4. SEO Verification
- [ ] All pages have unique meta titles
- [ ] All pages have unique meta descriptions
- [ ] Schema markup validated
- [ ] Sitemap generated (/sitemap.xml)
- [ ] Robots.txt configured (/robots.txt)
- [ ] Open Graph tags verified
- [ ] Twitter Card tags verified

---

## Vercel Deployment (Recommended)

### Step 1: Connect Repository
1. Go to https://vercel.com
2. Click "Import Project"
3. Connect your GitHub repository
4. Select "adam-james-website" repository

### Step 2: Configure Project
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### Step 3: Environment Variables
Add the following environment variables in Vercel dashboard:
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GSC_VERIFICATION_ID`
- `NEXT_PUBLIC_FB_PIXEL_ID` (optional)
- `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` (optional)
- `NEXT_PUBLIC_SITE_URL`

### Step 4: Domain Configuration
1. In Vercel dashboard, go to "Domains"
2. Add custom domain: `adamjamestulsa.com`
3. Add www redirect: `www.adamjamestulsa.com` → `adamjamestulsa.com`
4. Configure DNS records:
   - A Record: `@` → Vercel IP
   - CNAME Record: `www` → `cname.vercel-dns.com`

### Step 5: Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Verify deployment at Vercel-provided URL
4. Once verified, domain will automatically point to deployment

---

## Alternative: Netlify Deployment

### Step 1: Connect Repository
1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect your GitHub repository
4. Select "adam-james-website" repository

### Step 2: Build Settings
```
Build command: npm run build
Publish directory: .next
```

### Step 3: Environment Variables
Add environment variables in Netlify dashboard (same as Vercel)

### Step 4: Domain Configuration
1. In Netlify dashboard, go to "Domain settings"
2. Add custom domain: `adamjamestulsa.com`
3. Configure DNS records as provided by Netlify

---

## Post-Deployment Tasks

### 1. Verify Website Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] All location pages load
- [ ] Contact form submits successfully
- [ ] Newsletter signup works
- [ ] All images load properly
- [ ] Mobile responsiveness verified
- [ ] All CTAs functional

### 2. Search Engine Setup

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `adamjamestulsa.com`
3. Verify ownership using HTML tag method
4. Submit sitemap: `https://adamjamestulsa.com/sitemap.xml`
5. Request indexing for homepage and key pages

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site: `adamjamestulsa.com`
3. Verify ownership
4. Submit sitemap: `https://adamjamestulsa.com/sitemap.xml`

### 3. Analytics Verification
- [ ] Google Analytics tracking code working
- [ ] Pageviews being recorded
- [ ] Events firing correctly
- [ ] Conversions tracking setup
- [ ] Google Search Console connected to GA4

### 4. Social Media Verification
- [ ] Facebook Pixel firing
- [ ] LinkedIn Insight Tag working
- [ ] Social share buttons functional
- [ ] Open Graph tags displaying correctly

### 5. Performance Testing

#### Google PageSpeed Insights
1. Go to https://pagespeed.web.dev/
2. Test homepage: `https://adamjamestulsa.com`
3. Target scores: 95+ on both mobile and desktop
4. Verify Core Web Vitals in green zone

#### GTmetrix
1. Go to https://gtmetrix.com/
2. Test homepage and key pages
3. Verify load times < 2 seconds
4. Grade targets: A or B

### 6. SEO Monitoring Setup
- [ ] Set up Google Search Console alerts
- [ ] Configure GA4 custom reports
- [ ] Set up weekly performance email reports
- [ ] Create keyword ranking tracking dashboard

---

## Domain Configuration Details

### DNS Records for adamjamestulsa.com

#### Vercel Configuration:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

#### Netlify Configuration:
```
A     @     75.2.60.5
CNAME www   [your-site].netlify.app
```

### SSL/TLS Certificate
- Vercel and Netlify both provide automatic SSL
- Certificate should be issued within minutes
- Verify HTTPS redirect is working

---

## Monitoring & Maintenance

### Daily Checks (First Week)
- Website uptime and performance
- Contact form submissions
- Google Analytics traffic
- Error logs in Vercel/Netlify dashboard

### Weekly Checks
- Google Search Console for indexing issues
- PageSpeed Insights scores
- Analytics reports
- Social media engagement

### Monthly Checks
- Full SEO audit
- Content updates and blog posts
- Review and respond to customer reviews
- Update local directory listings
- Check for broken links

---

## Rollback Procedure

If issues occur after deployment:

### Vercel
1. Go to project dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "..." → "Promote to Production"

### Netlify
1. Go to site dashboard
2. Click "Deploys"
3. Find previous working deploy
4. Click "Publish deploy"

---

## Performance Benchmarks

### Target Metrics (Post-Deployment)
- **PageSpeed Score**: 95+ (mobile and desktop)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s
- **Total Load Time**: < 2s

### SEO Targets (30 Days Post-Launch)
- **Indexation**: 50+ pages indexed
- **Top 3 Rankings**: "Adam James Tulsa"
- **Top 10 Rankings**: 5+ Tulsa-related keywords
- **Organic Traffic**: 500+ monthly visitors
- **Google My Business**: 100+ views/month

---

## Emergency Contacts

### Technical Support
- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **Resend Support**: https://resend.com/support

### SEO & Analytics
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Bing Webmaster**: https://www.bing.com/webmasters

---

## Success Criteria

### Launch Day
- [✓] Website live at adamjamestulsa.com
- [✓] All pages accessible
- [✓] Analytics tracking active
- [✓] Forms functional
- [✓] Mobile responsive
- [✓] HTTPS enabled

### Week 1
- [✓] Google Search Console verified
- [✓] Sitemap submitted and indexed
- [✓] PageSpeed score 95+
- [✓] Zero critical errors
- [✓] 50+ organic visitors

### Month 1
- [✓] #1 ranking for "Adam James Tulsa"
- [✓] 50+ pages indexed
- [✓] 500+ organic visitors
- [✓] 10+ Google My Business reviews
- [✓] 20+ local citations

---

**Status**: Ready for Deployment  
**Last Updated**: [Current Date]  
**Owner**: Launch Coordinator Agent

