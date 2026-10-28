import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { productCategories } from '../../data/productsData';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Lighting Solutions", path: "/solutions" },
    { name: "Products Catalog", path: "/products" },
    { name: "Featured Projects", path: "/projects" },
    { name: "Our Expertise", path: "/expertise" },
    { name: "Contact & Enquiry", path: "/contact" }
  ];

  return (
    <footer className="bg-brand-dark border-t border-white/10 text-gray-400 text-xs font-light relative">
      
      {/* Back to Top Floating Tab */}
      <div className="flex justify-center -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-brand-charcoal border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:border-brand-gold/40 shadow-lg transition-all"
        >
          <ArrowUp className="w-3.5 h-3.5 text-brand-gold" />
          <span>Back to Top</span>
        </button>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-8 pb-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          
          {/* Brand Bio Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block p-2 rounded-lg bg-white/5 border border-white/5">
              <img 
                src="/assets/sparin-logo.png" 
                alt="SPARIN Complete Lighting Solutions" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-300 text-xs leading-relaxed max-w-sm">
              {companyData.legalName} is a manufacturer and distributor of premium architectural, commercial, and bespoke decorative LED luminaires. Delivering turnkey lighting precision across corporate, retail, and luxury environments.
            </p>

            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 max-w-sm">
              <div className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold font-accent">
                Government Compliance
              </div>
              <div className="text-xs text-brand-gold font-mono font-medium mt-0.5">
                GSTIN: {companyData.gstNumber}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-accent">
              Pages
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-gold transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Category Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-accent">
              Lighting Solutions
            </h4>
            <ul className="space-y-2">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link to="/products" className="hover:text-brand-gold transition-colors block py-0.5">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us / Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-accent">
              Factory & Contacts
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{companyData.contact.address.factory}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${companyData.contact.primaryPhone}`} className="hover:text-white">
                  +91 98118 17833 / +91 95608 16900
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white">
                  {companyData.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-luminaire-gradient shadow-glow-gold hover:shadow-glow-amber transition-all flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* SEO Keyword & City Link Index (Matching Morpho Dimensions' footer) */}
        <div className="pt-8 pb-6 border-b border-white/5 text-[11px] text-gray-500 leading-relaxed space-y-2">
          <p>
            Architectural Lighting Solutions India | LED Ring Pendant Manufacturer Noida | Continuous Linear Lighting Gurgaon | Custom Chandelier Fabricator Delhi NCR | Office Interior Lighting Bangalore | Commercial Lighting Solutions Hapur | Anti-Glare UGR19 Downlights | Dialux Lighting Design & Photometrics.
          </p>
        </div>

        {/* Copyright & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Sparkin Sunlit Private Limited (SPARIN). All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Terms of Supply</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Warranty Policy (5-Year)</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
