import React, { useState } from 'react';
import { Sparkles, MapPin, Maximize2, Layers, ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '../../data/projectsData';

export default function FeaturedProjects({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Corporate Offices', 'Commercial Complexes', 'Luxury Residences'];

  const filteredProjects = activeTab === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 font-accent px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
            Featured Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Installations</span>
          </h2>

          <p className="text-base text-slate-600 font-light max-w-2xl mx-auto">
            A glimpse into commercial headquarters, agile workspaces, and private penthouses illuminated with custom SPARIN luminaires.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 font-accent ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Morpho Dimensions-Inspired Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project) => {
            const colSpan = project.isLarge 
              ? 'lg:col-span-6 md:col-span-2' 
              : 'lg:col-span-3 md:col-span-1';

            return (
              <div
                key={project.id}
                className={`${colSpan} group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col`}
              >
                {/* Image Container with Hover Scale */}
                <div className="relative h-72 md:h-80 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

                  {/* Top Location & Area Badges (Matching Morpho Dimensions' pill tags) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{project.location}</span>
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/80 backdrop-blur-md text-white border border-amber-300/40">
                      <Maximize2 className="w-3 h-3" />
                      <span>{project.area}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold font-accent">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Card Info */}
                <div className="p-5 bg-white border-t border-slate-100 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                      <Layers className="w-3.5 h-3.5 text-amber-600" />
                      <span>Installed Luminaires:</span>
                    </div>
                    <p className="text-xs text-slate-600 font-light line-clamp-2">
                      {project.luminaires}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`Inquiry for project style: ${project.title}`)}
                    className="pt-3 text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center justify-between group/link transition-colors border-t border-slate-100"
                  >
                    <span>Request Similar Lighting Spec</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-600 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
