# 🚀 Add AI News + Coding/VibeCode Feeds to Your Workflow

## Quick Add (2 Minutes!)

Your workflow is already built - now let's add AI and coding content sources!

---

## Step 1: Open Your Workflow (30 seconds)

1. Go to: **https://awjames.app.n8n.cloud**
2. Click on **"Viral Content Machine - Phase 1"**
3. You'll see your workflow with 10 nodes

---

## Step 2: Add AI News Feed (30 seconds)

### Click the "+" Button
1. Click the **"+"** button after the **"Daily Trigger"** node
2. Search for: **"RSS Feed Read"**
3. Click it to add

### Configure the Node
1. **Name**: `AI News Feed`
2. **URL**: `https://www.artificialintelligence-news.com/feed/`
3. **Limit**: `5` (under Options)
4. Click **"Execute Node"** to test
5. You should see 5 AI news articles! ✅

### Connect It
1. Drag a line from **"AI News Feed"** to **"Merge All Feeds"** node
2. Done!

---

## Step 3: Add Coding/Hacker News Feed (30 seconds)

### Click the "+" Button Again
1. Click **"+"** after the **"Daily Trigger"** node
2. Search for: **"RSS Feed Read"**
3. Click it to add

### Configure the Node
1. **Name**: `Hacker News Coding Feed`
2. **URL**: `https://news.ycombinator.com/rss`
3. **Limit**: `5` (under Options)
4. Click **"Execute Node"** to test
5. You should see 5 Hacker News articles! ✅

### Connect It
1. Drag a line from **"Hacker News Coding Feed"** to **"Merge All Feeds"** node
2. Done!

---

## Alternative RSS Feeds (Choose What You Like!)

### For AI News:
- **MIT Technology Review AI**: `https://www.technologyreview.com/feed/`
- **AI News**: `https://www.artificialintelligence-news.com/feed/`
- **The Verge AI**: `https://www.theverge.com/ai-artificial-intelligence/rss/index.xml`
- **VentureBeat AI**: `https://venturebeat.com/category/ai/feed/`

### For Coding/Dev Content:
- **Hacker News**: `https://news.ycombinator.com/rss`
- **Dev.to**: `https://dev.to/feed`
- **freeCodeCamp**: `https://www.freecodecamp.org/news/rss/`
- **CSS Tricks**: `https://css-tricks.com/feed/`
- **Smashing Magazine**: `https://www.smashingmagazine.com/feed/`

### For VibeCode Specifically:
- **GitHub Trending**: Use GitHub RSS (format: `https://github.com/trending?since=daily&spoken_language_code=en`)
- **Reddit r/programming**: `https://www.reddit.com/r/programming/hot/.rss`
- **Reddit r/coding**: `https://www.reddit.com/r/coding/hot/.rss`

---

## Step 4: Update AI Analyzer (1 minute)

Since you're adding AI/coding content, let's make sure the analyzer scores them properly!

1. Find the **"AI Content Analyzer"** node (big JavaScript node)
2. Click on it
3. Scroll down in the JavaScript code
4. You'll see the `nicheKeywords` section
5. It already includes AI keywords! ✅
   ```javascript
   ai: ['ai', 'artificial intelligence', 'automation', 'technology']
   ```

**OPTIONAL:** If you want to add coding-specific keywords:

Add this line after the `ai:` line:
```javascript
coding: ['coding', 'programming', 'developer', 'software', 'vibe code', 'github', 'javascript', 'python'],
```

Save it!

---

## What You'll Get Now

### Your 6 Content Sources:
1. ✅ **Reddit Entrepreneur** - Business trends
2. ✅ **Reddit Small Business** - SMB insights
3. ✅ **Entrepreneur Magazine** - Business news
4. ✅ **Tulsa Business News** - Local angle
5. ✅ **AI News** - AI developments (GrowthGenix.ai angle!)
6. ✅ **Hacker News** - Tech/coding (VibeCode angle!)

### Example Email Topics You'll Get:

**AI News Examples:**
- "OpenAI releases new GPT model - How Tulsa businesses can use it"
- "AI automation trends for 2025 - GrowthGenix.ai perspective"
- "Small businesses using AI to compete with giants"

**Coding/VibeCode Examples:**
- "Why every entrepreneur should learn to code (even basic)"
- "No-code vs low-code: What I learned building GrowthGenix.ai"
- "How I automate my Tulsa businesses with simple scripts"
- "Developer tools that changed my business"

### Perfect for Your Businesses:
- **GrowthGenix.ai**: AI automation content
- **Integrity Corporate Housing**: Remote work tech trends
- **Safe Harbor Mental Health**: Tech for mental health services
- **Personal Brand**: Adam James as tech-savvy Tulsa entrepreneur

---

## Test It Out!

1. Save your workflow
2. Click **"Execute Workflow"** (play button)
3. Watch all 6 RSS feeds pull content
4. Check the "AI Content Analyzer" output
5. You should see viral opportunities from AI/coding mixed in!

---

## Pro Tips

### Prioritize Certain Feeds
In the "AI Content Analyzer" code, you can boost scores:

```javascript
// Bonus for AI/coding mentions (add this section)
if (content.includes('ai') || content.includes('artificial intelligence')) {
  score += 25; // Extra boost for AI content
}

if (content.includes('code') || content.includes('programming')) {
  score += 20; // Extra boost for coding content
}
```

This makes sure AI and coding topics are more likely to be in your top 3!

### Add More Feeds Anytime
Just repeat the steps! You can monitor:
- YouTube channels (via RSS)
- Podcasts (via RSS)
- Industry blogs
- Competitor content

**N8N can handle 10-20 RSS feeds easily!**

---

## Your Updated Daily Email Will Include:

```
🔥 TRENDING TOPIC #1: "How AI is Revolutionizing Small Business"
Viral on: AI News (12K shares)
Your angle: "How I use AI at GrowthGenix.ai to serve Tulsa businesses"

[Complete Reel script with AI angle]
[Filming instructions]
[Captions for all platforms]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 TRENDING TOPIC #2: "Why Every Entrepreneur Should Learn Basic Coding"
Viral on: Hacker News (8K upvotes)
Your angle: "How coding knowledge helps me run 3 businesses more efficiently"

[Complete Reel script with coding angle]
[Filming instructions]
[Captions for all platforms]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 TRENDING TOPIC #3: "Small Cities Are Becoming Tech Hubs"
Viral on: Entrepreneur Magazine (15K views)
Your angle: "Why Tulsa is the perfect place for tech entrepreneurs"

[Complete Reel script]
```

---

## Questions?

**"Can I add YouTube RSS?"**
Yes! Format: `https://www.youtube.com/feeds/videos.xml?channel_id=[CHANNEL_ID]`

**"Can I add my competitors' blogs?"**
Yes! Most blogs have RSS feeds at: `domain.com/feed` or `domain.com/rss`

**"Will this slow down my workflow?"**
No! N8N handles multiple RSS feeds efficiently. 6-10 feeds is perfect.

**"Can I remove feeds later?"**
Yes! Just delete the node and reconnect the workflow.

---

## Summary

✅ **Added**: AI News feed  
✅ **Added**: Hacker News/Coding feed  
✅ **Result**: More diverse viral content  
✅ **Time**: 2 minutes to add both  
✅ **Tomorrow**: AI and coding Reel ideas in your email!

🚀 **Now you're monitoring 6 content sources for maximum viral opportunities!**





















