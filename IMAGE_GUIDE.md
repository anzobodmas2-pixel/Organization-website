# TRGD Website - Image Asset Management Guide

## Current Image Inventory & Requirements

### Priority 1: Essential Images (Currently Using Placeholders)

#### 1. **Hero Section Background** (`Profile.jpeg`)
**Current Usage:** Hero banner & Contact form section
**Recommended Image:**
- High-quality photo of TRGD team/community in action
- Dimensions: 1920 x 1280px minimum (16:9 aspect ratio)
- File size: Under 500KB (optimized for web)
- Content: Professional group photo or community work scene

**Replacement Steps:**
1. Replace `Profile.jpeg` with your organization photo
2. Name it `Profile.jpeg` or update references in:
   - `styles.css` (lines 265, 1331)
   - Keep the same filename for consistency

---

#### 2. **About Section - Justice Image** (`img2.jpeg`)
**Current Usage:** "About Us" section with governance theme
**Recommended Image:**
- Photo representing justice/governance/accountability
- Dimensions: 800 x 600px (4:3 aspect ratio)
- Shows books, scale of justice, legal documents, or governance meeting
- File size: Under 150KB

**Replacement Steps:**
1. Replace `img2.jpeg` with your image
2. Update alt text in Index.html line 55 if needed

---

#### 3. **Vision Section - Community Image** (`img1.jpeg`)
**Current Usage:** "Our Vision" section
**Recommended Image:**
- Photo of community gathering or sustainable development
- Dimensions: 800 x 600px (4:3 aspect ratio)
- Shows community celebration, environmental work, or livelihood activity
- File size: Under 150KB

**Replacement Steps:**
1. Replace `img1.jpeg` with your image
2. Update alt text in Index.html line 65 if needed

---

#### 4. **Blog Section Background** (`Blog2.jpg`)
**Current Usage:** Blog/Features section banner
**Recommended Image:**
- Professional photo of blog/knowledge sharing theme
- Dimensions: 1920 x 1080px minimum (16:9 aspect ratio)
- File size: Under 500KB (optimized)
- Content: Research, writing, publications, or reporting

**Replacement Steps:**
1. Replace `Blog2.jpg` with your image
2. Referenced in `styles.css` line 318

---

### Priority 2: Team Member Photos

#### Board Chair - Dr. Joyce Moriku Kaducu (`joyce.jpeg`)
**Current Usage:** Team section - Board of Directors
**Requirements:**
- Dimensions: 400 x 400px (square)
- Professional headshot/portrait
- File size: Under 100KB
- Note: Filename is `joyce.jpeg` (note lowercase 'j')

#### Director of Programs - Esther Toloa (`Lucy.jpeg`)
**Current Usage:** Team section - Board of Directors
**Requirements:**
- Dimensions: 400 x 400px (square)
- Professional headshot/portrait
- File size: Under 100KB
- Note: File currently named `Lucy.jpeg` - consider renaming to `Esther.jpeg` for clarity

**Recommended Action:**
```
1. Rename Lucy.jpeg → Esther.jpeg
2. Update script.js line 99: photo: 'Esther.jpeg'
3. Or keep current name and just replace the image
```

#### Executive Director - Richard Vonze Chancellor (`richard.jpeg`)
**Current Usage:** Team section - Board of Directors
**Requirements:**
- Dimensions: 400 x 400px (square)
- Professional headshot/portrait
- File size: Under 100KB
- Note: Filename should be lowercase `richard.jpeg`

---

### Priority 3: Organization Logo

#### TRGD Logo (`trgd logo.jpg`)
**Current Usage:** Header/navigation brand
**Requirements:**
- Dimensions: 200 x 200px minimum
- Format: JPG or PNG (PNG with transparency recommended)
- File size: Under 50KB
- Content: TRGD organization logo

---

## Image Optimization Guidelines

### Before Uploading:

1. **Resize Images** to exact dimensions specified above
2. **Optimize File Size** (use tools like):
   - TinyPNG.com
   - ImageOptim (Mac)
   - FileOptimizer (Windows)
   - Squoosh.app

3. **Ensure Quality**:
   - Min 72 DPI for web
   - RGB color mode (not CMYK)
   - No watermarks unless intentional

### File Format Recommendations:
- **JPEG**: Photos and complex images (smaller file size)
- **PNG**: Logo and images with transparency (higher quality)
- **WebP**: Modern format (best compression) - if server supports

---

## How to Replace Images

### Method 1: Direct File Replacement (Easiest)
```
1. Find the image file in: 
   c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE\

2. Delete the old image file

3. Place new image with SAME FILENAME
   (No code changes needed)

4. Restart server to see changes
```

### Method 2: Update Filename in Code (If changing filename)
```
1. Rename your new image to match expected filename

2. If keeping old name, NO code changes needed

3. If using different filename, update:
   - Index.html (for img1.jpeg, img2.jpeg)
   - script.js (for photo filenames on line 93, 99, 105)
   - styles.css (for Profile.jpeg, Blog2.jpg on lines 265, 318, 1331)
```

---

## Complete Image Checklist

### Images to Replace:

- [ ] `Profile.jpeg` - Hero/Contact background
- [ ] `img1.jpeg` - Vision section community image
- [ ] `img2.jpeg` - About section justice image
- [ ] `Blog2.jpg` - Blog section background
- [ ] `joyce.jpeg` - Dr. Joyce Moriku Kaducu headshot
- [ ] `Lucy.jpeg` - Esther Toloa headshot (consider renaming to Esther.jpeg)
- [ ] `richard.jpeg` - Richard Vonze Chancellor headshot
- [ ] `trgd logo.jpg` - Organization logo (optional - if updating brand)

### Optional Images (Enhance sections):

- [ ] `Blog1.jpeg` - Additional blog section image
- [ ] `Contact1.jpg` - Additional contact section image
- [ ] `Features1.jpeg` - Additional features section image

---

## File Location Reference

All image files should be placed in:
```
c:\Users\BODMAS TECHSOLUTION\Desktop\PROJECTS 2026\TRGD WEBISTE\
```

Same directory as `Index.html`, `server.js`, `styles.css`, and `script.js`

---

## Code References for Each Image

If you need to change filenames, here are all the locations:

### Index.html:
- Line 17: `trgd logo.jpg` (Header logo)
- Line 55: `img2.jpeg` (About section)
- Line 65: `img1.jpeg` (Vision section)

### script.js:
- Line 93: `'Joyce.jpeg'` (Team member photo)
- Line 99: `'Lucy.jpeg'` (Team member photo)
- Line 105: `'Richard.jpeg'` (Team member photo)

### styles.css:
- Line 265: `url('Profile.jpeg')` (Hero background)
- Line 318: `url('Blog2.jpg')` (Blog section background)
- Line 1331: `url('Profile.jpeg')` (Contact section background)

---

## Quick Start

1. **Gather your images** with proper dimensions
2. **Optimize file sizes** using an online tool
3. **Replace files** in the website directory
4. **Restart server** with `npm start`
5. **Test website** at `http://localhost:3000`
6. **Clear browser cache** if old images still showing (Ctrl+Shift+Delete)

---

## Pro Tips

✓ **Use consistent photography style** across all images  
✓ **Ensure images are recent** (within last 2 years)  
✓ **Include diverse representation** in team photos  
✓ **Use action shots** in section backgrounds  
✓ **Keep file sizes small** for faster page load  
✓ **Test on mobile** to ensure images display correctly  
✓ **Backup old images** before replacing (just in case)  

---

## Support

For image editing help, consider:
- Canva.com - Design & resizing
- Adobe Photoshop - Professional editing
- GIMP - Free alternative to Photoshop
- Pixlr - Online photo editor
- TinyPNG - Compression
