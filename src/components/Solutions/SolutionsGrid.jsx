import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { productCategories } from '../../data/productsData';
import ProductDetailModal from './ProductDetailModal';

export default function SolutionsGrid({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filters = [
    { id: 'all', label: 'All Solutions' },
    { id: 'hanging-lights', label: 'Hanging Lights' },
    { id: 'led-ring-lights', label: 'Ring Pendants' },
    { id: 'chandeliers', label: 'Chandeliers' },
    { id: 'pendant-lights', label: 'Pendants' },
    { id: 'panel-lights', label: 'LED Panels' },
    { id: 'linear-lights', label: 'Linear & Acoustic' },
    { id: 'custom-solutions', label: 'Custom' }
  ];

  const filteredCategories = activeFilter === 'all' 
    ? productCategories 
    : productCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Product Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
            Precision Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Lighting Categories</span>
          </h2>

          <p className="text-base text-slate-600 font-light max-w-2xl mx-auto">
            Explore SPARIN's genuine manufacturing portfolio—crafted from aerospace aluminum extrusions, high-CRI LED engines, and glare-free optical diffusers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 font-accent ${
                activeFilter === filter.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div 
              key={category.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-amber-400 border border-amber-400/30">
                      {category.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display">
                    {category.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {category.shortDesc}
                  </p>

                  {/* Top Models Preview */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-accent font-medium">
                      Verified Models
                    </div>
                    {category.products.slice(0, 3).map((prod, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span className="truncate">{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-amber-50 hover:text-amber-700 border border-slate-200 transition-all flex items-center justify-between group/btn"
                >
                  <span>View Technical Specs & IES</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-600 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Solution Footer Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900 font-display">
              Need a Custom Luminaire Extrusion or Special Color Finish?
            </h4>
            <p className="text-xs text-slate-600 font-light">
              We fabricate custom profiles according to your CAD drawings, false ceiling conditions, and lumen targets.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Custom Extrusions & Bespoke Lighting')}
            className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-luminaire-gradient shadow-glow-gold hover:shadow-glow-amber transition-all whitespace-nowrap font-accent uppercase tracking-wider"
          >
            Consult Our Engineering Team
          </button>
        </div>

      </div>

      {/* Technical Spec Modal */}
      <ProductDetailModal
        category={selectedCategory}
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onRequestConsultation={onOpenConsultation}
      />
    </section>
  );
}
