import React from 'react';
import { Quote, MapPin, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data/eventData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#07070C] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <span>Verified Family & Client Reviews</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Loved by Families Across Kanniyakumari
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Read firsthand experiences from couples and hosts who trusted Royal Event and Catering Management with their wedding muhurthams and milestone celebrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0A0A10] border border-slate-800 shadow-xl hover:border-slate-600 transition-colors duration-200"
            >
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                  <Quote className="w-4 h-4 fill-current" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal italic">
                  "{item.review}"
                </p>
              </div>

              {/* Attribution details */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-1.5">
                <h3 className="font-semibold text-sm text-white">
                  {item.clientName}
                </h3>
                
                <p className="text-xs font-medium text-amber-300/90">
                  {item.event}
                </p>

                {/* Clean unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {item.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Trust Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <span>
            Proudly serving families across Nagercoil, Kanyakumari, Marthandam, Thuckalay, and surrounding towns.
          </span>
        </div>

      </div>
    </section>
  );
};
