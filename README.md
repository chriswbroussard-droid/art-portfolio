# Chris Broussard Art Portfolio

A professional portfolio website for Chris Broussard, an acrylic pour artist based in Austin, TX.

## Features

- **Landing Page**: Showcases 9 art pieces with a prominent statement piece and 8 additional works
- **Full Series Page**: Displays all 50 art pieces in the collection
- **Admin Panel**: Secure login-protected area for uploading and managing artwork
- **Easy Upload**: Simple interface to upload art with dimensions and descriptions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Setup

This is a static website that can be hosted on GitHub Pages or any web hosting service.

1. Clone the repository
2. Open `index.html` in a web browser
3. Navigate to the Admin page to upload artwork

## Admin Access

- **Username**: admin
- **Password**: admin123

Access the admin panel at `admin.html` to:
- Upload new artwork with images and dimensions
- Manage existing pieces
- Assign artwork to specific slots (0-49)

## Structure

- **Slot 0**: Statement piece (larger display on landing page)
- **Slots 1-8**: Additional pieces on landing page
- **Slots 0-49**: All pieces visible on the series page

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- JavaScript (ES6+)
- Local Storage (for data persistence)

## Deployment

To deploy on GitHub Pages:
1. Push your changes to the main branch
2. Go to repository Settings > Pages
3. Select main branch as source
4. Your site will be published at `https://[username].github.io/art-portfolio/`
