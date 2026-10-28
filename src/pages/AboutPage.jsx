import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Factory, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import PageHeader from '../components/Common/PageHeader';
import ClientShowcase from '../components/Clients/ClientShowcase';
import { companyData } from '../data/companyData';

export default function AboutPage({ onOpenConsultation }) {
  const { philosophy } = companyData;

  const coreValues = [
    {
      title: "Optical Ergonomics",
      desc: "Delivering glare-controlled, visual-comfort luminaires that eliminate eye fatigue in commercial and educational environments."
    },
    {
      title: "Precision Manufacturing",
      desc: "In-house CNC extrusion cutting, electrostatic powder coating, and strict component screening using Samsung and Osram LED engines."
    },
    {
      title: "Sustainable Efficiency",
      desc: "High lumen-per-watt efficacy reducing overall building electrical power consumption by up to 70% with long-term 50,000+ hour lifespans."
    },
    {
      title: "Customer-Centric Turnkey Support",
      desc: "End-to-end partnership from 3D Dialux photometric modeling to on-site installation guidance and 5-year full warranty coverage."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <PageHeader 
        title="About SPARIN" 
        subtitle="Crafting light, creating ambiance. Sparkin Sunlit Private Limited is a specialized Indian lighting manufacturer bridging architectural vision with optical engineering."
        breadcrumb="About Us"
        tag="Company Profile & Heritage"
      />

      {/* 1. Company Background & Facility */}
      <section className="py-24 bg-white relative border-b border-slate-200/70">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                <Factory className="w-3.5 h-3.5" />
                <span>Manufacturing & Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-display">
                Engineered in India for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Modern Workspaces</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-light">
                Sparkin Sunlit Private Limited was founded to fulfill the growing demand for architectural-grade, energy-efficient LED luminaires designed specifically for India's corporate headquarters, tech parks, and commercial towers.
              </p>

              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Headquartered with corporate operations in Noida and our industrial manufacturing unit located at Mussoorie Gulawathi Road Industrial Area in Hapur, Uttar Pradesh, we maintain strict quality control over every luminaire that leaves our production floor.
              </p>

              {/* Verified Verification Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Experience</div>
                  <div className="text-xl font-bold text-amber-600 mt-0.5">4+ Years</div>
                  <div className="text-[11px] text-slate-500">Industry Excellence</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Compliance</div>
                  <div className="text-xs font-mono font-bold text-slate-900 mt-1 truncate">09AASCS3172J1ZQ</div>
                  <div className="text-[11px] text-slate-500">Registered GSTIN</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Facilities</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Hapur & Noida</div>
                  <div className="text-[11px] text-slate-500">Production & Corporate</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80" 
                  alt="SPARIN Modern Luminaire Workshop"
                  className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Quality Assurance</div>
                  <div className="text-sm font-bold text-white">Full Photometric & Thermal Burn-In Testing</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                Our Vision
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-light">
                To be India's most trusted partner for architectural luminaire innovation, delivering lighting systems that empower architects and interior designers to sculpt spaces with emotion, elegance, and uncompromised optical comfort.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                Our Mission
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-light">
                To fabricate premium, energy-efficient luminaires combining aviation-grade materials with precision optics; ensuring every installation achieves optimal lux distribution, glare-free ergonomics, and sustained long-term value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-24 bg-white border-t border-b border-slate-200/70 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              The Values That Guide Our Craft
            </h2>
            <p className="text-sm text-slate-600 font-light">
              Built on transparency, engineering rigor, and deep architectural collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Collaborations */}
      <ClientShowcase />

      {/* 5. Consultation Call to Action */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Collaborate With Our Lighting Engineers
          </h2>
          <p className="text-sm text-gray-300 font-light">
            Have an upcoming architectural project? Let us prepare a preliminary luminaire schedule and lux analysis.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-luminaire-gradient shadow-glow-gold hover:shadow-glow-amber uppercase tracking-wider font-accent"
            >
              Get In Touch With Us
            </Link>
            <button
              onClick={() => onOpenConsultation()}
              className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 uppercase tracking-wider font-accent"
            >
              Request Quick Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
