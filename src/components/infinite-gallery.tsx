'use client';

import React from 'react';

const row1Images = [
  "https://picsum.photos/seed/ece11/600/400",
  "https://picsum.photos/seed/ece12/600/400",
  "https://picsum.photos/seed/ece13/600/400",
  "https://picsum.photos/seed/ece14/600/400",
  "https://picsum.photos/seed/ece15/600/400",
  "https://picsum.photos/seed/ece16/600/400",
  "https://picsum.photos/seed/ece17/600/400",
  "https://picsum.photos/seed/ece18/600/400",
  "https://picsum.photos/seed/ece19/600/400",
  "https://picsum.photos/seed/ece20/600/400",
];

const row2Images = [
  "https://picsum.photos/seed/ece21/600/400",
  "https://picsum.photos/seed/ece22/600/400",
  "https://picsum.photos/seed/ece23/600/400",
  "https://picsum.photos/seed/ece24/600/400",
  "https://picsum.photos/seed/ece25/600/400",
  "https://picsum.photos/seed/ece26/600/400",
  "https://picsum.photos/seed/ece27/600/400",
  "https://picsum.photos/seed/ece28/600/400",
  "https://picsum.photos/seed/ece29/600/400",
  "https://picsum.photos/seed/ece30/600/400",
];

export function InfiniteGallery() {
  return (
    <section className="relative w-full py-16 flex flex-col gap-6 overflow-hidden bg-black/60 backdrop-blur-md">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />

      {/* Row 1: Scrolls Left */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex w-[400vw] animate-[scrollLeft_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {/* First Set of 10 */}
          <div className="flex w-[200vw]">
            {row1Images.map((src, idx) => (
              <div key={`r1-a-${idx}`} className="w-[20vw] px-3 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10">
                <img src={src} alt={`Gallery image ${idx}`} className="w-full h-48 md:h-64 object-cover rounded-2xl border border-white/10 shadow-lg" />
              </div>
            ))}
          </div>
          {/* Second Set of 10 (Duplicate for seamless loop) */}
          <div className="flex w-[200vw]" aria-hidden="true">
            {row1Images.map((src, idx) => (
              <div key={`r1-b-${idx}`} className="w-[20vw] px-3 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10">
                <img src={src} alt={`Gallery image ${idx}`} className="w-full h-48 md:h-64 object-cover rounded-2xl border border-white/10 shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Scrolls Right */}
      <div className="relative w-full overflow-hidden group">
        {/* For scroll right, we start at -50% and go to 0 */}
        <div className="flex w-[400vw] animate-[scrollRight_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {/* First Set of 10 */}
          <div className="flex w-[200vw]">
            {row2Images.map((src, idx) => (
              <div key={`r2-a-${idx}`} className="w-[20vw] px-3 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10">
                <img src={src} alt={`Gallery image ${idx}`} className="w-full h-48 md:h-64 object-cover rounded-2xl border border-white/10 shadow-lg" />
              </div>
            ))}
          </div>
          {/* Second Set of 10 (Duplicate for seamless loop) */}
          <div className="flex w-[200vw]" aria-hidden="true">
            {row2Images.map((src, idx) => (
              <div key={`r2-b-${idx}`} className="w-[20vw] px-3 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10">
                <img src={src} alt={`Gallery image ${idx}`} className="w-full h-48 md:h-64 object-cover rounded-2xl border border-white/10 shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ec4899]/50 to-transparent" />
    </section>
  );
}
