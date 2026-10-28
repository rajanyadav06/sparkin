import React from 'react';
import { Compass, Layers, Cpu, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { projectProcessSteps } from '../../data/projectsData';

export default function ProjectProcess() {
  const iconMap = {
    Compass: Compass,
    Layers: Layers,
    Cpu: Cpu,
    CheckCircle2: CheckCircle2
  };

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-200/70">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Project Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
            Our 4-Stage <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Lighting Delivery Process</span>
          </h2>

          <p className="text-base text-slate-600 font-light max-w-2xl mx-auto">
            From initial photometric calculation to final luminaire installation, we ensure predictable timelines, zero light spill, and flawless on-site commissioning.
          </p>
        </div>

        {/* Process Cards Grid (Inspired by Morpho Dimensions Step Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectProcessSteps.map((stepItem, index) => {
            const IconComp = iconMap[stepItem.iconName] || Layers;
            return (
              <div 
                key={stepItem.step}
                className="relative rounded-2xl bg-white border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-display">
                      {stepItem.step}
                    </span>
                    
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold font-accent">
                      <Clock className="w-3 h-3" />
                      <span>{stepItem.timeline}</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-amber-600 mb-5 group-hover:bg-amber-50 group-hover:scale-105 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-accent mb-1">
                    {stepItem.phase}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Quality Check Gate</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic">
            * Timelines subject to project scale, false ceiling coordinate readiness, and custom profile requirements.
          </p>
        </div>

      </div>
    </section>
  );
}
