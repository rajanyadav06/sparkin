import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/Common/PageHeader';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import ClientShowcase from '../components/Clients/ClientShowcase';
import { Building2, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectsPage({ onOpenConsultation }) {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <PageHeader
        title="Featured Projects Portfolio"
        subtitle="Explore our portfolio of corporate headquarters, commercial towers, and modern workspaces illuminated with SPARIN's engineered luminaires."
        breadcrumb="Projects"
        tag="Commercial Installations"
      />

      {/* Projects Showcase with Category Filtering */}
      <FeaturedProjects onOpenConsultation={onOpenConsultation} />

      {/* Verified Enterprise Collaborations */}
      <ClientShowcase />

      {/* Project Consultation Footer */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-6">
          <h3 className="text-3xl font-bold text-white font-display">
            Have a Project in Design or Tender Phase?
          </h3>
          <p className="text-sm text-gray-300 font-light">
            Share your space parameters and expected completion date. Our lighting engineering team will coordinate with your project management consultants (PMC).
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold text-white bg-luminaire-gradient shadow-glow-gold uppercase tracking-wider font-accent"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
