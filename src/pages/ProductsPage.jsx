import React from 'react';
import PageHeader from '../components/Common/PageHeader';
import SolutionsGrid from '../components/Solutions/SolutionsGrid';
import { ArrowRight, Download, FileText } from 'lucide-react';

export default function ProductsPage({ onOpenConsultation }) {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <PageHeader
        title="Products & Luminaire Catalog"
        subtitle="Explore our verified range of architectural LED luminaires, ring pendants, linear profiles, and bespoke chandeliers engineered to international commercial standards."
        breadcrumb="Products"
        tag="Manufactured in India"
      />

      {/* Embedded Complete Product Catalog with Filter Engines and Technical Modals */}
      <SolutionsGrid onOpenConsultation={onOpenConsultation} />

      {/* Catalog Download CTA Bar */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 shrink-0">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  Download Complete Architectural Luminaire Master Catalog
                </h4>
                <p className="text-xs text-slate-600 font-light mt-0.5">
                  Includes photometric curves, IES files, dimensional CAD drawings, and mounting guides.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation('Master Product Catalog Request')}
              className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-luminaire-gradient shadow-glow-gold hover:shadow-glow-amber transition-all whitespace-nowrap uppercase tracking-wider font-accent flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Request Master PDF & IES</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
