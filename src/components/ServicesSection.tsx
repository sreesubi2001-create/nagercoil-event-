import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Check, Sparkles } from 'lucide-react';
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
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161828] border border-slate-700 text-xs font-bold text-slate-200 tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Comprehensive Event & Catering Solutions</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Our Signature Event Services
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            From royal South Indian wedding mandapams to gourmet catering and high-energy intelligent lighting, explore our specialized capabilities across Kanniyakumari district.
          </p>
        </div>

        {/* Filter Segmented Control Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-2 sm:p-3 bg-[#121422] rounded-2xl border-2 border-slate-700/80 shadow-2xl max-w-5xl mx-auto mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            const count = tab.id === 'all' 
              ? SERVICES.length 
              : SERVICES.filter((s) => s.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-white via-slate-100 to-slate-200 text-[#05060A] font-black shadow-lg ring-2 ring-white/60 scale-[1.02]'
                    : 'bg-[#1C1F32] text-slate-100 border border-slate-600 hover:border-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                  isActive ? 'bg-black/15 text-black font-extrabold' : 'bg-slate-800 text-slate-300'
                }`}>
                  {count}
                </span>
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
                className="group flex flex-col justify-between rounded-2xl bg-[#121422] border-2 border-slate-700/80 hover:border-slate-400 shadow-2xl transition-all duration-200 overflow-hidden"
              >
                {/* Visual Image Header */}
                {service.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900 shrink-0">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121422] via-[#121422]/40 to-transparent"></div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-slate-700 text-slate-100 font-mono text-xs font-bold">
                      #{paddedIndex}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[11px] tracking-wider uppercase shadow-md">
                      {service.category}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4 flex-1">
                  
                  {/* Title */}
                  <h3 className="font-royal text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-amber-300 leading-snug">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-700/80">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Included Highlights:
                    </span>
                    <ul className="space-y-2 text-sm text-slate-100 font-medium">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For note */}
                  <div className="p-3.5 rounded-xl bg-[#1A1D30] border border-slate-700 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <span className="font-bold text-white block mb-0.5">Best Suited For: </span>
                    {service.idealFor}
                  </div>

                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 mt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenEnquiry(service.title)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F2338] hover:bg-[#282D47] border border-slate-600 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer group/btn"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Event & Catering Combo Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141628] via-[#1A1D36] to-[#141628] border-2 border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-royal text-xl sm:text-2xl font-bold text-white">
              Planning Both Stage Decor & Traditional Banquet Catering?
            </h4>
            <p className="text-sm sm:text-base text-slate-200 font-normal">
              Combine our stage architecture, bridal entry effects, and royal catering services for a seamless, perfectly coordinated wedding celebration.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry('Integrated Decor & Catering Package')}
              className="px-6 py-3.5 rounded-xl text-sm font-extrabold text-[#05060A] bg-white hover:bg-slate-100 transition-all whitespace-nowrap shadow-lg cursor-pointer"
            >
              Consult On Integrated Package
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
