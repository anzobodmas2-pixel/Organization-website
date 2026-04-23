# Railway.app Deployment Guide for TRGD Website

## Complete Step-by-Step Deployment to Railway.app

**Target Domain:** trgd.org  
**Platform:** Railway.app  
**Technology:** Node.js + Express + SQLite  
**Cost:** Starting at $5/month  
**Estimated Time:** 20-30 minutes  

---

## Why Railway.app?

✅ Perfect for Node.js applications  
✅ SQLite database fully supported  
✅ Automatic deployments from GitHub  
✅ Free SSL certificates  
✅ Easy environment variables  
✅ Excellent documentation  
✅ $5/month minimum charge  
✅ Perfect for non-profits  

---

## Prerequisites

Before starting, you need:

- [ ] GitHub account with your code repository
- [ ] Code pushed to GitHub main branch
- [ ] `.env` file configured locally (but NOT pushed to GitHub)
- [ ] Email credentials ready (for Nodemailer)
- [ ] Domain name registered (trgd.org)

---

## Step-by-Step Deployment

### Phase 1: Prepare Your Repository

**Step 1.1: Prepare Local Environment**

```bash
# From your project directory
cd "c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE"

# Verify package.json exists
ls package.json

# Verify server.js exists
ls server.js

# Check all files are ready
ls -la
```

**Step 1.2: Ensure .env is in .gitignore**

```bash
# Check .gitignore file
cat .gitignore

# Should contain:
# .env
# .env.local
# .env.*.local
# node_modules/
```

If not present, add it:
```bash
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo "node_modules/" >> .gitignore
echo "*.log" >> .gitignore
```

**Step 1.3: Add Procfile (Railway specific)**

Create `Procfile` in project root:

```bash
# Create Procfile
cat > Procfile << EOF
web: npm start
EOF
```

**Step 1.4: Verify package.json Start Script**

Your package.json should have:
```json
"scripts": {
  "start": "node server.js"
}
```

**Step 1.5: Push to GitHub**

```bash
cd "c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE"

# Add and commit changes
git add .
git commit -m "Prepare for Railway deployment"

# Push to main branch
git push origin main

# Verify push successful
git log --oneline -5
```

---

### Phase 2: Create Railway Account & Project

**Step 2.1: Sign Up for Railway.app**

1. Go to https://railway.app
2. Click "Sign Up"
3. Choose "GitHub" authentication
4. Authorize Railway to access your GitHub account
5. Complete signup process

**Step 2.2: Create New Project**

1. In Railway dashboard, click "Create New Project"
2. Select "Deploy from GitHub repo"
3. Search for your repository: "TRGD" or search for the specific repo
4. Select your repository
5. Click "Deploy Now"

**Step 2.3: Railway Builds Your App**

Railway will automatically:
- Clone your repository
- Detect Node.js project
- Install dependencies (npm install)
- Build application
- Start your app

**Estimated time:** 2-5 minutes

---

### Phase 3: Configure Environment Variables

**Step 3.1: Navigate to Variables Section**

In Railway dashboard:
1. Go to your project
2. Click "Variables" tab
3. Click "Add Variable"

**Step 3.2: Add Required Variables**

Add each variable one at a time:

```
PORT=3000
NODE_ENV=production

SMTP_SERVICE=gmail
SMTP_USER=trgd2021@gmail.com
SMTP_PASS=[your_gmail_app_password]
SMTP_FROM=noreply@trgd.org
ORG_EMAIL=trgd2021@gmail.com

DATABASE_URL=/data/database.sqlite
```

**Important:** 
- Use your actual Gmail App Password (not your Gmail password)
- See SETUP.md for Gmail App Password instructions

**Step 3.3: Verify Variables in Railway Dashboard**

Check that all variables are set:
- [ ] PORT=3000
- [ ] NODE_ENV=production
- [ ] SMTP_SERVICE=gmail
- [ ] SMTP_USER=[your email]
- [ ] SMTP_PASS=[your password]
- [ ] SMTP_FROM=noreply@trgd.org
- [ ] ORG_EMAIL=trgd2021@gmail.com

---

### Phase 4: Deploy Application

**Step 4.1: Trigger Deployment**

Railway automatically deploys when you push to GitHub. To manually trigger:

1. In Railway dashboard, go to "Deployments" tab
2. Click "Deploy" button
3. Watch build progress

**Step 4.2: Check Deployment Status**

- [ ] Build started
- [ ] Dependencies installed
- [ ] Application built successfully
- [ ] Application started on port 3000
- [ ] No error messages

**Build Progress Indicators:**
- 🔵 Building... (In progress)
- 🟢 Success (Deployment complete)
- 🔴 Failed (Check logs for errors)

**Step 4.3: View Deployment Logs**

In Railway dashboard:
1. Click "Logs" tab
2. Scroll to see application startup
3. Look for: "Server is running on http://localhost:3000"
4. Should see no errors

---

### Phase 5: Get Your Railway Domain

**Step 5.1: Find Railway Generated URL**

In Railway dashboard:
1. Go to "Settings" tab
2. Look for "Domains" section
3. You'll see something like: `[project-name]-production.up.railway.app`
4. Copy this URL

**Step 5.2: Test Railway URL**

1. Open browser
2. Navigate to: `https://[project-name]-production.up.railway.app`
3. Website should load
4. Test functionality:
   - [ ] Homepage loads
   - [ ] Navigation works
   - [ ] Images display (if configured)
   - [ ] Scroll animations work
   - [ ] Contact form visible

**Step 5.3: Test Contact Form on Railway**

1. Scroll to Contact section
2. Fill in form with test data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Region: "West Nile"
   - Message: "Testing contact form on Railway"
3. Click "Send Message"
4. Expected: "Thank you! Your message has been received."

**Step 5.4: Verify Email Received**

1. Check trgd2021@gmail.com inbox
2. Should receive email with contact form submission
3. Verify content is correct

---

### Phase 6: Connect Custom Domain (trgd.org)

**Step 6.1: Add Custom Domain in Railway**

In Railway dashboard:
1. Go to "Settings" tab
2. Find "Domains" section
3. Click "Add Domain"
4. Enter: `trgd.org`
5. Click "Add"

**Step 6.2: Get DNS Records from Railway**

Railway will show DNS configuration:
- Typically CNAME record pointing to Railway URL
- Copy the exact CNAME target value

Example:
```
CNAME: trgd.org → [railway-url].up.railway.app
```

**Step 6.3: Update DNS at Domain Registrar**

1. Go to your domain registrar (Namecheap, GoDaddy, etc.)
2. Navigate to DNS settings
3. Find/create CNAME record:
   - **Name:** trgd.org (or @ for root)
   - **Type:** CNAME
   - **Value:** [railway-url].up.railway.app (from Railway)
4. Save changes

**Step 6.4: Add www Subdomain (Optional)**

1. In domain registrar, add another CNAME:
   - **Name:** www
   - **Type:** CNAME
   - **Value:** trgd.org
2. Save changes

**Step 6.5: Wait for DNS Propagation**

- DNS changes take 24-48 hours to propagate
- Check progress at: https://dnschecker.org
- Search for: trgd.org

**What to look for:**
- All nameservers show the same CNAME target
- Green checkmarks for all regions

---

### Phase 7: Verify Production Deployment

**Step 7.1: Test Custom Domain**

1. Open browser
2. Navigate to: https://trgd.org
3. Website should load with SSL certificate
4. URL should be secure (🔒 icon in browser)

**Step 7.2: Full Functionality Test**

On production website (trgd.org), test:

- [ ] **Homepage**
  - [ ] Hero section loads
  - [ ] Text content visible
  - [ ] Buttons functional
  - [ ] Navigation links work

- [ ] **About Section**
  - [ ] Content displays
  - [ ] Images load
  - [ ] Responsive on mobile

- [ ] **Pages/Programs**
  - [ ] Program cards display
  - [ ] "Learn More" buttons work
  - [ ] Program detail modal opens

- [ ] **Blog Section**
  - [ ] Blog background visible
  - [ ] Blog cards display
  - [ ] Features cards display

- [ ] **Team Section**
  - [ ] Team member photos display
  - [ ] Names and roles visible
  - [ ] Responsive layout

- [ ] **Contact Form**
  - [ ] Form fields present
  - [ ] Submit button works
  - [ ] Success message appears
  - [ ] Email received at trgd2021@gmail.com

- [ ] **Mobile Responsiveness**
  - [ ] Open DevTools (F12)
  - [ ] Toggle device toolbar (Ctrl+Shift+M)
  - [ ] Test at mobile sizes
  - [ ] All elements responsive

- [ ] **Performance**
  - [ ] Page loads in < 3 seconds
  - [ ] Images load quickly
  - [ ] No console errors (F12)
  - [ ] Network requests successful

---

### Phase 8: Enable Automatic Deployments

**Step 8.1: Configure Auto-Deploy**

In Railway dashboard:
1. Go to "Settings" tab
2. Find "Deployment" settings
3. Enable "Automatic Deployments"
4. Select branch: `main`

**Result:**
- Every push to GitHub main branch automatically deploys to production
- Builds take 2-5 minutes
- No manual deployment needed

**Step 8.2: Test Automatic Deployment**

1. Make a small code change locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test auto-deploy"
   git push origin main
   ```
3. Watch Railway dashboard for new deployment
4. Verify website updates within 5 minutes

---

## SSL Certificate (HTTPS)

Railway automatically provides SSL certificates from Let's Encrypt.

**Verification:**
- [ ] Website accessible via https://trgd.org
- [ ] Green 🔒 icon in browser
- [ ] No SSL warnings

**Force HTTPS Redirect:**

This is typically automatic, but if needed, add to server.js:

```javascript
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});
```

---

## Database Backup & Persistence

**SQLite Database on Railway:**
- Database file persists across deployments ✅
- Stored in app container
- Survives restarts

**Manual Backup:**

1. In Railway dashboard, go to "Deployments"
2. Open latest deployment logs
3. SSH into container (if available)
4. Download database backup

**Automated Backup (Optional):**

Add backup script to cron job on separate machine:

```bash
#!/bin/bash
# Database backup script
DB_FILE="/var/www/trgd/database.sqlite"
BACKUP_DIR="/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# SSH into Railway container and backup
# (Setup SSH keys first)
ssh railway@[app-url] "cp database.sqlite ~/backup_$TIMESTAMP.sqlite"
```

---

## Monitoring & Logs

**View Application Logs:**

1. In Railway dashboard, click "Logs" tab
2. Real-time log stream appears
3. Look for errors or unusual activity

**Common Log Messages:**

✅ Good:
```
Server is running on http://localhost:3000
```

❌ Problem:
```
Error: Cannot find module
SMTP authentication failed
```

---

## Troubleshooting Railway Deployment

### Issue: Build Fails

**Check:**
1. View build logs in Railway
2. Common causes:
   - Missing package.json
   - npm install errors
   - Missing Node version specification

**Solution:**
1. Verify package.json in root directory
2. Check all dependencies in package.json
3. Test locally: `npm install && npm start`
4. Push fixes to GitHub
5. Railway redeploys automatically

---

### Issue: Application Crashes After Deploy

**Check:**
1. View application logs
2. Common causes:
   - Missing environment variables
   - Port conflict
   - Database permission issue

**Solution:**
1. Verify all environment variables set in Railway
2. Check PORT variable set to 3000
3. Restart deployment from Railway dashboard

---

### Issue: Custom Domain Not Working

**Check:**
1. DNS propagation at: https://dnschecker.org
2. Verify CNAME record correct in registrar
3. Check Railway domain configuration

**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Verify CNAME target matches Railway URL exactly
3. Contact domain registrar support if stuck

---

### Issue: Emails Not Sending

**Check:**
1. Verify SMTP variables set in Railway
2. Check Gmail App Password correct
3. Review logs for email errors

**Solution:**
1. Test locally with same .env variables
2. Verify SMTP credentials in Gmail settings
3. Check if Gmail has security alerts

---

## Ongoing Maintenance

### Weekly Tasks

- [ ] Check application logs for errors
- [ ] Monitor website uptime
- [ ] Test contact form functionality

### Monthly Tasks

- [ ] Backup database
- [ ] Review application metrics
- [ ] Update dependencies if needed
- [ ] Test form submissions

### Quarterly Tasks

- [ ] Review SSL certificate validity
- [ ] Check storage usage
- [ ] Update Node.js version if available
- [ ] Security audit

---

## Scaling on Railway

If website grows and needs more resources:

**Upgrade Plan:**
1. In Railway dashboard, go to account settings
2. Upgrade to higher tier
3. Allocate more CPU/RAM to application
4. Application restarts with new resources

**Estimated Costs:**
- Small (current): $7-15/month
- Medium (scaled): $25-50/month
- Large (enterprise): $100+/month

---

## Useful Links

- Railway Documentation: https://docs.railway.app/
- Node.js on Railway: https://docs.railway.app/guides/nodejs
- Database Persistence: https://docs.railway.app/guides/databases
- Custom Domains: https://docs.railway.app/guides/custom-domain
- Support: support@railway.app

---

## Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Procfile created
- [ ] Railway account created
- [ ] Project created on Railway
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] Website accessible on Railway domain
- [ ] Custom domain registered
- [ ] DNS configured
- [ ] Domain points to Railway
- [ ] Contact form tested and working
- [ ] Emails received
- [ ] SSL certificate active
- [ ] Mobile responsiveness verified
- [ ] Auto-deployments enabled

---

**Status:** ✅ Ready for Production  
**Deployment Time:** 20-30 minutes  
**Monthly Cost:** $5-15  

Next step: Set up custom domain and DNS!
