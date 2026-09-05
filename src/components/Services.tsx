import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Laptop, Apple, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const services = [
    {
      icon: Dumbbell,
      title: "1-ON-1 TRAINING",
      description:
        "Fully personalized programs designed around your goals, schedule, and current fitness level. In-person or online.",
    },
    {
      icon: Laptop,
      title: "ONLINE COACHING",
      description:
        "Custom training + nutrition plan, weekly check-ins, and direct access via app. Train from anywhere.",
    },
    {
      icon: Apple,
      title: "NUTRITION PLANS",
      description:
        "Science-backed meal plans tailored to your body and your goals. No fads, no restrictions — just results.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#080808] relative">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2400] block mb-4">
            What I Offer
          </span>
          <h2 className="font-['Barlow_Condensed'] font-black uppercase text-5xl md:text-6xl text-white tracking-tight">
            PROGRAMS BUILT FOR RESULTS
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                onClick={onOpenBooking}
                className="rounded-2xl p-7 bg-[#0F0F0F] border border-[#242424] hover:border-[#FF2400]/50 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <Icon className="w-10 h-10 text-[#FF2400] group-hover:scale-110 transition-transform duration-300" />
                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-[#FF2400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-2xl text-white tracking-wide mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Animated Bottom Spray Paint Red Accent Bar */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#FF4D36] to-[#FF2400] group-hover:w-full transition-all duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
