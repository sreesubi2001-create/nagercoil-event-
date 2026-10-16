import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030306] border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission with Text Wordmark */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col text-left space-y-1">
              <span className="font-royal text-xl sm:text-2xl font-bold tracking-tight silver-gradient-text leading-none">
                ROYAL EVENT MANAGEMENT
              </span>
              <span className="text-xs tracking-[0.24em] uppercase font-semibold text-slate-400 leading-tight">
                & Catering Services
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier event planners and catering managers based in Nagercoil, Kanniyakumari, Tamil Nadu. Bringing royal stage grandeur, Thovalai fresh flowers, and authentic banquet catering to life.
            </p>

            <div className="p-3 rounded-lg bg-[#08080E] border border-slate-800 text-[11px] tracking-widest text-slate-300 font-semibold uppercase">
              WE PLAN • WE SERVE • YOU CELEBRATE
            </div>

            <div className="pt-1 flex items-center gap-4 text-xs flex-wrap">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 95855 88810</span>
              </a>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hello%20Royal%20Event%20and%20Catering%20Management`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@royal_event_organizers</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-royal text-sm font-semibold text-white tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Nagercoil Heritage
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Wedding Stages & Catering
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Mandapam & Feast Gallery
                </a>
              </li>
              <li>
                <a href="#planner" className="hover:text-white transition-colors">
                  Custom Package Planner
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Service Locations & Office */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-royal text-sm font-semibold text-white tracking-wider uppercase">
              Service Network
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available throughout Kanniyakumari district and South Tamil Nadu:
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>• Nagercoil Town, Vadasery, Asambu</p>
              <p>• Kanniyakumari, Marthandam, Thuckalay</p>
              <p>• Colachel, Kulasekharam, Thingalnagar</p>
              <p>• Tirunelveli & Bordering Kerala Venues</p>
            </div>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Nagercoil, Kanniyakumari, Tamil Nadu 629001</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Royal Event and Catering Management, Nagercoil. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              Instagram @royal_event_organizers
            </a>
            <span aria-hidden="true">·</span>
            <span>Kanniyakumari, Tamil Nadu</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
