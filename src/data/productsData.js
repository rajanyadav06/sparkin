export const productCategories = [
  {
    id: "hanging-lights",
    name: "Hanging Lights",
    shortDesc: "Sculptural suspension luminaires designed for architectural lobbies, dining, and open work zones.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
    badge: "Architectural Statement",
    products: [
      "Conical Metal Hanging Light",
      "White Bell Hanging Light",
      "Decorative Contemporary Hanging Lights",
      "Geometric Diamond Hanging Fixture"
    ],
    specs: {
      cct: "2700K / 3000K / 4000K",
      cri: "> 90 Ra",
      wattage: "18W - 48W",
      lumenOutput: "1,800 - 4,800 lm",
      finish: "Matte Black, Brushed Brass, Textured White",
      mounting: "Suspended with adjustable aircraft cable",
      dimming: "0-10V / DALI / Phase Cut Optional"
    }
  },
  {
    id: "led-ring-lights",
    name: "LED Ring Lights",
    shortDesc: "Continuous circular halos providing uniform 360° ambient and direct illumination with sleek minimalism.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=80",
    badge: "Flagship Innovation",
    products: [
      "Ring Pendant Architectural LED Light",
      "Floating Halo Multi-Tier Pendant",
      "Modern Concentric Ring Installation",
      "Custom Giant Ring Luminaire (Up to 3m Dia)"
    ],
    specs: {
      cct: "3000K / 4000K / Tunable White (2700K - 6500K)",
      cri: "> 92 Ra",
      wattage: "36W - 120W",
      lumenOutput: "4,000 - 13,500 lm",
      finish: "Anodized Black, Sanded Gold, Custom RAL",
      mounting: "Ceiling suspended",
      dimming: "DALI / Zigbee / 1-10V"
    }
  },
  {
    id: "chandeliers",
    name: "Hanging Chandeliers",
    shortDesc: "Modern artistic centerpieces combining optical crystalline elements with high-efficiency LED modules.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    badge: "Luxury Interior",
    products: [
      "Decorative Architectural Chandelier",
      "Round Crystal Cascading Chandelier",
      "Modern Linear Sculptural LED Chandelier",
      "Bespoke Double-Height Atrium Chandelier"
    ],
    specs: {
      cct: "2700K / 3000K",
      cri: "> 95 Ra (Museum grade)",
      wattage: "60W - 240W",
      lumenOutput: "6,000 - 24,000 lm",
      finish: "Electroplated Champagne Gold, Matte Charcoal",
      mounting: "Heavy-duty canopy suspension",
      dimming: "DALI-2 / Wireless Smart Control"
    }
  },
  {
    id: "pendant-lights",
    name: "Pendant Lights",
    shortDesc: "Linear and point pendant fixtures engineered for task areas, breakout lounges, and meeting rooms.",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=80",
    badge: "Versatile Form",
    products: [
      "Gold Brushed Slim Pendant",
      "Hanging Cylindrical Metal Pendant",
      "Modern Minimalist Linear Pendant",
      "Acoustic Felt Drum Pendant"
    ],
    specs: {
      cct: "3000K / 4000K",
      cri: "> 90 Ra",
      wattage: "12W - 35W",
      lumenOutput: "1,200 - 3,500 lm",
      finish: "Gunmetal, Raw Aluminum, Deep Bronze",
      mounting: "Track mounted or individual ceiling rose",
      dimming: "Standard Trailing Edge / DALI"
    }
  },
  {
    id: "panel-lights",
    name: "LED Panel Lights",
    shortDesc: "High-efficacy, low-glare modular panels and architectural recessed downlights for corporate ceilings.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    badge: "Corporate Standard",
    products: [
      "LED Hexagon Honeycomb Panel System",
      "Deep Recessed Round Downlight (Anti-Glare)",
      "Low Profile Step & Stairway Luminaire",
      "Frameless Micro-Prism Grid Panel"
    ],
    specs: {
      cct: "4000K / 5000K / 6500K",
      cri: "> 85 - 90 Ra",
      wattage: "15W - 50W",
      lumenOutput: "1,600 - 5,500 lm",
      finish: "Powder Coated White, Fine Silver",
      mounting: "Recessed / Surface / Magnetic Grid",
      dimming: "0-10V / DALI"
    }
  },
  {
    id: "linear-lights",
    name: "Linear & Architectural",
    shortDesc: "Continuous seamless light runs, wallwashers, and acoustic suspended fixtures for modern agile offices.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    badge: "Ergonomic Focus",
    products: [
      "Seamless Continuous LED Linear System",
      "Architectural Asymmetric Wallwasher",
      "Acoustic Sound-Absorbing Hanging LED",
      "Direct/Indirect Dual-Emission Linear Profile"
    ],
    specs: {
      cct: "3000K / 4000K / Biophilic Circadian rhythm",
      cri: "> 90 Ra (R9 > 50)",
      wattage: "24W/m - 60W/m",
      lumenOutput: "2,600 - 6,800 lm/meter",
      finish: "Architectural Black, Anodized Grey, White",
      mounting: "Pendant, Surface, or Trimless Recessed",
      dimming: "DALI / 1-10V / Casambi Bluetooth"
    }
  },
  {
    id: "custom-solutions",
    name: "Custom Lighting Solutions",
    shortDesc: "Turnkey bespoke engineering from 3D Dialux photometrics to custom extrusion manufacturing.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    badge: "Bespoke Engineering",
    products: [
      "Custom Curvilinear Wave Installations",
      "Facade & Exterior Dynamic Luminaires",
      "Brand-Specific Architectural Statement Pieces",
      "Smart Integrated IoT Sensor Lighting"
    ],
    specs: {
      cct: "Full Custom (Tunable / RGBW / Static)",
      cri: "Up to 98 Ra",
      wattage: "Engineered to requirement",
      lumenOutput: "Calculated per Dialux simulation",
      finish: "Any RAL Color / Custom Patina",
      mounting: "Custom structural sub-frames",
      dimming: "Fully integrated Building Management Systems (BMS)"
    }
  }
];
