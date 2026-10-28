import React from 'react';
import { Sparkles } from 'lucide-react';
import { verifiedClients } from '../../data/clientsData';
import { clientLogos } from './ClientLogos';

export default function ClientShowcase() {
  return (
    <section id="clients" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/70">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted By Industry Leaders</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-display">
            Collaborations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Client Engagements</span>
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-light">
            Providing custom architectural and commercial luminaires for modern workplace environments across India.
          </p>
        </div>

        {/* Client Logos / Brand Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {verifiedClients.map((client, index) => {
            const logo = clientLogos[client] || clientLogos[client.replace(/\s+/g, '')];

            return (
              <div
                key={index}
                title={client}
                className="h-20 sm:h-22 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:bg-white hover:shadow-lg flex items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 group cursor-default"
              >
                <div className="w-full flex items-center justify-center text-slate-800 transition-transform duration-300 group-hover:scale-108">
                  {logo ? logo : (
                    <span className="font-bold text-sm text-slate-800">{client}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Disclaimer (Verbatim from current website) */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-[11px] text-slate-500 leading-relaxed font-light">
            References reflect projects, fixtures, specifications, and professional engagements conducted with individuals, architectural teams, or general contractors associated with these organizations.
          </p>
        </div>

      </div>
    </section>
  );
}
