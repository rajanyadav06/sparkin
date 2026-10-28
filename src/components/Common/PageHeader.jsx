import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function PageHeader({ title, subtitle, tag = "SPARIN Lighting Solutions", breadcrumb }) {
  return (
    <section className="relative pt-36 pb-20 bg-brand-charcoal overflow-hidden border-b border-white/10">
      {/* Background Architectural Glow & Grid */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1800&q=80" 
          alt={title}
          className="w-full h-full object-cover opacity-20 filter blur-[1px]" 
        />
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-brand-gold" />
          <span className="text-brand-gold font-medium">{breadcrumb || title}</span>
        </nav>

        {/* Tag */}
        {tag && (
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold font-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{tag}</span>
          </div>
        )}

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight font-display mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}
