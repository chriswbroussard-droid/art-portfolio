# art-portfolio
artist portfolio for github pages

## 🎨 Overview

This is a responsive artist portfolio website designed for GitHub Pages hosting. It features a modern, clean design that showcases artwork in an elegant gallery format.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Gallery Section**: Grid-based gallery with placeholder images for artwork
- **About Section**: Artist bio and skills showcase
- **Contact Form**: Interactive contact form for inquiries
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling
- **SEO Optimized**: Proper meta tags for search engine optimization
- **Modern UI**: Clean, professional design with CSS variables for easy customization

## 📁 Project Structure

```
art-portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # JavaScript for interactivity
├── favicon.svg         # Website favicon
├── images/             # Directory for artwork images
│   ├── README.md       # Guide for adding images
│   ├── placeholder*.svg # Placeholder gallery images
│   └── artist-photo.svg # Artist profile photo placeholder
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser, or
3. Use a local server:
   ```bash
   python3 -m http.server 8080
   ```
   Then visit `http://localhost:8080`

### Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Under "Source", select the branch (usually `main` or `master`)
4. Save and wait a few minutes
5. Your site will be available at `https://[username].github.io/[repository-name]`

## 🎨 Customization

### Replace Placeholder Images

1. Add your artwork images to the `images/` directory
2. Update the image references in `index.html`
3. Recommended sizes:
   - Gallery images: 800x600px
   - Artist photo: 400x400px

### Customize Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

### Update Content

- Edit text in `index.html` to reflect your information
- Update the artist bio, artwork titles, and contact information
- Modify the skills list to match your expertise

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript (ES6+)
- SVG for placeholder images

## 📱 Responsive Breakpoints

- Desktop: 769px and above
- Tablet: 481px - 768px
- Mobile: 480px and below

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your needs!

