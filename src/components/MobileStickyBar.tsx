import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside 
      aria-label="Quick contact mobile bar" 
      className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#050508]/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 h-11 items-center">
        
        {/* Direct Phone Dial Button */}
        <a
          href={BUSINESS_INFO.phoneTelLink}
          className="flex items-center justify-center gap-1.5 h-full rounded-lg text-xs font-semibold text-[#050508] silver-gradient-bg active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-[#050508] fill-current" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hello%20Royal%20Event%20and%20Catering%20Management,%20I%20would%20like%20to%20enquire%20about%20event%20planning%20in%20Nagercoil.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 h-full rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Instagram Profile */}
        <a
          href={BUSINESS_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 h-full rounded-lg text-xs font-semibold text-pink-300 bg-[#12121A] border border-slate-800 hover:border-pink-500/50 active:scale-95 transition-all shadow-sm"
        >
          <Instagram className="w-3.5 h-3.5 text-pink-400" />
          <span>Insta</span>
        </a>

      </div>
    </aside>
  );
};
