import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { SlidersHorizontal } from 'lucide-react';

interface TransformationCardProps {
  name: string;
  duration: string;
  tagline: string;
  beforeImg: string;
  afterImg: string;
  index: number;
}

export const TransformationCard: React.FC<TransformationCardProps> = ({
  name,
  duration,
  tagline,
  beforeImg,
  afterImg,
  index,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="rounded-2xl p-4 bg-[#0F0F0F] border border-[#242424] hover:border-[#FF2400]/40 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Before / After Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] rounded-xl overflow-hidden select-none cursor-ew-resize group"
      >
        {/* BEFORE IMAGE (Underneath, Left revealed) */}
        <img
          src={beforeImg}
          alt={`${name} Before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale contrast-125"
        />

        {/* AFTER IMAGE (Top layer, Clip path revealed on right side of slider) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            clipPath: `inset(0 0 0 ${sliderPos}%)`,
          }}
        >
          <img
            src={afterImg}
            alt={`${name} After`}
            className="w-full h-full object-cover filter contrast-110"
          />
        </div>

        {/* BEFORE / AFTER Labels */}
        <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-neutral-300 border border-white/10 z-10">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 bg-[#FF2400] backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white z-10 shadow-md">
          AFTER
        </div>

        {/* Vertical Divider Line & Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#FF2400] z-20 shadow-[0_0_12px_#FF2400]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF2400] text-white flex items-center justify-center shadow-lg shadow-[#FF2400]/60 border-2 border-black group-hover:scale-110 transition-transform">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Text Info */}
      <div className="mt-5 px-2">
        <h3 className="font-['Barlow_Condensed'] font-black uppercase text-xl md:text-2xl text-white tracking-wide leading-tight">
          {name}
        </h3>
        <p className="text-xs font-bold text-[#FF2400] uppercase tracking-widest mt-1">
          {duration}
        </p>
        <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
          {tagline}
        </p>
      </div>
    </motion.div>
  );
};
