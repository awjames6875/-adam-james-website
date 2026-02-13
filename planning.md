# Planning.md - Technical Architecture for adamjamestulsa.com

## 🏗️ PROJECT ARCHITECTURE

### Core Technology Stack
```
Framework:        Next.js 14.2+ (App Router)
Language:         TypeScript 5.3+
Styling:          Tailwind CSS 3.4+
UI Components:    Shadcn/ui + Radix UI
Animations:       Framer Motion 11+
Forms:            React Hook Form + Zod
Icons:            Lucide React
Fonts:            Inter (primary), Playfair Display (headings)
Hosting:          Vercel (Edge Runtime)
CDN:              Vercel Edge Network / Cloudflare
Analytics:        Google Analytics 4 + Vercel Analytics
Monitoring:       Vercel Speed Insights
Email:            Resend API
CMS (Optional):   Contentful / Sanity for blog
```

### Package Dependencies
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "@radix-ui/react-*": "latest",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.350.0",
    "@vercel/analytics": "^1.2.0",
    "@vercel/speed-insights": "^1.0.0",
    "resend": "^3.2.0",
    "sharp": "^0.33.0",
    "sitemap": "^7.1.0",
    "reading-time": "^1.5.0",
    "rehype-highlight": "^7.0.0",
    "remark-gfm": "^4.0.0"
  }
}
```

## 📁 COMPLETE FOLDER STRUCTURE

```
adam-james-website/
├── .env.local                          # Environment variables
├── .gitignore
├── next.config.js                      # Next.js configuration
├── tailwind.config.ts                  # Tailwind configuration
├── tsconfig.json                       # TypeScript configuration
├── package.json
├── README.md
├── claude.md                           # AI assistant rules
├── planning.md                         # This file
├── tasks.md                            # Task tracking
│
├── app/                                # Next.js App Router
│   ├── layout.tsx                      # Root layout with analytics
│   ├── page.tsx                        # Homepage
│   ├── globals.css                     # Global styles
│   ├── robots.txt                      # SEO robots file
│   ├── sitemap.ts                      # Dynamic sitemap
│   ├── manifest.json                   # PWA manifest
│   │
│   ├── (routes)/                       # Route groups
│   │   ├── about/
│   │   │   └── page.tsx                # About Adam James
│   │   │
│   │   ├── businesses/
│   │   │   ├── page.tsx                # Business hub page
│   │   │   ├── integrity-corporate-housing/
│   │   │   │   └── page.tsx
│   │   │   ├── safe-harbor-mental-health/
│   │   │   │   └── page.tsx
│   │   │   └── growthgenix-ai/
│   │   │       └── page.tsx
│   │   │
│   │   ├── locations/
│   │   │   ├── page.tsx                # Locations hub
│   │   │   ├── downtown-tulsa/
│   │   │   ├── midtown-tulsa/
│   │   │   ├── south-tulsa/
│   │   │   ├── north-tulsa/
│   │   │   ├── east-tulsa/
│   │   │   ├── west-tulsa/
│   │   │   ├── broken-arrow/
│   │   │   ├── owasso/
│   │   │   ├── jenks/
│   │   │   ├── bixby/
│   │   │   ├── sand-springs/
│   │   │   ├── sapulpa/
│   │   │   ├── claremore/
│   │   │   ├── catoosa/
│   │   │   ├── glenpool/
│   │   │   ├── coweta/
│   │   │   ├── skiatook/
│   │   │   ├── collinsville/
│   │   │   ├── verdigris/
│   │   │   └── wagoner/
│   │   │       └── page.tsx            # Each with unique content
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx                # Blog listing
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx           # Dynamic blog posts
│   │   │   └── category/
│   │   │       └── [category]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── services/                   # Service pages
│   │   │   ├── corporate-housing/
│   │   │   ├── mental-health/
│   │   │   ├── business-consulting/
│   │   │   └── real-estate/
│   │   │
│   │   ├── media/
│   │   │   ├── page.tsx                # Media kit & press
│   │   │   ├── speaking/
│   │   │   ├── interviews/
│   │   │   └── press-kit/
│   │   │
│   │   ├── community/
│   │   │   ├── page.tsx                # Community involvement
│   │   │   ├── charity/
│   │   │   ├── partnerships/
│   │   │   └── testimonials/
│   │   │
│   │   └── contact/
│   │       └── page.tsx                # Contact form
│   │
│   ├── api/                            # API Routes
│   │   ├── contact/
│   │   │   └── route.ts                # Contact form handler
│   │   ├── newsletter/
│   │   │   └── route.ts                # Newsletter signup
│   │   ├── analytics/
│   │   │   └── route.ts                # Custom analytics
│   │   └── revalidate/
│   │       └── route.ts                # ISR revalidation
│   │
│   └── opengraph-image.tsx             # Dynamic OG images
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx              # Main navigation
│   │   ├── Footer.tsx                  # Footer with links
│   │   ├── MobileMenu.tsx              # Mobile navigation
│   │   └── ScrollToTop.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx                    # Homepage hero
│   │   ├── TransformationStory.tsx
│   │   ├── BusinessShowcase.tsx
│   │   ├── Testimonials.tsx
│   │   ├── SocialProof.tsx
│   │   ├── CTASection.tsx
│   │   └── VideoSection.tsx
│   │
│   ├── ui/                             # Shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── ...
│   │
│   ├── seo/
│   │   ├── SchemaMarkup.tsx            # JSON-LD schema
│   │   ├── MetaTags.tsx
│   │   └── Breadcrumbs.tsx
│   │
│   └── common/
│       ├── BlogCard.tsx
│       ├── LocationCard.tsx
│       ├── BusinessCard.tsx
│       └── SocialLinks.tsx
│
├── lib/
│   ├── config/
│   │   ├── site.ts                     # Site configuration
│   │   ├── seo.ts                      # SEO settings
│   │   └── social.ts                   # Social media links
│   │
│   ├── utils/
│   │   ├── cn.ts                       # Class name helper
│   │   ├── formatters.ts
│   │   └── validators.ts
│   │
│   ├── data/
│   │   ├── locations.ts                # Location data
│   │   ├── businesses.ts               # Business info
│   │   ├── testimonials.ts
│   │   └── blog-posts.ts
│   │
│   └── hooks/
│       ├── useAnalytics.ts
│       ├── useScrollPosition.ts
│       └── useIntersectionObserver.ts
│
├── content/                            # Static content/MDX
│   ├── blog/
│   │   ├── building-businesses-tulsa.mdx
│   │   ├── mental-health-advocacy.mdx
│   │   └── [30+ more posts]
│   │
│   └── data/
│       ├── testimonials.json
│       └── press-mentions.json
│
├── public/
│   ├── images/
│   │   ├── adam-james/
│   │   │   ├── hero.webp
│   │   │   ├── profile.webp
│   │   │   └── [optimized images]
│   │   ├── businesses/
│   │   ├── locations/
│   │   └── og/
│   │
│   ├── videos/
│   │   └── hero-background.mp4
│   │
│   └── fonts/
│       ├── inter-var.woff2
│       └── playfair-display.woff2
│
└── scripts/
    ├── generate-sitemap.js
    ├── optimize-images.js
    └── check-seo.js
```

## 🎯 SEO ARCHITECTURE & KEYWORD MAPPING

### Primary Keyword Strategy

```typescript
// Keyword mapping by page type
const keywordMap = {
  homepage: {
    primary: "Adam James Tulsa",
    secondary: ["Tulsa entrepreneur", "Adam James business owner"],
    long_tail: ["Adam James Tulsa Oklahoma entrepreneur"]
  },
  
  businesses: {
    "integrity-corporate-housing": {
      primary: "Adam James Integrity Corporate Housing",
      secondary: ["Adam James corporate housing Tulsa"],
      long_tail: ["Adam James corporate housing business Tulsa"]
    },
    "safe-harbor-mental-health": {
      primary: "Adam James Safe Harbor Behavioral Health",
      secondary: ["Adam James mental health Tulsa"],
      long_tail: ["Adam James pediatric therapy Tulsa Oklahoma"]
    },
    "growthgenix-ai": {
      primary: "Adam James GrowthGenix AI",
      secondary: ["Adam James technology Tulsa"],
      long_tail: ["Adam James AI technology business Tulsa"]
    }
  },
  
  locations: {
    "downtown-tulsa": "downtown Tulsa entrepreneur Adam James",
    "midtown-tulsa": "midtown Tulsa business owner Adam James",
    "south-tulsa": "south Tulsa entrepreneur Adam James",
    "broken-arrow": "Broken Arrow business Adam James",
    // ... [continue for all 20+ locations]
  },
  
  blog: {
    pattern: "[topic] Adam James Tulsa",
    examples: [
      "mental health awareness Adam James Tulsa",
      "corporate housing tips Adam James",
      "Tulsa business growth Adam James"
    ]
  }
}
```

### URL Structure Strategy
```
Homepage:           /                                    -> "Adam James Tulsa"
About:              /about                              -> "About Adam James Tulsa entrepreneur"
Business Hub:       /businesses                         -> "Adam James Tulsa businesses"
Business Pages:     /businesses/[name]                  -> "Adam James [business-name]"
Location Hub:       /locations                          -> "Adam James Tulsa area services"
Location Pages:     /locations/[area]                   -> "[Area] entrepreneur Adam James"
Blog Listing:       /blog                               -> "Adam James Tulsa blog insights"
Blog Posts:         /blog/[slug]                        -> "[Topic] Adam James Tulsa"
Service Pages:      /services/[service]                 -> "[Service] Adam James Tulsa"
Media:              /media                              -> "Adam James Tulsa media press"
Community:          /community                          -> "Adam James Tulsa community"
Contact:            /contact                            -> "Contact Adam James Tulsa"
```

## 🔌 INTEGRATION POINTS

### Analytics & Tracking
```javascript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Environment Variables Required
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXX
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=XXXXXXXXXX
```

### External Services
```typescript
interface Integrations {
  analytics: {
    google: "Google Analytics 4",
    vercel: "Vercel Analytics",
    hotjar: "Heatmap tracking",
    clarity: "Microsoft Clarity"
  },
  
  seo: {
    searchConsole: "Google Search Console",
    bingWebmaster: "Bing Webmaster Tools",
    schema: "JSON-LD structured data"
  },
  
  social: {
    facebook: {
      pixel: true,
      sharing: true,
      feed: "Optional widget"
    },
    linkedin: {
      insight: true,
      sharing: true,
      profile: "Badge widget"
    },
    instagram: {
      feed: "Embedded feed widget",
      stories: "Highlight reel"
    },
    tiktok: {
      pixel: true,
      embed: "Video embeds"
    }
  },
  
  forms: {
    contact: "Resend API",
    newsletter: "ConvertKit/Mailchimp",
    booking: "Calendly embed"
  },
  
  content: {
    youtube: "Video embeds",
    vimeo: "Alternative video",
    maps: "Google Maps embeds"
  }
}
```

### API Routes Configuration
```typescript
// /app/api/contact/route.ts
export async function POST(request: Request) {
  // Handle contact form with Resend
  // Rate limiting: 10 requests per minute
  // Validation with Zod
  // Email to: adam@adamjamestulsa.com
}

// /app/api/newsletter/route.ts  
export async function POST(request: Request) {
  // Subscribe to ConvertKit/Mailchimp
  // Double opt-in required
  // GDPR compliant
}

// /app/api/analytics/route.ts
export async function POST(request: Request) {
  // Custom event tracking
  // Page view tracking
  // Conversion tracking
}
```

## ⚡ PERFORMANCE TARGETS & OPTIMIZATION

### Core Web Vitals Targets
```yaml
Largest Contentful Paint (LCP):    < 2.5s (Target: < 1.5s)
First Input Delay (FID):           < 100ms (Target: < 50ms)
Cumulative Layout Shift (CLS):     < 0.1 (Target: < 0.05)
First Contentful Paint (FCP):      < 1.8s (Target: < 1.0s)
Time to Interactive (TTI):         < 3.8s (Target: < 2.5s)
Total Blocking Time (TBT):         < 300ms (Target: < 150ms)
Speed Index:                       < 3.4s (Target: < 2.0s)
```

### Performance Optimization Strategy
```javascript
// next.config.js optimizations
module.exports = {
  images: {
    domains: ['adamjamestulsa.com'],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/*'],
  },
  
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
        },
      }
    }
    return config
  },
}
```

### Image Optimization Rules
```typescript
// All images must follow this pattern
interface ImageOptimization {
  format: 'webp',
  quality: 80,
  sizes: {
    mobile: '100vw',
    tablet: '50vw', 
    desktop: '33vw'
  },
  loading: 'lazy', // except above-fold
  placeholder: 'blur',
  priority: boolean // true for above-fold
}

// Example implementation
<Image
  src="/images/adam-james-tulsa-hero.webp"
  alt="Adam James Tulsa Entrepreneur"
  width={1920}
  height={1080}
  priority
  placehol