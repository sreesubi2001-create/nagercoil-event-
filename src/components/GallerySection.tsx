import React, { useState } from 'react';
import { Maximize2, X, MessageCircle, MapPin, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/eventData';

interface GallerySectionProps {
  onOpenEnquiry: (contextTitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'wedding' | 'reception' | 'catering' | 'lighting' | 'birthday'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories: { id: typeof activeCategory; label: string }[] = [
    { id: 'all', label: 'All Showcase (8)' },
    { id: 'wedding', label: 'Wedding Mandapams & Arches' },
    { id: 'reception', label: 'Reception Stages' },
    { id: 'catering', label: 'Royal Catering' },
    { id: 'lighting', label: 'Bridal FX & Truss Lighting' },
    { id: 'birthday', label: 'Milestones & Birthdays' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#07070C] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <span>Visual Portfolio</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Curated Stage Decor, Catering & Event Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Browse our real setups across South Indian wedding mandapams, grand floral entry arches, royal catering banquets, and concert-grade lighting across Nagercoil & Kanniyakumari.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'silver-gradient-bg text-[#050508] font-bold shadow-sm'
                  : 'bg-[#0D0D16] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8-Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const whatsappText = encodeURIComponent(
              `Hello Royal Event and Catering Management, I saw your "${item.title}" in your gallery. Could you provide details and portfolio for a similar setup for my event in Nagercoil?`
            );

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-[#0A0A10] border border-slate-800 hover:border-slate-500/70 transition-all duration-300 shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#06060A]">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} by Royal Event and Catering Management Nagercoil`}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top quick action badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPhoto(item)}
                      aria-label="View photo in lightbox"
                      className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-slate-200 hover:text-white hover:bg-black transition-all border border-slate-700"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom details block */}
                  <div className="absolute bottom-0 inset-x-0 p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-amber-300/90 font-semibold tracking-wide uppercase">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="flex items-center gap-1 text-slate-300 font-normal">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="font-royal text-lg sm:text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedPhoto(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full Details</span>
                      </button>

                      <a
                        href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Transparency Note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <span>
            Every stage, entrance arch, and dining layout can be tailored to the exact specifications and color theme of your designated hall in Nagercoil and Kanniyakumari district.
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A10] rounded-2xl border border-slate-700 overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#06060A]">
              <div>
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="font-royal text-lg font-bold text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6 space-y-6">
              <div className="rounded-xl overflow-hidden bg-black border border-slate-800 relative">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[55vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Executed at: {selectedPhoto.location}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-400">Signature: {selectedPhoto.highlightTag}</span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#06060A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Ready to replicate or customize this theme for your event date?
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                    `Hello Royal Event and Catering Management, I am interested in the "${selectedPhoto.title}" setup for my event in Nagercoil.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask Details on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const title = selectedPhoto.title;
                    setSelectedPhoto(null);
                    onOpenEnquiry(title);
                  }}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 transition-all"
                >
                  Book Setup
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
