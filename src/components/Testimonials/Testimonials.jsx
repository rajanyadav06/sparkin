import React from 'react';
import { Sparkles, Star, Quote, CheckCircle2 } from 'lucide-react';
import { clientTestimonials } from '../../data/clientsData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold font-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-display">
            What Our Partners <span className="text-gradient">Say About SPARIN</span>
          </h2>

          <p className="text-sm text-gray-400 font-light">
            Genuine testimonials from facility leaders, architects, and workplace directors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-brand-charcoal p-8 border border-white/10 hover:border-brand-gold/40 shadow-card-dark transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-brand-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors" />
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-light italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t.author}
                  </h4>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {t.company} • <span className="text-brand-gold">{t.location}</span>
                  </div>
                </div>

                <div className="p-1 rounded-full bg-brand-gold/10 text-brand-gold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
