# TRGD Website - Production Deployment Checklist

## Pre-Deployment, Deployment & Post-Deployment Checklist

**Project:** TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT Website  
**Target Domain:** trgd.org  
**Deployment Date:** _____________  
**Deployed By:** _____________  

---

## PHASE 1: Pre-Deployment Verification (1 week before launch)

### Code Quality Checks

- [ ] All code tested locally
- [ ] No console errors in browser
- [ ] No compilation errors
- [ ] All dependencies listed in package.json
- [ ] package.json has correct start script
- [ ] .gitignore includes .env (secrets not in repo)
- [ ] No API keys or passwords in code

### Security Checks

- [ ] All environment variables set to use process.env
- [ ] Gmail using App Password (not main password)
- [ ] CORS configured appropriately
- [ ] Input validation on all forms
- [ ] No SQL injection vulnerabilities
- [ ] No sensitive data logged to console
- [ ] HTTPS enforced on production
- [ ] Security headers configured (if applicable)

### Database Checks

- [ ] SQLite database created and initialized
- [ ] All tables present
- [ ] Sample data loaded successfully
- [ ] Database backup procedures documented
- [ ] Database size acceptable
- [ ] Schema documented

### Performance Checks

- [ ] Page load time < 3 seconds
- [ ] All images optimized (< 500KB)
- [ ] JavaScript minified/compressed
- [ ] CSS minified/compressed
- [ ] No broken images or resources
- [ ] Mobile performance tested

### Accessibility & SEO

- [ ] All images have alt text
- [ ] HTML semantic tags used
- [ ] Mobile responsive design verified
- [ ] Keyboard navigation works
- [ ] ARIA labels on interactive elements
- [ ] Meta title and description present
- [ ] Proper heading hierarchy

### Content Verification

- [ ] All text proofread (no typos)
- [ ] Organization name correct: "TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT"
- [ ] Contact information accurate
- [ ] Phone number correct
- [ ] Email correct: trgd2021@gmail.com
- [ ] Social media links correct (@trgd760 TikTok)
- [ ] Team member names correct
- [ ] Team member titles correct
- [ ] Images professional quality
- [ ] Organization logo present

### Form Testing (Local)

- [ ] Contact form validates required fields
- [ ] Email validation works
- [ ] Region dropdown options correct
- [ ] Form submission success message shows
- [ ] Test email received at trgd2021@gmail.com
- [ ] Email contains all form data
- [ ] Email formatting looks professional

---

## PHASE 2: Hosting & Domain Preparation

### Domain Registration

- [ ] Domain trgd.org registered
- [ ] Domain set to auto-renew
- [ ] Domain registrar account login working
- [ ] WHOIS privacy enabled (optional but recommended)
- [ ] Domain expiration date noted
- [ ] Backup domain contact email set

### DNS Configuration Ready

- [ ] Hosting provider selected (Railway/Render/DigitalOcean/AWS)
- [ ] Provider account created
- [ ] Hosting provider DNS records documented
- [ ] DNS update instructions ready
- [ ] Team member assigned for DNS update

### SSL Certificate

- [ ] Platform supports automatic SSL ✓
- [ ] Let's Encrypt support verified (if manual)
- [ ] SSL certificate renewal plan documented
- [ ] HTTPS redirect configured

### Hosting Plan Selected

- [ ] Plan tier selected (capacity adequate)
- [ ] Billing method configured
- [ ] Monthly budget approved
- [ ] Auto-scaling configured (if needed)
- [ ] Support tier selected

---

## PHASE 3: Pre-Deployment Configuration

### GitHub Repository

- [ ] Repository created and public
- [ ] Code pushed to main branch
- [ ] README.md documentation complete
- [ ] .gitignore configured properly
- [ ] Branch protection rules set (optional)
- [ ] GitHub Actions/workflows configured (if using)

### Platform Setup

- [ ] Platform account created
- [ ] GitHub connection authorized
- [ ] Repository connected to platform
- [ ] Build configuration correct
- [ ] Start command verified: npm start
- [ ] Port set to 3000 (or platform default)

### Environment Variables

- [ ] NODE_ENV=production
- [ ] PORT=3000
- [ ] SMTP_SERVICE=gmail
- [ ] SMTP_USER=trgd2021@gmail.com
- [ ] SMTP_PASS=[app_password]
- [ ] SMTP_FROM=noreply@trgd.org
- [ ] ORG_EMAIL=trgd2021@gmail.com
- [ ] All variables verified in platform dashboard

### Backup & Rollback Plan

- [ ] Backup of current code created
- [ ] Database backup location identified
- [ ] Rollback procedure documented
- [ ] Rollback tested (practiced locally)
- [ ] Team knows rollback procedure

---

## PHASE 4: Deployment Execution

### Pre-Deployment Tasks

- [ ] All team members notified of deployment time
- [ ] Deployment window scheduled (off-peak time)
- [ ] Backup created of production data (if existing)
- [ ] Team on standby for issues
- [ ] Status page/communications ready

### Deploy Application

- [ ] Code pushed to GitHub main branch
- [ ] Platform automatically detects and builds
- [ ] Watch build process (5-10 minutes)
- [ ] Build completes successfully
- [ ] No error messages in build logs
- [ ] Application starts on platform URL

### Verify Deployment Platform

- [ ] Website accessible on platform URL
- [ ] Platform URL HTTPS working
- [ ] Contact form functional on platform
- [ ] Test email received at trgd2021@gmail.com
- [ ] All sections load correctly
- [ ] No 500 errors in logs
- [ ] Performance acceptable

### Configure Custom Domain DNS

- [ ] Log in to domain registrar
- [ ] Navigate to DNS settings
- [ ] Create/update CNAME record:
  - [ ] Name: @ (or trgd.org)
  - [ ] Type: CNAME
  - [ ] Value: [platform-url]
- [ ] Save/publish DNS changes
- [ ] DNS changes saved successfully

### Wait for DNS Propagation

- [ ] DNS propagation began
- [ ] Check every 1 hour for first 4 hours
- [ ] Use https://dnschecker.org to verify
- [ ] Wait maximum 48 hours for full propagation
- [ ] DNS check shows consistent CNAME across regions

---

## PHASE 5: Custom Domain Verification

### Test Custom Domain

- [ ] Domain resolves: nslookup trgd.org
- [ ] Website accessible: https://trgd.org
- [ ] HTTPS certificate valid (🔒 shows)
- [ ] No SSL warnings or errors
- [ ] Page fully loads
- [ ] CSS/styling displays correctly
- [ ] Images load properly
- [ ] Navigation links work

### Full Functionality Test

- [ ] **Hero Section**
  - [ ] Background image displays
  - [ ] Text visible and readable
  - [ ] Buttons functional

- [ ] **Navigation**
  - [ ] All nav links work
  - [ ] Scroll to sections works
  - [ ] Mobile menu works

- [ ] **About Section**
  - [ ] Content displays
  - [ ] Images load
  - [ ] Text readable

- [ ] **Team Section**
  - [ ] Team photos display
  - [ ] Names visible
  - [ ] Roles correct

- [ ] **Contact Form**
  - [ ] All fields present
  - [ ] Form submits successfully
  - [ ] Success message displays
  - [ ] Email received at trgd2021@gmail.com
  - [ ] Email content complete and formatted well

- [ ] **Blog Section**
  - [ ] Blog items display
  - [ ] Features display
  - [ ] Background visible

- [ ] **Footer**
  - [ ] All links present
  - [ ] Social media icons visible
  - [ ] Copyright notice present

### Mobile Testing

- [ ] Website responsive on mobile
- [ ] Touch interactions work
- [ ] Text readable on small screens
- [ ] Images scale properly
- [ ] Forms work on mobile
- [ ] Navigation accessible on mobile

### Performance Testing

- [ ] Page load time < 3 seconds
- [ ] No broken images (404 errors)
- [ ] No console errors (F12)
- [ ] No network errors
- [ ] Database responsive
- [ ] Email sends within 5 seconds

---

## PHASE 6: Production Verification

### Cross-Browser Testing

- [ ] ✅ Google Chrome (latest)
- [ ] ✅ Mozilla Firefox (latest)
- [ ] ✅ Safari (if Mac available)
- [ ] ✅ Microsoft Edge (if available)
- [ ] ✅ Mobile Safari (iPhone)
- [ ] ✅ Chrome Mobile (Android)

### Email Delivery Verification

- [ ] [ Test 1 - Sent email ] at trgd2021@gmail.com
- [ ] [ Test 2 - Received ] with all form fields
- [ ] [ Test 3 - Formatting ] looks professional
- [ ] [ Test 4 - Timestamp ] correct
- [ ] [ Test 5 - Content ] accurate

### User Experience Testing

- [ ] Navigation intuitive
- [ ] Page hierarchy logical
- [ ] Content easy to find
- [ ] Forms straightforward to use
- [ ] Error messages helpful
- [ ] Success messages clear

### Security Verification

- [ ] No sensitive data in browser console
- [ ] No API keys visible
- [ ] HTTPS active
- [ ] Passwords not shown in plaintext
- [ ] Form data encrypted in transit

---

## PHASE 7: Post-Deployment Monitoring (24 hours)

### Immediate Post-Deployment (0-1 hour)

- [ ] Website remains accessible
- [ ] No unexpected errors in logs
- [ ] Contact form still working
- [ ] Response times normal
- [ ] No spike in server errors

### Short-term Monitoring (1-6 hours)

- [ ] Monitor uptime
- [ ] Check error logs hourly
- [ ] Monitor form submissions
- [ ] Verify email delivery
- [ ] Check server performance

### Extended Monitoring (6-24 hours)

- [ ] Website accessible 24/7
- [ ] Contact forms receiving submissions
- [ ] Emails delivering successfully
- [ ] Response times stable
- [ ] No security alerts

### First Week Monitoring

- [ ] Check logs daily
- [ ] Test contact form daily
- [ ] Monitor performance daily
- [ ] Collect user feedback
- [ ] Look for issues or errors

---

## PHASE 8: Production Documentation

### Document Setup

- [ ] Hosting provider account credentials (securely stored)
- [ ] Domain registrar login (securely stored)
- [ ] Database access instructions
- [ ] SSH key (for VPS) stored securely
- [ ] Emergency contact list
- [ ] Runbook for common issues

### Create Runbooks

- [ ] Emergency restart procedure
- [ ] Rollback procedure
- [ ] Database backup procedure
- [ ] Contact support procedure

### Team Training

- [ ] Team briefed on production URL
- [ ] Team knows how to access logs
- [ ] Team trained on emergency procedures
- [ ] Team knows escalation procedures

---

## PHASE 9: Ongoing Maintenance Setup

### Automated Monitoring

- [ ] Uptime monitoring configured
- [ ] Error tracking enabled (Sentry/similar)
- [ ] Performance monitoring enabled
- [ ] Alerts configured (email/SMS)
- [ ] Dashboard created

### Backup Strategy

- [ ] Database backup frequency: Daily
- [ ] Backup retention: 30 days minimum
- [ ] Backup storage location: Cloud (AWS S3, DigitalOcean Spaces)
- [ ] Backup tested (restoration verified)
- [ ] Backup procedure documented

### Maintenance Schedule

- [ ] Weekly: Check logs, verify functionality
- [ ] Monthly: Review performance, update dependencies
- [ ] Quarterly: Security audit, full backup verification
- [ ] Annually: Review platform plan, consider upgrades

---

## PHASE 10: User Communication

### Launch Announcement

- [ ] Internal team notified
- [ ] Stakeholders notified
- [ ] Social media updated (if applicable)
- [ ] Email sent to subscribers (if existing)
- [ ] Website live announcement ready

### Support Setup

- [ ] Support email configured
- [ ] Support response time goal set
- [ ] FAQ documented
- [ ] Contact form monitored
- [ ] Response procedure documented

---

## Sign-Off & Approval

### Pre-Deployment Sign-Off

**Approver:** _________________________ **Date:** _______  
**Deployment Lead:** _________________________ **Date:** _______  

### Post-Deployment Sign-Off

**Verified By:** _________________________ **Date:** _______  
**Approved By:** _________________________ **Date:** _______  

---

## Issues Found During Deployment

**Issue #1:**
```
Description: _________________________________________________
Resolution: _________________________________________________
Time to Fix: _________________________________________________
```

**Issue #2:**
```
Description: _________________________________________________
Resolution: _________________________________________________
Time to Fix: _________________________________________________
```

**Issue #3:**
```
Description: _________________________________________________
Resolution: _________________________________________________
Time to Fix: _________________________________________________
```

---

## Lessons Learned

**What Went Well:**
- ____________________________________________________
- ____________________________________________________
- ____________________________________________________

**What Could Be Improved:**
- ____________________________________________________
- ____________________________________________________
- ____________________________________________________

**Action Items for Next Deployment:**
- ____________________________________________________
- ____________________________________________________
- ____________________________________________________

---

## Deployment Summary

| Item | Status | Notes |
|------|--------|-------|
| Code Quality | ✅ / ❌ / ⚠️ | |
| Security | ✅ / ❌ / ⚠️ | |
| Performance | ✅ / ❌ / ⚠️ | |
| Forms & Email | ✅ / ❌ / ⚠️ | |
| DNS & Domain | ✅ / ❌ / ⚠️ | |
| SSL Certificate | ✅ / ❌ / ⚠️ | |
| Mobile Responsive | ✅ / ❌ / ⚠️ | |
| Cross-Browser | ✅ / ❌ / ⚠️ | |
| User Experience | ✅ / ❌ / ⚠️ | |
| Overall Status | ✅ / ❌ | |

---

## Go/No-Go Decision

**Overall Deployment Status:**

- [ ] ✅ GO - Website approved for production
- [ ] ⚠️ CONDITIONAL - Go with noted issues
- [ ] ❌ NO-GO - Roll back and fix issues

**Decision Made By:** _________________________ **Date:** _______

**Reason (if No-Go):**
___________________________________________________________________

---

## Next Steps

1. ____________________________________________________
2. ____________________________________________________
3. ____________________________________________________
4. ____________________________________________________
5. ____________________________________________________

---

## Contact Information

**DevOps/Deployment Lead:**  
Email: _____________________  
Phone: _____________________  

**Application Owner:**  
Email: _____________________  
Phone: _____________________  

**Support Contact:**  
Email: _____________________  
Phone: _____________________  

---

**Deployment Completed:** _____________  
**Deployment Time:** _____________ hours  
**Status:** ✅ SUCCESS / ❌ ROLLBACK REQUIRED  

---

**Checklist Created:** April 24, 2026  
**For:** TRGD Website Production Deployment  
