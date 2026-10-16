import React, { useState } from 'react';
import { Maximize2, X, MessageCircle, MapPin, Eye, Play, Pause, Heart, Instagram, Film, Image as ImageIcon, Volume2, Sparkles, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, INSTAGRAM_REELS, InstagramReel, BUSINESS_INFO } from '../data/eventData';

interface GallerySectionProps {
  onOpenEnquiry: (contextTitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'reels'>('photos');
  const [activeCategory, setActiveCategory] = useState<'all' | 'wedding' | 'reception' | 'catering' | 'lighting' | 'birthday'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [playingReelId, setPlayingReelId] = useState<string | null>('reel-chenda-melam-stalls');
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({ 'reel-chenda-melam-stalls': true });

  const toggleLikeReel = (reelId: string) => {
    setLikedReels((prev) => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  const categories: { id: typeof activeCategory; label: string }[] = [
    { id: 'all', label: `All Showcase (${GALLERY_ITEMS.length})` },
    { id: 'wedding', label: 'Wedding Mandapams & Arches' },
    { id: 'reception', label: 'Reception Stages' },
    { id: 'catering', label: 'Royal Catering & Stalls' },
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
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <span>Visual Showcase & Instagram Feed</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Curated Stage Decor, Catering & Video Reels
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Explore authentic event photography and live video reels from our Instagram <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline font-semibold">@royal_event_organizers</a> featuring grand weddings, catering feasts, and bridal entries across Nagercoil.
          </p>
        </div>

        {/* Media Type Switcher: Photos vs Instagram Reels */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'photos'
                ? 'silver-gradient-bg text-[#050508] shadow-lg shadow-white/10'
                : 'bg-[#0D0D16] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Event Photography ({GALLERY_ITEMS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reels')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'reels'
                ? 'bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 text-white shadow-lg shadow-pink-500/20'
                : 'bg-[#0D0D16] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Film className="w-4 h-4 text-pink-400" />
            <span>Instagram Reels & Videos ({INSTAGRAM_REELS.length})</span>
          </button>
        </div>

        {/* TAB 1: PHOTOGRAPHY GALLERY */}
        {activeTab === 'photos' && (
          <>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </>
        )}

        {/* TAB 2: INSTAGRAM REELS & VIDEOS (Vertical 9:16 Cards) */}
        {activeTab === 'reels' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                <Instagram className="w-3.5 h-3.5" />
                <span>Direct from @royal_event_organizers</span>
              </span>
              <p className="text-xs text-slate-400">
                Click any reel to play simulation or tap "Watch on Instagram" to see comments and original audio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {INSTAGRAM_REELS.map((reel) => {
                const isPlaying = playingReelId === reel.id;
                const isLiked = !!likedReels[reel.id];

                return (
                  <div
                    key={reel.id}
                    className="relative rounded-2xl overflow-hidden bg-[#0A0A10] border border-slate-700/80 shadow-2xl flex flex-col group"
                  >
                    {/* Vertical 9:16 Video Container */}
                    <div 
                      className="relative aspect-[9/16] w-full overflow-hidden bg-black cursor-pointer select-none"
                      onClick={() => setPlayingReelId(isPlaying ? null : reel.id)}
                    >
                      <img
                        src={reel.imageUrl}
                        alt={reel.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isPlaying ? 'scale-105' : 'group-hover:scale-102'
                        }`}
                        referrerPolicy="no-referrer"
                      />

                      {/* Video Scrims */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

                      {/* Top Bar on Video: Live Tag & Audio */}
                      <div className="absolute top-4 inset-x-4 flex items-center justify-between text-xs text-white z-10">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                          <Film className="w-3 h-3 text-pink-400" />
                          <span className="text-[11px] font-semibold">{reel.tag}</span>
                        </div>

                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-slate-300">
                          <Volume2 className="w-3 h-3 text-amber-300" />
                          <span className="tabular-nums">{reel.duration}</span>
                        </div>
                      </div>

                      {/* Center Play / Pause Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all transform ${
                          isPlaying ? 'opacity-0 scale-90 group-hover:opacity-100' : 'opacity-100 scale-100'
                        }`}>
                          {isPlaying ? (
                            <Pause className="w-6 h-6 fill-current text-white" />
                          ) : (
                            <Play className="w-6 h-6 fill-current text-pink-400 translate-x-0.5" />
                          )}
                        </div>
                      </div>

                      {/* Progress bar at bottom of video when active */}
                      {isPlaying && (
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-pink-500 to-amber-400 animate-pulse w-full" />
                        </div>
                      )}

                      {/* Right Side Reel Actions: Like, Views, Share */}
                      <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLikeReel(reel.id);
                          }}
                          className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform"
                          title="Like Reel"
                        >
                          <div className={`p-2.5 rounded-full bg-black/60 backdrop-blur-md border ${
                            isLiked ? 'border-pink-500 text-pink-500' : 'border-white/20 text-white'
                          }`}>
                            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current text-pink-500' : ''}`} />
                          </div>
                          <span className="text-[10px] font-bold drop-shadow-md">
                            {isLiked ? 'Liked' : reel.likes}
                          </span>
                        </button>

                        <div className="flex flex-col items-center gap-1 text-white">
                          <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-slate-200">
                            <Eye className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold drop-shadow-md">{reel.views}</span>
                        </div>
                      </div>

                      {/* Bottom Caption & Audio Track Info */}
                      <div className="absolute bottom-4 left-4 right-16 space-y-2 text-left z-10">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-bold">
                            R
                          </div>
                          <span className="text-xs font-bold text-white drop-shadow-md">
                            royal_event_organizers
                          </span>
                        </div>

                        <h4 className="font-royal text-sm font-bold text-white leading-snug drop-shadow-md">
                          {reel.title}
                        </h4>

                        <p className="text-[11px] text-slate-200 line-clamp-2 leading-relaxed drop-shadow-sm">
                          {reel.caption}
                        </p>

                        <div className="flex items-center gap-1.5 text-[10px] text-slate-300 pt-1">
                          <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />
                          <span className="truncate">{reel.audioTrack}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="p-3 bg-[#0C0C14] border-t border-slate-800 flex items-center justify-between gap-2">
                      <a
                        href={reel.instagramPostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>Watch on Instagram</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        onClick={() => onOpenEnquiry(reel.title)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-white transition-colors"
                      >
                        Enquire Setup
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Official Instagram Live Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#140D1C] via-[#101018] to-[#140D1C] border border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
              <Instagram className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="font-royal text-lg sm:text-xl font-bold text-white">
                Follow @royal_event_organizers on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Watch our daily live wedding setups, fresh flower deliveries from Thovalai, behind-the-scenes banquet catering, and bride & groom entries across Kanniyakumari.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:brightness-110 text-white transition-all shadow-md whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Open Instagram Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A10] rounded-2xl border border-slate-700 overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#06060A]">
              <div>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
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
