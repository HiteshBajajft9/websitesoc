import Link from 'next/link';

export function Socials() {
  return (
    <section className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Demo Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-transparent animate-pulse pointer-events-none" />
      
      {/* Heading */}
      <h2 className="text-5xl text-white font-bold mb-16 z-50 text-center tracking-widest uppercase">
        OUR <span className="font-serif italic text-purple-400 normal-case tracking-normal">Social handles</span>
      </h2>

      <div className="w-full flex items-center justify-center gap-8 relative z-50">
        <Link 
          href="#"
          className="group relative bg-white text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-3 
                     shadow-[4px_4px_0px_0px_#FED853] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] 
                     transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          <span className="tracking-wide text-lg">Instagram</span>
        </Link>

        <Link 
          href="#"
          className="group relative bg-white text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-3 
                     shadow-[4px_4px_0px_0px_#FED853] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] 
                     transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          <span className="tracking-wide text-lg">LinkedIn</span>
        </Link>
      </div>
    </section>
  );
}
