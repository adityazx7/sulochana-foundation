# Sulochana Foundation - Tier-1 Modern Non-Profit Digital Platform

A world-class, Tier-1 digital experience built for **Sulochana Foundation**, a premier Section 8 non-profit organization located in Parel, Mumbai 12, Maharashtra, India.

Redesigned and modernized using **React 18**, **Vite**, **Tailwind CSS**, **Lucide Icons**, and **Canvas Confetti**, featuring high-end aesthetics, a royal emerald & imperial amber gold color palette, animated impact counters, interactive initiative filtering, dedicated domain deep-dive pages, and a dynamic giving tier calculator.

---

## 🌟 Tier-1 Highlights & Redesign Features

### 1. Royal Visual Identity & Color Palette
- **Primary Brand**: Deep Ocean Teal & Royal Emerald (`#032329`, `#073942`, `#0c4e5b`) symbolizing hope, tranquility, and growth.
- **Imperial Accent**: Luminous Warm Gold & Amber (`#f5a623`, `#e58e0e`, `#fce6b6`) honoring generous giving, honor, and prestige.
- **Surface**: Pearl Alabaster & Cream (`#F9FBFB`, `#F5F8F7`) with glassmorphism (`backdrop-blur-md bg-white/90 border border-slate-200/80`).
- **Typography**: Editorial Serif headers (*Playfair Display* & *Cinzel*) combined with modern, high-legibility geometric sans (*Plus Jakarta Sans*).

### 2. Memorial Honor to Late Smt. Sulochana Dhaku Jadhav
- Refined memorial tribute card with a golden radial halo portrait, tribute crest, inspirational quote, and Section 8 non-commercial dedication.

### 3. Live Animated Impact Counters
- Real-time animated counters displaying measurable on-ground impact:
  - **28,500+** Lives Positively Impacted
  - **165+** Free Health & Blood Camps
  - **14,200+** Underprivileged Students Supported
  - **46,000+** Trees Planted & Animal Lives Rescued

### 4. 4 Core Initiative Domains & Dedicated Subpages
Each domain features dedicated deep-dive subpages, detailed program focus areas, and metrics:
1. **Healthcare Initiatives**: Patient welfare, voluntary blood donation networks, free multi-specialty screening camps, and maternal nutrition.
2. **Environment & Animals**: Miyawaki micro-forests, seed ball drives, solid waste management, street animal rescue ambulances, and anti-rabies vaccination.
3. **Inclusive Education**: School dropout prevention kits, high-speed digital literacy computer labs, competitive exam coaching (MPSC, SSC, Banking), and community libraries.
4. **Social Welfare & Women**: Women's tailoring and micro-enterprise development, elderly assistance, hunger relief weekend kitchens, and youth vocational skills.

### 5. Interactive Giving & Impact Calculator
- Select between ₹500, ₹1,200, ₹2,500, ₹5,000, or enter a custom amount.
- Real-time dynamic calculation showing exactly what each contribution accomplishes on the ground.
- Celebratory confetti effects and one-click pledge flow.

### 6. Interactive Multi-Step Modals
- **Support / Pledge Modal**: Cause designation, simulated donation pledge, and official Section 8 account information.
- **Volunteer Sign-up Modal**: Area of interest selection and availability tracking.
- **Project Quick-View Modal**: Instant previews of any domain without leaving the view.

### 7. Interactive Validated Contact Form & FAQ Accordion
- Real-time field validation with character counters and error indicators.
- Instant submission feedback with celebratory particles.
- Expandable FAQ accordion addressing legal registration, 80G deductions, and CSR partnerships.

---

## 📁 Project Architecture

```
sulochana-foundation/
├── public/                 # Static assets served at root
│   ├── assets/             # Logo, memorial portrait, domain imagery
│   ├── logo.png
│   └── owner.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top trust header & sticky glassmorphic navigation
│   │   ├── Hero.jsx            # Animated mesh banner & live impact stats counter
│   │   ├── AboutSection.jsx    # Memorial tribute & 3 governance pillars
│   │   ├── ProjectsOverview.jsx# Interactive filterable project catalog
│   │   ├── ProjectDetailPage.jsx# Dedicated subpage for each domain
│   │   ├── ImpactCalculator.jsx# Interactive donation tier calculator
│   │   ├── Testimonials.jsx    # Beneficiary stories & rating cards
│   │   ├── ContactSection.jsx  # Validated contact form, map & FAQ accordion
│   │   ├── Footer.jsx          # Section 8 legal notes & newsletter subscription
│   │   └── Modals.jsx          # Support, Volunteer, & Quick View dialogs
│   ├── data/
│   │   └── foundationData.js   # Structured content, metrics, FAQs, stories
│   ├── App.jsx                 # Master router, state, floating actions
│   ├── main.jsx                # React DOM entry
│   └── index.css               # Tailwind CSS & custom animations
├── legacy_site/            # Archived original static HTML/CSS files
├── dist/                   # Production-ready static output
├── index.html              # Main Vite HTML entry
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Custom theme colors & shadows
└── vite.config.js          # Vite build configuration
```

---

## 🚀 How to Run Locally

### 1. Development Mode (Hot-Reload)
Run the development server with instant hot module replacement:
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 2. Production Build & Preview
To create the optimized static build:
```bash
npm run build
```
To preview the built application locally:
```bash
npm run preview
```

---

## ⚡ Deployment Guide

### Deploy on Vercel
1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **"Add New Project"** and import the repository.
3. Framework Preset: **Vite** (detected automatically).
4. Root Directory: `sulochana-foundation` (or root if repository root is this folder).
5. Click **Deploy**. Vercel will build and deploy the production bundle in under 30 seconds!

### Deploy on Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.
