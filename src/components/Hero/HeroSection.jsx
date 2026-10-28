import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark">
      {/* Background Architectural Photography with Crisp Lighting Details */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=95" 
          alt="SPARIN Architectural Lighting Installation"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle balanced overlay ensuring crisp architectural visibility while keeping text readable */}
        <div className="absolute inset-0 bg-slate-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline - enlarged as requested */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] font-display">
            Lighting Spaces. <br />
            <span className="text-gradient">Inspiring Experiences.</span>
          </h1>

          {/* Balanced gap between text and buttons */}
          <div className="mt-10 sm:mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            <Link
              to="/products"
              className="w-full sm:w-auto px-9 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-luminaire-gradient hover:bg-luminaire-gradient-hover shadow-glow-gold hover:shadow-glow-amber transition-all duration-300 flex items-center justify-center gap-2 group uppercase tracking-wider font-accent"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider font-accent"
            >
              <span>Discuss Your Project</span>
            </button>
          </div>
        </div>

        {/* Morpho Dimensions-Inspired Integrated Stats Counter Grid */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-white/10 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            
            <div className="space-y-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-gradient font-display">
                {companyData.stats[0].value}
              </div>
              <p className="text-xs md:text-sm text-gray-300 font-light">
                Years of Manufacturing Excellence
              </p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-gradient font-display">
                {companyData.stats[1].value}
              </div>
              <p className="text-xs md:text-sm text-gray-300 font-light">
                Architectural & Office Projects
              </p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-gradient font-display">
                {companyData.stats[2].value}
              </div>
              <p className="text-xs md:text-sm text-gray-300 font-light">
                Enterprise & Global Clients
              </p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-gradient font-display">
                100%
              </div>
              <p className="text-xs md:text-sm text-gray-300 font-light">
                Custom Extrusion In-House Fabrication
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
