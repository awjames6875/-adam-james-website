# 🚀 N8N Viral Content Machine - Setup Guide

## Quick Setup (5 Minutes!)

Your complete **Viral Content Machine** workflow is ready to import into N8N!

---

## Step 1: Open N8N (30 seconds)

1. Go to: **https://awjames.app.n8n.cloud**
2. Click **"Workflows"** in the left sidebar
3. Click the **"+ New Workflow"** button (top right)

---

## Step 2: Import the Workflow (1 minute)

### Option A: Copy/Paste Import (EASIEST)

1. In your new workflow, click the **"..." menu** (top right, next to Execute)
2. Select **"Import from File"**
3. Open the file: `n8n-workflows/viral-content-machine-phase1.json` (in this project folder)
4. Copy ALL the JSON content
5. Paste it into N8N
6. Click **"Import"**

**DONE!** The entire workflow with all 11 nodes is now in your N8N! 🎉

### Option B: File Upload

1. Click the **"..." menu** → **"Import from File"**
2. Click **"Select file"**
3. Navigate to: `C:\Users\1alph\OneDrive\Documents\adam james website\n8n-workflows\viral-content-machine-phase1.json`
4. Click **"Open"**
5. Click **"Import"**

---

## Step 3: Configure Email (2 minutes)

The only thing you need to configure is your email address:

1. Find the node called **"Send Email via Gmail"** (far right of the workflow)
2. Click on it
3. In the **"Send To"** field, replace `your-email@gmail.com` with YOUR email
4. Click **"Create New Credential"** (for Gmail OAuth2)
5. Click **"Connect"**
6. Sign in with your Google account
7. Allow N8N access
8. **Done!**

---

## Step 4: Test the Workflow (2 minutes)

1. Click **"Execute Workflow"** button (top center, play icon)
2. Watch the nodes light up green as they execute!
3. Check your email - you should receive your first **Viral Content Report**! 📧

**If you see the email → IT WORKS!** ✅

---

## Step 5: Activate Daily Automation (30 seconds)

1. Click the toggle switch next to the workflow name (top left)
2. It should turn **BLUE/GREEN** (Active)
3. **DONE!**

Now the workflow runs automatically every day at **8:00 AM CST**!

---

## What Happens Now?

### Every Morning at 8:00 AM:
- ✅ N8N wakes up automatically
- ✅ Scans Reddit, business news, Tulsa news for viral content
- ✅ AI analyzes and picks top 3 trending topics
- ✅ Generates complete Reel scripts (word-for-word)
- ✅ Creates captions for all platforms
- ✅ Emails you everything at **8:30 AM**

### You Receive an Email with:
- 🔥 3 viral trending topics
- 📱 Complete 30-second Reel scripts
- 📸 Filming instructions (what to wear, where to stand, lighting)
- 📝 Ready-to-paste captions for Facebook, Instagram, TikTok, LinkedIn
- ✅ 15-minute checklist

### You Do:
- ☕ Read email with your morning coffee (2 min)
- 🎬 Film the Reel following the script (10 min)
- 📱 Post using the provided captions (2 min)
- ✅ **DONE FOR THE DAY!**

---

## The Workflow Explained

Here's what each node does:

### 1. **Daily Trigger - 8 AM CST**
- Starts the workflow every day at 8:00 AM
- No configuration needed ✅

### 2-5. **RSS Feed Readers** (4 nodes)
- **Reddit Entrepreneur** - Monitors r/entrepreneur for trending posts
- **Reddit Small Business** - Monitors r/smallbusiness
- **Entrepreneur Magazine** - Latest business trends
- **Tulsa Business News** - Local Tulsa angle
- No configuration needed ✅

### 6. **Merge All Feeds**
- Combines all RSS feeds into one stream
- No configuration needed ✅

### 7. **AI Content Analyzer**
- JavaScript code that scores each piece of content
- Filters for relevance to your niches:
  - Entrepreneurship
  - Mental Health
  - Corporate Housing
  - Tulsa/Oklahoma
  - AI/Technology
- Picks top 3 highest-scoring topics
- No configuration needed ✅

### 8. **Reel Script Generator**
- Creates complete 30-second Reel scripts
- Adds "Adam James Tulsa" angle
- Includes hook, problem, solution, proof, CTA
- Generates filming instructions
- No configuration needed ✅

### 9. **Email Formatter**
- Formats everything into beautiful HTML email
- Creates ready-to-paste captions
- Adds checklists and instructions
- No configuration needed ✅

### 10. **Send Email via Gmail**
- Sends the formatted email to you
- **ONLY node that needs configuration** (your email address)

---

## Troubleshooting

### Problem: Email didn't arrive

**Check:**
1. Did you enter YOUR email address in the Gmail node?
2. Did you connect your Google account?
3. Check your spam/junk folder
4. Wait 1-2 minutes (sometimes delayed)

**Solution:**
- Click the **"Send Email via Gmail"** node
- Click **"Execute Node"** to test just that node
- Check if email arrives

### Problem: Workflow failed on a node

**Check:**
1. Which node is red/failed?
2. Click on the failed node
3. Look at the error message

**Common fixes:**
- **RSS Feed failed** - That feed might be down, disable that node temporarily
- **Code node failed** - Might be no matching content, run again later
- **Gmail failed** - Reconnect your Google account

### Problem: No viral content found

**This is normal!** Sometimes there aren't enough relevant trending posts.

**Solutions:**
- Wait for tomorrow's run
- OR manually execute workflow again later in the day
- Content trends change throughout the day

---

## Phase 2 Upgrades (Coming Soon!)

Once Phase 1 is running smoothly (1-2 weeks), we'll add:

### 🚀 Auto-Posting
- Buffer/Hootsuite integration
- Auto-posts to all platforms
- You just review and approve

### 📊 Performance Tracking
- Monitors views, likes, comments
- Tracks Google rankings
- Daily/weekly reports

### 🤖 A/B Testing
- Tests different hooks
- Finds winning formulas
- Auto-optimizes content

---

## Phase 3: HeyGen AI Avatar (Month 2)

The ultimate automation:

### 🎬 Your AI Clone
- HeyGen creates videos using your face/voice
- You never film anything
- Just review and post
- 3-5 videos per day on autopilot

**Workflow becomes:**
```
8:00 AM - N8N finds viral content
8:15 AM - Generates script
8:20 AM - HeyGen creates video with your AI avatar
8:30 AM - Video ready to post
8:31 AM - Auto-posted to all platforms
8:35 AM - You get notification email
```

**You do: NOTHING (or just review before posting)**

---

## Need Help?

### If Something Breaks:
1. Open N8N
2. Click the failed workflow
3. Look at which node failed (will be red)
4. Click it and read the error
5. Share the error with me and I'll fix it!

### Want to Modify:
- **Change email time**: Edit the "Daily Trigger" node, change cron expression
- **Add more RSS feeds**: Duplicate an RSS node, change the URL
- **Adjust content filters**: Edit the "AI Content Analyzer" JavaScript

---

## Success Checklist

After setup, verify these:

- [ ] Workflow imported successfully
- [ ] Gmail connected and authenticated
- [ ] Your email address entered correctly
- [ ] Test execution completed successfully
- [ ] Received test email
- [ ] Workflow toggle is ACTIVE (blue/green)
- [ ] Tomorrow morning, check for automatic email at 8:30 AM

---

## What's Next?

### Tomorrow Morning (8:30 AM):
You'll receive your first **automated viral content report**!

### Your First Week:
- Film 3-5 Reels using the provided scripts
- Post to all platforms
- Track which topics perform best

### By Week 2:
- We'll add auto-posting (Phase 2)
- Performance tracking
- Start seeing SEO improvements

### By Month 2:
- Add HeyGen AI avatar (Phase 3)
- Full automation
- You're dominating "Adam James Tulsa" on Google!

---

**Ready to import? Follow Step 1 and you'll be done in 5 minutes!** 🚀

Questions? Just ask and I'll help you through each step!





















