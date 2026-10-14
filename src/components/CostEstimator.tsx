import React, { useState } from 'react';
import { Sparkles, MessageCircle, CalendarCheck, CheckSquare, Square, Layers, Utensils } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface PackagePlannerProps {
  onOpenEnquiry: (details?: string) => void;
}

export const CostEstimator: React.FC<PackagePlannerProps> = ({ onOpenEnquiry }) => {
  const eventTypes = [
    { id: 'wedding-mandapam', name: 'Wedding Muhurtham & Mandapam', scope: 'Sacred Mandapam, Homa Kunda & Traditional Florals' },
    { id: 'reception-stage', name: 'Luxury Reception Stage', scope: 'Architectural Backdrop, Fairy Canopies & Royal Seating' },
    { id: 'wedding-combo', name: '2-Day Muhurtham + Reception Combo', scope: 'Complete 2-day seamless stage transformation' },
    { id: 'engagement', name: 'Engagement & Ring Ceremony', scope: 'Personalized Monogram Backdrop & Decorated Swing' },
    { id: 'birthday', name: 'Milestone Birthday Gala', scope: 'Marquee Numbers, Organic Balloons & Themed Cake Table' },
    { id: 'traditional-family', name: 'Valaikappu / Grihapravesham', scope: 'Auspicious Flower Canopies & Traditional Welcome Decor' },
  ];

  const guestScales = [
    { id: 'scale-intimate', label: 'Up to 150 Guests', note: 'Intimate family gathering' },
    { id: 'scale-medium', label: '150 – 400 Guests', note: 'Standard Kalyana Mandapam' },
    { id: 'scale-grand', label: '400 – 800 Guests', note: 'Large Convention Hall' },
    { id: 'scale-royal', label: '800 – 1500+ Guests', note: 'Mega Royal Celebration' },
  ];

  const cateringOptions = [
    { id: 'banana-leaf', label: 'Traditional South Indian Elai Saapadu', note: 'Authentic pure vegetarian feast served on banana leaf' },
    { id: 'royal-buffet', label: 'Royal Multi-Cuisine Buffet Banquet', note: 'Gleaming silver chafing presentation with live counters' },
    { id: 'live-counters', label: 'Live Chaat, Mocktail Bar & Desserts', note: 'Interactive live cooking stations and welcome drinks' },
    { id: 'decor-only', label: 'Stage Decor & Production Only', note: 'No catering coordination required' },
  ];

  const productionAddOns = [
    { id: 'dry-ice-pyro', name: 'Walking-on-Clouds Dry Ice Fog + Cold Pyros', desc: 'Spectacular bridal entry effect' },
    { id: 'truss-lighting', name: 'Aluminum Trussing + Intelligent Moving Beams', desc: 'Concert-grade stage illumination' },
    { id: 'entrance-arch', name: 'Grand Entrance Floral Arch + Red Carpet', desc: 'Stunning arrival corridor for guests' },
    { id: 'fresh-jasmine', name: 'Thovalai Fresh Jasmine Ceiling Garlands', desc: 'Sacred traditional fragrance' },
    { id: 'audio-system', name: 'Line-Array Audio Engineering & Wireless Mics', desc: 'Crystal-clear speech & ceremonial audio' },
    { id: 'couple-photobooth', name: 'Customized Floral Photobooth with Monogram', desc: 'Memorable guest photo experience' },
  ];

  const [selectedEventType, setSelectedEventType] = useState<string>('wedding-mandapam');
  const [selectedScale, setSelectedScale] = useState<string>('scale-medium');
  const [selectedCatering, setSelectedCatering] = useState<string>('royal-buffet');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['dry-ice-pyro', 'entrance-arch']);

  const currentEvent = eventTypes.find((e) => e.id === selectedEventType) || eventTypes[0];
  const currentScale = guestScales.find((g) => g.id === selectedScale) || guestScales[1];
  const currentCatering = cateringOptions.find((c) => c.id === selectedCatering) || cateringOptions[0];

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const selectedAddOnNames = selectedAddOns
    .map((id) => productionAddOns.find((a) => a.id === id)?.name)
    .filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    `Hello Royal Event and Catering Management Nagercoil,\nI configured my custom celebration package on your website:\n- Event: ${currentEvent.name}\n- Scale: ${currentScale.label}\n- Catering Preference: ${currentCatering.label}\n- Production Add-ons: ${selectedAddOnNames.join(', ') || 'Standard inclusions'}\n\nPlease share your portfolio, availability, and detailed proposal.`
  );

  return (
    <section id="planner" className="py-20 bg-[#050508] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Interactive Custom Planner</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Design Your Event & Catering Package
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Select your event type, guest capacity, dining style, and special stage enhancements to receive a customized proposal tailored for your venue in Kanniyakumari.
          </p>
        </div>

        {/* Planner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-[#0A0A10] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            
            {/* Step 1: Event Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedEventType(type.id)}
                    className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all ${
                      selectedEventType === type.id
                        ? 'bg-slate-800 border-slate-400 text-white border shadow-sm'
                        : 'bg-[#050508] text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-white">{type.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {type.scope}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale & Guest Capacity */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                2. Guest Scale & Hall Dimensions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {guestScales.map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setSelectedScale(scale.id)}
                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all ${
                      selectedScale === scale.id
                        ? 'bg-slate-800 border-slate-400 text-white border shadow-sm'
                        : 'bg-[#050508] text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-white">{scale.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{scale.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Catering & Dining ("We Serve") */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                <span>3. Catering & Dining Service ("We Serve")</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cateringOptions.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCatering(cat.id)}
                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all ${
                      selectedCatering === cat.id
                        ? 'bg-slate-800 border-amber-400/80 text-white border shadow-sm'
                        : 'bg-[#050508] text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-white">{cat.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{cat.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Special Enhancements */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                4. Stage Enhancements & Production
              </label>
              <div className="space-y-2">
                {productionAddOns.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all border ${
                        isChecked
                          ? 'bg-slate-800/90 border-slate-400 text-white'
                          : 'bg-[#050508] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-amber-400 shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-amber-300" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-600" />
                          )}
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-200">
                            {addon.name}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {addon.desc}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                        {isChecked ? 'Included' : 'Optional'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Blueprint Review & WhatsApp Quotation */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#0F0F17] to-[#0A0A10] p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Custom Event Blueprint
                </span>
                <span className="text-[11px] text-amber-300 font-medium">
                  We Plan · We Serve
                </span>
              </div>

              {/* Package Title */}
              <div className="space-y-1">
                <h3 className="font-royal text-xl sm:text-2xl font-bold text-white">
                  {currentEvent.name}
                </h3>
                <p className="text-xs text-slate-400">
                  Tailored for {currentScale.label}
                </p>
              </div>

              {/* Specs Review */}
              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs">
                <div className="flex items-start justify-between text-slate-300">
                  <span className="text-slate-400">Catering Service:</span>
                  <span className="font-semibold text-white text-right max-w-[200px]">{currentCatering.label}</span>
                </div>
                <div className="flex items-start justify-between text-slate-300">
                  <span className="text-slate-400">Production Add-ons:</span>
                  <span className="font-semibold text-amber-300 tabular-nums">
                    {selectedAddOns.length} selected
                  </span>
                </div>
                {selectedAddOnNames.length > 0 && (
                  <div className="p-3 rounded-lg bg-[#050508] border border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <span className="font-semibold text-slate-300 block">Selected Enhancements:</span>
                    {selectedAddOnNames.map((name, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-amber-400">✓</span>
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Blueprint via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const desc = `Package Proposal for ${currentEvent.name} (${currentScale.label}), Dining: ${currentCatering.label}`;
                    onOpenEnquiry(desc);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 transition-all shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Request In-Person Venue Recce</span>
                </button>
              </div>

              {/* Consultation Note */}
              <div className="text-[11px] text-slate-400 leading-normal pt-2 border-t border-slate-800">
                * Note: Every venue has unique stage dimensions and layout needs. We conduct an on-ground inspection to finalize flower themes and guest flow.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
