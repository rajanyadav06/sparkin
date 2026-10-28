import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Cpu, Lightbulb, CheckCircle2, MapPin, Maximize2 } from 'lucide-react';
import HeroSection from '../components/Hero/HeroSection';
import ClientShowcase from '../components/Clients/ClientShowcase';
import { companyData } from '../data/companyData';
import { productCategories } from '../data/productsData';
import { featuredProjects, projectProcessSteps } from '../data/projectsData';

export default function HomePage({ onOpenConsultation }) {
  // Preview top 3 categories on homepage
  const previewSolutions = productCategories.slice(0, 3);
  // Preview top 3 featured projects
  const previewProjects = featuredProjects.slice(0, 3);

  return (
    <div className="bg-white text-slate-900">
      {/* 1. Hero Section (Dramatic Architectural Lighting Showcase) */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* 2. Brand Introduction Overview (Summary linking to /about) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Introduction to SPARIN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight font-display">
                Complete Lighting Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Modern Spaces</span>
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                {companyData.legalName} is a premier manufacturer and supplier of architectural, commercial, and bespoke decorative LED luminaires. Operating from our manufacturing facility in Hapur and corporate office in Noida, we bridge the gap between creative interior design and optical engineering.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Registered GSTIN</div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5 tracking-wider font-mono">
                    {companyData.gstNumber}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Manufacturing Base</div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    Hapur & Noida, UP
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all group font-accent uppercase tracking-wider shadow-sm"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-amber-400" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                  alt="SPARIN In-House Luminaire Engineering"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-amber-400 uppercase tracking-wider font-semibold">In-House Manufacturing</div>
                    <div className="text-sm font-bold text-white">Aviation-Grade Thermal Aluminum Extrusions</div>
                  </div>
                  <Link to="/about" className="text-xs text-amber-400 font-medium hover:underline">
                    View Story →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Brief Overview of Lighting Solutions (Preview linking to /solutions and /products) */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200/70 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Lighting Solutions Overview</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
                Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Architectural Impact</span>
              </h2>
              <p className="text-sm text-slate-600 font-light">
                Discover our signature lighting categories engineered for corporate headquarters, hospitality spaces, and modern architecture.
              </p>
            </div>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-amber-500 shadow-sm transition-all whitespace-nowrap self-start md:self-end font-accent"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewSolutions.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-amber-400 border border-amber-400/30">
                      {category.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {category.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/products"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-amber-50 hover:text-amber-700 border border-slate-200 flex items-center justify-between group/link transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Brand Strengths & Advantages (Summary linking to /expertise) */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
              The SPARIN Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Why Corporate Architects & Builders Partner With Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Glare-Free UGR &lt; 19</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Optical micro-prismatic diffusers engineered to eliminate eye fatigue in agile work environments.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Custom Extrusion Joinery</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Bespoke curved, geometric, and oversized ring fixtures tailored directly to CAD drawings.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Tier-1 LED Engines</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                High-CRI &gt; 90+ chipsets powered by Tridonic/Philips drivers with up to 5-year replacement warranty.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Dialux 3D Simulations</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Comprehensive photometric calculations and fixture schedules before fabrication begins.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>Explore Our Complete Technical Capabilities & Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Selected Featured Projects (Preview linking to /projects) */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200/70 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Installations</span>
              </h2>
              <p className="text-sm text-slate-600 font-light">
                A selection of high-profile corporate workspaces and commercial architectures illuminated by SPARIN.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-amber-500 shadow-sm transition-all whitespace-nowrap self-start md:self-end font-accent"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{project.location}</span>
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/80 backdrop-blur-md text-white border border-amber-300/40">
                      {project.area}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 font-light line-clamp-2">
                    {project.luminaires}
                  </p>
                  
                  <Link
                    to="/projects"
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center justify-between transition-colors pt-3 border-t border-slate-100"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Client Collaborations */}
      <ClientShowcase />

      {/* 7. High-Impact Contact CTA Banner (Contrasting Luxury Bar) */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay opacity-60"></div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 font-accent px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ready to Transform Your Space?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-display">
            Let's Bring Your <span className="text-gradient">Lighting Vision to Life</span>
          </h2>

          <p className="text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Discuss your requirements with our lighting designers. Get free Dialux photometrics, false ceiling coordination, and transparent manufacturer pricing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-luminaire-gradient hover:bg-luminaire-gradient-hover shadow-glow-gold hover:shadow-glow-amber transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Our Lighting Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
            >
              <span>Request Instant Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
