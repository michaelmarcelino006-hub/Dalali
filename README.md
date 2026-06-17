# Dalali - House Selection Website

A modern, responsive real estate property filtering and display website built with HTML, CSS, and JavaScript.

## Features

✨ **Interactive Filtering**
- Filter by price range
- Filter by number of bedrooms and bathrooms
- Filter by property type (House, Apartment, Condo, Townhouse)
- Filter by location/area
- Reset filters button

🎨 **Modern Design**
- Responsive grid layout
- Beautiful gradient backgrounds
- Smooth hover animations
- Mobile-friendly interface

🏠 **Property Display**
- Property cards with images (emoji placeholders)
- Property details (price, bedrooms, bathrooms)
- Location information
- Description and "Contact Agent" button
- Live result counter

## File Structure

```
Dalali/
├── index.html      # Main HTML file
├── styles.css      # Styling and layout
├── script.js       # Filter logic and interactivity
├── data.js         # Property data
└── README.md       # This file
```

## How to Use

### Local Testing

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/michaelmarcelino006-hub/Dalali.git
   cd Dalali
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended)

### Using a Local Server (Recommended)

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js (with http-server)**
```bash
npm install -g http-server
http-server
```

**Option 3: Live Server (VS Code Extension)**
- Install the "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` in your browser.

## Adding Your Properties

### Edit `data.js`

Update the `properties` array with your actual properties:

```javascript
const properties = [
    {
        id: 1,
        title: "Your Property Title",
        location: "Address/Area",
        price: 250000,
        bedrooms: 2,
        bathrooms: 2,
        type: "apartment",  // house, apartment, condo, townhouse
        area: "downtown",   // downtown, suburbs, waterfront, rural
        description: "Property description here",
        image: "🏠"  // Use emoji or update CSS for image URLs
    },
    // Add more properties...
];
```

## Making It Live

### Option 1: GitHub Pages (FREE)

1. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select "main" branch as source
   - Click Save
   - Your site will be at: `https://michaelmarcelino006-hub.github.io/Dalali`

2. **Update your domain (optional)**
   - Add custom domain in Pages settings
   - Configure your domain DNS settings

### Option 2: Netlify (FREE with custom domains)

1. **Connect your GitHub repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "Connect to Git"
   - Select your repository
   - Choose `main` branch
   - Set build command: Leave empty
   - Set publish directory: `.` (root)

2. **Deploy**
   - Click "Deploy"
   - Your site will be live at a Netlify URL
   - Add custom domain in settings

### Option 3: Vercel (FREE)

1. **Visit [vercel.com](https://vercel.com)**
   - Click "Import Project"
   - Select your GitHub repository
   - Click Import
   - It automatically deploys!

### Option 4: Traditional Web Hosting

1. **Upload files to your hosting provider** via FTP/SFTP:
   - index.html
   - styles.css
   - script.js
   - data.js

2. **Configure domain**
   - Point your domain DNS to the hosting provider
   - Upload files to public_html folder

## Customization

### Update Colors
Edit `styles.css` and change the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Real Images
Replace emoji placeholders in property cards:
```javascript
// In data.js, change from emoji to image URL
image: "https://your-image-url.jpg"

// Update property-image class in script.js to display image
```

### Add Contact Form
Replace the `alert()` in `script.js` with a real contact form integration.

## Deployment Checklist

- [ ] Update `data.js` with your property listings
- [ ] Customize colors and branding in `styles.css`
- [ ] Test all filters locally
- [ ] Test on mobile devices
- [ ] Add real images for properties
- [ ] Set up email notifications for "Contact Agent" button
- [ ] Deploy to GitHub Pages, Netlify, or Vercel
- [ ] Test live website
- [ ] Configure custom domain

## Support

For issues or questions, check the repository or create an issue on GitHub.

## License

Free to use for personal or commercial projects.
