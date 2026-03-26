'use client';

import { Montserrat } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], weight: '700' });

export function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center min-h-[60vh] transition-all duration-[1200ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
    >
      <div className="flex flex-col items-start">
        <div className="mb-10">
          <h2 className={`font-bold text-5xl md:text-7xl text-white ${montserrat.className}`}>
            About <span className="animate-text-color">Us</span>
          </h2>
          {/* Purple underlining line effect */}
          <div className={`h-1.5 bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#8b5cf6] rounded-full mt-6 transition-all duration-[1500ms] delay-300 ease-out ${isVisible ? 'w-full md:w-48 opacity-100' : 'w-0 opacity-0'
            }`}></div>
        </div>
        <div className={`text-left transition-all duration-[1200ms] delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <p className="text-white text-lg md:text-xl leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className={`relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-[1200ms] delay-[700ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
        <img
          src="/batch.PNG"
          alt="ECE SOC Batch"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
        />
        {/* Subtle decorative overlay matching the theme */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>
      </div>
    </section>
  );
}
