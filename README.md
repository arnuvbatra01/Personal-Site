# Hardware Engineer Portfolio

A clean, modern and hardware-focused personal website template designed for hardware engineers, electrical engineers, and FPGA/silicon enthusiasts. This template features circuit-inspired design elements, PCB-style backgrounds, and interactive animations that reflect the hardware engineering field.

## Features

- 🔷 Hardware-focused design with circuit patterns, PCB-inspired elements, and silicon-themed color scheme
- 🔷 Responsive layout that works well on all device sizes
- 🔷 Interactive circuit animations and data flow visualizations
- 🔷 Clean timeline for experience section
- 🔷 Project cards with hardware chip-style tags
- 🔷 Mobile-friendly navigation

## Getting Started

This is a pure HTML, CSS, and JavaScript project with no build steps required. To use this template:

1. Clone or download this repository
2. Customize the HTML content in `index.html` with your personal information
3. Add your own images to the `images` folder
4. Modify the styles in `css/styles.css` if desired
5. Deploy to your preferred hosting platform

## Customization Guide

### Adding Your Information

1. **Personal Details**: Edit the header section in `index.html` to include your name, title, and brief introduction
2. **Profile Picture**: Replace `images/profile.jpg` with your own photo
3. **Experience**: Update the timeline items in the experience section
4. **Projects**: Add your own projects with images and descriptions
5. **Skills**: Modify the skills list to match your expertise
6. **Contact Information**: Update the contact links with your email and social media profiles

### Adding Project Images

1. Add your project images to the `images` folder
2. Update the `<img>` tags in the projects section to point to your images
3. Recommended image size: 600x400px for project thumbnails

### Modifying Colors

The color scheme is defined as CSS variables at the top of `css/styles.css`:

```css
:root {
    /* Hardware-inspired Color Palette */
    --primary-color: #00b8a9; /* PCB solder mask green-blue */
    --secondary-color: #f8615a; /* Red LED/indicator */
    --bg-dark: #1a1a2e; /* Dark PCB/silicon */
    --bg-medium: #25293e; /* Medium tone PCB */
    --bg-light: #2d324e; /* Light tone PCB */
    --text-primary: #f0f0f0; /* Primary text */
    --text-secondary: #b8b8b8; /* Secondary text */
    --accent-yellow: #ffd166; /* Test point yellow */
    --accent-blue: #4361ee; /* Trace blue */
    --copper: #e0802b; /* Copper trace */
}
```

Modify these values to change the color scheme throughout the site.

## Browser Compatibility

This template works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Credits

- Font Awesome for icons
- Google Fonts (Roboto and Roboto Mono)

## License

This template is free to use for both personal and commercial projects.

---

Made with ⚡ for hardware engineers 