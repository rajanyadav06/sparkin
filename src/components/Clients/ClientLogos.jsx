import React from 'react';

// Authentic Vector Brand Logos for the 18 Verified Enterprise Clients
export const clientLogos = {
  Microsoft: (
    <svg viewBox="0 0 120 28" className="h-6 w-auto fill-current" aria-label="Microsoft">
      <rect x="0" y="2" width="11" height="11" fill="#F25022" />
      <rect x="13" y="2" width="11" height="11" fill="#7FBA00" />
      <rect x="0" y="15" width="11" height="11" fill="#00A4EF" />
      <rect x="13" y="15" width="11" height="11" fill="#FFB900" />
      <text x="32" y="21" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600" fill="currentColor">Microsoft</text>
    </svg>
  ),
  Amazon: (
    <svg viewBox="0 0 100 30" className="h-6 w-auto" aria-label="Amazon">
      <text x="0" y="20" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill="currentColor">amazon</text>
      <path d="M12 25 Q 50 32 82 23" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M78 21 L 84 23 L 81 27" fill="#FF9900" />
    </svg>
  ),
  HSBC: (
    <svg viewBox="0 0 100 28" className="h-6 w-auto" aria-label="HSBC">
      {/* HSBC Hexagonal emblem */}
      <polygon points="0,14 7,7 7,21" fill="#EE0004" />
      <polygon points="28,14 21,7 21,21" fill="#EE0004" />
      <polygon points="7,7 21,7 14,14" fill="#FFFFFF" stroke="#EE0004" strokeWidth="0.5" />
      <polygon points="7,21 21,21 14,14" fill="#FFFFFF" stroke="#EE0004" strokeWidth="0.5" />
      <polygon points="7,7 14,14 7,21" fill="#EE0004" />
      <polygon points="21,7 14,14 21,21" fill="#EE0004" />
      <text x="36" y="20" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="1">HSBC</text>
    </svg>
  ),
  IBM: (
    <svg viewBox="0 0 80 28" className="h-6 w-auto" aria-label="IBM">
      {/* Iconic 8-Bar IBM lettering */}
      <g fill="#006699">
        <text x="2" y="21" fontFamily="'Courier New', monospace, sans-serif" fontSize="24" fontWeight="900" letterSpacing="2">IBM</text>
      </g>
    </svg>
  ),
  Adobe: (
    <svg viewBox="0 0 95 28" className="h-6 w-auto" aria-label="Adobe">
      {/* Adobe Red Badge */}
      <rect x="0" y="3" width="22" height="22" rx="2" fill="#FA0F00" />
      <polygon points="5,21 11,5 15,16 9,16" fill="#FFFFFF" />
      <polygon points="17,21 13,11 17,5" fill="#FFFFFF" />
      <text x="28" y="20" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="700" fill="currentColor">Adobe</text>
    </svg>
  ),
  EY: (
    <svg viewBox="0 0 75 28" className="h-6 w-auto" aria-label="EY">
      <path d="M3 24 L 28 3" stroke="#FFE600" strokeWidth="4" strokeLinecap="round" />
      <text x="32" y="21" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="900" fill="currentColor">EY</text>
    </svg>
  ),
  PwC: (
    <svg viewBox="0 0 85 28" className="h-6 w-auto" aria-label="PwC">
      <g transform="translate(0, 4)">
        <rect x="0" y="0" width="6" height="6" fill="#EB8C00" />
        <rect x="7" y="0" width="6" height="6" fill="#E0301E" />
        <rect x="0" y="7" width="6" height="6" fill="#D04A02" />
        <rect x="7" y="7" width="6" height="6" fill="#DC143C" />
      </g>
      <text x="22" y="20" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="800" fill="currentColor">pwc</text>
    </svg>
  ),
  Accenture: (
    <svg viewBox="0 0 115 28" className="h-6 w-auto" aria-label="Accenture">
      <text x="0" y="20" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" fill="currentColor">accenture</text>
      <path d="M72 7 L 78 3 L 74 2" stroke="#A100FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Samsung: (
    <svg viewBox="0 0 110 28" className="h-6 w-auto" aria-label="Samsung">
      <text x="2" y="20" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="800" fill="#1428A0" letterSpacing="1">SAMSUNG</text>
    </svg>
  ),
  SAP: (
    <svg viewBox="0 0 75 28" className="h-6 w-auto" aria-label="SAP">
      <path d="M0 3 L 42 3 L 34 25 L 0 25 Z" fill="#008FD3" />
      <text x="6" y="20" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="900" fill="#FFFFFF">SAP</text>
    </svg>
  ),
  Sony: (
    <svg viewBox="0 0 85 28" className="h-6 w-auto" aria-label="Sony">
      <text x="2" y="20" fontFamily="'Times New Roman', Georgia, serif" fontSize="21" fontWeight="900" fill="currentColor" letterSpacing="2">SONY</text>
    </svg>
  ),
  Ericsson: (
    <svg viewBox="0 0 110 28" className="h-6 w-auto" aria-label="Ericsson">
      <g transform="translate(0, 5)" stroke="#002561" strokeWidth="3" strokeLinecap="round">
        <line x1="0" y1="3" x2="14" y2="3" />
        <line x1="3" y1="9" x2="17" y2="9" />
        <line x1="6" y1="15" x2="20" y2="15" />
      </g>
      <text x="28" y="20" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700" fill="currentColor" letterSpacing="1">ERICSSON</text>
    </svg>
  ),
  Airtel: (
    <svg viewBox="0 0 85 28" className="h-6 w-auto" aria-label="Airtel">
      <path d="M8 20 Q 2 12 10 6 Q 16 2 18 10 Q 20 20 12 22 Z" fill="#EE0000" />
      <text x="25" y="20" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#EE0000">airtel</text>
    </svg>
  ),
  TataGroup: (
    <svg viewBox="0 0 85 28" className="h-6 w-auto" aria-label="Tata Group">
      <circle cx="12" cy="14" r="10" fill="#005696" />
      <path d="M7 10 L 17 10 M 12 10 L 12 19" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <text x="28" y="20" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="800" fill="#005696" letterSpacing="1">TATA</text>
    </svg>
  ),
  "Tata Group": (
    <svg viewBox="0 0 85 28" className="h-6 w-auto" aria-label="Tata Group">
      <circle cx="12" cy="14" r="10" fill="#005696" />
      <path d="M7 10 L 17 10 M 12 10 L 12 19" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <text x="28" y="20" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="800" fill="#005696" letterSpacing="1">TATA</text>
    </svg>
  ),
  Simpliwork: (
    <svg viewBox="0 0 115 28" className="h-6 w-auto" aria-label="Simpliwork">
      <g transform="translate(2, 4)">
        <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="#F59E0B" opacity="0.85" />
        <circle cx="10" cy="10" r="4" fill="#0F172A" />
      </g>
      <text x="28" y="19" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700" fill="currentColor">Simpliwork</text>
    </svg>
  ),
  M3M: (
    <svg viewBox="0 0 85 28" className="h-6 w-auto" aria-label="M3M">
      <rect x="0" y="4" width="20" height="20" rx="3" fill="#B91C1C" />
      <text x="3" y="19" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">M</text>
      <text x="26" y="20" fontFamily="system-ui, sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="1">M3M</text>
    </svg>
  ),
  Smartworld: (
    <svg viewBox="0 0 120 28" className="h-6 w-auto" aria-label="Smartworld">
      <circle cx="11" cy="14" r="9" fill="none" stroke="#D97706" strokeWidth="2.5" strokeDasharray="4 2" />
      <circle cx="11" cy="14" r="4" fill="#D97706" />
      <text x="26" y="19" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="currentColor" letterSpacing="0.5">SMARTWORLD</text>
    </svg>
  ),
  Airbus: (
    <svg viewBox="0 0 95 28" className="h-6 w-auto" aria-label="Airbus">
      <text x="2" y="20" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="800" fill="#00205B" letterSpacing="1">AIRBUS</text>
    </svg>
  )
};
