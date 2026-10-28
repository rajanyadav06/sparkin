import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Our Expertise", path: "/expertise" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-brand-dark/65 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Preserved official white logo against dark frosted backdrop */}
        <Link 
          to="/"
          className="flex items-center group focus:outline-none"
        >
          <img 
            src="/assets/sparin-logo.png" 
            alt="SPARIN Complete Lighting Solutions" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Multi-Page Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wider uppercase font-accent transition-all duration-200 py-1 border-b-2 ${
                  isActive 
                    ? 'text-brand-gold border-brand-gold' 
                    : 'text-gray-300 border-transparent hover:text-white hover:border-brand-gold/40'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Consultation Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-luminaire-gradient hover:bg-luminaire-gradient-hover shadow-glow-gold hover:shadow-glow-amber transition-all duration-300 flex items-center gap-2 uppercase tracking-wider font-accent"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-200 hover:text-brand-gold focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-charcoal/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold py-3 border-b border-white/5 uppercase tracking-wider font-accent flex items-center justify-between ${
                    isActive ? 'text-brand-gold' : 'text-gray-200 hover:text-brand-gold'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </NavLink>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full text-center text-xs font-bold text-white bg-luminaire-gradient shadow-glow-gold uppercase tracking-wider font-accent"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
