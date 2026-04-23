# TRGD Website - Image Replacement Checklist

**Project:** Replace Placeholder Images with Organization Photos  
**Date Started:** _____________  
**Date Completed:** _____________  

---

## 📋 PRE-REPLACEMENT CHECKLIST

### Preparation Phase

- [ ] Read IMAGE_REPLACEMENT.md for quick start
- [ ] Created/gathered all 7 replacement images
- [ ] Verified image quality is professional
- [ ] Backed up original images (save copies)
- [ ] Have TinyPNG.com or Squoosh.app open
- [ ] Know website folder location: 
   ```
   c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE\
   ```

### Image Verification

- [ ] Profile.jpeg - 1920 x 1280px, under 500KB
- [ ] Blog2.jpg - 1920 x 1080px, under 500KB
- [ ] img2.jpeg - 800 x 600px, under 150KB
- [ ] img1.jpeg - 800 x 600px, under 150KB
- [ ] joyce.jpeg - 400 x 400px, under 100KB
- [ ] Lucy.jpeg or Esther.jpeg - 400 x 400px, under 100KB
- [ ] richard.jpeg - 400 x 400px, under 100KB

### File Format Check

- [ ] Background images are JPEG (high quality)
- [ ] All images are RGB color mode (not CMYK)
- [ ] No watermarks on images
- [ ] All files properly named with extensions
- [ ] Backups saved in safe location

---

## 🔄 REPLACEMENT PHASE

### Step 1: Prepare Website Folder

- [ ] Navigate to: c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE\
- [ ] Locate current images:
   - [ ] Profile.jpeg
   - [ ] Blog2.jpg
   - [ ] img2.jpeg
   - [ ] img1.jpeg
   - [ ] joyce.jpeg
   - [ ] Lucy.jpeg
   - [ ] richard.jpeg
- [ ] Created backup folder with originals

### Step 2: Delete Old Images

- [ ] Deleted Profile.jpeg
- [ ] Deleted Blog2.jpg
- [ ] Deleted img2.jpeg
- [ ] Deleted img1.jpeg
- [ ] Deleted joyce.jpeg
- [ ] Deleted Lucy.jpeg (if renaming)
- [ ] Deleted richard.jpeg

### Step 3: Copy New Images

- [ ] Copied new Profile.jpeg to folder
- [ ] Copied new Blog2.jpg to folder
- [ ] Copied new img2.jpeg to folder
- [ ] Copied new img1.jpeg to folder
- [ ] Copied new joyce.jpeg to folder
- [ ] Copied new Esther.jpeg to folder (if renamed)
- [ ] Copied new richard.jpeg to folder
- [ ] Verified all files in correct location

### Step 4: Code Updates (If Renamed)

Only if renaming Lucy.jpeg → Esther.jpeg:

- [ ] Opened script.js in VS Code
- [ ] Located line 99
- [ ] Changed: `photo: 'Lucy.jpeg'` 
- [ ] To: `photo: 'Esther.jpeg'`
- [ ] Saved script.js (Ctrl+S)

**If not renaming:** Skip this step

### Step 5: Restart Server

- [ ] Opened terminal/command prompt
- [ ] Navigated to website folder
- [ ] Ran: `npm start`
- [ ] Saw: "Server is running on http://localhost:3000"
- [ ] Server started successfully

---

## ✅ TESTING & VERIFICATION PHASE

### Browser Cache Clearing

- [ ] Pressed Ctrl+Shift+Delete (Windows)
  - OR Cmd+Shift+Delete (Mac)
  - OR Command+Shift+Delete (Mac)
- [ ] Selected "All time" for time range
- [ ] Checked: Cookies, cached images, files
- [ ] Clicked "Clear data"
- [ ] Closed browser completely

### Desktop Testing

- [ ] Opened browser
- [ ] Navigated to: http://localhost:3000
- [ ] **Hero Section:**
  - [ ] Profile.jpeg displays in background
  - [ ] Image loads completely
  - [ ] Text overlay is readable
  - [ ] No broken image placeholder

- [ ] **About Section:**
  - [ ] img2.jpeg displays (left side)
  - [ ] Image appears sharp and clear
  - [ ] Proper dimensions maintained

- [ ] **Vision Section:**
  - [ ] img1.jpeg displays (right side)
  - [ ] Image quality is good
  - [ ] Section aligns properly

- [ ] **Blog Section:**
  - [ ] Blog2.jpg background visible
  - [ ] Blog cards overlay properly
  - [ ] Text is readable

- [ ] **Team Section:**
  - [ ] joyce.jpeg displays
  - [ ] Esther.jpeg (or Lucy.jpeg) displays
  - [ ] richard.jpeg displays
  - [ ] All photos aligned properly
  - [ ] All member names visible

- [ ] **Contact Section:**
  - [ ] Profile.jpeg visible (same as hero)
  - [ ] Form overlays correctly

- [ ] **Footer:**
  - [ ] Sky blue background displays
  - [ ] Social links visible

### Mobile Testing

- [ ] Opened DevTools (F12)
- [ ] Toggled device toolbar (Ctrl+Shift+M)
- [ ] Tested at iPhone 12 (390px width)
- [ ] Tested at iPad (768px width)
- [ ] Tested at Pixel 7 (412px width)

- [ ] **Mobile Checks:**
  - [ ] All images resize properly
  - [ ] No overlapping content
  - [ ] Images load on mobile
  - [ ] Text readable on mobile
  - [ ] Touch-friendly sizing

### Performance Check

- [ ] Page loads in under 3 seconds
- [ ] No "pending resource" warnings
- [ ] File sizes within limits
- [ ] No console errors (F12 → Console)
- [ ] No network errors in DevTools

### Visual Quality Check

- [ ] Images look professional
- [ ] Colors consistent with sky blue/lemon green theme
- [ ] No pixelation or blurriness
- [ ] Proper aspect ratios maintained
- [ ] Overall branding cohesive

---

## 🐛 TROUBLESHOOTING

If you encounter issues, check these:

### Old Images Still Showing

- [ ] Restarted server (npm start)
- [ ] Cleared browser cache (Ctrl+Shift+Delete)
- [ ] Hard refresh page (Ctrl+F5)
- [ ] Closed browser completely
- [ ] Verified files in correct folder
- [ ] Verified filenames exactly match

### Images Not Loading at All

- [ ] Checked browser console for errors (F12)
- [ ] Verified image files exist in folder
- [ ] Verified filenames are EXACT (case-sensitive)
- [ ] Checked file extensions (.jpeg not .jpg for some)
- [ ] Ensured server is running (`npm start`)

### Images Look Blurry

- [ ] Verified original image quality (72+ DPI)
- [ ] Verified correct dimensions used
- [ ] Checked if image needs better compression
- [ ] Tried different image format (PNG instead of JPEG)

### Page Loads Slowly

- [ ] Compressed images more (TinyPNG.com)
- [ ] Verified file sizes under limits
- [ ] Check if browser cache needs clearing
- [ ] Monitor Network tab in DevTools (F12)

### Team Photo Names Don't Match

- [ ] Verified Lucy.jpeg was renamed to Esther.jpeg
- [ ] Verified script.js line 99 was updated
- [ ] Restarted server after code changes
- [ ] Cleared browser cache again

---

## 📸 FINAL VERIFICATION

### Visual Confirmation

- [ ] All 7 images replaced successfully
- [ ] Website looks professional
- [ ] Brand colors (sky blue/lemon green) maintained
- [ ] Team member photos consistent in quality
- [ ] No placeholder images remaining

### Functionality Check

- [ ] All links working properly
- [ ] Forms functional (contact form)
- [ ] Navigation responsive
- [ ] Mobile menu works
- [ ] Scroll behavior smooth

### Cross-Browser Testing

- [ ] ✓ Chrome browser works
- [ ] ✓ Firefox browser works
- [ ] ✓ Safari browser works (if Mac user)
- [ ] ✓ Edge browser works (if Windows user)

---

## 🚀 DEPLOYMENT READY

### Production Checklist

- [ ] All images replaced and tested
- [ ] No broken image links
- [ ] Page performance optimized
- [ ] Mobile responsiveness verified
- [ ] Code changes documented
- [ ] Backups of original images saved

### Before Going Live

- [ ] Team approved new images
- [ ] Copyright/rights verified for all images
- [ ] Backup current production files
- [ ] Plan deployment timing
- [ ] Have rollback plan if needed

### Post-Deployment

- [ ] Verified live website displays new images
- [ ] Google Cache updated (can take time)
- [ ] Social media preview images updated
- [ ] Monitor for user feedback
- [ ] Check analytics for performance

---

## 📝 NOTES & OBSERVATIONS

**Issues Encountered:**
```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

**Solutions Applied:**
```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

**Team Feedback:**
```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

**Additional Changes Made:**
```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

---

## 🎉 PROJECT COMPLETION

**Completion Date:** _____________  

**Completed By:** _____________  

**Time Taken:** _____________  

**Overall Status:** 
- [ ] Successfully Completed
- [ ] Completed with Minor Issues
- [ ] Needs Adjustment

**Sign-Off:**

_________________________________  Signature

_________________________________  Date

---

## 📞 SUPPORT CONTACTS

**Primary Guide:** IMAGE_REPLACEMENT.md  
**Reference:** IMAGE_GUIDE.md  
**Visual Map:** IMAGE_PLACEMENT_MAP.md  
**Project Summary:** IMAGE_PROJECT_SUMMARY.md  

---

**Checklist Created:** April 23, 2026  
**For:** TRGD Website Image Replacement Project  

**Tip:** Print this checklist and check off items as you complete them!
