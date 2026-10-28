import React, { useState } from 'react';
import { Plus, Minus, Sparkles, HelpCircle } from 'lucide-react';
import { faqItems } from '../../data/faqData';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default like Morpho

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Questions</span>
          </h2>

          <p className="text-sm text-slate-600 font-light">
            Answers regarding custom luminaire sizing, warranties, photometric simulations, and pan-India project execution.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all duration-300 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900 group-hover:text-amber-700 transition-colors font-display pr-4">
                    Q. {item.question}
                  </span>
                  
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-amber-100 text-amber-700 rotate-180' : 'bg-slate-200/80 text-slate-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-200 animate-fadeIn bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
