# SPARIN – Complete Lighting Solutions Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, production-grade redesign of the SPARIN Complete Lighting Solutions website using Vite + React, Vanilla Scoped CSS, verified business information, preserved authentic white logo, and the architectural elegance of Morpho Dimensions.

**Architecture:** A single-page architectural application composed of 12 structured sections with smooth scroll anchors, interactive category and project filter engines, an interactive luminaire specification modal, a high-conversion validated project enquiry section, a slide-out quick consultation drawer, and verified business assets.

**Tech Stack:** React 18, Vite, Lucide React (icons), Vanilla Scoped CSS with CSS Custom Properties, HTML5 semantic layout.

**Spec:** [docs/superpowers/specs/2026-10-28-sparin-lighting-redesign-design.md](file:///e:/Legit%20Global/Lights/docs/superpowers/specs/2026-10-28-sparin-lighting-redesign-design.md)

## Global Constraints
- Preserve official SPARIN white logo (`assets/sparin-logo.png`). Display on dark or frosted glass backdrops.
- Do not invent client names or fake data: Use verified roster (Microsoft, Amazon, HSBC, IBM, Adobe, EY, PwC, Accenture, Samsung, SAP, Sony, Ericsson, Airtel, Tata Group, M3M, Smartworld, Airbus) and real contact details (`+91 9811817833`, `sales@sparkinled.com`, GST: `09AASCS3172J1ZQ`, Hapur & Noida addresses).
- Zero external CSS bloat (no Tailwind unless requested); use scoped Vanilla CSS and custom tokens.
- Fully responsive across desktop (>1200px), tablet (768px-1024px), and mobile (<768px).

---

### Task 1: Project Scaffolding & Design System Tokens

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/styles/variables.css`
- Create: `src/styles/index.css`
- Modify: `public/assets/sparin-logo.png` (copy official logo)

**Interfaces:**
- Produces: Base running Vite + React environment, CSS variables (`--bg-dark`, `--accent-gold`, etc.), global typography (`Plus Jakarta Sans`, `Poppins`).

- [ ] **Step 1: Initialize project dependencies & configs**
Create `package.json` with React 18, Lucide React, and Vite.
Run `npm install` to install dependencies.

- [ ] **Step 2: Configure Vite, HTML shell & assets**
Create `vite.config.js` and `index.html` with Google Fonts (`Plus Jakarta Sans`, `Poppins`, `Inter`), SEO metadata, OpenGraph tags, and favicon. Copy official SPARIN logo from `e:\Legit Global\Lights\assets\sparin-logo.png` to `public/assets/sparin-logo.png`.

- [ ] **Step 3: Define Design System tokens in `variables.css` & `index.css`**
Define colors, shadows, gradients, and layout container utility classes.

- [ ] **Step 4: Verify build works**
Run `npm run build` and ensure Vite compiles cleanly.

---

### Task 2: Verified Content & Data Layer

**Files:**
- Create: `src/data/companyData.js`
- Create: `src/data/productsData.js`
- Create: `src/data/projectsData.js`
- Create: `src/data/clientsData.js`
- Create: `src/data/faqData.js`

**Interfaces:**
- Produces:
  - `companyData`: addresses, phone numbers, email, GST number, social links, metrics.
  - `productsData`: 7 verified lighting categories with items, specs, lumens, CCT, and high-res architectural images.
  - `projectsData`: 6 featured installations with metrics, square footage, luminaire types, and image URLs.
  - `clientsData`: list of verified corporate clients.
  - `faqData`: structured FAQ items.

- [ ] **Step 1: Create `companyData.js` and `clientsData.js`**
Define structured verified details for Sparkin Sunlit Pvt Ltd and client brand names.

- [ ] **Step 2: Create `productsData.js`**
Define the 7 categories (Hanging Lights, LED Ring Lights, Chandeliers, Pendant Lights, LED Panel Lights, Linear & Architectural, Custom Solutions) with detailed sub-products and technical specs (CCT, CRI, Wattage, Lumens).

- [ ] **Step 3: Create `projectsData.js` and `faqData.js`**
Define portfolio project data with architectural categories and FAQ questions & answers.

- [ ] **Step 4: Verify data imports**
Mount a quick data sanity check in `src/App.jsx` and verify data renders without runtime errors.

---

### Task 3: Navigation Header & Global Quick-Consultation Modal

**Files:**
- Create: `src/components/Header/Navbar.jsx`
- Create: `src/components/Header/Navbar.css`
- Create: `src/components/UI/ConsultationModal.jsx`
- Create: `src/components/UI/ConsultationModal.css`

**Interfaces:**
- Produces:
  - `<Navbar onOpenConsultation={() => void} />`
  - `<ConsultationModal isOpen={boolean} onClose={() => void} />`

- [ ] **Step 1: Build `Navbar.jsx`**
Display the official white SPARIN logo, desktop nav links with active scroll highlights, "Discuss Your Project" CTA button, and responsive mobile hamburger drawer.

- [ ] **Step 2: Style `Navbar.css`**
Add frosted dark glass backdrop (`rgba(11, 12, 14, 0.85)` + `backdrop-filter: blur(16px)`), scroll transition, and smooth mobile slide-out menu.

- [ ] **Step 3: Build `ConsultationModal.jsx` and styling**
Slide-out / modal dialog containing high-conversion enquiry form, phone quick dial, and close handlers (`Escape` key & backdrop click).

- [ ] **Step 4: Verify header and modal interactions**
Test clicking "Discuss Your Project" and opening/closing the modal.

---

### Task 4: Cinematic Hero Section with Integrated Stats Counter

**Files:**
- Create: `src/components/Hero/HeroSection.jsx`
- Create: `src/components/Hero/HeroSection.css`

**Interfaces:**
- Consumes: `companyData.stats`
- Produces: `<HeroSection onOpenConsultation={() => void} />`

- [ ] **Step 1: Implement `HeroSection.jsx`**
Large architectural background image with warm directional lighting gradient overlay, editorial headline: *"Lighting Spaces. Inspiring Experiences."*, secondary copy, dual CTAs ("Explore Solutions", "Discuss Your Project"), and the 3 live counter stats (4+ Years, 500+ Projects, 50+ Clients).

- [ ] **Step 2: Add styles in `HeroSection.css`**
Refined typography, amber luminaire gradient buttons, glowing borders, and responsive counter grid.

- [ ] **Step 3: Verify hero responsiveness**
Test on desktop and mobile viewports.

---

### Task 5: Brand Story & S.O.U.L / L.U.M.E Philosophy Section

**Files:**
- Create: `src/components/BrandStory/BrandPhilosophy.jsx`
- Create: `src/components/BrandStory/BrandPhilosophy.css`

**Interfaces:**
- Consumes: `companyData`
- Produces: `<BrandPhilosophy />`

- [ ] **Step 1: Implement `BrandPhilosophy.jsx`**
Split layout: On one side, architectural studio & manufacturing narrative with verified GST `09AASCS3172J1ZQ`; on the other, the 4 core pillars:
- **L** – Luminance & Ergonomics
- **U** – Unique Customization
- **M** – Material & Craftsmanship
- **E** – Efficiency & Sustainability

- [ ] **Step 2: Add styles in `BrandPhilosophy.css`**
Letter badges, subtle amber accents, and clean card alignment inspired by Morpho Dimensions' philosophy section.

- [ ] **Step 3: Verify rendering**
Confirm all 4 pillars and corporate details display clearly.

---

### Task 6: Lighting Solutions Grid & Technical Specification Modal

**Files:**
- Create: `src/components/Solutions/SolutionsGrid.jsx`
- Create: `src/components/Solutions/ProductDetailModal.jsx`
- Create: `src/components/Solutions/Solutions.css`

**Interfaces:**
- Consumes: `productsData`
- Produces: `<SolutionsGrid onOpenConsultation={() => void} />`

- [ ] **Step 1: Build `SolutionsGrid.jsx`**
Category filter pills (All, Hanging, Ring, Chandeliers, Pendant, Panels, Linear, Custom), responsive 3-column architectural card grid with hover image zoom, product list badges, and "View Technical Specs" CTA.

- [ ] **Step 2: Build `ProductDetailModal.jsx`**
Detailed modal showing selected luminaire category, high-res architectural image, CCT color temperatures (3000K, 4000K, 6000K), CRI, typical applications, and direct "Request Custom BOQ" button.

- [ ] **Step 3: Add styles in `Solutions.css`**
Refined card borders, badge chips, and smooth transition animations.

- [ ] **Step 4: Verify filtering and modal trigger**
Test category selection and spec sheet modal interaction.

---

### Task 7: Project Process (4 Stages) & Featured Projects Portfolio

**Files:**
- Create: `src/components/Process/ProjectProcess.jsx`
- Create: `src/components/Process/ProjectProcess.css`
- Create: `src/components/Projects/FeaturedProjects.jsx`
- Create: `src/components/Projects/FeaturedProjects.css`

**Interfaces:**
- Consumes: `projectsData`
- Produces: `<ProjectProcess />`, `<FeaturedProjects onOpenConsultation={() => void} />`

- [ ] **Step 1: Implement `ProjectProcess.jsx`**
4-stage connected process cards with step numbers, timeline badges (Days 1-5, Days 6-15, etc.), icons, and descriptions.

- [ ] **Step 2: Implement `FeaturedProjects.jsx`**
Asymmetrical architectural grid (inspired by Morpho Dimensions' project showcase: 1 large card, 3 medium cards, 1 large card) with project title, location, area in sq.ft., and luminaire tags.

- [ ] **Step 3: Add styles in `ProjectProcess.css` and `FeaturedProjects.css`**
Step connection lines, dark architectural frames, and overlay reveal on hover.

- [ ] **Step 4: Verify layout**
Verify asymmetrical grid responsiveness on desktop, tablet, and mobile.

---

### Task 8: Enterprise Clients, Testimonials, & Project Enquiry Form

**Files:**
- Create: `src/components/Clients/ClientShowcase.jsx`
- Create: `src/components/Clients/ClientShowcase.css`
- Create: `src/components/Testimonials/Testimonials.jsx`
- Create: `src/components/Testimonials/Testimonials.css`
- Create: `src/components/Consultation/ConsultationForm.jsx`
- Create: `src/components/Consultation/ConsultationForm.css`

**Interfaces:**
- Consumes: `clientsData`, `companyData`
- Produces: `<ClientShowcase />`, `<Testimonials />`, `<ConsultationForm />`

- [ ] **Step 1: Implement `ClientShowcase.jsx`**
Monochrome-to-gold hover client logo grid featuring Microsoft, Amazon, HSBC, IBM, Adobe, EY, Tata Group, etc.

- [ ] **Step 2: Implement `Testimonials.jsx`**
Clean editorial quotes from facility heads and architects with rating stars and company roles.

- [ ] **Step 3: Implement `ConsultationForm.jsx`**
Section heading *"Let's Bring Your Lighting Vision to Life."*
Fields: Full Name, Company, Email, Mobile (+91), Project Scope, Area (sq.ft.), and Message.
Includes client-side validation, error messages, and animated success confirmation state with direct factory contact information.

- [ ] **Step 4: Style components in their respective CSS files**
Ensure high-contrast styling and mobile responsiveness.

---

### Task 9: Accessible FAQs, Comprehensive Footer, & Quick Actions

**Files:**
- Create: `src/components/FAQ/FAQAccordion.jsx`
- Create: `src/components/FAQ/FAQAccordion.css`
- Create: `src/components/Footer/Footer.jsx`
- Create: `src/components/Footer/Footer.css`
- Create: `src/components/UI/FloatingQuickActions.jsx`
- Create: `src/components/UI/FloatingQuickActions.css`

**Interfaces:**
- Consumes: `faqData`, `companyData`
- Produces: `<FAQAccordion />`, `<Footer />`, `<FloatingQuickActions onOpenConsultation={() => void} />`

- [ ] **Step 1: Implement `FAQAccordion.jsx`**
Keyboard-accessible accordion with `+` / `-` indicators and smooth height expansion.

- [ ] **Step 2: Implement `Footer.jsx`**
Dark background with official white SPARIN logo, brand bio, GST number, quick navigation links, lighting category directory, verified Hapur factory & Noida office details, phone numbers, email, and copyright.

- [ ] **Step 3: Implement `FloatingQuickActions.jsx`**
Floating action button for instant project consultation and direct WhatsApp / call trigger.

- [ ] **Step 4: Verify footer and quick actions**
Test all links, accordion expansion, and floating buttons.

---

### Task 10: Assembly, Verification & Production Build

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`

- [ ] **Step 1: Assemble all sections in `App.jsx`**
Connect state for modals, consultation drawer, smooth scroll tracking, and toast alerts.

- [ ] **Step 2: Run dev server and test in browser subagent**
Start `npm run dev`, inspect the visual layout, test all interactions, buttons, filters, accordions, and forms.

- [ ] **Step 3: Run production build**
Run `npm run build` and ensure zero errors or warnings.

- [ ] **Step 4: Cross-device responsiveness audit**
Verify desktop, tablet, and mobile layouts.
