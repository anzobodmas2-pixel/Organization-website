# TRGD Website - Production Deployment Guide

## Complete Deployment & Hosting Strategy for trgd.org

**Project:** TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT Website  
**Technology Stack:** Node.js/Express, SQLite3, Nodemailer, Vanilla JavaScript/CSS  
**Target Domain:** trgd.org  
**Date Created:** April 24, 2026  

---

## 📋 Table of Contents

1. [Quick Summary](#quick-summary)
2. [Hosting Provider Comparison](#hosting-provider-comparison)
3. [Step-by-Step Deployment Guides](#step-by-step-deployment-guides)
4. [Domain Registration & DNS](#domain-registration--dns)
5. [SSL Certificate Configuration](#ssl-certificate-configuration)
6. [Continuous Deployment Workflow](#continuous-deployment-workflow)
7. [Database & Environment Setup](#database--environment-setup)
8. [Monitoring & Maintenance](#monitoring--maintenance)
9. [Troubleshooting Guide](#troubleshooting-guide)
10. [Production Checklist](#production-checklist)

---

## Quick Summary

### Your Technology Stack Analysis
```
Frontend:     HTML5, CSS3, Vanilla JavaScript (Static files)
Backend:      Node.js 14+ with Express.js
Database:     SQLite3 (file-based, no server needed)
Email:        Nodemailer (SMTP integration)
Dependencies: cors, dotenv, nodemailer, sqlite3
Start Script: npm start (runs on port 3000)
```

### Hosting Recommendations (Ranked by Best Fit)

| Rank | Provider | Cost | Complexity | Best For |
|------|----------|------|-----------|----------|
| 1 | **Railway.app** | $7-50/mo | Low | Node.js apps, easy setup |
| 2 | **Render** | $7-25/mo | Low | Full-stack Node, SQLite |
| 3 | **DigitalOcean Apps** | $12-25/mo | Low-Mid | Full control, scalable |
| 4 | **AWS Lightsail** | $3.50-30/mo | Mid | Flexible, industry standard |
| 5 | **Heroku** | $7-50/mo | Low | Traditional choice, docs |
| 6 | **VPS (Linode/Vultr)** | $5-20/mo | High | Full control, flexible |
| 7 | **Shared Hosting** | $5-15/mo | Mid | Limited Node.js support |

---

## Hosting Provider Comparison

### RECOMMENDED: Railway.app ⭐ Best Overall

**Pros:**
- ✅ Built for Node.js applications
- ✅ SQLite database supported
- ✅ Free tier includes 512MB storage
- ✅ Easy GitHub integration
- ✅ Automatic deployments
- ✅ $5/month starting price
- ✅ Excellent documentation
- ✅ Custom domain support

**Cons:**
- ❌ Limited free tier ($5 credit/month)
- ❌ Smaller platform than Heroku

**Best For:** Node.js projects, startups, non-profits

---

### ALTERNATIVE 1: Render

**Pros:**
- ✅ Generous free tier (12-month)
- ✅ Native Node.js support
- ✅ SQLite compatible
- ✅ Easy deployment from GitHub
- ✅ Free SSL certificate
- ✅ Automatic deployments

**Cons:**
- ❌ Free tier spins down after 15 minutes
- ❌ Slower startup time

**Best For:** Development, low-traffic projects, testing

---

### ALTERNATIVE 2: DigitalOcean App Platform

**Pros:**
- ✅ Transparent pricing
- ✅ Scalable infrastructure
- ✅ Easy deployment
- ✅ Managed databases available
- ✅ Good documentation
- ✅ $12/month starting price

**Cons:**
- ❌ No free tier
- ❌ Minimum $12/month cost

**Best For:** Production apps, organizations with budget

---

### ALTERNATIVE 3: AWS Lightsail

**Pros:**
- ✅ Highly scalable
- ✅ Flexible deployment options
- ✅ Industry standard
- ✅ $3.50/month starting (Linux)
- ✅ Global infrastructure

**Cons:**
- ❌ Steeper learning curve
- ❌ More configuration needed
- ❌ AWS complexity

**Best For:** Enterprises, high-traffic needs

---

### ALTERNATIVE 4: Traditional VPS (Linode/Vultr)

**Pros:**
- ✅ Full server control
- ✅ Affordable ($5-20/month)
- ✅ No platform restrictions
- ✅ Scalable resources

**Cons:**
- ❌ Requires server management
- ❌ Manual configuration
- ❌ Need Linux/DevOps knowledge

**Best For:** Technical teams, custom requirements

---

## Step-by-Step Deployment Guides

### OPTION 1: Railway.app (RECOMMENDED)

[See DEPLOYMENT_RAILWAY.md](DEPLOYMENT_RAILWAY.md)

**Quick Start:**
1. Sign up at railway.app
2. Connect GitHub repository
3. Create new project
4. Configure environment variables
5. Deploy automatically

**Estimated Time:** 15-30 minutes

---

### OPTION 2: Render

[See DEPLOYMENT_RENDER.md](DEPLOYMENT_RENDER.md)

**Quick Start:**
1. Sign up at render.com
2. Create new Web Service
3. Connect GitHub repository
4. Configure environment variables
5. Deploy automatically

**Estimated Time:** 15-30 minutes

---

### OPTION 3: DigitalOcean

[See DEPLOYMENT_DIGITALOCEAN.md](DEPLOYMENT_DIGITALOCEAN.md)

**Quick Start:**
1. Sign up at digitalocean.com
2. Create App Platform project
3. Connect GitHub
4. Configure build settings
5. Deploy

**Estimated Time:** 20-40 minutes

---

### OPTION 4: AWS Lightsail

[See DEPLOYMENT_AWS_LIGHTSAIL.md](DEPLOYMENT_AWS_LIGHTSAIL.md)

**Quick Start:**
1. Create AWS account
2. Launch Lightsail instance
3. Install Node.js & dependencies
4. Upload code via GitHub or SCP
5. Configure process manager
6. Set up SSL

**Estimated Time:** 30-60 minutes

---

### OPTION 5: VPS Manual Deployment

[See DEPLOYMENT_VPS_MANUAL.md](DEPLOYMENT_VPS_MANUAL.md)

**Quick Start:**
1. Rent VPS (Linode/Vultr/Hetzner)
2. SSH into server
3. Install Node.js, npm, nginx
4. Clone repository
5. Configure nginx reverse proxy
6. Set up SSL with Let's Encrypt
7. Use PM2 for process management

**Estimated Time:** 1-2 hours

---

## Domain Registration & DNS

### Step 1: Register Domain (trgd.org)

**Where to Register:**
- **Namecheap** - Good prices, easy interface
- **GoDaddy** - Most popular
- **Google Domains** - Simple, integrated
- **Cloudflare** - Excellent DNS features
- **Hover** - Premium, user-friendly

**Registration Process:**
1. Go to registrar website
2. Search for "trgd.org"
3. Check availability
4. Add to cart
5. Complete purchase
6. Verify email
7. Domain registered!

**Cost:** $10-15/year typically

---

### Step 2: Configure DNS

After registering, update DNS records to point to your hosting provider:

#### For Railway.app:
```
CNAME: trgd.org → [railway-app-name].up.railway.app
```

#### For Render:
```
CNAME: trgd.org → [render-app-name].onrender.com
```

#### For DigitalOcean:
```
A: trgd.org → [DigitalOcean-IP]
CNAME: www → trgd.org
```

#### For AWS Lightsail:
```
A: trgd.org → [Lightsail-IP]
CNAME: www → trgd.org
```

#### For VPS (Linode/Vultr):
```
A: trgd.org → [VPS-IP]
CNAME: www → trgd.org
CNAME: mail → [mail-server-IP] (if email)
```

---

### Step 3: DNS Propagation

**What to Expect:**
- Changes typically propagate within 24-48 hours
- Some records update within minutes
- Use: https://dnschecker.org to verify

**Verification:**
```bash
# Test DNS propagation
nslookup trgd.org
dig trgd.org
```

---

## SSL Certificate Configuration

### Option 1: Automatic SSL (Recommended)

Most modern hosting platforms provide automatic SSL certificates via Let's Encrypt:

**Railway.app:** Automatic ✅
**Render:** Automatic ✅
**DigitalOcean:** Automatic ✅
**AWS Lightsail:** Via AWS Certificate Manager ✅

---

### Option 2: Manual Let's Encrypt Setup (VPS)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --standalone -d trgd.org -d www.trgd.org

# Auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

---

### Forcing HTTPS

All platforms should automatically redirect HTTP → HTTPS

For manual setup (nginx):
```nginx
server {
    listen 80;
    server_name trgd.org www.trgd.org;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name trgd.org www.trgd.org;
    
    ssl_certificate /etc/letsencrypt/live/trgd.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/trgd.org/privkey.pem;
}
```

---

## Continuous Deployment Workflow

### GitHub-Based Deployment (Recommended)

**Setup:**
1. Push code to GitHub repository
2. Connect repository to hosting platform
3. Configure environment variables
4. Set deployment branch (usually `main`)
5. Enable automatic deployments

**Deployment Flow:**
```
Local Development
    ↓ (git commit & push)
GitHub Repository
    ↓ (webhook trigger)
Hosting Platform (Railway/Render/etc)
    ↓ (build & deploy)
Production Website (trgd.org)
```

### Manual Deployment (Alternative)

For VPS or manual setups:

```bash
# SSH into server
ssh user@trgd.org

# Navigate to app directory
cd /var/www/trgd-website

# Pull latest code
git pull origin main

# Install dependencies
npm install

# Restart app
pm2 restart trgd-website

# Verify
curl http://localhost:3000
```

---

## Database & Environment Setup

### SQLite Database

Your app uses SQLite3 (file-based database). When deploying:

**Important:** 
- Database is created automatically on first run
- Ensure write permissions in app directory
- For platform deployments, store in persistent volume

**Platform-Specific:**

**Railway.app:**
- Database stored in container
- Persists across restarts ✅
- Included in free tier ✅

**Render:**
- Database stored with app
- Persists with deployments ✅

**DigitalOcean:**
- Use managed PostgreSQL if scaling (optional)
- SQLite works fine for current scale ✅

**AWS Lightsail:**
- Store in EBS volume
- Configure backups
- Consider RDS PostgreSQL for production

---

### Environment Variables

Create `.env` file on production server:

```bash
# Server configuration
PORT=3000
NODE_ENV=production

# Email configuration
SMTP_SERVICE=gmail
SMTP_USER=trgd2021@gmail.com
SMTP_PASS=[your_app_password]
SMTP_FROM=noreply@trgd.org
ORG_EMAIL=trgd2021@gmail.com

# Database location (optional)
DATABASE_URL=/data/database.sqlite
```

**Platform Setup:**
- Each platform has environment variable configuration interface
- Refer to specific deployment guide for exact steps

---

## Monitoring & Maintenance

### Performance Monitoring

**Tools:**
- **New Relic** - APM (Application Performance)
- **Datadog** - Comprehensive monitoring
- **Sentry** - Error tracking
- **Uptime Robot** - Uptime monitoring

**Platform-Specific:**
- Railway: Built-in metrics
- Render: Dashboard monitoring
- AWS: CloudWatch
- DigitalOcean: App Platform dashboards

### Automated Backups

**Database Backups:**
```bash
# Manual SQLite backup
cp database.sqlite database.sqlite.backup

# Automated backup (cron job)
0 2 * * * cp /var/www/trgd/database.sqlite /backups/database.sqlite.$(date +\%Y\%m\%d)
```

**Backup Storage:**
- Use cloud storage (AWS S3, DigitalOcean Spaces)
- Set 30-day retention minimum
- Test restoration process

---

## Troubleshooting Guide

[See DEPLOYMENT_TROUBLESHOOTING.md](DEPLOYMENT_TROUBLESHOOTING.md)

---

## Production Checklist

[See PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md)

---

## Next Steps

1. **Choose hosting provider** (Railway recommended)
2. **Register domain** (trgd.org)
3. **Follow specific deployment guide**
4. **Configure DNS**
5. **Set up SSL** (automatic in most cases)
6. **Test website** at trgd.org
7. **Configure monitoring**
8. **Set up backups**
9. **Document configuration**
10. **Plan maintenance schedule**

---

## Quick Decision Matrix

**Choose Based On:**

```
Budget < $10/month → Railway.app
Limited technical skills → Render
Need scalability → AWS or DigitalOcean
Want full control → VPS (Linode/Vultr)
Enterprise needs → AWS or Google Cloud
Hybrid approach → DigitalOcean with Managed DB
```

---

**Recommended Path:** Railway.app + Custom Domain via Namecheap

**Estimated Total Cost:** $15-25/month

---

See companion guides for step-by-step instructions for each provider!
