import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingWidget } from './components/BookingWidget';
import { HeroHighlights } from './components/HeroHighlights';
import { VehicleFleet } from './components/VehicleFleet';
import { ServicesSection } from './components/ServicesSection';
import { BangaloreSightseeing } from './components/BangaloreSightseeing';
import { KarnatakaTravel } from './components/KarnatakaTravel';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingContactBar } from './components/FloatingContactBar';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>();

  const handleOpenEnquiry = (initialData?: { service?: string; vehicle?: string } | string) => {
    if (typeof initialData === 'string') {
      // If a vehicle or service name is passed directly
      if (
        initialData === 'Toyota Innova' ||
        initialData === 'Toyota Etios' ||
        initialData === 'Maruti Suzuki Swift Dzire'
      ) {
        setSelectedVehicle(initialData);
        setSelectedService(undefined);
      } else {
        setSelectedService(initialData);
        setSelectedVehicle(undefined);
      }
    } else if (initialData) {
      setSelectedService(initialData.service);
      setSelectedVehicle(initialData.vehicle);
    } else {
      setSelectedService(undefined);
      setSelectedVehicle(undefined);
    }
    setModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* Top Bar & Main Sticky Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main>
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Quick Travel Booking / Enquiry Widget */}
        <BookingWidget />

        {/* 4 Feature Highlights */}
        <HeroHighlights />

        {/* Central Vehicle Fleet Section */}
        <VehicleFleet onOpenEnquiry={(v) => handleOpenEnquiry(v)} />

        {/* Clean Tourist Services Section */}
        <ServicesSection onOpenEnquiry={(s) => handleOpenEnquiry(s)} />

        {/* Bangalore Sightseeing Section */}
        <BangaloreSightseeing onOpenEnquiry={(s) => handleOpenEnquiry(s)} />

        {/* Karnataka Travel Section */}
        <KarnatakaTravel onOpenEnquiry={(s) => handleOpenEnquiry(s)} />

        {/* Factual About Section */}
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Direct Contact & Enquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={(v) => handleOpenEnquiry(v)} />

      {/* Floating Action Conversion Buttons */}
      <FloatingContactBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Booking & Enquiry Modal Dialog */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        initialService={selectedService}
        initialVehicle={selectedVehicle}
      />
    </div>
  );
}

export default App;
