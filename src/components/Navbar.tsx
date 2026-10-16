import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface NavbarProps {
  onOpenEnquiry: (prefilledService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Package Planner', href: '#planner' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050508]/95 backdrop-blur-md border-b border-slate-800 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Clean typographic brand wordmark */}
        <a 
          href="#" 
          aria-label="Royal Event and Catering Management"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-sm group select-none"
        >
          <div className="flex flex-col text-left">
            <span className="font-royal text-base sm:text-lg md:text-xl font-bold tracking-tight silver-gradient-text group-hover:text-white transition-colors leading-none">
              ROYAL EVENT MANAGEMENT
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-semibold text-slate-400 leading-tight mt-1">
              & Catering Services
            </span>
          </div>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-slate-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions - Instagram, Call, Enquire */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          
          {/* Instagram button */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Instagram @royal_event_organizers"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0F0F17] border border-slate-800 hover:border-pink-500/60 text-slate-300 hover:text-pink-400 transition-all shadow-sm"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Phone hotline */}
          <a
            href={BUSINESS_INFO.phoneTelLink}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-[#0F0F17] border border-slate-700/80 hover:border-slate-400 hover:bg-[#161622] transition-all whitespace-nowrap shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="tabular-nums">9585588810</span>
          </a>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenEnquiry()}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 active:scale-95 transition-all shadow-md whitespace-nowrap"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center sm:hidden gap-2">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-lg bg-slate-900 text-pink-400 border border-slate-800"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={BUSINESS_INFO.phoneTelLink}
            aria-label="Call Royal Event Management"
            className="p-2 rounded-lg bg-slate-900 text-amber-300 border border-slate-800"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-[#07070B] px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#12121A] text-pink-400 border border-slate-700"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @royal_event_organizers</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#12121A] text-slate-200 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: 9585588810</span>
            </a>
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hello%20Royal%20Event%20and%20Catering%20Management,%20I%20am%20looking%20for%20event%20planning%20in%20Nagercoil`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-emerald-700/90 hover:bg-emerald-700 text-white"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-[#050508] silver-gradient-bg"
            >
              Request Custom Package
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
