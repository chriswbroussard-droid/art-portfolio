# Deployment Guide

## GitHub Pages Deployment

This portfolio website is ready to be deployed on GitHub Pages. Follow these steps:

1. **Push to Main Branch**
   ```bash
   git checkout main
   git merge copilot/add-admin-tab-for-art-upload
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at: `https://chriswbroussard-droid.github.io/art-portfolio/`

3. **Access Your Site**
   - Home: `https://chriswbroussard-droid.github.io/art-portfolio/`
   - Series: `https://chriswbroussard-droid.github.io/art-portfolio/series.html`
   - Admin: `https://chriswbroussard-droid.github.io/art-portfolio/admin.html`

## Using the Admin Panel

1. Navigate to the admin page
2. Login with credentials:
   - Username: `admin`
   - Password: `admin123`
3. Upload artwork:
   - Select an image file (JPG, PNG, etc.)
   - Enter the artwork title
   - Enter dimensions in inches (width and height)
   - Select slot position (0-49)
     - Slot 0: Statement piece on landing page
     - Slots 1-8: Additional pieces on landing page
     - Slots 0-49: All visible on series page
   - Add optional description
   - Click "Upload Art"

## Data Storage

- All artwork data is stored in your browser's localStorage
- Data persists across sessions
- Clearing browser data will remove uploaded artwork
- Each browser/device has its own separate storage

## Customization Tips

### Change Colors
Edit `styles.css` - look for the gradient colors:
- `#667eea` and `#764ba2` are the main purple/blue gradient

### Change Admin Credentials
Edit `admin.js` - update the ADMIN_CREDENTIALS object:
```javascript
const ADMIN_CREDENTIALS = {
    username: 'your-username',
    password: 'your-password'
};
```

### Adjust Layout
- Landing page grid: Edit `.landing-page .gallery` in `styles.css`
- Series page grid: Edit `.series-gallery` in `styles.css`
- Mobile breakpoints: Check the `@media` queries at the bottom of `styles.css`

## Browser Support

This site works on:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Troubleshooting

**Problem**: Images not loading after upload
- **Solution**: Check browser console for errors, ensure image file size is reasonable (<5MB recommended)

**Problem**: Can't login to admin
- **Solution**: Verify credentials, check browser console for JavaScript errors

**Problem**: Data disappeared
- **Solution**: Data is stored in localStorage - clearing browser data removes it. Consider exporting important data.

## Future Enhancements

Consider these additions:
- Export/import functionality for artwork data
- Image optimization before storage
- Backend integration for persistent storage across devices
- User account system
- Shopping cart for selling artwork
- Contact form
- Image gallery lightbox/modal view
