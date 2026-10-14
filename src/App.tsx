import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { CostEstimator } from './components/CostEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (serviceTitle?: string) => {
    setModalService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 flex flex-col selection:bg-slate-700 selection:text-white">
      {/* Top Bar Navigation with Royal Logo & Instagram */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Page Flow in Obsidian Black & Liquid Silver */}
      <main className="flex-grow">
        {/* Hero Section with Official Motto: WE PLAN • WE SERVE • YOU CELEBRATE */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* About Us, Official Full Logo & Nagercoil Heritage */}
        <AboutUs onOpenEnquiry={() => handleOpenEnquiry('Venue Planning Discussion')} />

        {/* Services & Signature Offerings (Decor, Catering, Production) */}
        <ServicesSection onOpenEnquiry={(title) => handleOpenEnquiry(title)} />

        {/* Gallery: 8 High-Res Photos (Mandapams, Catering, Entry Pyros, Truss Lighting) */}
        <GallerySection onOpenEnquiry={(title) => handleOpenEnquiry(title)} />

        {/* Interactive Custom Package Planner (No Amount Mentioned) */}
        <CostEstimator onOpenEnquiry={(quote) => handleOpenEnquiry(quote)} />

        {/* Client Stories & Testimonials */}
        <TestimonialsSection />

        {/* FAQs */}
        <FaqSection />

        {/* Contact, Booking Form, Instagram & Google Maps */}
        <ContactSection initialService={modalService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar (<= 15% viewport height with Call, WhatsApp, Insta) */}
      <MobileStickyBar />

      {/* Quick Booking & Consultation Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialService={modalService}
      />
    </div>
  );
}
