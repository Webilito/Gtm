# Webilito - Web Development Business Landing Page

A professional and engaging landing page for Webilito, a web development business offering various web development services with three pricing tiers.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Interactive sections including services, portfolio, pricing, and testimonials
- Contact form for client inquiries
- Animated WhatsApp button for direct contact
- Newsletter subscription form
- Mobile-friendly navigation

## File Structure

```
webilito/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── images/             # Directory for all images
    ├── hero-image.svg
    ├── about-image.svg
    ├── portfolio-1.jpg
    ├── portfolio-2.jpg
    ├── portfolio-3.jpg
    ├── portfolio-4.jpg
    ├── portfolio-5.jpg
    ├── portfolio-6.jpg
    ├── testimonial-1.jpg
    ├── testimonial-2.jpg
    └── testimonial-3.jpg
```

## Setup Instructions

1. Download all the files and maintain the directory structure.
2. Add your own images to the `images` folder. You'll need:
   - Hero section image (hero-image.svg)
   - About section image (about-image.svg)
   - 6 portfolio project images (portfolio-1.jpg through portfolio-6.jpg)
   - 3 testimonial client images (testimonial-1.jpg through testimonial-3.jpg)
3. Open `index.html` in a web browser to view the landing page.

## Customization

### Changing Content

1. Open `index.html` in a text editor to modify:
   - Business information
   - Service descriptions
   - Portfolio projects
   - Pricing details
   - Testimonials
   - Contact information

### Changing Colors

1. Open `styles.css` and modify the root variables at the top:
   ```css
   :root {
       --primary-color: #4361ee;
       --secondary-color: #3a0ca3;
       --accent-color: #4cc9f0;
       --dark-color: #2b2d42;
       --light-color: #f8f9fa;
       /* other variables */
   }
   ```

### WhatsApp Button

The WhatsApp button is configured to link to the number 919876543210. To change this:

1. Open `index.html`
2. Find the WhatsApp button section:
   ```html
   <a href="https://wa.me/919876543210" class="whatsapp-btn" target="_blank">
       <i class="fab fa-whatsapp"></i>
   </a>
   ```
3. Replace `919876543210` with your WhatsApp number (include country code without +).

## Form Handling

The contact and newsletter forms currently use JavaScript alerts for demonstration. To make them functional:

1. Set up a server-side script to handle form submissions
2. Update the form submission code in `script.js` to send data to your server

## Browser Compatibility

This landing page is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Credits

- Font Awesome for icons
- Google Fonts for the Poppins font family

## License

This landing page template is free to use for your business.

---

© 2023 Webilito. All Rights Reserved. 