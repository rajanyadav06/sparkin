import React from 'react';
import { Phone, MessageSquareText } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function FloatingQuickActions({ onOpenConsultation }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Direct Call Button */}
      <a
        href={`tel:${companyData.contact.primaryPhone}`}
        className="w-12 h-12 rounded-full bg-brand-charcoal/95 border border-white/20 text-brand-gold hover:text-white shadow-luxury hover:scale-105 transition-all flex items-center justify-center group"
        title="Direct Line to SPARIN Sales"
        aria-label="Call SPARIN"
      >
        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </a>

      {/* Get Free Consultation Button (Inspired by Morpho Dimensions Floating Bar) */}
      <button
        onClick={() => onOpenConsultation()}
        className="hidden sm:flex items-center gap-2.5 px-5 py-3 rounded-full bg-luminaire-gradient text-white text-xs md:text-sm font-semibold shadow-glow-gold hover:shadow-glow-amber hover:scale-105 transition-all"
      >
        <MessageSquareText className="w-4 h-4" />
        <span>Get a Free Consultation</span>
      </button>
    </div>
  );
}
