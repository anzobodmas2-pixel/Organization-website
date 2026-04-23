# Render.com Deployment Guide for TRGD Website

## Complete Step-by-Step Deployment to Render

**Target Domain:** trgd.org  
**Platform:** Render.com  
**Cost:** Free tier (with limitations) or $7-25/month paid  
**Estimated Time:** 20-30 minutes  
**Best For:** Testing, development, low-traffic sites  

---

## Why Render?

✅ Free tier available (trial)  
✅ Full Node.js support  
✅ SQLite database compatible  
✅ Automatic GitHub deployments  
✅ Free SSL certificates  
✅ Easy environment setup  
✅ Simple dashboard  

⚠️ Free tier limitation: App spins down after 15 minutes of inactivity  

---

## Prerequisites

- [ ] GitHub account with TRGD code repository
- [ ] Code on GitHub main branch
- [ ] `.env` file configured locally (NOT in GitHub)
- [ ] Gmail App Password ready
- [ ] Domain name registered (trgd.org)

---

## Step-by-Step Deployment

### Phase 1: Sign Up for Render

**Step 1.1: Go to Render**

1. Visit https://render.com
2. Click "Sign Up"
3. Choose "Sign up with GitHub"
4. Authorize Render to access your GitHub account
5. Confirm email

---

### Phase 2: Create Web Service

**Step 2.1: Create New Web Service**

1. In Render dashboard, click "New +"
2. Select "Web Service"
3. Click "Connect Repository"
4. Search for "TRGD" repository
5. Select your repository
6. Click "Connect"

**Step 2.2: Configure Service Settings**

Fill in the form:

| Setting | Value |
|---------|-------|
| Name | trgd-website |
| Environment | Node |
| Region | Frankfurt (or closest to Uganda) |
| Build Command | npm install |
| Start Command | npm start |

---

### Phase 3: Add Environment Variables

**Step 3.1: Add Variables**

In the web service configuration:

1. Scroll to "Environment" section
2. Click "Add Environment Variable"
3. Add each variable:

```
PORT=3000
NODE_ENV=production
SMTP_SERVICE=gmail
SMTP_USER=trgd2021@gmail.com
SMTP_PASS=[your_app_password]
SMTP_FROM=noreply@trgd.org
ORG_EMAIL=trgd2021@gmail.com
```

**Step 3.2: Set Plan Type**

- **Free Plan**: 
  - Free for 3 months trial
  - $0/month after trial ends
  - App spins down after 15 min inactivity
  - Good for testing

- **Paid Plans**:
  - $7/month: Always-on deployment
  - $25/month: Better resources

---

### Phase 4: Deploy Application

**Step 4.1: Create Service**

Click "Create Web Service"

Render will:
- Clone your repository
- Install dependencies
- Build application
- Deploy to production

**Estimated time:** 3-5 minutes

**Step 4.2: Monitor Deployment**

In dashboard, watch the deployment logs:
- 🔵 Building... (in progress)
- 🟢 Live (deployment complete)
- 🔴 Failed (check logs)

---

### Phase 5: Test on Render Domain

**Step 5.1: Get Render URL**

1. In dashboard, look for "Service URL"
2. Should be something like: `https://trgd-website.onrender.com`
3. Click to open website

**Step 5.2: Verify Website**

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Images display
- [ ] Animations work
- [ ] Responsive on mobile

**Step 5.3: Test Contact Form**

1. Scroll to Contact section
2. Fill out form:
   - Name: "Test"
   - Email: "test@example.com"
   - Region: "Madi"
   - Message: "Testing Render deployment"
3. Submit form
4. Should see: "Thank you! Your message has been received."

**Step 5.4: Check Email**

1. Go to trgd2021@gmail.com
2. Should receive test email
3. Verify message content

---

### Phase 6: Configure Custom Domain

**Step 6.1: Add Custom Domain in Render**

1. In Render dashboard, go to "Settings"
2. Find "Custom Domains"
3. Click "Add Custom Domain"
4. Enter: `trgd.org`
5. Click "Add Domain"

**Step 6.2: Get DNS Records**

Render shows DNS configuration:

```
CNAME: trgd.org → trgd-website.onrender.com
```

**Step 6.3: Update Domain Registrar DNS**

1. Go to your domain registrar (Namecheap, GoDaddy, etc.)
2. Edit DNS records
3. Find or create CNAME record:
   - **Name:** @ (or trgd.org)
   - **Type:** CNAME
   - **Value:** trgd-website.onrender.com
4. Save changes

**Step 6.4: Wait for Propagation**

- Changes take 24-48 hours
- Check at: https://dnschecker.org
- Search for: trgd.org

---

### Phase 7: Verify Production

**Step 7.1: Test Custom Domain**

1. Open browser
2. Go to: https://trgd.org
3. Should load with SSL certificate
4. Green 🔒 icon shows

**Step 7.2: Full Functionality Test**

Test all website sections at https://trgd.org:

- [ ] Homepage loads
- [ ] All sections visible
- [ ] Contact form works
- [ ] Email received
- [ ] Mobile responsive
- [ ] No console errors (F12)

---

### Phase 8: Enable Auto-Deploy

**Step 8.1: Auto-Deployment Settings**

In Render dashboard:
1. Go to "Settings"
2. Find "Auto-Deploy"
3. Select "Yes - redeploy every push to main"

**Result:** Website updates automatically when you push to GitHub

---

## Important Notes for Render

### Free Tier Limitations

**Spin Down:**
- App spins down after 15 minutes of no requests
- Takes 30+ seconds to start after spin down
- Not suitable for production with active users

**Workaround:**
- Use a free uptime monitor to keep app alive
- Services like: UpTime Robot (free)

**Setup Uptime Monitor:**
```
1. Go to https://uptimerobot.com
2. Sign up (free)
3. Add monitor for: https://trgd.org
4. Set interval: 5 minutes
5. Add alert email (optional)
```

This pings your site every 5 minutes, keeping it from spinning down.

---

### When to Upgrade to Paid Plan

Consider upgrading if:
- Website gets regular traffic
- Spin downs become annoying
- Users complain about slow response
- You need 24/7 availability

**Paid Plans:**
- $7/month: Always-on, adequate for TRGD
- $25/month: Better resources if traffic grows
- $100+: Large-scale applications

---

## Monitoring

**View Logs:**
1. In Render dashboard, click "Logs"
2. See real-time application output
3. Watch for errors

**Restart Service:**
1. In dashboard, click "Manual Deploy"
2. Select "Latest Commit"
3. Click "Deploy"

---

## Troubleshooting Render

### Build Fails

**Solution:**
1. Check build log for specific error
2. Common causes:
   - Missing package.json
   - Dependencies not installing
3. Fix locally, push to GitHub, rebuild

---

### Application Crashes

**Check logs:**
1. In Render dashboard, view "Logs"
2. Look for error messages
3. Check environment variables

**Solution:**
1. Verify all environment variables set
2. Manually restart from dashboard
3. Push code fixes

---

### Domain Not Working

**Check DNS:**
1. Verify CNAME correct in registrar
2. Check propagation: https://dnschecker.org
3. Wait full 48 hours if needed

---

## Alternative to Free Tier

If free tier limitations are an issue, upgrade to:

**Paid Render Plan ($7/month):**
- Always-on deployment
- No spin downs
- Suitable for production
- Professional tier

**Or switch to Railway.app ($5/month):**
- Similar pricing
- Better free tier value
- Always-on included

---

## Useful Links

- Render Docs: https://render.com/docs
- Node.js Deployment: https://render.com/docs/deploy-node
- Custom Domains: https://render.com/docs/custom-domains
- Environment Variables: https://render.com/docs/environment-variables

---

## Quick Checklist - Render Deployment

- [ ] GitHub account connected
- [ ] Repository authorized with Render
- [ ] Web Service created
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] Website loads on Render URL
- [ ] Contact form works
- [ ] Emails received
- [ ] Custom domain added
- [ ] DNS configured at registrar
- [ ] Domain working (https://trgd.org)
- [ ] SSL certificate active
- [ ] Auto-deploy enabled
- [ ] Uptime monitor configured (if free tier)

---

**Status:** ✅ Ready  
**Deployment Time:** 20-30 minutes  
**Cost:** Free (with limitations) or $7/month paid  
**Recommendation:** Use paid plan ($7/month) for production reliability  
