import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[68px] z-40 glass-nav transition-all duration-300">
        <div className="max-w-[1120px] h-full mx-auto px-6 flex justify-between items-center">
          {/* Left: Logo */}
          <a href="#home">
            <Logo />
          </a>

          {/* Center: Desktop Nav Links (Visible on Large Desktop Screens lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF2400] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Book a Session CTA (Desktop Only) */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="hidden lg:flex h-10 px-6 rounded-lg cta-primary text-white text-sm font-bold uppercase tracking-wider hover:opacity-95 transition-all cursor-pointer items-center justify-center"
            >
              Book a Session
            </button>

            {/* Hamburger Toggle (Visible on Mobile & Tablet Viewports < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-neutral-300 hover:text-white p-2 rounded-lg hover:bg-[#141414] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF2400]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-[#242424] py-6 px-6 lg:hidden flex flex-col gap-5 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-['Barlow_Condensed'] font-bold text-neutral-300 hover:text-[#FF2400] uppercase tracking-wider transition-colors py-2 border-b border-[#242424]/50"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-2 h-12 rounded-lg cta-primary text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center cursor-pointer shadow-lg"
            >
              Book a Session &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
