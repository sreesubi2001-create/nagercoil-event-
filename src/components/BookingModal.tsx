import React, { useState } from 'react';
import { X, Send, MessageCircle, Instagram, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: initialService || 'Wedding & Muhurtham Mandapam',
    eventDate: '',
    venueLocation: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please provide a valid 10-digit mobile number.');
      return;
    }
    setSubmitted(true);
  };

  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    `Hello Royal Event and Catering Management,\nI would like to request a package proposal:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Event: ${formData.eventType}\n- Date: ${formData.eventDate || 'Flexible'}\n- Venue: ${formData.venueLocation || 'Nagercoil'}\n- Notes: ${formData.notes || 'None'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0A0A10] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#06060A]">
          <div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">
              Royal Event & Catering Management
            </span>
            <h3 className="font-royal text-base sm:text-lg font-bold text-white">
              Consultation & Package Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Your Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Mobile Number (India) <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9585588810"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Event Type
                  </label>
                  <input
                    type="text"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#050508] border border-slate-700 text-xs text-white focus:outline-none focus:border-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#050508] border border-slate-700 text-xs text-white focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Venue / Hall in Kanniyakumari
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nagercoil Marriage Hall or Outdoor Lawn"
                  value={formData.venueLocation}
                  onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Notes (Stage Theme, Catering or Special Entries)
                </label>
                <textarea
                  rows={2}
                  placeholder="Flower preferences, banana leaf sadhya vs buffet, bridal entry dry ice fog..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400 resize-none"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hello%20Royal%20Event%20and%20Catering%20Management,%20I%20would%20like%20to%20discuss%20an%20event%20booking.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-emerald-700/90 hover:bg-emerald-700 text-white transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-[#12121A] border border-slate-800 text-pink-300 hover:text-white transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-royal text-xl font-bold text-white">
                  Consultation Request Received!
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, {formData.name}. We will call you on <strong className="text-white">{formData.phone}</strong> to confirm your date and stage requirements.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Forward to WhatsApp for Fast Confirmation</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
