import { useState } from 'react';
import { GrainOverlay } from './components/GrainOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Transformations } from './components/Transformations';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative bg-[#080808] text-white min-h-screen selection:bg-[#FF2400] selection:text-white">
      {/* 1. Grain texture overlay (fixed, full-screen) */}
      <GrainOverlay />

      {/* 2. Glassmorphism navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 3. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. Services Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 5. Client Transformations Section (Before/After Clip Reveal Slider) */}
        <Transformations />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. About Trainer Section */}
        <About onOpenBooking={handleOpenBooking} />

        {/* 8. Book a Session (Full-width CTA Section) */}
        <CtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Interactive Consultation Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;
