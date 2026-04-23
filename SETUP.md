# TRGD Website - Setup & Configuration Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email (SMTP)

#### Option A: Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password

3. **Update `.env` file**:
   ```
   SMTP_SERVICE=gmail
   SMTP_USER=trgd2021@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   SMTP_FROM=noreply@trgd.org
   ORG_EMAIL=trgd2021@gmail.com
   ```

#### Option B: SendGrid

1. **Create SendGrid Account**: [sendgrid.com](https://sendgrid.com)

2. **Generate API Key** in Settings → API Keys

3. **Update `.env` file**:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASS=SG.your_api_key_here
   SMTP_FROM=noreply@trgd.org
   ORG_EMAIL=trgd2021@gmail.com
   ```

#### Option C: Custom SMTP Server

1. **Get SMTP credentials** from your email provider

2. **Update `.env` file**:
   ```
   SMTP_HOST=mail.yourdomain.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_email@yourdomain.com
   SMTP_PASS=your_password
   SMTP_FROM=noreply@yourdomain.com
   ORG_EMAIL=trgd2021@gmail.com
   ```

### 3. Start the Server
```bash
npm start
```
Server runs on `http://localhost:3000`

### 4. Test Email Functionality

1. Navigate to the Contact form at `http://localhost:3000/#contacts`
2. Fill out and submit the form
3. Check `trgd2021@gmail.com` for the notification email
4. Check server console for any error messages

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 3000) |
| `SMTP_SERVICE` | Email service provider (gmail, outlook, etc.) | Conditional |
| `SMTP_HOST` | SMTP server address | Conditional |
| `SMTP_PORT` | SMTP server port | No (default: 587) |
| `SMTP_SECURE` | Use TLS encryption (true/false) | No (default: false) |
| `SMTP_USER` | Email account username | Yes |
| `SMTP_PASS` | Email account password or app password | Yes |
| `SMTP_FROM` | Sender email address | No (default: noreply@trgd.org) |
| `ORG_EMAIL` | Organization email to receive messages | No (default: trgd2021@gmail.com) |

## Troubleshooting

### "Email transporter not configured" Message
- Check that `.env` file exists in project root
- Verify SMTP credentials are correct
- Restart the server after changing `.env`

### Gmail "Less secure app access" Error
- Use **App Passwords** instead of main Gmail password
- Never use "Allow less secure apps" setting (deprecated)

### "Connection timeout" Error
- Verify SMTP host and port are correct
- Check firewall/network isn't blocking SMTP port
- Some providers require specific port (e.g., 465 for SSL)

### Emails Not Sending but No Error
- Check spam/junk folder in email account
- Verify `ORG_EMAIL` is configured correctly
- Check server logs for warning messages

## Security Best Practices

✅ **DO:**
- Use App Passwords (not main passwords)
- Keep `.env` file excluded from version control (`.gitignore`)
- Rotate credentials periodically
- Use environment variables in production

❌ **DON'T:**
- Commit `.env` files to Git
- Use simple passwords for email accounts
- Share credentials via email or chat
- Hardcode credentials in source files

## Production Deployment

For production environments:

1. **Set environment variables** through your hosting provider's dashboard (Heroku, Netlify, etc.)
2. **Never upload `.env` files** to production servers
3. **Use managed email services** (SendGrid, AWS SES) for reliability
4. **Monitor email delivery** logs for failures
5. **Set up alerts** for email sending errors

## Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords Setup](https://support.google.com/accounts/answer/185833)
- [SendGrid SMTP Configuration](https://sendgrid.com/docs/for-developers/sending-email/smtp-service/)
