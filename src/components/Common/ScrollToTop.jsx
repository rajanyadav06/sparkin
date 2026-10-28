import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'SPARIN – Complete Lighting Solutions | Architectural & Commercial LED Lighting',
  '/about': 'About Us | SPARIN Complete Lighting Solutions',
  '/solutions': 'Lighting Solutions | SPARIN Complete Lighting Solutions',
  '/products': 'Architectural Luminaires & Products | SPARIN',
  '/projects': 'Featured Projects & Portfolio | SPARIN Complete Lighting Solutions',
  '/expertise': 'Our Technical Expertise & Manufacturing | SPARIN',
  '/contact': 'Contact Us | SPARIN Complete Lighting Solutions'
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    document.title = pageTitles[pathname] || 'SPARIN – Complete Lighting Solutions';
  }, [pathname]);

  return null;
}
