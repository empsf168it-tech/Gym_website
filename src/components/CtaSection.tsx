import React from 'react';
import { motion } from 'motion/react';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/images/cta-bg.png"
        alt="Dramatic Gym Interior"
        className="absolute inset-0 w-full h-full object-cover object-center filter contrast-125"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]/80 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2400]/20 via-transparent to-transparent z-[2]" />

      {/* Animated Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-[720px] mx-auto px-6 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2400] block mb-4">
          Limited Spots Available
        </span>

        <h2 className="font-['Barlow_Condensed'] font-black uppercase text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-white tracking-tight">
          LET'S GET YOU <br />
          YOUR DREAM BODY!
        </h2>

        <p className="text-sm text-neutral-400 mt-6 max-w-[500px] mx-auto leading-relaxed">
          Book your first free consultation call. No commitment. Just a conversation about your goals.
        </p>

        <div className="mt-10">
          <button
            onClick={onOpenBooking}
            className="h-14 px-10 md:px-12 rounded-lg text-white font-extrabold text-base uppercase tracking-wider inline-flex items-center justify-center gap-2 cta-primary cursor-pointer shadow-[0_0_35px_rgba(255,36,0,0.55)]"
          >
            Let's Schedule Your First Session &rarr;
          </button>
        </div>
      </motion.div>
    </section>
  );
};
