# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: Adam James Tulsa Website

**Primary Goal**: Build adamjamestulsa.com to achieve #1 Google ranking for "Adam James Tulsa" within 30 days.

## Essential Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks

# Testing & Performance
npx lighthouse http://localhost:3000 --view  # Run Lighthouse audit
npm run analyze      # Analyze bundle size (when configured)

# Deployment
vercel              # Deploy to Vercel (requires CLI setup)
vercel --prod       # Deploy to production
```

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Deployment**: Vercel
- **Package Manager**: npm

### Critical Performance Targets
- PageSpeed Score: 95+ (both mobile/desktop)
- Load Time: <2 seconds
- First Contentful Paint: <1 second
- Core Web Vitals: All green

### SEO Requirements
- 50+ unique pages with 2000+ words each
- Unique meta tags for every page
- Schema markup on all pages
- Internal linking: 3-5 links per page
- Target keyword: "Adam James Tulsa" and variations

## Key Files and Their Purpose

### Documentation Files
- `planning.md` - Technical architecture, folder structure, and implementation roadmap
- `tasks.md` - Current progress tracking and daily goals
- `prd.md` - Product requirements and business objectives
- `agents.md` - Sub-agent delegation strategy (optional use)
- `task.md` - Detailed task list with 200+ items

### Project Structure
```
app/
├── layout.tsx       # Root layout with SEO metadata
├── page.tsx         # Homepage
├── globals.css      # Global styles and Tailwind
├── (routes)/        # All page routes go here
└── api/            # API routes for forms, etc.

components/
├── layout/         # Navigation, Footer, etc.
├── sections/       # Page sections (Hero, etc.)
├── ui/            # Reusable UI components
└── seo/           # SEO-specific components

lib/               # Utilities, configs, hooks
public/            # Static assets
```

## Development Workflow

### Starting a New Session
1. Check `tasks.md` for current progress and next priorities
2. Review `planning.md` for technical requirements
3. Use TodoWrite tool to track your tasks
4. Test changes locally before committing

### Creating New Pages
1. All pages must have 2000+ words of unique content
2. Include unique meta title and description
3. Add appropriate schema markup
4. Implement internal linking (3-5 per page)
5. Optimize for "Adam James Tulsa" variations
6. Test PageSpeed score after creation

### SEO Checklist for Every Page
- [ ] Unique meta title with target keyword
- [ ] Meta description (155-160 characters)
- [ ] Open Graph tags
- [ ] Schema markup (Person, LocalBusiness, or Article)
- [ ] H1 tag with keyword variation
- [ ] Internal links to related pages
- [ ] Image alt text with keywords
- [ ] Mobile responsive design

### Performance Optimization
- Convert all images to WebP format
- Implement lazy loading for images
- Use Next.js Image component
- Enable code splitting
- Minimize CSS/JS bundles
- Test with Lighthouse after changes

## Content Strategy

### Page Types and Word Counts
- Location pages: 2000+ words each (20 pages)
- Business pages: 2500+ words each (3 pages)
- Service pages: 2000+ words each (10 pages)
- Blog posts: 1500+ words each
- About page: 3000+ words

### Keyword Integration
- Primary: "Adam James Tulsa"
- Include naturally 3-5 times per page
- Use variations in H2/H3 headings
- Local variations for location pages

## Testing Requirements

### Before Any Major Changes
```bash
npm run lint         # Check for linting errors
npm run build        # Ensure build succeeds
```

### After Performance Changes
```bash
npx lighthouse http://localhost:3000 --view
# Target: 95+ score on both mobile and desktop
```

### Mobile Testing
- Test all breakpoints (mobile, tablet, desktop)
- Verify touch interactions work
- Check form usability on mobile
- Ensure readable font sizes

## Deployment Process

### Pre-deployment Checklist
1. Run `npm run build` successfully
2. Test all forms and interactions
3. Verify PageSpeed score is 95+
4. Check all internal links work
5. Validate SEO tags on all pages

### Vercel Deployment
```bash
vercel              # Deploy preview
vercel --prod       # Deploy to production
```

## Common Tasks

### Adding a New Location Page
1. Create file in `app/(routes)/locations/[city-name]/page.tsx`
2. Write 2000+ words of unique content about Adam James in that location
3. Add local business schema
4. Include Google Maps embed
5. Link to other location pages
6. Test mobile responsiveness

### Optimizing Images
```bash
# Convert to WebP (use online tool or script)
# Place in public/images/
# Use Next.js Image component:
<Image src="/images/name.webp" alt="Adam James Tulsa" width={1200} height={630} />
```

### Creating Blog Posts
1. Add MDX file or create in `app/(routes)/blog/[slug]/page.tsx`
2. Include BlogPosting schema
3. Add reading time estimate
4. Link to related posts
5. Include social share buttons

## Important Reminders

- **Mobile First**: Always design and test mobile view first
- **SEO Focus**: Every decision should improve search ranking
- **Performance**: Never let PageSpeed drop below 95
- **Content Quality**: Maintain 2000+ words of unique, valuable content
- **Local Focus**: Emphasize Tulsa and Oklahoma connections
- **Testing**: Test on real devices, not just browser DevTools

## Quick Reference

### Current Project Status
- Framework: ✅ Set up
- Homepage: ✅ Basic structure created
- Navigation: ⏳ Pending
- Footer: ⏳ Pending
- Location Pages: ⏳ 0/20 completed
- Business Pages: ⏳ 0/3 completed
- Blog System: ⏳ Not started
- SEO Implementation: ⏳ Basic setup done
- Performance: ⏳ Not yet optimized

### Next Priority Tasks
Check `tasks.md` for the current sprint and priority items.

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Google PageSpeed: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/
- Mobile Test: https://search.google.com/test/mobile-friendly