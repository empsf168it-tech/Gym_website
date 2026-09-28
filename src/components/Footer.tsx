import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND_CONFIG } from '../config/brand';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-[#242424] text-neutral-300 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#FF2400]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Newsletter / VIP Access Bar */}
      <div className="border-b border-[#242424]/80 py-12 bg-[#0A0A0A]/60">
        <div className="max-w-[1120px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2400] block mb-2">
              VIP Fitness Newsletter
            </span>
            <h3 className="font-['Barlow_Condensed'] font-black uppercase text-3xl md:text-4xl text-white tracking-tight">
              JOIN THE {BRAND_CONFIG.name} ATHLETIC CLUB
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 mt-2 leading-relaxed">
              Get exclusive weekly workout protocols, science-backed nutrition advice, and motivational guidance directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center justify-center gap-3">
            {!newsletterSubscribed ? (
              <>
                <div className="relative w-full sm:w-80">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#121212] border border-[#242424] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2400] transition-colors pr-10"
                  />
                  <Mail className="w-4 h-4 text-neutral-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto h-11 px-7 rounded-lg text-white font-extrabold text-xs uppercase tracking-wider cta-primary flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Subscribe <Send className="w-3.5 h-3.5" />
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2 bg-[#FF2400]/15 border border-[#FF2400]/40 px-5 py-3 rounded-lg text-[#FF2400] text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#FF2400]" /> You're on the list! Welcome to {BRAND_CONFIG.name}.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main 4-Column Footer Grid */}
      <div className="max-w-[1120px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <a href="#home">
              <Logo />
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed pt-1">
              Transforming physiques & building relentless mindsets. Customized 1-on-1 personal training and high-performance online coaching for those who demand real results.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-[#FF2400] shrink-0" />
                <span>Prague 1, Czechia & Worldwide Online</span>
              </div>
              <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#FF2400] shrink-0" />
                <span>+420 777 888 999</span>
              </div>
              <div className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#FF2400] shrink-0" />
                <span>peter@apex-fitness.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-extrabold uppercase text-lg text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF2400] rounded-full" /> NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <a href="#home" className="hover:text-[#FF2400] transition-colors flex items-center gap-1.5">
                  &rarr; Home Overview
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF2400] transition-colors flex items-center gap-1.5">
                  &rarr; Training Services
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-[#FF2400] transition-colors flex items-center gap-1.5">
                  &rarr; Client Transformations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF2400] transition-colors flex items-center gap-1.5">
                  &rarr; About Coach Peter
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF2400] transition-colors flex items-center gap-1.5">
                  &rarr; Book a Session
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Coaching Programs */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-extrabold uppercase text-lg text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF2400] rounded-full" /> PROGRAMS
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">1-on-1 Personal Training</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Global Online Coaching App</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Science-Backed Nutrition Plans</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Body Fat Loss & Recomp</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Strength & Muscle Hypertrophy</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Gym Hours & Studio Info */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-extrabold uppercase text-lg text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF2400] rounded-full" /> STUDIO HOURS
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF2400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Mon &ndash; Fri:</p>
                  <p>06:00 AM &ndash; 09:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#FF2400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Saturday:</p>
                  <p>08:00 AM &ndash; 06:00 PM</p>
                </div>
              </div>
              <div className="pt-2 border-t border-[#242424]">
                <p className="text-[11px] text-[#FF2400] font-semibold uppercase tracking-wider">
                  Sunday: VIP Appointments Only
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Strip */}
        <div className="mt-14 pt-8 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Follow the Journey:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#121212] border border-[#242424] flex items-center justify-center text-neutral-400 hover:text-[#FF2400] hover:border-[#FF2400]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="w-9 h-9 rounded-lg bg-[#121212] border border-[#242424] flex items-center justify-center text-neutral-400 hover:text-[#FF2400] hover:border-[#FF2400]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-[#121212] border border-[#242424] flex items-center justify-center text-neutral-400 hover:text-[#FF2400] hover:border-[#FF2400]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Bar */}
      <div className="bg-[#030303] border-t border-[#242424] py-6">
        <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; 2026 Peter Cooper — {BRAND_CONFIG.name} Athletic Coaching. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
