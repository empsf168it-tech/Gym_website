import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        '"Peter is really an awesome coach. The results we achieved in just 2 months are beyond what I thought possible. He keeps you accountable every single day."',
      author: 'Mark D. — 2 months',
    },
    {
      quote:
        '"My progress has been astonishing. I feel empowered and motivated like never before. The program was tailored exactly to my life."',
      author: 'Sarah T. — 4 months',
    },
    {
      quote:
        '"This journey has been incredibly rewarding. I am so thankful for the structure, the guidance, and the genuine care Peter puts into every session."',
      author: 'James R. — 6 months',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080808] relative">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF2400] block mb-4">
              Real Reviews
            </span>
            <h2 className="font-['Barlow_Condensed'] font-black uppercase text-4xl md:text-5xl text-white tracking-tight">
              WHAT CLIENTS SAY
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#0F0F0F] border border-[#242424] px-4 py-2 rounded-full w-fit">
            <div className="flex text-[#FF2400] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF2400]" />
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wider">5.0 / 5.0 Rating</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-2xl p-6 bg-[#0F0F0F] border border-[#242424] hover:border-[#FF2400]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-[#FF2400] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF2400]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#FF2400]/25 mb-2 group-hover:text-[#FF2400]/50 transition-colors" />

                <p className="text-sm text-neutral-200 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#242424]/60">
                <span className="text-xs font-bold text-[#FF2400] uppercase tracking-widest block">
                  {item.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
