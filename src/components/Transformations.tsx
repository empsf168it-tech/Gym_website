import React from 'react';
import { motion } from 'motion/react';
import { TransformationCard } from './TransformationCard';

export const Transformations: React.FC = () => {
  const transformations = [
    {
      name: "PHILIP'S HARD WORK PAID OFF",
      duration: "12-Month Transformation",
      tagline:
        "Philip aimed to lose fat and build muscle. With determination and a solid plan, he succeeded remarkably.",
      beforeImg:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
      afterImg:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "ANNA FOUND HER CONFIDENCE",
      duration: "6-Month Transformation",
      tagline:
        "Anna wanted to feel strong again. She came in uncertain — she left unstoppable.",
      beforeImg:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
      afterImg:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "MARCUS WENT ALL IN",
      duration: "8-Month Transformation",
      tagline:
        "Marcus had tried every program. This was the last one he ever needed.",
      beforeImg:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      afterImg:
        "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="results" className="py-24 md:py-32 bg-[#141414] relative">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2400] block mb-4">
            Results Speak for Themselves
          </span>
          <h2 className="font-['Barlow_Condensed'] font-black uppercase text-5xl md:text-6xl text-white tracking-tight">
            CLIENT TRANSFORMATIONS
          </h2>
          <p className="text-sm text-neutral-400 mt-4 max-w-[480px] leading-relaxed">
            Every transformation started with one session. These are real clients with real results — no photoshop, no shortcuts.
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {transformations.map((item, index) => (
            <TransformationCard
              key={item.name}
              index={index}
              name={item.name}
              duration={item.duration}
              tagline={item.tagline}
              beforeImg={item.beforeImg}
              afterImg={item.afterImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
