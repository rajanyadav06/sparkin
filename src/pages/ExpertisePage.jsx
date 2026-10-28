import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/Common/PageHeader';
import ProjectProcess from '../components/Process/ProjectProcess';
import FAQAccordion from '../components/FAQ/FAQAccordion';
import { Cpu, ShieldCheck, Layers, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExpertisePage({ onOpenConsultation }) {
  const technicalPillars = [
    {
      title: "Dialux 3D Photometrics & Lux Calculations",
      desc: "Our lighting design team generates rigorous computer simulations modeling room surface reflectances, false ceiling drops, and work-plane lux uniformity to ensure compliance with NBC and international green building standards.",
      icon: Layers
    },
    {
      title: "Custom Extrusion CNC Fabrication",
      desc: "In-house precision cutting, seamless mitred corners, and electrostatic powder coating in any custom architectural finish (Matte Black, Textured White, Champagne Gold, or bespoke RAL shades).",
      icon: Cpu
    },
    {
      title: "Glare Control & UGR < 19 Optical Diffusers",
      desc: "Micro-prismatic optical plates and deep-recessed baffles that redirect beam spread precisely onto task areas while shielding direct line-of-sight glare from computer monitors and occupants.",
      icon: Sliders
    },
    {
      title: "5-Year Manufacturer Replacement Warranty",
      desc: "We pair tier-1 LED arrays (Samsung, Osram) with certified flicker-free drivers (Tridonic, Philips). Every production batch undergoes multi-hour continuous burn-in testing before dispatch.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <PageHeader
        title="Our Technical Expertise"
        subtitle="Explore our verified manufacturing capabilities, photometric engineering standards, and structured 4-stage project delivery methodology."
        breadcrumb="Our Expertise"
        tag="Engineering & Capabilities"
      />

      {/* 1. Core Engineering Capabilities Grid */}
      <section className="py-24 bg-white relative border-b border-slate-200/70">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Precision In Every Millimeter
            </h2>
            <p className="text-sm text-slate-600 font-light">
              From false ceiling coordination to final luminaire photometric testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalPillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-amber-700 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Factory Capability</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Structured 4-Stage Project Process Component */}
      <ProjectProcess />

      {/* 3. Comprehensive FAQs Component */}
      <FAQAccordion />

      {/* 4. Action Banner */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-6">
          <h3 className="text-3xl font-bold text-white font-display">
            Need Expert Advice for Your Lighting Layout?
          </h3>
          <p className="text-sm text-gray-300 font-light">
            Consult our lighting specialists to select the right lumen output, color rendering index, and driver specifications.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation('Technical Lighting Consultation')}
              className="px-8 py-4 rounded-full text-xs font-bold text-white bg-luminaire-gradient shadow-glow-gold hover:shadow-glow-amber uppercase tracking-wider font-accent"
            >
              Discuss Your Technical Requirements
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
