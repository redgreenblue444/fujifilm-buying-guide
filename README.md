# Fujifilm X-Series Camera Buying Guide

A beautiful, interactive static website guide to help you choose the perfect Fujifilm X-Series camera for your photography needs.

## Features

- 📸 **Complete Camera Profiles**: Detailed information on all 8 current Fujifilm X-Series cameras
- 🔍 **Interactive Filters**: Filter cameras by price range and sensor type
- ⚖️ **Comparison Tool**: Side-by-side comparison of any two cameras
- 📊 **Comparison Tables**: Quick reference tables for specs, weight, battery life, and features
- 📱 **Responsive Design**: Beautiful on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, modern design inspired by Fujifilm's aesthetic

## Cameras Included

1. **X-H2S** - The Speed Demon ($2,499)
2. **X-H2** - The Resolution King ($1,999)
3. **X-T5** - The Classic All-Rounder ($1,699)
4. **X-E5** - The Compact Rangefinder ($1,699)
5. **X-S20** - The Vlogging Champion ($1,299)
6. **X-T50** - The Compact Enthusiast ($1,399)
7. **X-T30 III** - The Value Leader ($999)
8. **X-M5** - The Entry Point ($750-$850)

## Setup

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd fujifilm-buying-guide
   ```

2. Add camera images:
   - Download official camera images from [Fujifilm's website](https://www.fujifilm.com/us/en/consumer/digitalcameras/x)
   - Place them in `images/cameras/` with the following names:
     - `x-h2s.jpg`
     - `x-h2.jpg`
     - `x-t5.jpg`
     - `x-e5.jpg`
     - `x-s20.jpg`
     - `x-t50.jpg`
     - `x-t30-iii.jpg`
     - `x-m5.jpg`
   - The site will display placeholder images if these files are missing

3. Open `index.html` in your web browser to view the site locally

## Deployment to GitHub Pages

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/fujifilm-buying-guide.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select `main` branch
   - Select `/ (root)` folder
   - Click **Save**

3. Your site will be available at:
   `https://yourusername.github.io/fujifilm-buying-guide/`

## Project Structure

```
fujifilm-buying-guide/
├── index.html              # Main HTML file
├── css/
│   └── style.css            # Stylesheet
├── js/
│   └── main.js              # Interactive features and camera data
├── images/
│   └── cameras/             # Camera product images
├── .gitignore
└── README.md
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks or dependencies
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and educational use.

## Credits

Camera specifications and information based on Fujifilm's official product documentation and current X-Series lineup.

---

**Happy Shooting! 📸**

