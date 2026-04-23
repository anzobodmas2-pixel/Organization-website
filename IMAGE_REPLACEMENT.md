# TRGD Website - Image Replacement Quick Start

## 📋 Simple 3-Step Process

### Step 1: Prepare Your Images
Organize these images before replacement:

```
Profile.jpeg          (1920 x 1280px) - Hero background
img1.jpeg             (800 x 600px)   - Vision section  
img2.jpeg             (800 x 600px)   - About section
Blog2.jpg             (1920 x 1080px) - Blog background
joyce.jpeg            (400 x 400px)   - Dr. Joyce photo
Esther.jpeg           (400 x 400px)   - Esther Toloa photo (NEW)
richard.jpeg          (400 x 400px)   - Richard photo
```

**Optimization Tip:** Use TinyPNG.com or Squoosh.app to compress images before uploading

---

### Step 2: Replace Files

#### Option A: Simple Replacement (Keep Same Names)
```
1. Go to: c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE\

2. Delete:
   - Profile.jpeg
   - img1.jpeg
   - img2.jpeg
   - Blog2.jpg
   - joyce.jpeg
   - Lucy.jpeg (to be replaced)
   - richard.jpeg

3. Copy your new images into this folder
   - Keep the EXACT same filenames

4. Restart the server:
   npm start
```

#### Option B: Recommended - Update Team Photo Names
```
1. Go to: c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE\

2. Replace these files with new images:
   - Profile.jpeg       → new hero background
   - img1.jpeg          → new vision image
   - img2.jpeg          → new about image
   - Blog2.jpg          → new blog background
   - joyce.jpeg         → new Joyce photo
   - Esther.jpeg        → new Esther Toloa photo (RENAMED)
   - richard.jpeg       → new Richard photo

3. Update script.js line 99:
   FROM: photo: 'Lucy.jpeg'
   TO:   photo: 'Esther.jpeg'

4. Restart the server:
   npm start
```

---

### Step 3: Verify Changes

1. **Clear Browser Cache:**
   - Chrome: Ctrl + Shift + Delete
   - Firefox: Ctrl + Shift + Delete
   - Safari: Cmd + Shift + Delete

2. **Test at:** http://localhost:3000

3. **Check each section:**
   - [ ] Hero section background
   - [ ] About section (left image)
   - [ ] Vision section (right image)
   - [ ] Blog section background
   - [ ] Team member photos
   - [ ] Contact section background

4. **Mobile Testing:**
   - Open DevTools (F12)
   - Toggle device toolbar (Ctrl + Shift + M)
   - Test at mobile sizes

---

## 📁 File Locations Reference

### Website Root Directory:
```
c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE\
├── Index.html
├── script.js
├── styles.css
├── server.js
├── package.json
├── Profile.jpeg          ← Hero/Contact background
├── img1.jpeg             ← Vision section
├── img2.jpeg             ← About section
├── Blog2.jpg             ← Blog section background
├── joyce.jpeg            ← Team member
├── Lucy.jpeg             ← Team member (to be renamed to Esther.jpeg)
└── richard.jpeg          ← Team member
```

---

## 🎯 Specific Image Guidelines

### Background Images (Must Optimize for Web)

**Hero Background (Profile.jpeg)**
- Size: 1920 x 1280px
- Format: JPEG
- Compressed: Under 500KB
- Usage: Hero section + Contact section
- Tip: Use a vibrant, inspiring photo of team or community

**Blog Background (Blog2.jpg)**
- Size: 1920 x 1080px  
- Format: JPEG
- Compressed: Under 500KB
- Tip: Use professional research/publication themed photo

### Section Images (High Quality Required)

**About Section (img2.jpeg)**
- Size: 800 x 600px
- Theme: Governance, justice, accountability
- Examples: Legal documents, community meetings, policy discussions

**Vision Section (img1.jpeg)**
- Size: 800 x 600px
- Theme: Community, sustainability, hope
- Examples: Community gathering, environmental work, smiling faces

### Team Photos (Consistent Style)

**All Team Members**
- Size: 400 x 400px (EXACTLY SQUARE)
- Format: JPEG or PNG
- Style: Professional headshots with consistent lighting
- Tip: All team photos should have similar background/style

---

## ⚡ Common Issues & Solutions

### Issue: Old images still showing after replacement
**Solution:**
1. Restart the server: `npm start`
2. Clear browser cache (Ctrl + Shift + Delete)
3. Hard refresh (Ctrl + F5)

### Issue: Images look blurry or pixelated
**Solution:**
1. Ensure image is at least 1.5x the display size
2. Use high-quality source images (minimum 72 DPI)
3. Try different image format (PNG instead of JPEG)

### Issue: Page loads slowly
**Solution:**
1. Compress images more aggressively
2. Check file size is under limits in this guide
3. Consider using WebP format (better compression)

### Issue: Image doesn't fit the space properly
**Solution:**
1. Verify correct dimensions used
2. Ensure aspect ratio matches (e.g., 16:9 for backgrounds)
3. Check `object-fit: cover` CSS is preserving image quality

---

## 📞 Need Help?

1. **Quick Reference:** See IMAGE_GUIDE.md for detailed info
2. **File Check:** See IMAGE_INVENTORY.md for current status
3. **Code Updates:** If changing filenames, check these files:
   - Index.html (lines 17, 55, 65)
   - script.js (lines 93, 99, 105)
   - styles.css (lines 265, 318, 1331)

---

## ✅ Replacement Checklist

- [ ] Gathered all replacement images
- [ ] Optimized images (file size under limits)
- [ ] Backed up original images (safety copy)
- [ ] Deleted old placeholder images
- [ ] Copied new images to website folder
- [ ] Updated script.js line 99 (Lucy.jpeg → Esther.jpeg)
- [ ] Restarted server (npm start)
- [ ] Cleared browser cache
- [ ] Tested website at http://localhost:3000
- [ ] Verified all images load correctly
- [ ] Tested on mobile device
- [ ] Ready for production deployment

---

**Last Updated:** April 23, 2026
**Folder:** TRGD WEBSITE
