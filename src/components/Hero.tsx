
import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Instagram,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';
import heroWeddingStage from '../assets/images/hero_wedding_stage_1791977326183.jpg';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800 bg-[#050508]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-slate-400/10 via-slate-700/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Nagercoil & Kanniyakumari</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-300 font-medium">
                Event & Catering Management
              </span>
            </div>

            <h1 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.18] tracking-tight text-balance">
              Crafting{' '}
              <span className="silver-gradient-text">
                Royal Celebrations
              </span>{' '}
              That Live in Memory Forever
            </h1>

            <div className="p-3.5 rounded-xl bg-[#0C0C14] border border-slate-800 text-xs sm:text-sm font-semibold tracking-widest text-slate-200 uppercase flex items-center justify-between">
              <span>WE PLAN</span>
              <span className="text-amber-400">✦</span>
              <span>WE SERVE</span>
              <span className="text-amber-400">✦</span>
              <span>YOU CELEBRATE</span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From majestic South Indian wedding mandapams and luxury
              reception backdrops to royal banquet catering feasts across
              Nagercoil and the entire Kanniyakumari district.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 py-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom Mandapam Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Royal Catering & Dining Feasts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Concert Truss Lighting & Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Thovalai Fresh Flower Crafting</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 active:scale-98 transition-all shadow-lg whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#050508] fill-current" />
                <span>Call Now: 9585588810</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hello%20Royal%20Event%20and%20Catering%20Management,%20I%20would%20like%20to%20enquire%20about%20event%20and%20stage%20planning%20for%20my%20function%20in%20Nagercoil`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-emerald-300 bg-[#0E1E17] border border-emerald-500/40 hover:bg-[#142B21] transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-sm font-medium text-slate-300 bg-[#0D0D15] border border-slate-700/80 hover:border-pink-500/50 hover:text-pink-300 transition-all whitespace-nowrap"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@royal_event_organizers</span>
              </a>
            </div>

            <div className="pt-1 text-xs text-slate-400 flex items-center gap-2">
              <span>Direct Hotline:</span>
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="font-semibold text-amber-300 hover:underline"
              >
                +91 95855 88810
              </a>
              <span aria-hidden="true">·</span>
              <span>24 Hours Service & Instant WhatsApp</span>
            </div>
          </div>

          {/* Right Column: Wedding Stage Image */}
          <div className="lg:col-span-6 flex items-center">
            <div className="w-full relative group rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0C0C14]">
              <div className="aspect-[16/11] sm:aspect-[16/10] w-full bg-[#08080C] relative">

                <img
                  src={heroWeddingStage}
                  alt="Royal South Indian Wedding Stage Decoration in Nagercoil"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/95 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#09090F]/90 backdrop-blur-md border border-slate-700 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-400 tracking-wider uppercase block">
                      Featured Stage Setup
                    </span>
                    <h3 className="font-royal text-base sm:text-lg font-semibold text-white">
                      Royal Golden Arch Mandapam
                    </h3>
                    <p className="text-xs text-slate-300">
                      Fresh Jasmine, Red Carnations & Handcrafted Teak Pillars
                    </p>
                  </div>

                  <button
                    onClick={onOpenEnquiry}
                    className="shrink-0 px-3.5 py-2 rounded-md silver-gradient-bg text-[#050508] font-semibold text-xs hover:brightness-110 transition-all shadow-sm"
                  >
                    Get Quotation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          <div className="space-y-1">
            <span className="font-royal text-2xl sm:text-3xl font-bold silver-gradient-text tabular-nums">
              500+
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-200">
              Events Completed
            </p>
            <p className="text-xs text-slate-400">
              Weddings, Receptions & Milestones
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-royal text-2xl sm:text-3xl font-bold silver-gradient-text tabular-nums">
              10+ Years
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-200">
              Local Experience
            </p>
            <p className="text-xs text-slate-400">
              Mastery of Kanniyakumari Venues
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-royal text-2xl sm:text-3xl font-bold silver-gradient-text tabular-nums">
              100%
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-200">
              Customized Themes
            </p>
            <p className="text-xs text-slate-400">
              Unique to your taste & hall scale
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-royal text-2xl sm:text-3xl font-bold silver-gradient-text tabular-nums">
              On-Time
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-200">
              Zero-Delay Guarantee
            </p>
            <p className="text-xs text-slate-400">
              Ready 2 hours before muhurtham
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
