import React from 'react';
import { BRAND_CONFIG } from '../config/brand';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  textSize = 'text-2xl',
}) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Premium Spray Paint Red Vector Logo Mark */}
      <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4D36] via-[#FF2400] to-[#C81A00] flex items-center justify-center text-white font-black shadow-[0_0_20px_rgba(255,36,0,0.5)] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,36,0,0.75)] transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 stroke-black stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
        >
          {/* Stylized Geometric Peak & Lightning Flame */}
          <path d="M12 3L4 19h16L12 3z" fill="black" />
          <path d="M12 7l4.5 9h-9L12 7z" fill="#FF2400" stroke="none" />
        </svg>
      </div>

      {!iconOnly && (
        <span
          className={`font-['Barlow_Condensed'] font-black ${textSize} tracking-[0.2em] uppercase text-white group-hover:text-[#FF2400] transition-colors`}
        >
          {BRAND_CONFIG.name}
        </span>
      )}
    </div>
  );
};
