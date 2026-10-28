import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Building2, Crown, Store, Wrench, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';
import PageHeader from '../components/Common/PageHeader';

export default function SolutionsPage({ onOpenConsultation }) {
  const solutions = [
    {
      id: "workplace",
      title: "Architectural Workplace Lighting",
      tag: "Corporate & Enterprise",
      icon: Building2,
      desc: "Comprehensive illumination strategies designed for high-performance corporate environments. We engineer continuous linear light runs, low-glare deep recessed downlights, and biophilic circadian tunable white systems that enhance focus while eliminating screen glare.",
      features: [
        "Flicker-free UGR < 19 glare control compliant with WELL standards",
        "Direct/indirect dual-emission for balanced ceiling luminance",
        "Seamless corner joinery with zero dark spots or light leakage",
        "Integrated DALI-2, Zigbee, and 0-10V smart daylight harvesting"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      targetPage: "/products"
    },
    {
      id: "decorative",
      title: "Signature Suspension & Lobbies",
      tag: "Statement Luminaires",
      icon: Crown,
      desc: "Artistic, oversized suspension pieces that command attention in entrance atriums, double-height reception areas, and luxury hospitality lounges. We combine sculptural brushed brass, crystal facets, and multi-tier floating halo rings up to 3 meters in diameter.",
      features: [
        "Custom diameter ring pendants from 600mm to 3000mm",
        "Aircraft cable suspension with micro-adjustable leveling",
        "High-purity anodized and electroplated metallic finishes",
        "Museum-grade CRI > 95 Ra for true architectural texture rendering"
      ],
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=80",
      targetPage: "/products"
    },
    {
      id: "commercial",
      title: "Commercial & Retail Illumination",
      tag: "High Visual Efficacy",
      icon: Store,
      desc: "Dynamic, high-lumen commercial lighting fixtures engineered to elevate retail merchandise, commercial complexes, and hospitality zones. Features high color saturation (R9 > 50) and precise beam angles from narrow accent spots to wide wallwashers.",
      features: [
        "Accent track lights with interchangeable optical lenses (15° to 60°)",
        "Deep recessed wallwashers for uniform vertical wall illumination",
        "Long operational lifespans exceeding 50,000 hours with thermal heat-sinks",
        "Low maintenance modular driver compartments"
      ],
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
      targetPage: "/products"
    },
    {
      id: "bespoke",
      title: "Custom Bespoke Luminaire Engineering",
      tag: "Tailored to CAD Drawings",
      icon: Wrench,
      desc: "Turnkey bespoke engineering where off-the-shelf catalog products cannot meet the architect's design intent. We custom-extrude curved aluminum profiles, wave geometries, and acoustic PET felt integrated sound-dampening luminaires.",
      features: [
        "Curvilinear, S-curve, and circular continuous profiles",
        "Custom powder-coat colors matched to international RAL swatches",
        "Acoustic felt integration with NRC > 0.85 sound absorption",
        "Full structural canopy calculation for seismic and ceiling loads"
      ],
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
      targetPage: "/contact"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <PageHeader
        title="Complete Lighting Solutions"
        subtitle="End-to-end luminaire systems designed and fabricated for India's premier commercial headquarters, retail showcases, and architectural spaces."
        breadcrumb="Lighting Solutions"
        tag="Application Domains"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 space-y-24">
          
          {solutions.map((sol, index) => {
            const IconComp = sol.icon;
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={sol.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 md:p-12 rounded-3xl ${index % 2 === 1 ? 'bg-slate-50 border border-slate-200/80' : 'bg-white border border-slate-200/50'}`}
              >
                
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 border border-amber-400/30">
                        {sol.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-3xl font-extrabold text-slate-900 font-display">
                    {sol.title}
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    {sol.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-luminaire-gradient shadow-glow-gold hover:shadow-glow-amber transition-all uppercase tracking-wider font-accent"
                    >
                      <span>Explore Relevant Luminaires</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenConsultation(sol.title)}
                      className="px-6 py-3 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 uppercase tracking-wider font-accent transition-colors"
                    >
                      Enquire for Solution
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-6">
          <h3 className="text-3xl font-bold text-white font-display">
            Require a Custom Dialux Photometric Schedule?
          </h3>
          <p className="text-sm text-gray-300 font-light">
            Share your architectural CAD layouts. We calculate accurate lux level distributions, fixture counts, and bill of quantities.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold text-white bg-luminaire-gradient shadow-glow-gold uppercase tracking-wider font-accent"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
