import React from 'react';
import { ShieldCheck, Cpu, Lightbulb, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function BrandPhilosophy({ onOpenConsultation }) {
  const { philosophy } = companyData;

  const pillarIcons = {
    L: Lightbulb,
    U: Sparkles,
    M: Cpu,
    E: ShieldCheck
  };

  return (
    <section id="philosophy" className="py-24 bg-brand-charcoal relative overflow-hidden border-t border-b border-white/5">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Editorial Split Header & Brand Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold font-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About SPARIN / Sparkin Sunlit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display">
              Complete Lighting Solutions for <span className="text-gradient">Modern Spaces</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Sparkin Sunlit Private Limited (SPARIN) is a specialized lighting designer and manufacturer. Operating from our industrial manufacturing facility in Hapur and corporate office in Noida, we bridge the gap between creative architectural intent and precision luminaire engineering.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-xs text-gray-400">Registered GSTIN</div>
                <div className="text-sm font-semibold text-white mt-0.5 tracking-wider font-mono">
                  {companyData.gstNumber}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-xs text-gray-400">Manufacturing Base</div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Hapur & Noida, UP
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-white transition-colors group"
              >
                <span>Request Company Capability & Product Catalog</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-luxury group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                alt="SPARIN Luminaire Manufacturing & Testing"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-brand-gold uppercase tracking-wider font-semibold">Engineered in India</div>
                  <div className="text-sm font-bold text-white">Precision Architectural Luminaires</div>
                </div>
                <div className="text-xs px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 font-medium">
                  ISO Certified Standards
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Morpho Dimensions-Inspired Design Philosophy Grid (L.U.M.E.) */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold font-accent">
              Engineering DNA
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {philosophy.heading}
            </h3>
            <p className="text-sm text-gray-400 font-light">
              {philosophy.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.pillars.map((pillar) => {
              const IconComponent = pillarIcons[pillar.letter] || Sparkles;
              return (
                <div 
                  key={pillar.letter}
                  className="p-8 rounded-2xl bg-brand-card/90 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60"></div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-extrabold text-gradient font-display">
                        {pillar.letter}
                      </div>
                      <div className="p-2.5 rounded-lg bg-brand-gold/10 text-brand-gold">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3">
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-brand-gold font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Factory Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
