import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown, Flame, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax shifts for layers
  const bgX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Generate background Spray Paint Red embers/particles
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const items = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
    setParticles(items);
  }, []);

  const titleLines = [
    { text: "YOUR TRUSTED", isAccent: false, delay: 0.2 },
    { text: "PERSONAL", isAccent: false, delay: 0.3 },
    { text: "TRAINER", isAccent: true, delay: 0.4 },
  ];

  const stats = [
    { value: "200+", label: "Clients Transformed" },
    { value: "10 yrs", label: "Elite Coaching" },
    { value: "5×", label: "Fitness Champion" },
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen relative flex items-end overflow-hidden pt-28 pb-12 select-none"
    >
      {/* 1. Animated Parallax Background Image */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.08 }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src="./images/hero.png"
          alt="APEX Personal Trainer background"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-115"
        />
      </motion.div>

      {/* 2. Atmospheric Dynamic Spray Paint Red Spotlights */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#FF2400]/25 rounded-full blur-[140px] pointer-events-none z-[2]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/20 z-[3]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-transparent to-[rgba(255,36,0,0.22)] z-[3]" />

      {/* 3. Floating Spray Paint Red Ember Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-[4] overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: "100vh", x: `${p.x}vw` }}
            animate={{
              opacity: [0, 0.85, 0],
              y: ["80vh", "10vh"],
              x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            style={{ width: p.size, height: p.size }}
            className="absolute rounded-full bg-[#FF4D36] shadow-[0_0_10px_#FF2400]"
          />
        ))}
      </div>

      {/* 4. Hero Main Content Container */}
      <div className="relative z-10 max-w-[1120px] mx-auto px-6 pb-12 md:pb-16 w-full">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 bg-[#0F0F0F]/80 backdrop-blur-md border border-[#FF2400]/35 px-3.5 py-1.5 rounded-full mb-6 shadow-[0_0_20px_rgba(255,36,0,0.25)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2400] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF2400]" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF4D36] flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-[#FF2400]" /> Now Accepting Clients &bull; 2026 Sessions Open
          </span>
        </motion.div>

        {/* H1 Animated kinetic Typography */}
        <h1 className="font-['Barlow_Condensed'] font-black uppercase text-[clamp(4.5rem,11.5vw,9.8rem)] leading-[0.84] tracking-tight text-white">
          {titleLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 80, rotateX: -30, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: line.delay,
                }}
                className={`block transform-gpu ${
                  line.isAccent
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF6652] via-[#FF2400] to-[#C81A00] drop-shadow-[0_0_35px_rgba(255,36,0,0.7)]"
                    : "text-white"
                }`}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Subtitle & Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-base md:text-lg text-neutral-300 mt-6 max-w-[460px] leading-relaxed font-normal"
        >
          Professional personal training and online coaching. Customized scientific programs engineered for peak strength, fat loss & aggressive body transformations.
        </motion.p>

        {/* Animated Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-4 mt-8 flex-wrap items-center"
        >
          {/* Primary Glow CTA Button */}
          <motion.button
            onClick={onOpenBooking}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cta-primary h-14 px-9 rounded-xl text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
          >
            {/* Ambient Shine Overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-2">
              Book a Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          {/* Secondary Border CTA Button */}
          <motion.a
            href="#results"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="h-14 px-8 rounded-xl border border-[#242424] bg-[#0F0F0F]/60 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider hover:border-[#FF2400]/60 hover:bg-[#FF2400]/10 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#FF2400]" />
            View Results
          </motion.a>
        </motion.div>

        {/* Stats Row with Animated Scale Up */}
        <div className="flex gap-8 md:gap-14 mt-12 pt-8 border-t border-[#242424]/80 flex-wrap">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.85 + index * 0.1, type: "spring", stiffness: 200 }}
              className="flex flex-col group cursor-default"
            >
              <span className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-black text-[#FF2400] leading-none group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(255,36,0,0.75)] transition-all duration-300">
                {stat.value}
              </span>
              <span className="text-xs text-neutral-400 uppercase tracking-widest mt-1.5 font-semibold group-hover:text-white transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. Animated Scroll Down Indicator Pill */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-neutral-500 hover:text-[#FF2400] transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">SCROLL</span>
        <div className="w-5 h-8 border-2 border-neutral-700 group-hover:border-[#FF2400] rounded-full flex justify-center p-1 transition-colors">
          <div className="w-1 h-2 bg-[#FF2400] rounded-full animate-bounce" />
        </div>
        <ChevronDown className="w-4 h-4 -mt-1 group-hover:translate-y-0.5 transition-transform" />
      </motion.a>
    </section>
  );
};
