import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Instagram } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/eventData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#050508] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Planning Your Event with Royal Event Management
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Clear answers to common questions about our event planning, catering management, and stage setups in Nagercoil.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#0A0A10] border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 bg-[#06060A]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact & Instagram CTA */}
        <div className="mt-10 p-6 rounded-xl bg-[#0A0A10] border border-slate-800 text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a unique hall layout or custom requirement not covered here?
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-amber-300 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Call our team at {BUSINESS_INFO.formattedPhone}</span>
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram: @royal_event_organizers</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
