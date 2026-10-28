import React, { useEffect } from 'react';
import { X, Check, Sliders, Zap, Sun, Shield, Layers, ArrowRight } from 'lucide-react';

export default function ProductDetailModal({ category, isOpen, onClose, onRequestConsultation }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 font-accent">
              Architectural Luminaire Specification
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[82vh] overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 rounded-xl overflow-hidden border border-slate-200 shadow-md">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-56 md:h-64 object-cover" 
              />
            </div>
            
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                {category.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
                {category.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {category.shortDesc}
              </p>
            </div>
          </div>

          {/* Sub-product line checklist */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-accent">
              Key Luminaire Models in This Category
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {category.products.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="p-0.5 rounded-full bg-amber-100 text-amber-700">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2 font-display">
              <Sliders className="w-4 h-4 text-amber-600" />
              <span>Photometric & Electrical Specifications</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                  <Sun className="w-3.5 h-3.5 text-amber-600" />
                  <span>Color Temp (CCT)</span>
                </div>
                <div className="text-xs font-semibold text-slate-900">{category.specs.cct}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  <span>Color Rendering (CRI)</span>
                </div>
                <div className="text-xs font-semibold text-slate-900">{category.specs.cri}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Power Rating</span>
                </div>
                <div className="text-xs font-semibold text-slate-900">{category.specs.wattage}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 mb-1">Lumen Package</div>
                <div className="text-xs font-semibold text-slate-900">{category.specs.lumenOutput}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 mb-1">Mounting Options</div>
                <div className="text-xs font-semibold text-slate-900">{category.specs.mounting}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 mb-1">Dimming / Protocol</div>
                <div className="text-xs font-semibold text-slate-900">{category.specs.dimming}</div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Need custom diameter, wattage, or Dialux IES files for this fixture?
            </div>
            
            <button
              onClick={() => {
                onClose();
                onRequestConsultation(category.name);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-luminaire-gradient hover:bg-luminaire-gradient-hover shadow-glow-gold flex items-center justify-center gap-2 uppercase tracking-wider font-accent"
            >
              <span>Request Quote / Custom BOQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
