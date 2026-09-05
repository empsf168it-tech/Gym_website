import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const certifications = [
    'NASM Certified',
    'Precision Nutrition',
    'Olympic Lifting',
    'Online Coaching',
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#141414] relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Trainer Image with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#242424] shadow-2xl h-[450px] md:h-[540px]">
              <img
                src="./images/about.png"
                alt="Peter Cooper — Personal Trainer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stat Badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#080808]/90 backdrop-blur-md border border-[#242424] p-4 rounded-xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-[#FF2400]/15 border border-[#FF2400]/40 flex items-center justify-center text-[#FF2400]">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="font-['Barlow_Condensed'] font-black text-3xl md:text-4xl text-[#FF2400] leading-none block">
                  10+
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-300">
                  Years of Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text & Details */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2400] block mb-4">
              About Me
            </span>
            <h2 className="font-['Barlow_Condensed'] font-black uppercase text-5xl md:text-6xl text-white leading-[0.95] tracking-tight">
              FAVORITE CERTIFIED PERSONAL TRAINER!
            </h2>

            {/* Quote block */}
            <div className="border-l-2 border-[#FF2400] pl-4 my-6 py-1">
              <p className="text-sm italic font-medium text-neutral-200">
                "The ultimate line between your dreams and reality is called Action."
              </p>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed">
              I've spent over a decade helping people transform their bodies and their confidence. My methods combine science-based training, honest nutrition, and the kind of accountability that actually sticks. Whether you're starting from zero or pushing past a plateau — I'm here to get you there.
            </p>

            {/* Certifications Pill Row */}
            <div className="mt-8">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF2400]" /> Certified Qualifications
              </span>
              <div className="flex flex-wrap gap-2.5 mt-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-semibold border border-[#242424] bg-[#0F0F0F] px-3.5 py-1.5 rounded-full text-neutral-300 hover:text-white hover:border-[#FF2400]/50 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="cta-primary h-12 px-8 rounded-lg text-white font-extrabold text-sm uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
              >
                Work With Me &rarr;
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
