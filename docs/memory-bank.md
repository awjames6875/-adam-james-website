# Project Memory Bank

## Current Task
**Status**: Plan Mode - Reputation Management Strategy Created (NOT YET IMPLEMENTED)

**Context**: This session (Session 5) focused on creating a comprehensive reputation management plan. User wants to push down negative Google search results for "Adam James Tulsa" and is starting a podcast. Created podcast-first strategy plan that focuses on BUILDING NOW, not discussing the past.

**Important**: User feedback - "why does your recommendation all about how i went to prison? I starting my own pod cast soon" - pivoted strategy to be 100% forward-looking and podcast-centric.

---

## Recent Work

### **Session 5 (This Session)**: Reputation Management Plan + About/My-Story Consolidation
**Key accomplishments:**

1. **About/My-Story Page Consolidation** (COMPLETED):
   - Added "Beyond Business - Living Life Fully" hobbies section to About page (lines 301-405)
   - 4 hobby cards: Salsa Dancing, Skiing, BJJ, World Travel (with user's real photos)
   - Deleted `app/my-story/page.tsx` - now redirects to `/about`
   - Navigation still works - both "About" and "My Story" links now go to consolidated page

2. **Reputation Management Research** (COMPLETED):
   - Conducted web search for "Adam James Tulsa"
   - Found negative SERP results: Federal case 4:20-cr-00327-GKF, PPP fraud, 2-year prison sentence
   - Found positive results: Integrity Corporate Housing, Safe Harbor Behavioral Health, Landmark Education
   - Identified problem: Not enough positive content to dilute negative results

3. **Created Podcast-First Reputation Strategy** (PLAN CREATED, NOT IMPLEMENTED):
   - **File**: `C:\Users\1alph\.claude\plans\lucky-baking-hedgehog.md`
   - **Strategy**: Focus on what user is BUILDING NOW (businesses, podcast, community)
   - **NOT** focusing on prison/redemption narrative (user objected to this approach)
   - **Key Tactic**: Launch podcast, create 50+ business authority pages, get testimonials
   - **Goal**: Flood Google with positive "Adam James Tulsa Entrepreneur + Podcast" content

4. **User Corrections**:
   - User is NOT associated with Eco Farms (removed from strategy)
   - User wants forward-looking content, not prison-focused content

---

### **Session 4**: Homepage Redesign + Timeline Fixes
**Key accomplishments:**
1. **Homepage Content Strategy Change**: User objected to "From Federal Prison to Found Purpose" headline
   - Changed to business-first approach
   - Hero headline: "Building Businesses That Change Lives"
   - Subtle mention: "Every entrepreneur faces setbacks. Mine made me stronger."

2. **Timeline Corrections Applied** (both About and Homepage):
   - 2001: Started first real estate business
   - 2008: Lost over $500,000, filed bankruptcy
   - 2010: Kent State Master's program (completed coursework, no degree)
   - 2013: Moved to Tulsa

3. **Dev Server Issues Fixed**:
   - CSS/JS chunks returning 404 errors
   - Fixed by deleting `.next` folder, renaming parent `package-lock.json`

---

### **Session 3**: Information Query Only
- User asked about About page changes, provided summary
- No code changes made

---

### **Session 2**: Content Analysis & CLAUDE.md Enhancement
- Enhanced CLAUDE.md with better organization
- Conducted content analysis of About vs Story page (65-70% overlap)
- Created content-strategy-report.md

---

### **Session 1**: Infrastructure Setup
- Created memory bank protocol
- Created handoff/resume slash commands

---

## Next Steps

### IMMEDIATE (when resuming):
1. **Answer User's 5 Questions** (required before implementing reputation plan):
   - Podcast name?
   - Budget for microphone, editing, press releases?
   - Time commitment (1 episode/week, daily LinkedIn)?
   - Existing assets (client list, photos)?
   - Legal restrictions (supervised release status)?

2. **Implement Podcast-First Strategy** (once user answers questions):
   - Week 1: Launch podcast, create 5 business authority pages
   - Week 2-4: Get video testimonials, write press releases
   - Week 5-12: Publish weekly episodes, build content library

3. **Update Homepage & About Page**:
   - Add "Podcast Host" badge to hero section
   - Add "Listen to Latest Episode" CTA
   - Remove any remaining Eco Farms mentions
   - Add "Featured In" section (empty initially)

### PENDING USER APPROVAL:
4. **Full reputation recovery plan** - See `C:\Users\1alph\.claude\plans\lucky-baking-hedgehog.md` for complete 90-day strategy

### GENERAL PROJECT WORK:
5. Run `npm run lint` → `npm run build` → `npm run perf:audit`
6. Continue SEO optimization work
7. Performance monitoring

---

## Files Touched

### This Session (Session 5):
- `app/about/page.tsx` - Added hobbies section (lines 301-405) with Salsa, Skiing, BJJ, Travel cards
- `app/my-story/page.tsx` - **DELETED** (consolidated into About page)
- `C:\Users\1alph\.claude\plans\lucky-baking-hedgehog.md` - Created comprehensive podcast-first reputation strategy plan

### Session 4:
- `app/page.tsx` - Homepage content redesign: business-first approach, timeline corrections
- `app/about/page.tsx` - Timeline corrections, "7-figure" language, Mind & Body CTA

### Previous Sessions:
- `CLAUDE.md` - Major enhancement (Session 2)
- `content-strategy-report.md` - Content differentiation analysis (Session 2)

---

## Modified Files (Uncommitted)

Per git status:
- `.claude/settings.local.json`
- `app/about/page.tsx` - Hobbies section added
- `app/my-story/page.tsx` - **DELETED**
- `app/page.tsx` - Homepage updates
- `components/layout/Navigation.tsx` - Updated (may need review)
- `package-lock.json` - Updated

**New untracked files**:
- `docs/memory-bank.md` - This file
- `.claude/commands/` - Slash commands directory
- `.claude/plans/lucky-baking-hedgehog.md` - Reputation strategy plan
- Various documentation files (README, summaries, guides)

---

## Decisions & Notes

### User Content Preferences (This Session - CRITICAL):
- **Prison story should NOT be the focus** - User objected to "redemption narrative" approach
- **Forward-looking only**: Focus on businesses being built NOW, podcast launch, community impact
- **Eco Farms**: User is NOT associated with Eco Farms anymore (remove from all content)
- **Podcast is key**: User is starting a podcast - make this the centerpiece of reputation strategy

### User Content Preferences (Session 4):
- **Prison story should NOT be the first thing visitors see** on homepage
- **Kent State wording**: "Completed the full Master's program in Financial Engineering at Kent State University"

---

### Timeline Facts (Corrected Session 4):
| Year | Event |
|------|-------|
| 2001 | Started first real estate business |
| 2008 | Lost over $500,000, filed bankruptcy |
| 2010 | Kent State Master's program (completed coursework) |
| 2013 | Moved to Tulsa |
| 2015 | Started Safe Harbor Behavioral Health |
| 2017 | Started Integrity Corporate Housing |
| 2023 | Started GrowthGenix.ai |

---

### Reputation Management Strategy (This Session):

**Problem Identified**:
- Negative SERP results for "Adam James Tulsa": Federal case, PPP fraud, prison sentence
- Not enough positive content to dilute negative results

**Solution - Podcast-First Strategy**:
1. **Launch podcast** - Interview Tulsa business leaders (YouTube, Spotify, Apple)
2. **Content multiplication** - 1 podcast episode = 10+ pieces of content (clips, blog posts, social posts)
3. **Business authority pages** - Create 20+ pages about businesses, expertise, consulting
4. **Video testimonials** - Get 10+ clients to record short testimonials
5. **Press releases** - 4 releases about podcast launch, business milestones
6. **Social media** - Daily LinkedIn posts, YouTube clips, Instagram/TikTok
7. **Guest appearances** - Get on other entrepreneurship podcasts

**Why Podcast Works**:
- YouTube videos rank HIGH in Google search
- "Adam James Tulsa Podcast" becomes a brand
- Each guest shares with THEIR audience = instant growth
- Positive, forward-looking content (not redemption/prison focused)

**90-Day Goal**:
- 13 podcast episodes on YouTube
- 50+ new website pages (business-focused)
- 60+ LinkedIn posts
- 10 video testimonials
- 3-5 press mentions
- **Result**: Negative content pushed to page 2-3+ of Google

---

### Technical Notes:
- **Vercel MCP**: Already configured in local settings
- **Multiple lockfile issue**: Parent directory lockfile conflicts - renamed to `.backup`
- **Cache corruption**: Delete `.next` folder when seeing 404 errors for CSS/JS chunks
- **Dev server**: Currently running on port 3004 (ports 3000-3003 occupied)

---

## Blockers

**User needs to answer 5 questions before implementing reputation strategy**:
1. Podcast name?
2. Budget ($500-1000)?
3. Time commitment (1 episode/week, daily LinkedIn)?
4. Existing assets (client list, photos)?
5. Legal restrictions?

**No code blockers** - Website is functional, hobbies section implemented successfully.

---

## Key Documentation Files
- `CLAUDE.md` - Primary project instructions
- `rules.md` - Development workflow rules
- `C:\Users\1alph\.claude\plans\lucky-baking-hedgehog.md` - **PODCAST-FIRST REPUTATION STRATEGY** (full 90-day plan)
- `ABOUT_PAGE_UPDATE_SUMMARY.md` - Summary of About page changes
- `content-strategy-report.md` - About vs Story differentiation strategy
- `docs/memory-bank.md` - This file (session state tracking)

---

## Environment
- Working directory: `c:\Users\1alph\OneDrive\Documents\adam james website`
- Platform: Windows (win32)
- Branch: main
- Dev server: Running on port 3004 (check with BashOutput tools)
- Git status: 6 modified files, several untracked documentation files

---

## Critical Implementation Details

### Video Background (Homepage Hero Section) ⚠️
**DO NOT MODIFY WITHOUT REVIEW**

**Current Status**: ✅ **RESTORED & DOCUMENTED** (Session 5)

The homepage hero section features a **professional looping video background** with specific requirements:

**File Locations (DO NOT MOVE)**:
- **Video**: `/public/images/adamspeakingengagement.mp4` (12.65 MB)
- **Poster Image**: `/public/images/adam-speaking-hero.jpg` (875 KB)

**Code Location**:
- **File**: `app/page.tsx`
- **Lines**: 26-55 (includes critical comment block explaining all requirements)

**Required HTML5 Attributes** (ALL 4 Required for proper functionality):
1. **`autoPlay`** - Starts video automatically on page load
2. **`muted`** - REQUIRED for autoPlay to work in modern browsers
3. **`loop`** - Restarts video automatically (seamless looping)
4. **`playsInline`** - Prevents fullscreen on iOS (essential for background video)

⚠️ **Removing ANY of these attributes WILL BREAK the video functionality**

**Historical Issue**:
- Videos were moved to subdirectory `/public/images/public speaaking/` (typo in directory name)
- Code paths were never updated, causing 404 errors
- Video disappeared from homepage
- Result: Lost professional credibility signal on first impression

**Resolution**:
- Moved files back to `/public/images/` root directory
- Added comprehensive inline comments in code (26-45)
- Created documentation: `docs/VIDEO-IMPLEMENTATION.md`
- Updated memory bank (this section)

**To Protect From Future Issues**:
1. Never move video files without updating code paths
2. Always keep files in `/public/images/` root (not subdirectories)
3. Review inline comments in `app/page.tsx` before modifying video element
4. Consult `docs/VIDEO-IMPLEMENTATION.md` for troubleshooting
5. Never remove the 4 required HTML5 attributes

**See Documentation**:
- Code comments: `app/page.tsx` (lines 26-45)
- Full guide: `docs/VIDEO-IMPLEMENTATION.md`

---

## Key Takeaways for Next Session

1. **User wants FORWARD-LOOKING content** - No more prison/redemption narrative focus
2. **Podcast is the key strategy** - Build reputation through podcast + business content
3. **Hobbies section completed** - About page now has Salsa, Skiing, BJJ, Travel with real photos
4. **My Story page deleted** - Successfully consolidated into About page
5. **Eco Farms removed** - User not associated anymore
6. **Plan is ready** - Just need user's answers to 5 questions to start implementation
7. **Website is functional** - No technical blockers, dev server running on 3004

---

## Commands to Restart Dev Server (if needed):
```bash
cd "c:\Users\1alph\OneDrive\Documents\adam james website"
rm -rf .next
npm run dev
```
