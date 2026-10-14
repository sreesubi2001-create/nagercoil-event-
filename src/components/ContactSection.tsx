import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, ExternalLink, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: initialService || 'Wedding & Muhurtham Mandapam',
    eventDate: '',
    venueLocation: '',
    guestCount: '200 - 400 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number for communication.');
      return;
    }

    setSubmitted(true);
  };

  const formattedWhatsAppUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    `Hello Royal Event and Catering Management,\nHere are my event enquiry details:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Event Type: ${formData.eventType}\n- Date: ${formData.eventDate || 'To be decided'}\n- Venue/Town: ${formData.venueLocation || 'Nagercoil / Kanniyakumari'}\n- Guests: ${formData.guestCount}\n- Notes: ${formData.message || 'None'}\n\nPlease share your portfolio, packages and availability.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#07070C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 tracking-wider uppercase">
            <span>Enquiries & Consultations</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Connect with Royal Event & Catering Management
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Ready to plan your wedding stage, royal banquet catering, or milestone celebration in Nagercoil? Reach out directly via call, WhatsApp, Instagram, or submit your details below.
          </p>
        </div>

        {/* Content Split: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Action Card */}
            <div className="p-6 rounded-2xl bg-[#0A0A10] border border-slate-800 shadow-xl space-y-4">
              <h3 className="font-royal text-lg font-bold text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-3">
                {/* Phone Call */}
                <a
                  href={BUSINESS_INFO.phoneTelLink}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050508] border border-slate-800 hover:border-slate-500 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Direct Hotline
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-slate-200">
                      {BUSINESS_INFO.formattedPhone}
                    </span>
                    <p className="text-xs text-slate-400">
                      Click to call directly on mobile
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=Hello%20Royal%20Event%20and%20Catering%20Management,%20I%20am%20reaching%20out%20to%20enquire%20about%20event%20planning%20and%20catering%20in%20Nagercoil.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050508] border border-emerald-900/60 hover:border-emerald-500 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      WhatsApp Chat & Photos
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-emerald-200">
                      +91 95855 88810
                    </span>
                    <p className="text-xs text-slate-400">
                      Instant replies, portfolio & quotes
                    </p>
                  </div>
                </a>

                {/* Instagram Profile Link */}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050508] border border-slate-800 hover:border-pink-500/80 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider block">
                      Official Instagram
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300">
                      @royal_event_organizers
                    </span>
                    <p className="text-xs text-slate-400">
                      Follow our latest setups, reels & photos
                    </p>
                  </div>
                </a>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050508] border border-slate-800 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Working Hours
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      {BUSINESS_INFO.operatingHours}
                    </span>
                    <p className="text-[11px] text-slate-400">
                      Available for weekend hall visits
                    </p>
                  </div>
                </div>

                {/* Office & Base Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050508] border border-slate-800 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      {BUSINESS_INFO.city}, {BUSINESS_INFO.district}, {BUSINESS_INFO.state}, {BUSINESS_INFO.country}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {BUSINESS_INFO.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="p-4 rounded-2xl bg-[#0A0A10] border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Nagercoil, Kanniyakumari Map
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-white font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-52 rounded-xl overflow-hidden border border-slate-800 bg-[#050508]">
                <iframe
                  title="Royal Event Management Nagercoil Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63231.81534063641!2d77.39121659858548!3d8.18847847427774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f056d6e2467d%3A0x6b772418e2bf0b60!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A10] border border-slate-800 shadow-2xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 pb-2 border-b border-slate-800">
                    <h3 className="font-royal text-xl font-bold text-white">
                      Request Date & Package Proposal
                    </h3>
                    <p className="text-xs text-slate-300">
                      Share your event details. We will contact you within 2 business hours.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anandha Krishnan"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Mobile Number (India) <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9585588810"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Type & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Event Category <span className="text-amber-400">*</span>
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400 transition-colors"
                      >
                        <option value="Wedding & Muhurtham Mandapam">Wedding & Muhurtham Mandapam</option>
                        <option value="Grand Reception Stage">Grand Reception Stage</option>
                        <option value="Wedding Stage + Royal Catering Combo">Wedding Stage + Royal Catering Combo</option>
                        <option value="Engagement & Ring Ceremony">Engagement & Ring Ceremony</option>
                        <option value="1st Birthday / Milestone Gala">1st Birthday / Milestone Gala</option>
                        <option value="Valaikappu / Baby Shower">Valaikappu / Baby Shower</option>
                        <option value="Grihapravesham / Housewarming">Grihapravesham / Housewarming</option>
                        <option value="Sound, Lighting & Special FX Only">Sound, Lighting & Special FX Only</option>
                        <option value="Corporate Event / Annual Meet">Corporate Event / Annual Meet</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Venue & Guest Scale */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Venue / Marriage Hall in Kanniyakumari
                      </label>
                      <input
                        type="text"
                        name="venueLocation"
                        value={formData.venueLocation}
                        onChange={handleChange}
                        placeholder="e.g. Vadasery Mandapam or Home"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Expected Guests
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white focus:outline-none focus:border-slate-400 transition-colors"
                      >
                        <option value="Up to 150 Guests (Intimate)">Up to 150 Guests (Intimate)</option>
                        <option value="150 - 400 Guests (Standard Hall)">150 - 400 Guests (Standard Hall)</option>
                        <option value="400 - 800 Guests (Grand)">400 - 800 Guests (Grand)</option>
                        <option value="800 - 1500+ Guests (Royal)">800 - 1500+ Guests (Royal)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Specific Stage, Catering or Theme Ideas
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share flower preferences, banana leaf vs buffet catering, bridal entry dry ice fog, or any custom wishes..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050508] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-[#050508] silver-gradient-bg hover:brightness-110 active:scale-98 transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Event Enquiry</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400">
                    We respect your privacy. No spam. You will also have the option to forward this directly via WhatsApp.
                  </p>
                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-royal text-2xl font-bold text-white">
                      Enquiry Received, {formData.name}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for contacting Royal Event and Catering Management Nagercoil. Our team will review your {formData.eventType} details and reach you on <strong className="text-white">{formData.phone}</strong> promptly.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-[#050508] border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Submitted Summary:
                    </div>
                    <div className="flex justify-between text-slate-200">
                      <span>Event:</span> <span className="font-medium text-white">{formData.eventType}</span>
                    </div>
                    <div className="flex justify-between text-slate-200">
                      <span>Target Date:</span> <span>{formData.eventDate || 'Flexible'}</span>
                    </div>
                    <div className="flex justify-between text-slate-200">
                      <span>Venue:</span> <span>{formData.venueLocation || 'Nagercoil'}</span>
                    </div>
                  </div>

                  {/* Instant WhatsApp forward option */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-slate-300 font-medium">
                      Want an immediate response? Forward this directly to our WhatsApp:
                    </p>
                    <a
                      href={formattedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Direct to WhatsApp: 9585588810</span>
                    </a>
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
