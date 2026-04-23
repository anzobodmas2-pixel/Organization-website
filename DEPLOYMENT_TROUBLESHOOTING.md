# Deployment Troubleshooting Guide

## Common Issues & Solutions for TRGD Website Deployment

---

## DNS & Domain Issues

### Issue 1: Domain Points to Wrong Server

**Symptoms:**
- Domain shows old website
- Domain shows different site
- Domain shows "Page not found"

**Troubleshooting:**

1. **Check DNS Propagation**
   ```bash
   nslookup trgd.org
   dig trgd.org
   ```
   Should show: Your hosting provider's IP or CNAME

2. **Verify DNS Records at Registrar**
   - Go to domain registrar (Namecheap, GoDaddy, etc.)
   - Check CNAME or A record
   - Verify value matches hosting provider

3. **Check DNS Globally**
   - Use: https://dnschecker.org
   - Search: trgd.org
   - All servers should show same record

**Solutions:**

- Wait 24-48 hours for propagation
- Clear DNS cache:
  ```bash
  # Windows
  ipconfig /flushdns
  
  # Mac
  sudo dscacheutil -flushcache
  
  # Linux
  sudo systemctl restart systemd-resolved
  ```
- Hard refresh browser: Ctrl+F5
- Try different browser
- Try incognito/private mode

---

### Issue 2: CNAME Record Not Updating

**Symptoms:**
- DNS checker shows old CNAME
- Changes not taking effect

**Troubleshooting:**

1. **Verify CNAME in Registrar**
   - Log in to registrar account
   - Check exact CNAME value
   - Ensure no typos

2. **Check for Multiple Records**
   - Some registrars list multiple records
   - Ensure using correct one
   - Delete duplicate records

3. **TTL (Time To Live) Issue**
   - Lower TTL before making changes
   - Set to 300 seconds (5 minutes)
   - Make DNS change
   - Wait new TTL duration

**Solutions:**

- Contact registrar support
- Ask to manually update DNS
- Verify changes from registrar's perspective
- Be patient (can take 48 hours)

---

### Issue 3: www vs Non-www Domain Issues

**Symptoms:**
- https://trgd.org works
- https://www.trgd.org doesn't work (or vice versa)

**Troubleshooting:**

1. **Add www CNAME Record**
   - Create second CNAME:
     - Name: www
     - Type: CNAME
     - Value: trgd.org

2. **Verify Both Records**
   ```bash
   nslookup trgd.org
   nslookup www.trgd.org
   ```

**Solutions:**

- Add www subdomain CNAME
- Set up automatic redirect from one to other
- In server.js:
  ```javascript
  app.all(/.*/, function(req, res, next) {
    if (req.header('host').match(/^www\./)) {
      return res.redirect(301, 'https://trgd.org' + req.url);
    }
    next();
  });
  ```

---

## SSL Certificate Issues

### Issue 4: SSL Certificate Not Valid

**Symptoms:**
- Browser warning: "Not secure"
- Red X on HTTPS
- "Certificate error" message

**Troubleshooting:**

1. **Check Certificate Status**
   - Click lock icon in browser
   - View certificate details
   - Check expiration date

2. **Platform-Specific**
   - **Railway:** Auto-generates in ~10 minutes after domain added
   - **Render:** Auto-generates in ~10 minutes
   - **AWS:** Use Certificate Manager
   - **VPS:** Manual setup with Let's Encrypt

**Solutions:**

- Wait 10-15 minutes for auto-generation
- For VPS, run:
  ```bash
  sudo certbot renew --force-renewal
  ```
- Restart web server
- Clear browser cache (Ctrl+Shift+Delete)

---

### Issue 5: Mixed Content Warning

**Symptoms:**
- Browser warning: "Mixed Content"
- Some resources don't load
- Console errors about "insecure content"

**Troubleshooting:**

1. **Find Mixed Content**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for warnings about HTTP resources

2. **Common Causes**
   - Images from HTTP URLs
   - CSS or JS from HTTP
   - External resources not HTTPS

**Solutions:**

1. Update all URLs to HTTPS:
   - In HTML, CSS, JS files
   - Replace `http://` with `https://`
   - Use protocol-relative URLs: `//cdn.example.com`

2. In server.js, force HTTPS:
   ```javascript
   app.use((req, res, next) => {
     if (process.env.NODE_ENV === 'production' && !req.secure) {
       return res.redirect('https://' + req.headers.host + req.url);
     }
     next();
   });
   ```

---

## Email & Contact Form Issues

### Issue 6: Emails Not Sending

**Symptoms:**
- Contact form shows success but no email received
- Console shows: "Email could not be sent"
- Logs show email error

**Troubleshooting:**

1. **Check Environment Variables**
   - Verify SMTP_USER set correctly
   - Verify SMTP_PASS set correctly
   - Check SMTP_SERVICE set to "gmail"

2. **Test SMTP Credentials**
   ```bash
   # In Node.js console
   const nodemailer = require('nodemailer');
   
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'trgd2021@gmail.com',
       pass: 'your_app_password'
     }
   });
   
   transporter.verify((error, success) => {
     if (error) console.log(error);
     else console.log('Server ready to send');
   });
   ```

3. **Check Gmail Settings**
   - Log in to Gmail
   - Settings → Security
   - Verify "Less secure app access" (if not using App Password)
   - Or verify App Password generated

**Solutions:**

- Use Gmail App Password (not main Gmail password)
- Generate new App Password:
  1. Go to https://myaccount.google.com/apppasswords
  2. Select "Mail" and "Windows Computer"
  3. Copy 16-character password
  4. Update in environment variables

- Or use alternative email provider (SendGrid, Mailgun)

---

### Issue 7: Contact Form Error - "Unable to save message"

**Symptoms:**
- Form submission fails
- Error: "Unable to save contact message"
- Error message appears to user

**Troubleshooting:**

1. **Check Database**
   - Verify database.sqlite exists
   - Check file permissions
   - Check disk space available

2. **Check Logs**
   - View application logs
   - Look for database errors
   - Check if SQLite is corrupted

**Solutions:**

- Restart application
- Delete old database.sqlite (will recreate on restart)
- Check database file permissions:
  ```bash
  chmod 644 database.sqlite
  ```
- Increase platform storage if needed

---

### Issue 8: Contact Form Shows "Sending..." Forever

**Symptoms:**
- Form shows "Sending your message…" indefinitely
- Never completes
- No success or error message

**Troubleshooting:**

1. **Check Server Response**
   - Open DevTools (F12)
   - Go to Network tab
   - Make form submission
   - Check if request completes
   - Look for timeout error

2. **Check Application Logs**
   - View platform logs
   - Look for any errors or hanging requests

**Solutions:**

- Restart application
- Increase timeout in client:
  ```javascript
  // In script.js, increase timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 sec
  
  const response = await fetch(url, {
    method: 'POST',
    signal: controller.signal
  });
  ```

- Check if server is running and responsive
- Verify network connection

---

## Performance Issues

### Issue 9: Website Loads Slowly

**Symptoms:**
- Page takes > 5 seconds to load
- Images load slowly
- Server response slow

**Troubleshooting:**

1. **Check Page Load Time**
   - Open DevTools (F12)
   - Network tab
   - Look at "DOMContentLoaded" time
   - Check individual resource sizes

2. **Identify Slow Resources**
   - Images > 500KB?
   - Large JavaScript files?
   - Slow server response?

**Solutions:**

1. **Optimize Images**
   - Compress with TinyPNG.com
   - Keep under 500KB for backgrounds
   - Use WebP format for modern browsers

2. **Optimize Server**
   - Check if CPU/Memory usage high
   - Upgrade platform resources if needed
   - Enable caching

3. **Use CDN for Static Files**
   - CloudFlare (free)
   - AWS CloudFront
   - BunnyCDN

---

### Issue 10: Database Grows Too Large

**Symptoms:**
- Storage usage increasing
- Performance degrading
- Platform warning about storage

**Troubleshooting:**

1. **Check Database Size**
   ```bash
   ls -lh database.sqlite
   ```

2. **Clean Up Old Data**
   ```bash
   # In Node.js
   db.run("DELETE FROM contact_messages WHERE created_at < datetime('now', '-6 months')");
   db.run("DELETE FROM news_posts WHERE created_at < datetime('now', '-1 year')");
   ```

**Solutions:**

1. Archive old data:
   ```bash
   cp database.sqlite database.sqlite.backup.$(date +%Y%m%d)
   ```

2. Migrate to managed database (PostgreSQL)

3. Implement data retention policy

---

## Deployment Issues

### Issue 11: Deployment Fails - "npm install" Error

**Symptoms:**
- Platform shows build failure
- Error mentions "npm ERR!"
- Dependencies not installing

**Troubleshooting:**

1. **Check package.json Syntax**
   - Verify JSON is valid
   - Use: https://jsonlint.com

2. **Check Dependencies**
   - Run locally: `npm install`
   - Look for errors
   - Check compatibility

**Solutions:**

- Fix package.json errors
- Delete package-lock.json:
  ```bash
  rm package-lock.json
  npm install
  git add package-lock.json
  git commit -m "Regenerate package-lock"
  git push origin main
  ```
- Check for conflicting versions

---

### Issue 12: Application Won't Start After Deploy

**Symptoms:**
- Deployment shows success
- Website returns error 500
- Application won't start

**Troubleshooting:**

1. **Check Application Logs**
   - View logs in platform dashboard
   - Look for specific error messages

2. **Check Environment Variables**
   - Verify PORT variable set
   - Verify NODE_ENV = production
   - Check all SMTP variables

**Solutions:**

- Verify NODE_ENV=production in platform
- Check server.js for syntax errors
- Test locally with same environment variables:
  ```bash
  PORT=3000 npm start
  ```

---

### Issue 13: Automatic Deployments Not Triggering

**Symptoms:**
- Push to GitHub but website doesn't update
- Manual deployment works but auto doesn't
- Old version still live

**Troubleshooting:**

1. **Check Auto-Deploy Setting**
   - Platform dashboard
   - Verify auto-deploy enabled
   - Check correct branch selected

2. **Check GitHub Webhook**
   - Platform should show webhook status
   - Verify GitHub authorized platform

**Solutions:**

- Manually re-enable auto-deploy
- Re-connect GitHub account
- Trigger manual deployment once
- Auto-deploy usually works after

---

## Database Issues

### Issue 14: Database Locked Error

**Symptoms:**
- Error: "database is locked"
- Multiple form submissions fail
- "SQLITE_BUSY" errors

**Troubleshooting:**

1. **Check for Long Operations**
   - Review database queries
   - Check for transactions not closing
   - Look for concurrent writes

**Solutions:**

1. Update SQLite settings in server.js:
   ```javascript
   db.configure("busyTimeout", 5000);
   ```

2. Use database connection pooling

3. Restart application

---

### Issue 15: Data Lost After Deployment

**Symptoms:**
- Form submissions disappeared
- Database seems reset
- Contact messages gone

**Troubleshooting:**

1. **Check Deployment Method**
   - Did deployment delete data?
   - Is database persistent?

2. **Check Database File**
   - Verify database.sqlite still exists
   - Check file size (should be > 0 bytes)

**Solutions:**

1. For Railway/Render: Database should persist
2. For VPS: Ensure database in persistent location
3. Regular backups to prevent data loss:
   ```bash
   # Backup script
   cp database.sqlite /backups/database.sqlite.$(date +%Y%m%d-%H%M%S)
   ```

---

## General Troubleshooting Steps

### Always Check These First

1. **Check Logs**
   ```bash
   # View recent logs
   tail -100 /var/log/app.log
   ```

2. **Restart Application**
   - Many issues resolve with restart
   - Doesn't hurt to try

3. **Clear Caches**
   - Browser cache (Ctrl+Shift+Delete)
   - DNS cache (see issue 1)
   - CDN cache (if using)

4. **Check Network Connection**
   - Ping server: `ping trgd.org`
   - Test connectivity

5. **Verify Environment Variables**
   - Platform dashboard
   - All critical variables set
   - No typos in values

6. **Test Locally**
   - Run app locally with same config
   - Isolate platform vs. code issues

---

## Getting Help

### Support Resources

**For Railway:**
- Docs: https://docs.railway.app
- Community: https://railway.app/support
- Email: support@railway.app

**For Render:**
- Docs: https://render.com/docs
- Status Page: https://status.render.com
- Email: support@render.com

**For AWS:**
- Support: https://aws.amazon.com/support
- Documentation: https://docs.aws.amazon.com

**For DigitalOcean:**
- Community: https://www.digitalocean.com/community
- Docs: https://docs.digitalocean.com

---

## Useful Debugging Commands

```bash
# Check website status
curl -I https://trgd.org

# Check DNS
nslookup trgd.org
dig trgd.org

# Check SSL certificate
openssl s_client -connect trgd.org:443

# Check port
telnet trgd.org 443

# Monitor logs in real-time
tail -f /var/log/app.log

# Check disk space
df -h

# Check memory usage
free -h

# Check CPU usage
top -b -n1 | head -20

# Check processes
ps aux | grep node

# Kill and restart process
killall node
npm start

# Test database
sqlite3 database.sqlite ".tables"
```

---

## When All Else Fails

1. **Restart Everything**
   - Restart application
   - Restart database
   - Clear caches
   - Hard refresh browser

2. **Rollback Last Change**
   - Identify last successful deploy
   - Revert to previous version
   - Deploy known-good version

3. **Contact Support**
   - Platform support team
   - Include error logs
   - Describe steps taken

4. **Nuclear Option**
   - Delete and redeploy
   - Database might reset (have backup!)
   - Usually works after clean redeploy

---

**Remember:** Most issues are temporary and resolve with restart, cache clear, or time (for DNS propagation).

**Always have backups!**
