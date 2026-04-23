# TRGD Website - Deployment Roadmap & Quick Reference

## Complete Path from Development to Production (trgd.org)

**Project:** TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT Website  
**Domain:** trgd.org  
**Technology:** Node.js + Express + SQLite  
**Date Created:** April 24, 2026  

---

## 🎯 Executive Summary

Your TRGD website is ready to deploy to production. This guide provides a roadmap from local development to live website at trgd.org.

**Timeline:** 2-3 days (most of which is DNS propagation)  
**Effort:** 1-2 hours of active work  
**Cost:** $5-25/month hosting + $10-15/year domain  
**Recommendation:** Railway.app + Namecheap  

---

## 📊 Recommended Deployment Path

```
┌─────────────────┐
│  Local Testing  │ (You are here)
│   (Complete ✓)  │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ GitHub Upload   │ (Day 0 - 5 min)
│   (Your Code)   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Domain Setup   │ (Day 0 - 15 min)
│  trgd.org       │
│  Register +     │
│  Prepare DNS    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Railway Deploy  │ (Day 0 - 30 min)
│  Live URL:      │
│  [app].railway. │
│  app (works!)   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  DNS Update     │ (Day 0 - 5 min)
│  Point trgd.org │
│  to Railway     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ DNS Propagates  │ (Day 1-2)
│  24-48 hours    │
│  (Wait & Test)  │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  trgd.org LIVE  │ (Day 2)
│  ✅ Production  │
└─────────────────┘
```

---

## 📅 Deployment Timeline

### Timeline: 2-3 Days

**Day 0 (Today)** - 1 hour active time
- [ ] Push code to GitHub
- [ ] Register domain (trgd.org)
- [ ] Create Railway account
- [ ] Deploy to Railway
- [ ] Test on Railway URL
- [ ] Update DNS records

**Day 1-2 (Waiting)** - ~5 min checks
- [ ] Monitor DNS propagation
- [ ] Test https://trgd.org periodically
- [ ] Check https://dnschecker.org

**Day 2-3** - 10 min verification
- [ ] Verify website live
- [ ] Test all functionality
- [ ] Send test contact form
- [ ] Verify email received

---

## 🚀 Quick Start (3 Major Steps)

### Step 1: Prepare & Deploy to Railway (30 minutes)

**1.1 Push Code to GitHub**
```bash
cd "c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE"
git add .
git commit -m "Ready for production"
git push origin main
```

**1.2 Create Railway Account**
- Go to https://railway.app
- Sign up with GitHub
- Create new project
- Connect your TRGD repository
- Configure variables (see below)
- Railway deploys automatically

**1.3 Configure Environment Variables in Railway**
```
NODE_ENV=production
SMTP_SERVICE=gmail
SMTP_USER=trgd2021@gmail.com
SMTP_PASS=[your_gmail_app_password]
SMTP_FROM=noreply@trgd.org
ORG_EMAIL=trgd2021@gmail.com
```

**1.4 Test on Railway URL**
- Railway provides URL like: `https://[name]-production.up.railway.app`
- Test website works
- Test contact form
- Verify email received

---

### Step 2: Register Domain & Update DNS (20 minutes)

**2.1 Register Domain**
- Go to https://www.namecheap.com (or Godaddy, Google Domains)
- Search: trgd.org
- Register for 1 year (~$10)
- Complete purchase

**2.2 Get Railway DNS Info**
- In Railway dashboard, go to Settings
- Find "Domains" section
- Copy the CNAME target value

**2.3 Update DNS at Registrar**
- Log in to Namecheap
- Go to DNS management
- Create CNAME record:
  ```
  Name: @
  Type: CNAME
  Value: [railway-url-from-above]
  ```
- Save changes

---

### Step 3: Wait & Verify (Passive, mostly waiting)

**3.1 Monitor DNS Propagation (Day 1-2)**
- Check every few hours: https://dnschecker.org
- Search: trgd.org
- All servers should show same CNAME

**3.2 Test Custom Domain**
- Open browser
- Go to https://trgd.org
- Should work within 24-48 hours

**3.3 Final Verification**
- [ ] Website loads at https://trgd.org
- [ ] HTTPS secure (🔒 icon)
- [ ] All pages work
- [ ] Contact form works
- [ ] Email received

---

## 💰 Cost Breakdown

| Item | Cost | When | Notes |
|------|------|------|-------|
| Domain (trgd.org) | $10-15 | One-time | Namecheap, yearly |
| Hosting (Railway) | $5-15/mo | Monthly | Includes database, email |
| SSL Certificate | FREE | Automatic | Railway provides |
| Email (Gmail) | FREE | Already have | trgd2021@gmail.com |
| **TOTAL** | $15-30 | First month | $5-15 monthly after |

---

## 📋 Pre-Deployment Checklist (Quick Version)

**Code Ready:**
- [ ] Code pushed to GitHub main branch
- [ ] package.json correct
- [ ] server.js in root directory
- [ ] All dependencies listed
- [ ] .env file NOT in GitHub (.gitignore)

**Email Ready:**
- [ ] Gmail account: trgd2021@gmail.com
- [ ] Gmail App Password generated
- [ ] App Password working

**Domain Ready:**
- [ ] trgd.org registered
- [ ] Domain admin access working

**Hosting Ready:**
- [ ] Railway account created
- [ ] GitHub connected to Railway
- [ ] SMTP variables ready to enter

---

## 🔧 During Deployment Quick Reference

### Railway Setup Checklist

1. **Create Account**
   - [ ] Sign up at https://railway.app
   - [ ] GitHub authentication

2. **Create Project**
   - [ ] New → Web Service
   - [ ] Select GitHub repository
   - [ ] Click "Deploy Now"

3. **Configure Variables**
   ```
   Name: trgd-website
   Environment: Node
   Region: Frankfurt (or closest to Uganda)
   Build: npm install
   Start: npm start
   ```

4. **Add Environment Variables**
   - [ ] PORT=3000
   - [ ] NODE_ENV=production
   - [ ] SMTP variables (see above)

5. **Verify**
   - [ ] Build completes (5 min)
   - [ ] Railway URL provided
   - [ ] Test website works
   - [ ] Test contact form

### DNS Update Quick Reference

1. **Get Railway CNAME**
   - Railway Dashboard → Settings → Domains
   - Copy CNAME value

2. **Update Registrar**
   - Log in to Namecheap/GoDaddy
   - DNS Settings
   - Create/edit CNAME:
     - Name: @ (or trgd.org)
     - Type: CNAME
     - Value: [from Railway]

3. **Verify Propagation**
   - https://dnschecker.org
   - Search: trgd.org
   - Wait for all ✓ green

---

## 🧪 Testing Checklist

### Functional Testing
- [ ] Homepage loads at https://trgd.org
- [ ] All sections visible
- [ ] Navigation works
- [ ] Images display
- [ ] Animations smooth

### Form Testing
- [ ] Contact form visible
- [ ] All fields present
- [ ] Submit button works
- [ ] Success message shows
- [ ] Email received

### Performance Testing
- [ ] Page loads < 3 seconds
- [ ] No broken images (F12 Console)
- [ ] No console errors
- [ ] Mobile responsive

### Security Testing
- [ ] HTTPS working (🔒 icon)
- [ ] No mixed content warnings
- [ ] Form data encrypted
- [ ] No sensitive data exposed

---

## ⚠️ Common Issues & Quick Fixes

### Issue: Website shows "404 Not Found"

**Fix:**
1. Wait 5 minutes for deployment to complete
2. Hard refresh (Ctrl+F5)
3. Check Railway logs for errors

### Issue: trgd.org doesn't work (shows old site)

**Fix:**
1. DNS not propagated yet (wait 24 hours)
2. Verify CNAME correct at registrar
3. Check https://dnschecker.org
4. Force flush DNS cache: `ipconfig /flushdns`

### Issue: Contact form doesn't send email

**Fix:**
1. Verify SMTP_PASS is Gmail App Password (not main password)
2. Check Railway environment variables are set
3. Test locally with same credentials
4. Restart Railway app manually

### Issue: Page loads very slowly

**Fix:**
1. Check if images are under 500KB
2. Compress images with TinyPNG.com
3. Wait 5 minutes, images may be caching

---

## 📞 Support Resources

**Railway Documentation**
- https://docs.railway.app
- Excellent step-by-step guides

**Namecheap DNS Help**
- https://www.namecheap.com/support
- Live chat available

**DNS Checking Tools**
- https://dnschecker.org
- https://mxtoolbox.com
- https://www.dig.com

**SSL Certificate Help**
- Let's Encrypt: https://letsencrypt.org
- (Railway handles this automatically)

---

## 📊 Architecture Overview

```
                                    ┌─────────────────┐
                                    │  Gmail SMTP     │
                                    │ (Email Sending) │
                                    └────────┬────────┘
                                             │
                    ┌───────────────────────┘
                    │
                    ↓
    ┌─────────────────────────────────────────┐
    │         Railway Platform                 │
    │  ┌─────────────────────────────────────┐ │
    │  │  Node.js/Express Application        │ │
    │  │  ┌─────────────────────────────────┐│ │
    │  │  │ Frontend (HTML/CSS/JS)         ││ │
    │  │  │ ┌──────────────────────────────┐│ │
    │  │  │ │ Contact Form                 ││ │
    │  │  │ │ Blog Section                 ││ │
    │  │  │ │ Team Section                 ││ │
    │  │  │ └──────────────────────────────┘│ │
    │  │  └─────────────────────────────────┘│ │
    │  │  ┌─────────────────────────────────┐│ │
    │  │  │ Backend (Express API)           ││ │
    │  │  │ /api/contacts                   ││ │
    │  │  │ /api/team                       ││ │
    │  │  │ /api/news                       ││ │
    │  │  └────────────────┬────────────────┘│ │
    │  └─────────────────────────────────────┘ │
    │         ↓                                 │
    │  ┌──────────────────────────┐             │
    │  │  SQLite Database         │             │
    │  │  ├─ contacts             │             │
    │  │  ├─ subscribers          │             │
    │  │  ├─ news_posts           │             │
    │  │  └─ team_members         │             │
    │  └──────────────────────────┘             │
    └─────────────────────────────────────────┘
                    │
                    ↓
    ┌─────────────────────────────────────────┐
    │  DNS (Domain Name System)                │
    │  trgd.org → Railway IP                  │
    └─────────────────────────────────────────┘
                    │
                    ↓
         ┌──────────────────────┐
         │   User Browser       │
         │  https://trgd.org    │
         └──────────────────────┘
```

---

## 📈 Next Steps After Launch

### Immediate (Day 1)
- [ ] Monitor website for errors
- [ ] Check contact form submissions
- [ ] Verify emails arriving
- [ ] Test on different devices

### Short-term (Week 1)
- [ ] Replace placeholder images
- [ ] Verify Google indexing
- [ ] Monitor performance
- [ ] Collect user feedback

### Long-term (Month 1+)
- [ ] Set up monitoring/alerts
- [ ] Configure automated backups
- [ ] Plan content updates
- [ ] Monitor analytics

---

## 🎓 Learning Resources

### Node.js & Express
- Express Documentation: https://expressjs.com
- Node.js Docs: https://nodejs.org/docs
- NPM Registry: https://www.npmjs.com

### Database
- SQLite: https://www.sqlite.org/docs.html
- SQL Basics: https://sqlzoo.net

### Deployment
- Railway Docs: https://docs.railway.app
- DevOps Basics: https://www.atlassian.com/devops/what-is-devops

### DNS & Domains
- DNS Basics: https://www.cloudflare.com/learning/dns
- Domain Management: https://www.namecheap.com/support

---

## ✅ Success Criteria

Your deployment is successful when:

✅ Website accessible at https://trgd.org  
✅ HTTPS certificate valid (🔒 shows)  
✅ All pages load correctly  
✅ Contact form submits successfully  
✅ Emails received at trgd2021@gmail.com  
✅ Mobile responsive design works  
✅ Response time < 3 seconds  
✅ No error messages in console  

---

## 🎉 Congratulations Checklist

Once deployed, you have:
- ✅ Professional website with custom domain
- ✅ Contact form with email notifications
- ✅ Team member showcase
- ✅ Secure HTTPS connection
- ✅ Mobile-responsive design
- ✅ Production-ready backend
- ✅ Database for data storage
- ✅ Automated deployments

---

## 📞 Emergency Contact

If you get stuck:

1. **Check Troubleshooting Guide:** DEPLOYMENT_TROUBLESHOOTING.md
2. **Review Specific Platform Guide:** DEPLOYMENT_RAILWAY.md or DEPLOYMENT_RENDER.md
3. **Check Checklist:** PRODUCTION_CHECKLIST.md
4. **Contact Support:** support@railway.app (or your platform)

---

## 📝 Final Notes

- **Backup your code** in GitHub ✓
- **Save your credentials** securely (password manager)
- **Document your setup** (you're reading this!)
- **Monitor regularly** for errors/issues
- **Keep dependencies updated** (monthly)
- **Test changes locally** before deploying

---

**Status:** 🟢 READY FOR PRODUCTION  
**Estimated Deployment Time:** 1-2 hours active work  
**Total Timeline:** 2-3 days (mostly DNS propagation)  
**Support:** See guides in project folder  

---

## Quick Command Reference

```bash
# Local development
npm install
npm start
# Visit: http://localhost:3000

# GitHub push (before deploying)
git add .
git commit -m "Description of changes"
git push origin main

# Check DNS (after updating)
nslookup trgd.org
dig trgd.org

# Check SSL certificate
openssl s_client -connect trgd.org:443

# Monitor logs (if VPS)
tail -f /var/log/app.log
```

---

**Deployment Guide Created:** April 24, 2026  
**For:** TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT  
**Status:** ✅ Ready for Production  
**Next Action:** Choose hosting provider and follow platform-specific guide  
