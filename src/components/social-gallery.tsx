'use client';

import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

export function SocialGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Wait for the slow 2000ms dealing animation + 150*7 stagger delay to finish
          setTimeout(() => setIsReady(true), 3200);
        } else {
          setIsVisible(false);
          setIsReady(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    { id: 1, link: "#", img: "https://picsum.photos/seed/ece1/400/400", title: "Event 1", style: "-rotate-[15deg] -translate-x-[450px] translate-y-16 z-10" },
    { id: 2, link: "#", img: "https://picsum.photos/seed/ece2/400/400", title: "Event 2", style: "-rotate-[10deg] -translate-x-[300px] translate-y-8 z-20" },
    { id: 3, link: "#", img: "https://picsum.photos/seed/ece3/400/400", title: "Event 3", style: "-rotate-[5deg] -translate-x-[150px] translate-y-2 z-30" },
    { id: 4, link: "#", img: "https://picsum.photos/seed/ece4/400/400", title: "Event 4", style: "rotate-0 translate-x-0 translate-y-0 z-40" },
    { id: 5, link: "#", img: "https://picsum.photos/seed/ece5/400/400", title: "Event 5", style: "rotate-[5deg] translate-x-[150px] translate-y-2 z-30" },
    { id: 6, link: "#", img: "https://picsum.photos/seed/ece6/400/400", title: "Event 6", style: "rotate-[10deg] translate-x-[300px] translate-y-8 z-20" },
    { id: 7, link: "#", img: "https://picsum.photos/seed/ece7/400/400", title: "Event 7", style: "rotate-[15deg] translate-x-[450px] translate-y-16 z-10" },
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-12 flex flex-col items-center overflow-x-hidden">
      {/* Title & Subtitle */}
      <div className={`flex flex-col items-center mb-20 z-50 text-center px-4 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className={`text-6xl md:text-7xl text-white tracking-widest uppercase ${spaceGrotesk.className} drop-shadow-2xl`}>
          OUR BLOGS
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
          Read them to increase your knowledge—our blogs cover a variety of cutting-edge topics based on Electronics, AI, and a bit of Computer Science.
        </p>
      </div>

      {/* Fan Gallery */}
      <div className="relative w-full max-w-7xl h-[400px] flex justify-center items-center">
        {cards.map((card, index) => {
          // The pre-revealed state stacks the cards at the center, pushed down and invisible.
          // When isVisible triggers, they animate precisely to their staggered offsets.
          const baseStyle = isVisible
            ? `${card.style} opacity-100 scale-100`
            : "rotate-0 translate-x-0 translate-y-32 opacity-0 scale-90 z-10";

          return (
            <Link
              href={card.link}
              key={card.id}
              className={`absolute w-[300px] h-[300px] rounded-3xl overflow-hidden 
                         transition-all ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom cursor-pointer
                         hover:z-50 hover:-translate-y-16 hover:scale-110 !hover:rotate-0
                         shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20
                         ${isReady ? 'duration-200' : 'duration-[2000ms]'}
                         ${baseStyle}`}
              style={{ transitionDelay: isVisible && !isReady ? `${index * 150}ms` : '0ms' }}
            >
              {/* Glossy overlay for the cyber theme */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent z-10 pointer-events-none" />
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </Link>
          );
        })}
      </div>

      {/* View Blogs Button */}
      <div className={`mt-16 z-50 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <Link
          href="/blogs"
          className="inline-flex px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold tracking-wide hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          VIEW MORE BLOGS
        </Link>
      </div>
    </section>
  );
}
