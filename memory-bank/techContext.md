# Tech Context - Adam James Tulsa Website

## Framework & Stack
| Component | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15.4.6 | React framework with App Router |
| **TypeScript** | 5 | Type-safe development |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **Vercel** | Latest | Deployment platform |
| **React** | 19+ | UI component library |
| **Framer Motion** | Latest | Animations and transitions |
| **npm** | Latest | Package manager |

## Critical Dependencies
- Next.js Image component (image optimization)
- Framer Motion (hero section animations)
- TypeScript compiler
- Tailwind CSS build tools

## Project Structure
```
adamjamestulsa.com/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage (with video background)
│   ├── about/page.tsx      # About page (consolidated with hobbies)
│   ├── contact/page.tsx    # Contact form
│   ├── businesses/         # Business pages
│   ├── services/           # Service pages
│   ├── locations/          # Location-specific pages
│   ├── blog/               # Blog posts
│   ├── podcast/            # Podcast pages (NEW)
│   ├── api/                # API routes
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── sections/           # Page sections
│   ├── ui/                 # Reusable components
│   └── seo/                # SEO components
├── lib/                    # Utilities, configs
├── public/
│   └── images/             # All images (optimized)
├── docs/
│   ├── memory-bank.md      # Session history
│   ├── VIDEO-IMPLEMENTATION.md
│   ├── LOCAL-SEO-GUIDE.md
│   └── others/
├── memory-bank/            # NEW - Cross-IDE context
│   ├── projectbrief.md
│   ├── techContext.md
│   ├── activeContext.md
│   └── progress.md
├── .claude/commands/       # Slash commands
│   ├── resume.md
│   ├── handoff.md
│   ├── status.md          # NEW
│   └── start.md
├── .cursorrules           # NEW - Cursor IDE rules
├── .vscode/
│   └── .clinerules        # NEW - VS Code/Cline rules
├── CLAUDE.md              # Project instructions
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind config
├── package.json           # Dependencies
└── vercel.json            # Vercel config
```

## Key File Locations

### Critical Files (DO NOT MOVE)
- **Homepage Video**: `/public/images/adamspeakingengagement.mp4` (12.65 MB)
- **Video Poster**: `/public/images/adam-speaking-hero.jpg` (875 KB)
- **Hobbies Images**: `/public/images/hobbies/` (Salsa, Skiing, BJJ, Travel)
- **Homepage Code**: `app/page.tsx` (lines 26-55 contain video implementation)

### SEO-Critical Files
- `app/layout.tsx` - Root metadata, schema markup
- `app/page.tsx` - Homepage with video background
- `app/about/page.tsx` - About page with hobbies, timeline, businesses
- `components/seo/` - Schema markup components

### Architecture Decisions

#### 1. Video Background Implementation
- **Why**: Professional credibility signal on first impression
- **Tech**: HTML5 `<video>` with autoPlay, muted, loop, playsInline
- **Critical**: ALL 4 attributes required for functionality
- **See**: `docs/VIDEO-IMPLEMENTATION.md` for complete details

#### 2. Next.js App Router
- **Why**: Modern, fast, built-in optimization
- **Structure**: Route groups for logical organization
- **Future**: API routes for form submission, webhooks

#### 3. Tailwind CSS
- **Why**: Utility-first, performance-optimized styling
- **Config**: Tailwind 3.4 with custom color palette
- **Pattern**: Consistent spacing, typography, animations

#### 4. Content Strategy
- **Approach**: Markdown + TypeScript for maintainability
- **SEO**: Schema markup, meta tags, Open Graph
- **Performance**: Image optimization, code splitting, lazy loading

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | 95+ | TBD |
| Load Time | <2s | TBD |
| FCP | <1s | TBD |
| Core Web Vitals | All Green | TBD |
| Image Optimization | WebP format | Partial |

## Development Workflow

### Starting Dev Server
```bash
npm run dev        # Starts on http://localhost:3000
```

### Building for Production
```bash
npm run build      # Production build
npm run start      # Production server
```

### Code Quality
```bash
npm run lint       # ESLint checks
npm run format     # Code formatting
```

### Performance Testing
```bash
npx lighthouse http://localhost:3000 --view
```

## Deployment
- **Platform**: Vercel (auto-deployment from GitHub main branch)
- **Domain**: adamjamestulsa.com
- **Environment**: Production (live)
- **Status**: Active with continuous updates

## Important Constraints

### DO NOT
- Move video files without updating paths in `app/page.tsx`
- Remove any of the 4 video HTML5 attributes (autoPlay, muted, loop, playsInline)
- Use Eco Farms content (user not associated anymore)
- Focus on redemption narrative (forward-looking only)
- Let PageSpeed drop below 95

### DO
- Optimize images to WebP format
- Use Next.js Image component for all images
- Include internal linking (3-5 links per page)
- Add schema markup to all pages
- Test on mobile before deploying
- Review CLAUDE.md before making changes

## Testing & QA
- **Browser Testing**: Chrome, Firefox, Safari, Edge
- **Mobile Testing**: iOS (iPhone/iPad), Android
- **Performance**: Lighthouse 95+
- **SEO**: Google Search Console validation
- **Accessibility**: WCAG 2.1 AA standard

## Links to Important Docs
- **Project Rules**: See `CLAUDE.md`
- **Video Implementation**: See `docs/VIDEO-IMPLEMENTATION.md`
- **Local SEO Guide**: See `docs/LOCAL-SEO-GUIDE.md`
- **Session History**: See `docs/memory-bank.md`

**Last Updated**: December 2024
**Status**: Actively maintained - Core features implemented
