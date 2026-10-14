import React from 'react';
import { ShieldCheck, Flower2, Clock, Utensils, MapPin, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface AboutUsProps {
  onOpenEnquiry: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-20 bg-[#07070C] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <span>Our Heritage & Craftsmanship</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Nagercoil’s Trusted Partner for Exceptional Celebrations
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Founded in Nagercoil, Kanniyakumari, Royal Event and Catering Management was born out of a passion to transform family milestones into royal experiences through traditional artistry, fresh floral precision, and authentic gourmet catering.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-royal text-xl sm:text-2xl font-semibold silver-gradient-text">
              Where Sacred South Indian Traditions Meet Modern Grandeur
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every celebration in Kanniyakumari district carries deep emotional significance. Whether it is an auspicious morning wedding muhurtham surrounded by sacred chants or an electrifying evening reception with shimmering lights, we treat your event as our own family milestone.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our direct access to fresh, fragrant blooms from the renowned <strong className="text-white font-semibold">Thovalai Flower Market</strong>—right in our home district—ensures your wedding garlands, jasmine chandeliers, and mandapam florals remain vibrant, aromatic, and pristine from sunrise to midnight.
            </p>

            {/* Service Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0D0D16] border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-200">
                  <Flower2 className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-white">Thovalai Fresh Florals</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Finest aromatic jasmine, fragrant marigold, and imported roses sourced fresh on the event morning.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D0D16] border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-200">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-white">Royal Catering & Feasts</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  From traditional banana leaf feast (Elai Saapadu) to grand multi-cuisine buffet spreads with fine hospitality.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D0D16] border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-200">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-white">Punctual Handover</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Every stage and hall arrangement is completed and sound-tested 2 hours before the first guest arrives.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D0D16] border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-200">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-white">Dedicated On-Ground Lead</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  A personal event coordinator stationed at your venue to manage stage queues, family requests, and vendor flow.
                </p>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 transition-all shadow-sm"
              >
                Schedule Venue Discussion
              </button>
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-300" />
                <span>Speak directly with our Event Director: 9585588810</span>
              </a>
            </div>

          </div>

          {/* Regional Knowledge & Hall Experience Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0C0C14] border border-slate-800 space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest block">
                  Our Service Commitment
                </span>
                <h4 className="font-royal text-xl font-bold silver-gradient-text">
                  WE PLAN • WE SERVE • YOU CELEBRATE
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe you and your family deserve to be guests at your own celebration. We manage stage craftsmanship, audio-visual timing, guest welcoming, and hot dining courses from start to finish.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>On-site stage measurement & venue planning recce</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>Fresh Thovalai flower procurement at dawn</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>Uniformed catering servers & polished presentation</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0C0C14] border border-slate-800 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <h4 className="font-royal text-base font-bold text-white">
                  Kanniyakumari Regional Reach
                </h4>
              </div>

              {/* Area tags rendered as clean unboxed text list */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <span className="font-medium text-slate-200">Nagercoil Town & Vadasery</span>
                  <span className="text-slate-400">250+ events</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <span className="font-medium text-slate-200">Kanniyakumari Coastal & Beach Venues</span>
                  <span className="text-slate-400">Destination setups</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <span className="font-medium text-slate-200">Marthandam & Thuckalay</span>
                  <span className="text-slate-400">Grand family halls</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <span className="font-medium text-slate-200">Colachel & Kulasekharam</span>
                  <span className="text-slate-400">Traditional ceremonies</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
