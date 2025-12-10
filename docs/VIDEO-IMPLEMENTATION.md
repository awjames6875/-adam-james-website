# Video Background Implementation Guide

## Overview

The Adam James Tulsa website features a professional looping video background on the homepage hero section. This video shows you speaking at a professional event/conference and provides an immediate credibility signal to visitors.

**Video Asset**: Professional speaking engagement footage (you on stage)
**Purpose**: Create professional first impression, establish authority, increase engagement time
**Behavior**: Automatically plays on page load and loops continuously without gaps

---

## Current Implementation

### Video File Details

| Property | Value |
|----------|-------|
| **Filename** | `adamspeakingengagement.mp4` |
| **Location** | `/public/images/adamspeakingengagement.mp4` |
| **File Size** | 12.65 MB |
| **Format** | MP4 (H.264 codec) |
| **Duration** | ~30 seconds (loops continuously) |
| **Resolution** | 1920x1080 (Full HD) |

### Poster/Fallback Image

| Property | Value |
|----------|-------|
| **Filename** | `adam-speaking-hero.jpg` |
| **Location** | `/public/images/adam-speaking-hero.jpg` |
| **File Size** | 875 KB |
| **Purpose** | Displays while video is loading or if video fails to load |
| **Resolution** | Same as video (1920x1080) |

### Code Location

**File**: `app/page.tsx`
**Lines**: 26-55 (includes critical comment block)

---

## Required HTML5 Video Attributes

### Critical Attributes (ALL 4 Required)

The video implementation requires all four of these HTML5 attributes to work correctly:

#### 1. `autoPlay`
- **Purpose**: Starts video automatically when the page loads
- **Browser Support**: All modern browsers
- **Important**: **Cannot work without `muted` attribute** in modern browsers (browser autoplay policy)
- **Impact if removed**: Video won't start playing automatically on page load

#### 2. `muted`
- **Purpose**: Silences audio on autoplay
- **Browser Support**: All modern browsers
- **Why it's required**: Modern browsers (Chrome 66+, Safari, Firefox) block autoplay of videos with audio. This is for user experience - visitors aren't unexpectedly bombarded with sound
- **Important**: This is required for `autoPlay` to function
- **Impact if removed**: Autoplay will fail due to browser autoplay policy

#### 3. `loop`
- **Purpose**: Automatically restarts the video when it reaches the end
- **Browser Support**: All modern browsers
- **Behavior**: Creates seamless, continuous looping without gaps or pauses
- **Impact if removed**: Video will play once and then stop, requiring visitor action to restart

#### 4. `playsInline`
- **Purpose**: Keeps video in its HTML container instead of fullscreen
- **Browser Support**: Critical for iOS (Safari on iPhone/iPad)
- **Why it matters**: Without this, iOS devices try to play the video fullscreen, breaking the background effect
- **Impact if removed**: iOS users see fullscreen video player instead of hero section background

### Current Implementation

```tsx
<video
  autoPlay        {/* Starts automatically */}
  muted           {/* Required for autoPlay to work */}
  loop            {/* Continuous seamless looping */}
  playsInline     {/* Stay in container (critical for iOS) */}
  poster="/images/adam-speaking-hero.jpg"  {/* Fallback image while loading */}
  className="object-cover w-full h-full opacity-80"
>
  <source src="/images/adamspeakingengagement.mp4" type="video/mp4" />
</video>
```

---

## File Location Requirements

### ⚠️ IMPORTANT: Files Must Not Be Moved

**Current Correct Locations:**
- Video: `/public/images/adamspeakingengagement.mp4`
- Poster: `/public/images/adam-speaking-hero.jpg`

**Why this matters**: The code explicitly references these paths. If files are moved to subdirectories or renamed, the video will break.

### Path References in Code

The `app/page.tsx` file references these paths:
```tsx
poster="/images/adam-speaking-hero.jpg"
<source src="/images/adamspeakingengagement.mp4" type="video/mp4" />
```

**If you move the files**, you must update BOTH the file locations AND the paths in the code.

### Historical Issue

**What went wrong**: Previous versions moved the video files to `/public/images/public speaaking/` (note the typo "speaaking"), but the code was never updated to match. This caused 404 errors and the video disappeared from the homepage.

**How we fixed it**: Moved the files back to `/public/images/` root directory to match the code's expectations.

**Prevention**: Keep files in `/public/images/` root directory. If you need to reorganize, update the code paths accordingly.

---

## Browser Compatibility

### Desktop Browsers

| Browser | Autoplay | Loop | playsInline | Poster | Overall Support |
|---------|----------|------|-------------|--------|-----------------|
| Chrome 66+ | ✅ | ✅ | N/A | ✅ | ✅ Full Support |
| Firefox 63+ | ✅ | ✅ | N/A | ✅ | ✅ Full Support |
| Safari 11+ | ✅ | ✅ | N/A | ✅ | ✅ Full Support |
| Edge 79+ | ✅ | ✅ | N/A | ✅ | ✅ Full Support |

### Mobile Browsers

| Device | Browser | Autoplay | Loop | playsInline | Overall Support |
|--------|---------|----------|------|-------------|-----------------|
| iOS | Safari | ✅ (muted) | ✅ | ✅ (required) | ✅ Full Support |
| Android | Chrome | ✅ (muted) | ✅ | ✅ | ✅ Full Support |
| Android | Firefox | ✅ (muted) | ✅ | ✅ | ✅ Full Support |

**Important Notes:**
- iOS requires `playsInline` for in-viewport playback
- All browsers require `muted` for autoplay
- Mobile browsers may temporarily pause video when user scrolls or interacts with page (normal behavior)

---

## Performance Considerations

### Current File Size
- **Video**: 12.65 MB (significant for bandwidth-limited users)
- **Poster**: 875 KB (loads immediately as placeholder)
- **Total**: ~13.5 MB (loaded on homepage only)

### Performance Impact

**Loading Time**:
- Hero section posts image loads immediately (875 KB JPG)
- Video starts buffering after poster loads
- Video may take 2-5 seconds to download depending on connection speed

**Page Speed Impact**:
- Poster image is optimized (875 KB for 1920x1080)
- Video is not downloaded on mobile initially (only if user plays)
- If optimizing further, consider:
  - WebM format (better compression, ~30% smaller)
  - Reduce video resolution to 1280x720 on mobile
  - Use progressive JPEG for poster

### Optimization Opportunities

1. **Add WebM Format** (Better compression):
   ```tsx
   <source src="/images/adamspeakingengagement.webm" type="video/webm" />
   <source src="/images/adamspeakingengagement.mp4" type="video/mp4" />
   ```

2. **Lazy Load Video** (Advanced):
   - Load video only after hero section is visible
   - Use Intersection Observer API
   - Can improve Lighthouse scores

3. **Compress Video Further**:
   - Current: 12.65 MB
   - Target: 8-10 MB
   - Tool: FFmpeg with VP9 codec

4. **Mobile Optimization**:
   - Serve smaller resolution on mobile devices
   - Use srcset with media queries (advanced)

---

## Troubleshooting Guide

### Problem: Video not displaying (black background instead)

**Possible Causes:**
1. **File not found (404 error)**
   - Check file path is correct: `/public/images/adamspeakingengagement.mp4`
   - Verify file exists in file system
   - Check browser dev tools console for errors

2. **Browser cache issue**
   - Clear browser cache
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

3. **Video element attributes removed**
   - Verify `autoPlay`, `muted`, `loop`, `playsInline` are present
   - Check nothing was accidentally deleted

4. **Development server issue**
   - Restart dev server: `npm run dev`
   - Delete `.next` build cache: `rm -rf .next`

### Problem: Video not looping (stops at end)

**Cause**: The `loop` attribute is missing or malformed

**Solution**: Ensure `loop` attribute is present in video element:
```tsx
<video loop ... >
```

### Problem: Video won't autoplay

**Cause**: Likely missing `muted` attribute (required for autoplay)

**Solution**: Ensure both `autoPlay` AND `muted` are present:
```tsx
<video autoPlay muted loop ...>
```

### Problem: Video plays fullscreen on iOS

**Cause**: Missing `playsInline` attribute

**Solution**: Add `playsInline` attribute:
```tsx
<video autoPlay muted loop playsInline ...>
```

### Problem: Poster image not showing while video loads

**Cause**: Incorrect poster path

**Solution**: Verify poster path matches code:
```tsx
poster="/images/adam-speaking-hero.jpg"
```

---

## Modification Guidelines

### When You Can Safely Modify

✅ **Safe to modify:**
- Video opacity (className)
- Gradient overlay colors
- Animation timing
- Scaling/zoom effects
- Container styling

### When You Must Update Code AND Files

⚠️ **Requires code changes:**
- Moving video file: Update path in `<source src="..."`
- Moving poster image: Update path in `poster="..."`
- Renaming files: Update all path references
- Changing video file: Update filename in both tags

### When You Must NOT Modify

❌ **Do not touch these:**
- `autoPlay` attribute
- `muted` attribute
- `loop` attribute
- `playsInline` attribute

**Why**: These are required for functionality and removing any one will break the video.

---

## Change History

### Issue: Video Background Missing (Resolved)

**Date**: 2024
**Issue**: Hero section showed only black background with no video
**Root Cause**: Video files were moved to `/public/images/public speaaking/` subdirectory, but code still referenced `/public/images/adamspeakingengagement.mp4`
**Impact**: Homepage lost video background, reduced credibility/impact
**Resolution**: Moved files back to `/public/images/` root directory to match code expectations
**Prevention**: This documentation created to prevent future occurrences

---

## Quick Reference

### Video Implementation Checklist

When modifying the homepage video section:

- [ ] All 4 attributes present: `autoPlay muted loop playsInline`
- [ ] Poster image path: `/images/adam-speaking-hero.jpg`
- [ ] Video file path: `/images/adamspeakingengagement.mp4`
- [ ] Files exist in `/public/images/` root directory
- [ ] No accidental deletion of attributes
- [ ] Test on mobile (iOS especially) for playsInline
- [ ] Clear browser cache and hard refresh when testing

### Files Involved

- **Video Implementation Code**: `app/page.tsx` (lines 26-55)
- **Video File**: `public/images/adamspeakingengagement.mp4`
- **Poster Image**: `public/images/adam-speaking-hero.jpg`
- **Documentation**: `docs/VIDEO-IMPLEMENTATION.md` (this file)

### Related Documentation

- **Code Comments**: See inline comments in `app/page.tsx`
- **Memory Bank**: See `docs/memory-bank.md` - Critical Implementation Details section
- **Project Guidelines**: See `CLAUDE.md` - Video Background Implementation section

---

## Questions or Issues?

If the video stops working:
1. Check the troubleshooting section above
2. Review the inline comments in `app/page.tsx`
3. Consult this documentation
4. Check browser dev tools console for 404 errors
5. Verify file locations match code paths

**Last Updated**: 2024
**Status**: Active - Critical for homepage functionality
