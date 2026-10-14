import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/eventData';

interface ServicesSectionProps {
  onOpenEnquiry: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'wedding' | 'reception' | 'catering' | 'traditional' | 'birthday' | 'production'>('all');

  const filterTabs: { id: typeof selectedFilter; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'wedding', label: 'Wedding Mandapams' },
    { id: 'reception', label: 'Reception Stages' },
    { id: 'catering', label: 'Catering & Feasts' },
    { id: 'traditional', label: 'Traditional Ceremonies' },
    { id: 'birthday', label: 'Birthdays & Milestones' },
    { id: 'production', label: 'Lighting & Sound FX' },
  ];

  const filteredServices = selectedFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === selectedFilter);

  return (
    <section id="services" className="py-20 bg-[#050508] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <span>Comprehensive Event & Catering Solutions</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Our Signature Event Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From royal South Indian wedding mandapams to gourmet catering and high-energy intelligent lighting, explore our specialized capabilities across Kanniyakumari district.
          </p>
        </div>

        {/* Filter Segmented Control Bar */}
        <div className="flex items-center justify-center gap-1.5 p-1.5 bg-[#0C0C14] rounded-xl border border-slate-800 max-w-4xl mx-auto mb-12 overflow-x-auto">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'silver-gradient-bg text-[#050508] font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            const paddedIndex = String(index + 1).padStart(2, '0');
            const whatsappText = encodeURIComponent(
              `Hello Royal Event and Catering Management, I am interested in your service "${service.title}" for my upcoming event in Nagercoil. Please share package details and portfolio options.`
            );

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0A0A10] border border-slate-800 hover:border-slate-500/80 transition-all duration-200 shadow-xl"
              >
                <div className="space-y-4">
                  
                  {/* Clean unboxed editorial index */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="font-mono tabular-nums text-sm font-semibold silver-gradient-text">{paddedIndex}.</span>
                    <span className="text-[11px] uppercase tracking-wider text-amber-300/90 font-semibold">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-royal text-lg sm:text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-medium text-slate-300 leading-snug">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Included Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For note */}
                  <div className="p-3 rounded-lg bg-[#06060A] border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-300">Best suited for: </span>
                    {service.idealFor}
                  </div>

                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenEnquiry(service.title)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white transition-colors group/btn whitespace-nowrap"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/60 hover:text-white transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Event & Catering Combo Callout - NO AMOUNT MENTION */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C0C14] via-[#12121E] to-[#0C0C14] border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-royal text-lg sm:text-xl font-bold text-white">
              Planning Both Stage Decor & Traditional Banquet Catering?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Combine our stage architecture, bridal entry effects, and royal catering services for a seamless, perfectly coordinated wedding celebration.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry('Integrated Decor & Catering Package')}
              className="px-5 py-3 rounded-lg text-xs font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 transition-all whitespace-nowrap shadow-md"
            >
              Consult On Integrated Package
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
