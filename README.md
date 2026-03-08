# Athar Shafi — Portfolio

A modern, high-end developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ (https://nodejs.org)
- npm v9+

### Installation & Run

```bash
# 1. Navigate to this folder
cd athar-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Opens at http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Root component with loading state
├── styles/
│   └── globals.css           # Tailwind + custom CSS (glass, cursor, grid)
├── data/
│   └── portfolioData.js      # All resume data — edit this to update content
├── hooks/
│   └── useScrollProgress.js  # Scroll progress + active section detection
├── animations/
│   └── variants.js           # Framer Motion reusable animation variants
└── components/
    ├── Cursor.jsx             # Custom animated cursor (dot + ring)
    ├── ParticleBackground.jsx # Canvas particle network animation
    ├── LoadingScreen.jsx      # Animated loading screen with progress
    ├── Navbar.jsx             # Fixed nav with scroll progress bar
    ├── SectionWrapper.jsx     # Scroll-triggered reveal wrapper
    ├── Hero.jsx               # Hero with TypeAnimation + orbit rings
    ├── About.jsx              # Bio, stats, quick facts
    ├── Skills.jsx             # Categorized skill cards
    ├── Projects.jsx           # Filterable project cards + modal
    ├── Experience.jsx         # Timeline layout
    ├── Education.jsx          # Degrees + certifications
    ├── Contact.jsx            # Contact form + social links
    └── Footer.jsx             # Footer with branding
```

## 🎨 Design System
- **Theme**: Dark cyberpunk/tech with cyan accent
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Colors**: `#050810` bg, `#00d4ff` accent, `#7c3aed` purple, `#10b981` green
- **Effects**: Glassmorphism, particle network, custom cursor, gradient text

## ✏️ Customization
Edit `src/data/portfolioData.js` to update all personal info, skills, projects, and experience.

## 🌐 Deployment
```bash
npm run build     # Generates /dist folder
# Deploy /dist to Vercel, Netlify, or GitHub Pages
```
