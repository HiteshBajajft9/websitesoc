'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Zap } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700'] });

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. John Doe',
    role: 'Head of ECE Department',
    image: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=John&backgroundColor=c0aede',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    name: 'Prof. Jane Smith',
    role: 'Faculty Advisor, ECE SOC',
    image: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=Jane&backgroundColor=b6e3f4',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    name: 'Dr. Alan Turing',
    role: 'Senior Professor',
    image: 'https://api.dicebear.com/7.x/open-peeps/svg?seed=Alan&backgroundColor=ffd5dc',
    quote: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.',
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000); // changes every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-24 px-6 w-full flex flex-col items-center min-h-[50vh] overflow-hidden">
      {/* Decorative Lightning Watermarks */}
      <div className="absolute top-0 left-4 md:left-24 text-[#8b5cf6] opacity-[0.05] transform -rotate-12 pointer-events-none blur-[4px]">
        <Zap size={400} />
      </div>
      <div className="absolute bottom-10 right-4 md:right-24 text-[#ec4899] opacity-[0.05] transform rotate-12 pointer-events-none blur-[4px]">
        <Zap size={500} />
      </div>
      
      {/* Glowing Energy Blobs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10 max-w-6xl mx-auto w-full">
        <h2 className={`font-bold text-4xl md:text-6xl text-white ${montserrat.className}`}>
          Faculty <span className="animate-text-color">Testimonials</span>
        </h2>
        <div className="h-1.5 w-32 bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#8b5cf6] rounded-full mt-6 mx-auto"></div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl relative px-8 py-12 md:px-16 md:py-16">
          <Quote className="absolute top-8 left-8 text-white/10 w-16 h-16 md:w-24 md:h-24" />
          
          <div 
            className="w-full flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-none flex flex-col items-center text-center px-4 md:px-12"
              >
                <div className="mb-8 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#8b5cf6]/50 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-white text-lg md:text-2xl leading-relaxed italic mb-8 max-w-2xl font-light">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto">
                  <h3 className={`text-xl md:text-2xl text-white mb-2 ${montserrat.className}`}>
                    {testimonial.name}
                  </h3>
                  <p className="text-[#a855f7] font-medium tracking-wide text-sm md:text-base uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-[#ec4899]' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
