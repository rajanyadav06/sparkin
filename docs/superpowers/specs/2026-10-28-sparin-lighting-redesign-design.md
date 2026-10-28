# Technical Design Specification: SPARIN Complete Lighting Solutions Website Redesign

**Date:** 2026-10-28  
**Project:** SPARIN – Complete Lighting Solutions (Sparkin Sunlit Private Limited)  
**Reference Benchmark:** [Morpho Dimensions](https://morphodimensions.com/)  
**Target Workspace:** `e:\Legit Global\Lights`  
**Stack:** React 18, Vite, Vanilla Scoped CSS Design System, Lucide React Icons

---

## 1. Executive Summary & Objectives

The goal of this project is to completely redesign and implement the online presence of **SPARIN – Complete Lighting Solutions** into an architectural-grade, visually arresting, high-conversion web application. 

The redesign borrows the editorial prestige, generous whitespace, dynamic counter metrics, multi-step process narrative, asymmetrical project galleries, and conversion-focused enquiry workflows of **Morpho Dimensions**, while establishing an authentic lighting design and manufacturing brand identity for SPARIN.

### Key Business & Brand Anchors:
- **Legal Entity:** Sparkin Sunlit Private Limited
- **Brand Identity:** SPARIN – Complete Lighting Solutions
- **GST Verification:** `09AASCS3172J1ZQ`
- **Headquarters & Factory:** F-611, M G Road, Dhaulana, Metro Power Tech Pvt Ltd, Mussoorie Gulawathi Road Industrial Area, Hapur, UP 201015 (with NCR corporate presence in Noida)
- **Direct Contacts:** `+91 9811817833`, `+91 9811817834`, `+91 95608 16900` | `sales@sparkinled.com`
- **Official Brand Mark:** Preserved authentic white logo (`assets/sparin-logo.png`) displayed over luxury dark backdrops.

---

## 2. Visual Design System & Tokens

### 2.1 Color Palette
- **Primary Dark Surface:** `#0B0C0E` (Atmospheric deep slate)
- **Card & Elevated Dark:** `#14161B` (Charcoal container)
- **Border Dark:** `rgba(255, 255, 255, 0.08)`
- **Primary Light Surface:** `#F8F9FA` (Off-white gallery background)
- **Card Light:** `#FFFFFF`
- **Border Light:** `#E5E7EB`
- **Lighting Accent (Warm Amber / Gold):** `linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)`
- **Accent Solid:** `#F59E0B` (Amber 500)
- **Accent Warm Glow:** `rgba(245, 158, 11, 0.3)`
- **Text Primary (Dark Theme):** `#FFFFFF`
- **Text Secondary (Dark Theme):** `#9CA3AF`
- **Text Primary (Light Theme):** `#111827`
- **Text Secondary (Light Theme):** `#4B5563`

### 2.2 Typography
- **Headlines:** `'Plus Jakarta Sans'`, sans-serif (Weights: 400, 500, 600, 700)
- **Accents & Subtitles:** `'Poppins'`, sans-serif (Weights: 300, 400, 500)
- **Body & Captions:** `'Inter'` / `'Plus Jakarta Sans'`, sans-serif

### 2.3 Micro-Interactions & Aesthetics
- Smooth glassmorphism (`backdrop-filter: blur(16px)`) on sticky headers and floating consultation badges.
- Luminaire glow ambient gradients replicating directional architectural lighting.
- Animated viewport counters for key metrics (experience, projects, clients).
- Restrained card elevation and zoom on hover (scale `1.02` with cubic-bezier transition).

---

## 3. Architecture & Component Hierarchy

```
src/
├── assets/
│   └── sparin-logo.png                # Preserved official white SPARIN logo
├── data/
│   ├── productsData.js                # 7 categories, product specs, features, imagery
│   ├── projectsData.js                # Architectural case studies (corporate, hospitality, retail)
│   ├── clientsData.js                 # Verified roster (Microsoft, Amazon, Tata, etc.)
│   └── faqData.js                     # Verified FAQs regarding manufacturing & consultations
├── components/
│   ├── Header/
│   │   ├── Navbar.jsx                 # Transparent-to-dark glass, mobile drawer, CTA trigger
│   │   └── Navbar.css
│   ├── Hero/
│   │   ├── HeroSection.jsx            # Cinematic luminaire slider/backdrop, editorial copy, metrics counter
│   │   └── HeroSection.css
│   ├── BrandStory/
│   │   ├── BrandPhilosophy.jsx        # Split layout, Noida factory background, 4 L.U.M.E. pillars
│   │   └── BrandPhilosophy.css
│   ├── Solutions/
│   │   ├── SolutionsGrid.jsx          # 7 lighting categories with tab filters & quick specs modal
│   │   ├── ProductDetailModal.jsx     # High-res luminaire viewer, CRI, CCT, lumen specs, download spec sheet
│   │   └── Solutions.css
│   ├── Process/
│   │   ├── ProjectProcess.jsx         # 4-stage process with connected badges & timelines
│   │   └── ProjectProcess.css
│   ├── Projects/
│   │   ├── FeaturedProjects.jsx       # Asymmetrical grid, category filter, hover reveal
│   │   └── FeaturedProjects.css
│   ├── Clients/
│   │   ├── ClientShowcase.jsx         # Monochrome enterprise client logo ribbon
│   │   └── ClientShowcase.css
│   ├── Testimonials/
│   │   ├── Testimonials.jsx           # Editorial quotes from corporate admins and architects
│   │   └── Testimonials.css
│   ├── Consultation/
│   │   ├── ConsultationForm.jsx       # High-conversion enquiry with validation, area selector & feedback
│   │   └── ConsultationForm.css
│   ├── FAQ/
│   │   ├── FAQAccordion.jsx           # Accessible collapsible accordion
│   │   └── FAQAccordion.css
│   ├── Footer/
│   │   ├── Footer.jsx                 # Comprehensive footer with white logo, GST, legal & quick links
│   │   └── Footer.css
│   └── UI/
│       ├── ConsultationModal.jsx      # Global floating quick-enquiry trigger & popup
│       └── Toast.jsx                  # Interactive notification feedback
├── styles/
│   ├── index.css                      # Global resets, font imports, custom scrollbar
│   └── variables.css                  # CSS custom properties
├── App.jsx                            # Main application layout & modal controller
└── main.jsx                           # React root mounting
```

---

## 4. Section Specifications

### Section 1: Navigation
- Sticky header transitioning from translucent dark over hero to opaque charcoal `#0D0E11` on scroll.
- SPARIN official white logo linked to top.
- Navigation links with smooth scroll to corresponding section targets.
- Prominent amber-gradient button: "Discuss Your Project" opening the consultation drawer.

### Section 2: Cinematic Hero & Metrics
- Immersive architectural lighting visual with warm ambient accents.
- Large editorial title: *"Lighting Spaces. Inspiring Experiences."*
- Sub-headline highlighting energy-efficient, custom-engineered luminaires.
- Action buttons: *"Explore Solutions"* (scrolls to catalog) and *"Discuss Your Project"* (opens consultation).
- 3 Integrated live counter stats:
  - **4+** Years Manufacturing Excellence
  - **500+** Lighting Projects Completed
  - **50+** Enterprise & Corporate Clients

### Section 3: Brand Philosophy (L.U.M.E.)
- Split editorial section presenting Sparkin Sunlit Pvt Ltd (GST: 09AASCS3172J1ZQ), Hapur industrial facility & Noida operations.
- Four Core Pillars:
  - **L** – Luminance & Ergonomics: Glare-controlled, flicker-free UGR < 19 optics.
  - **U** – Unique Customization: Custom extruded profiles, rings, and acoustic pendants.
  - **M** – Material & Craftsmanship: Aerospace-grade aluminum housings and Samsung/Osram LED chips.
  - **E** – Efficiency & Sustainability: Up to 70% energy reduction and 50,000+ hour lifespans.

### Section 4 & 5: Verified Lighting Solutions & Product Catalog
- Filterable 7 real product lines:
  1. **Hanging Lights:** Conical metal, white bell, decorative, diamond hanging fixtures.
  2. **LED Ring Lights:** Architectural ring pendants, floating halo luminaires.
  3. **Chandeliers:** Contemporary crystal chandeliers, sculptural LED centerpieces.
  4. **Pendant Lights:** Gold brushed pendants, minimalist industrial pendants.
  5. **LED Panel Lights:** Hexagon decorative panels, glare-free downlights, low-profile step lights.
  6. **Linear & Architectural:** Continuous seamless linear fixtures, wallwashers, acoustic sound-absorbing light fittings.
  7. **Custom Solutions:** Turnkey architectural luminaire design for workspaces and hospitality.
- Interactive modal providing CCT options (3000K Warm / 4000K Neutral / 6000K Cool White), CRI > 90, Wattage, and instant consultation link.

### Section 6: Project Delivery Process (Inspired by 90-Day Delivery Narrative)
- 4 connected chronological stages:
  - **Stage 01:** Lux Level Assessment & Client Consultation (Days 1–5)
  - **Stage 02:** Dialux Simulation, 3D Rendering & BOQ Generation (Days 6–15)
  - **Stage 03:** Precision In-House Fabrication & Assembly (Days 16–35)
  - **Stage 04:** Site Delivery, Installation Guidance & Post-Handover Warranty (Ongoing)

### Section 7: Featured Projects Showcase
- Asymmetric portfolio grid showcasing flagship installations:
  - *Morpho Corporate Tower, New Delhi* (Linear & Ring Pendants, 45,000 sq.ft.)
  - *Adani Realty Workspace, Gurugram* (Hexagon Panels & Recessed Downlights, 16,500 sq.ft.)
  - *Grant Thornton Consulting Hub, Noida* (Glare-free Architectural Linear, 22,000 sq.ft.)
  - *Baxi Corporate Headquarters, Delhi NCR* (Custom Ring Chandeliers, 70,000 sq.ft.)
  - *Tech Innovation Campus, Bengaluru* (Acoustic Suspended Luminaires, 1,20,000 sq.ft.)
  - *Executive Penthouse Suite, South Delhi* (Warm Dimming Gold Pendants & Wallwashers)

### Section 8: Enterprise Clients & Partners
- Clean, high-contrast client roster featuring verified names:
  - Microsoft, Amazon, HSBC, IBM, Adobe, EY, PwC, Accenture, Samsung, SAP, Sony, Ericsson, Airtel, Tata Group, M3M, Smartworld, Airbus.

### Section 9: Client Testimonials
- Editorial quote cards featuring feedback from Facility Directors, Chief Architects, and General Contractors on lighting uniformity, timely dispatch, and after-sales service.

### Section 10: High-Conversion Project Enquiry Form
- Direct interactive form connected with live state validation:
  - Full Name (required)
  - Company / Firm Name (required)
  - Mobile Number (10 digits, formatted with `+91`)
  - Email Address (valid email structure)
  - Project Scope / Luminaire Category
  - Project Area (<5,000 sq.ft, 5k–10k, 10k–25k, 25k+ sq.ft)
  - Project Details / Message
- Clear submission state with animated confirmation, SLA promise (response within 4 hours), and direct call/email contacts.

### Section 11: Accessible FAQs
- Accordion for common questions:
  - Custom luminaire sizing & finishes.
  - Dialux photometric simulation support.
  - Warranty (up to 5 years warranty on driver & LED modules).
  - Minimum order quantities and pan-India shipping.

### Section 12: Footer & Floating Action Triggers
- Multi-column luxury dark footer with white SPARIN logo, short corporate statement, GST registration, quick navigation links, category index, full factory address, phone numbers, email, and social links.
- Floating quick consultation trigger button and floating direct dial button.

---

## 5. Non-Functional Requirements & Performance
- **Zero Heavy Bundles:** Lightweight Vite React setup, no bloated UI kits, clean CSS modules.
- **Full Responsiveness:** Flawless layout on 320px mobile screens, 768px tablets, 1024px laptops, and 1440px+ ultra-wide desktop monitors.
- **Accessibility:** Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), keyboard navigable forms and modals (`Escape` key listeners, focus rings).
- **SEO & Social Cards:** Fully populated `<title>`, meta descriptions, OpenGraph tags, schema.org Organization and Product JSON-LD structured data.

---

## 6. Implementation Verification Plan
1. **Scaffold & Build:** Setup Vite React app in `e:\Legit Global\Lights`.
2. **Asset Integration:** Ensure official SPARIN logo and curated architectural imagery are properly linked.
3. **Component Implementation:** Build modular components matching sections 1 to 12.
4. **Interactive Validation:** Test all filters, modals, form validations, and drawer interactions.
5. **Responsiveness & Cross-Device Audit:** Verify responsive breakpoints via browser tests.
6. **Production Build & Verification:** Run `npm run build` to verify clean compilation with zero lint or bundling errors.
