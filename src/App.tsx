import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* 11. Floating Back to Top Button (visible across all sections) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-[#121212]/90 backdrop-blur-md border border-[#242424] hover:border-[#FF2400] hover:bg-[#FF2400]/15 px-4 py-2.5 rounded-lg shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF2400] group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
