# 🚀 Deployment Guide

## Quick Start - GitHub Pages Deployment

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select your branch (e.g., `main` or the PR branch)
5. Click **Save**

### Step 2: Wait for Deployment
- GitHub will automatically build and deploy your site
- This usually takes 1-2 minutes
- You'll see a green checkmark when it's ready

### Step 3: Access Your Site
Your site will be available at:
```
https://[username].github.io/art-portfolio/
```

For example: `https://chriswbroussard-droid.github.io/art-portfolio/`

## 🎨 Customization Checklist

### Before Going Live:
- [ ] Replace placeholder images in `images/` with your actual artwork
- [ ] Update artist bio in the About section
- [ ] Add your contact information (email, social media links)
- [ ] Customize color scheme in CSS variables
- [ ] Update artwork titles and descriptions
- [ ] Replace artist photo placeholder
- [ ] Update page title and meta descriptions
- [ ] Test on multiple devices and browsers

### Image Specifications:
- **Gallery Images**: 800x600px (or 4:3 aspect ratio)
- **Artist Photo**: 400x400px (square)
- **Favicon**: 64x64px
- **Formats**: JPG for photos, PNG for graphics, SVG for logos

## 🔧 Local Testing

Test your site locally before deploying:

```bash
# Using Python (Python 3)
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

Then visit: `http://localhost:8080`

## 📱 Browser Compatibility

The website is compatible with:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Maintenance

### Adding New Artwork:
1. Add image to `images/` directory
2. Edit `index.html` gallery section
3. Copy an existing gallery item and update:
   - Image source
   - Alt text
   - Title
   - Medium description

### Updating Colors:
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Dark blue */
    --secondary-color: #3498db;  /* Light blue */
    --accent-color: #e74c3c;     /* Red for buttons */
    /* ... */
}
```

### Performance Tips:
- Compress images before uploading (use tools like TinyPNG)
- Use WebP format for modern browsers
- Keep image file sizes under 500KB
- Use lazy loading (already implemented)

## 🔒 Security

- ✅ No backend required (static site)
- ✅ HTTPS enabled by default on GitHub Pages
- ✅ No sensitive data stored
- ✅ CodeQL security scan passed

## 📞 Support

For issues or questions:
1. Check the main README.md
2. Review the inline code comments
3. Test locally before deploying
4. Check GitHub Pages status page

---

**Ready to deploy? Follow Step 1 above to get started!** 🎉
