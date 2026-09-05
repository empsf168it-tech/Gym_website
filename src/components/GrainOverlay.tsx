import React from 'react';

export const GrainOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.18] overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="forgeNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#forgeNoise)" />
      </svg>
    </div>
  );
};
