import Link from 'next/link';

export function Socials() {
  return (
    <section className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Dark Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/socialsbg1.png')" }} />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />
      </div>

      {/* Heading */}
      <div className="bg-black border-[6px] border-black rounded-3xl px-10 py-4 mb-16 z-50">
        <h2 className="text-6xl text-white font-bold text-center tracking-widest uppercase m-0 leading-tight">
          OUR <span className="font-serif italic text-purple-400 normal-case tracking-normal">Social handles</span>
        </h2>
      </div>

      <div className="w-full flex items-center justify-center gap-8 relative z-50">
        <Link
          href="#"
          className="group relative bg-black text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-3
                     shadow-[4px_4px_0px_0px_#8b5cf6] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                     transition-all duration-200 border-4 border-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="tracking-wide text-lg">Instagram</span>
        </Link>

        <Link
          href="#"
          className="group relative bg-black text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-3
                     shadow-[4px_4px_0px_0px_#8b5cf6] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                     transition-all duration-200 border-4 border-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="tracking-wide text-lg">LinkedIn</span>
        </Link>
      </div>
    </section>
  );
}
