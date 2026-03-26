'use client';

import { Montserrat } from 'next/font/google';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700'] });

const EVENTS = [
  {
    id: 1,
    name: 'Tech Symposium 2026',
    date: 'April 15, 2026',
    location: 'Main Auditorium',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TS&backgroundColor=8b5cf6',
    description: 'Annual gathering of tech enthusiasts exploring the next decade of ECE innovations.',
  },
  {
    id: 2,
    name: 'Robotics Workshop',
    date: 'May 02, 2026',
    location: 'Lab Room 302',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=RW&backgroundColor=3b82f6',
    description: 'Hands-on session on building autonomous line-following and maze-solving robots.',
  },
  {
    id: 3,
    name: 'Hackathon Beta',
    date: 'June 10-12, 2026',
    location: 'Innovation Hub',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=HB&backgroundColor=ec4899',
    description: 'A 48-hour challenge to build hardware and software solutions for real-world problems.',
  },
  {
    id: 4,
    name: 'Alumni Meetup',
    date: 'July 25, 2026',
    location: 'University Grounds',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=AM&backgroundColor=a855f7',
    description: 'Connect with ECE SOC alumni, share experiences, and expand your professional network.',
  }
];

export function UpcomingEvents() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center min-h-[80vh] relative z-10">
      <div className="text-center mb-20 w-full">
        <h2 className={`font-bold text-4xl md:text-6xl text-white ${montserrat.className}`}>
          Upcoming <span className="animate-text-color">Events</span>
        </h2>
        <div className="h-1.5 w-32 bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#8b5cf6] rounded-full mt-6 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl relative">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none"></div>

        {EVENTS.map((event, index) => {
          // Odd indices (1 and 3) are the right-side cards in a 2-col layout
          const isRightSide = index % 2 !== 0;
          
          return (
            <div 
              key={event.id}
              className={`w-full group ${isRightSide ? 'md:mt-24' : ''}`}
            >
              <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#8b5cf6]/50 rounded-3xl p-8 backdrop-blur-md shadow-2xl transition-all duration-500 ease-out flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)]">
                
                <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                  {/* Circular Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-black/20 group-hover:border-[#ec4899]/50 transition-colors duration-500">
                    <img 
                      src={event.logo} 
                      alt={`${event.name} Logo`} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Date Badge */}
                  <div className="bg-[#8b5cf6]/20 text-[#d8b4fe] border border-[#8b5cf6]/30 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Event Information */}
                <h3 className={`text-2xl text-white font-bold mb-4 group-hover:text-[#ec4899] transition-colors ${montserrat.className}`}>
                  {event.name}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                    <MapPin size={16} className="text-[#8b5cf6]" />
                    <span>{event.location}</span>
                  </div>
                  
                  <button className="text-[#8b5cf6] group-hover:text-[#ec4899] bg-white/5 group-hover:bg-[#ec4899]/20 transition-all p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 duration-300">
                    <ArrowRight size={20} />
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
