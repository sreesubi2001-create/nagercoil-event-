
import React, { useState } from 'react';
import {
  Maximize2,
  X,
  MessageCircle,
  MapPin,
  Eye,
} from 'lucide-react';

import {
  GALLERY_ITEMS,
  type GalleryItem,
  BUSINESS_INFO,
} from '../data/eventData';

// Import images directly from src/assets/images
import cateringImage from '../assets/images/gallery_catering_feast_1791978739740.jpg';
import concertImage from '../assets/images/gallery_concert_truss_lighting_1791978741302.jpg';
import coupleEntryImage from '../assets/images/gallery_couple_entry_pyro_1791978741887.jpg';
import grandEntranceImage from '../assets/images/gallery_grand_entrance_1791978740120.jpg';
import mandapamImage from '../assets/images/gallery_mandapam_floral_1791977331591.jpg';
import birthdayImage from '../assets/images/gallery_milestone_birthday_1791977327671.jpg';
import receptionImage from '../assets/images/gallery_reception_stage_1791977326870.jpg';

const localGalleryImages = [
  cateringImage,
  concertImage,
  coupleEntryImage,
  grandEntranceImage,
  mandapamImage,
  birthdayImage,
  receptionImage,
];

function getGalleryImage(item: GalleryItem, index: number): string {
  const details = [
    item.title,
    item.category,
    item.categoryLabel,
    item.description,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  if (details.includes('cater') || details.includes('food') || details.includes('dining')) {
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

  // Local image fallback when a title does not match a keyword.
  return localGalleryImages[index % localGalleryImages.length];
}

interface GallerySectionProps {
  onOpenEnquiry: (contextTitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'wedding' | 'reception' | 'catering' | 'lighting' | 'birthday'
  >('all');

  const [selectedPhoto, setSelectedPhoto] =
    useState<GalleryItem | null>(null);

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

  return (
    <section
      id="gallery"
      className="border-b border-slate-800 bg-[#07070C] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Visual Portfolio</span>
          </div>

          <h2 className="font-royal text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Curated Stage Decor, Catering &amp; Event Gallery
          </h2>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Browse our wedding mandapams, floral entrance arches,
            catering arrangements and lighting setups across Nagercoil
            and Kanniyakumari.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap rounded-lg border px-4 py-2 text-xs transition-all ${
                activeCategory === cat.id
                  ? 'silver-gradient-bg border-transparent font-bold text-[#050508]'
                  : 'border-slate-800 bg-[#0D0D16] font-medium text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
              `I saw your "${item.title}" in your gallery. ` +
              `Could you provide details for a similar setup in Nagercoil?`;

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A0A10] shadow-xl transition-all duration-300 hover:border-slate-500/70"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#06060A]">
                  <img
                    src={imageUrl}
                    alt={`${item.title} by Royal Event and Catering Management`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    onError={(event) => {
                      console.error(
                        'Gallery image failed to load:',
                        imageUrl,
                        event.currentTarget
                      );
                    }}
                  />

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/45 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

                  {/* Full image button */}
                  <div className="absolute right-4 top-4">
                    <button
                      type="button"
                      onClick={() => setSelectedPhoto(item)}
                      aria-label={`View ${item.title}`}
                      className="rounded-full border border-slate-700 bg-black/70 p-2.5 text-slate-200 backdrop-blur-md transition-colors hover:bg-black hover:text-white"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Gallery information */}
                  <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-300/90">
                      <span>{item.categoryLabel}</span>

                      <span className="text-slate-600">·</span>

                      <span className="flex items-center gap-1 font-normal text-slate-300">
                        <MapPin className="h-3 w-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="font-royal text-lg font-bold text-white transition-colors group-hover:text-slate-200 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="line-clamp-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPhoto(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition-colors hover:text-white"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>View Full Details</span>
                      </button>

                      <a
                        href={getWhatsAppLink(whatsappText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-950/80 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-900"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Gallery note */}
        <div className="mx-auto mt-12 max-w-2xl text-center text-xs text-slate-400">
          Every stage, entrance arch and dining arrangement can be
          customized to suit your event theme in Nagercoil and
          Kanniyakumari district.
        </div>
      </div>

      {/* Full image modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0A0A10] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#06060A] px-6 py-4">
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                  {selectedPhoto.categoryLabel}
                </span>

                <h3 className="font-royal text-lg font-bold text-white">
                  {selectedPhoto.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal image and details */}
            <div className="flex-1 space-y-6 overflow-y-auto p-6">
              <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-black">
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
                  className="mx-auto max-h-[55vh] w-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />

                  <span>Location: {selectedPhoto.location}</span>

                  <span className="text-slate-600">·</span>

                  <span className="text-slate-400">
                    {selectedPhoto.highlightTag}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-200">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>

            {/* Modal actions */}
            <div className="flex flex-col items-stretch justify-between gap-3 border-t border-slate-800 bg-[#06060A] p-4 sm:flex-row sm:items-center sm:p-6">
              <span className="text-xs text-slate-400">
                Ready to customize this setup for your event?
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppLink(
                    `Hello Royal Event and Catering Management, ` +
                    `I am interested in the "${selectedPhoto.title}" ` +
                    `setup for my event in Nagercoil.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const title = selectedPhoto.title;
                    setSelectedPhoto(null);
                    onOpenEnquiry(title);
                  }}
                  className="silver-gradient-bg rounded-lg px-4 py-2.5 text-xs font-semibold text-[#050508] transition-all hover:brightness-110"
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
