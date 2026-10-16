
import React, { useState } from 'react';
import {
  Maximize2,
  X,
  MessageCircle,
  MapPin,
  Eye,
  Play,
  Video,
} from 'lucide-react';

import {
  GALLERY_ITEMS,
  type GalleryItem,
  BUSINESS_INFO,
} from '../data/eventData';

import cateringImage from '../assets/images/gallery_catering_feast_1791978739740.jpg';
import concertImage from '../assets/images/gallery_concert_truss_lighting_1791978741302.jpg';
import coupleEntryImage from '../assets/images/gallery_couple_entry_pyro_1791978741887.jpg';
import grandEntranceImage from '../assets/images/gallery_grand_entrance_1791978740120.jpg';
import mandapamImage from '../assets/images/gallery_mandapam_floral_1791977331591.jpg';
import birthdayImage from '../assets/images/gallery_milestone_birthday_1791977327671.jpg';
import receptionImage from '../assets/images/gallery_reception_stage_1791977326870.jpg';

interface GallerySectionProps {
  onOpenEnquiry: (contextTitle?: string) => void;
}

const localGalleryImages = [
  cateringImage,
  concertImage,
  coupleEntryImage,
  grandEntranceImage,
  mandapamImage,
  birthdayImage,
  receptionImage,
];

const galleryVideo = {
  title: 'Live Chenda Melam, Popcorn, Paan & Ice Cream Stalls',
  description:
    'Explore our event entertainment, traditional welcome, snack counters and guest experience arrangements.',
  src: '/videos/IMG_1952.MOV',
};

function getGalleryImage(
  item: GalleryItem,
  index: number
): string {
  const details = [
    item.title,
    item.category,
    item.categoryLabel,
    item.description,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  if (
    details.includes('cater') ||
    details.includes('food') ||
    details.includes('dining') ||
    details.includes('feast')
  ) {
    return cateringImage;
  }

  if (
    details.includes('concert') ||
    details.includes('truss') ||
    details.includes('lighting')
  ) {
    return concertImage;
  }

  if (
    details.includes('couple') ||
    details.includes('pyro') ||
    details.includes('bride entry') ||
    details.includes('groom entry')
  ) {
    return coupleEntryImage;
  }

  if (
    details.includes('entrance') ||
    details.includes('arch') ||
    details.includes('welcome')
  ) {
    return grandEntranceImage;
  }

  if (
    details.includes('birthday') ||
    details.includes('milestone')
  ) {
    return birthdayImage;
  }

  if (details.includes('reception')) {
    return receptionImage;
  }

  if (
    details.includes('mandapam') ||
    details.includes('floral') ||
    details.includes('wedding')
  ) {
    return mandapamImage;
  }

  return localGalleryImages[
    ((index % localGalleryImages.length) +
      localGalleryImages.length) %
      localGalleryImages.length
  ];
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'wedding' | 'reception' | 'catering' | 'lighting' | 'birthday'
  >('all');

  const [selectedPhoto, setSelectedPhoto] =
    useState<GalleryItem | null>(null);

  const [showVideo, setShowVideo] = useState(false);
  const [imageErrors, setImageErrors] = useState<string[]>([]);

  const categories: {
    id: typeof activeCategory;
    label: string;
  }[] = [
    { id: 'all', label: `All Showcase (${GALLERY_ITEMS.length})` },
    { id: 'wedding', label: 'Wedding Mandapams & Arches' },
    { id: 'reception', label: 'Reception Stages' },
    { id: 'catering', label: 'Royal Catering' },
    { id: 'lighting', label: 'Bridal FX & Truss Lighting' },
    { id: 'birthday', label: 'Milestones & Birthdays' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category === activeCategory
        );

  const getWhatsAppLink = (message: string) =>
    `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

  const reportImageError = (src: string) => {
    console.error('Gallery image failed to load:', src);
    setImageErrors((previous) =>
      previous.includes(src) ? previous : [...previous, src]
    );
  };

  return (
    <section
      id="gallery"
      className="border-b border-slate-800 bg-[#07070C] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gallery heading */}
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
            Visual Portfolio
          </span>

          <h2 className="font-royal text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Event Gallery
          </h2>

          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            Explore wedding mandapams, floral entrance arches,
            reception stages, catering arrangements and memorable
            celebrations across Nagercoil and Kanniyakumari.
          </p>
        </div>

        {/* Gallery and video switcher */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setShowVideo(false)}
            className={`rounded-xl border px-5 py-3 text-sm font-bold transition ${
              !showVideo
                ? 'border-amber-400 bg-amber-400 text-black'
                : 'border-slate-700 bg-[#11111A] text-white hover:border-amber-400'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Event Photography
            </span>
          </button>

          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className={`rounded-xl border px-5 py-3 text-sm font-bold transition ${
              showVideo
                ? 'border-amber-400 bg-amber-400 text-black'
                : 'border-slate-700 bg-[#11111A] text-white hover:border-amber-400'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Video className="h-4 w-4" />
              Event Videos
            </span>
          </button>
        </div>

        {!showVideo ? (
          <>
            {/* Category filters */}
            <div className="mb-10 flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-800 bg-[#101019] p-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-lg border px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                    activeCategory === category.id
                      ? 'border-amber-400 bg-amber-400 text-black'
                      : 'border-slate-700 bg-[#090910] text-slate-200 hover:border-amber-400 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Photo gallery */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {filteredItems.map((item) => {
                const originalIndex = GALLERY_ITEMS.findIndex(
                  (galleryItem) => galleryItem.id === item.id
                );

                const imageUrl = getGalleryImage(
                  item,
                  Math.max(originalIndex, 0)
                );

                const whatsappText =
                  `Hello Royal Event and Catering Management, ` +
                  `I saw "${item.title}" in your gallery. ` +
                  `Could you provide details for a similar setup in Nagercoil?`;

                return (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#0B0B12] shadow-xl transition hover:border-amber-400/60"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#15151D]">
                      {!imageErrors.includes(imageUrl) ? (
                        <img
                          src={imageUrl}
                          alt={`${item.title} by Royal Event Management`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={() => reportImageError(imageUrl)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#15151D] p-6 text-center">
                          <Video className="h-10 w-10 text-amber-400" />
                          <p className="text-sm font-semibold text-white">
                            Image could not be loaded
                          </p>
                          <p className="break-all text-xs text-slate-400">
                            {imageUrl}
                          </p>
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

                      <button
                        type="button"
                        onClick={() => setSelectedPhoto(item)}
                        aria-label={`View ${item.title}`}
                        className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/70 p-3 text-white transition hover:bg-amber-400 hover:text-black"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>

                      <div className="absolute inset-x-0 bottom-0 space-y-3 p-5 sm:p-6">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-300">
                          <span>{item.categoryLabel}</span>
                          <span className="text-slate-400">·</span>
                          <span className="inline-flex items-center gap-1 font-medium normal-case text-slate-200">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        </div>

                        <h3 className="font-royal text-xl font-bold text-white sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="line-clamp-3 text-sm leading-6 text-slate-200">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setSelectedPhoto(item)}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-300"
                          >
                            <Eye className="h-4 w-4" />
                            View Full Details
                          </button>

                          <a
                            href={getWhatsAppLink(whatsappText)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/60 bg-emerald-950 px-4 py-2.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-900"
                          >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <p className="py-12 text-center text-slate-300">
                No photos found in this category yet.
              </p>
            )}
          </>
        ) : (
          /* Video showcase */
          <div className="mx-auto max-w-3xl">
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0B0B12] shadow-xl">
              <div className="border-b border-slate-800 p-5 sm:p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Royal Event Video Showcase
                </span>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  {galleryVideo.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {galleryVideo.description}
                </p>
              </div>

              <div className="bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="mx-auto max-h-[75vh] w-full"
                >
                  <source
                    src={galleryVideo.src}
                    type="video/quicktime"
                  />
                  Your browser cannot play this video.
                  Please try an MP4 version of the video.
                </video>
              </div>

              <div className="flex flex-wrap gap-3 p-5">
                <a
                  href={getWhatsAppLink(
                    `Hello Royal Event Management, I am interested in your event video showcase and would like to enquire about your services.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>

                <a
                  href="https://instagram.com/royal_event_organizers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-bold text-white hover:border-amber-400"
                >
                  Watch on Instagram
                </a>
              </div>
            </article>
          </div>
        )}

        <div className="mx-auto mt-12 max-w-2xl text-center text-sm leading-6 text-slate-300">
          Every stage, entrance arch and dining arrangement can be
          customized to suit your event theme in Nagercoil and
          Kanniyakumari district.
        </div>
      </div>

      {/* Photo details modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
            className="relative my-auto flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0A0A10] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 p-5">
              <div className="pr-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="mt-1 font-royal text-xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 overflow-y-auto p-5">
              <div className="flex min-h-48 items-center justify-center overflow-hidden rounded-xl bg-[#15151D]">
                <img
                  src={getGalleryImage(
                    selectedPhoto,
                    Math.max(
                      GALLERY_ITEMS.findIndex(
                        (item) => item.id === selectedPhoto.id
                      ),
                      0
                    )
                  )}
                  alt={selectedPhoto.title}
                  className="max-h-[55vh] w-full object-contain"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>{selectedPhoto.location}</span>
                <span className="text-slate-600">·</span>
                <span>{selectedPhoto.highlightTag}</span>
              </div>

              <p className="text-sm leading-7 text-slate-200">
                {selectedPhoto.description}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-3 border-t border-slate-800 p-5 sm:flex-row sm:items-center">
              <span className="text-sm text-slate-300">
                Ready to plan your event?
              </span>

              <div className="flex flex-wrap gap-3">
                <a
                  href={getWhatsAppLink(
                    `Hello Royal Event Management, I am interested in the "${selectedPhoto.title}" setup for my event in Nagercoil.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const title = selectedPhoto.title;
                    setSelectedPhoto(null);
                    onOpenEnquiry(title);
                  }}
                  className="rounded-lg bg-amber-400 px-4 py-3 text-sm font-bold text-black hover:bg-amber-300"
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
