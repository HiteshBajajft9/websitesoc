import Link from "next/link";

export function SocialGallery() {
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
    <section className="relative w-full py-12 flex flex-col items-center overflow-x-hidden">
      {/* Title */}
      <h2 className="text-5xl text-white font-bold mb-16 z-50 text-center tracking-widest uppercase">
        OUR <span className="font-serif italic text-purple-400 normal-case tracking-normal">Blogs</span>
      </h2>

      {/* Fan Gallery */}
      <div className="relative w-full max-w-7xl h-[400px] flex justify-center items-center">
        {cards.map((card) => (
          <Link
            href={card.link}
            key={card.id}
            className={`absolute w-[300px] h-[300px] rounded-3xl overflow-hidden 
                       transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom cursor-pointer
                       hover:z-50 hover:-translate-y-16 hover:scale-110 !hover:rotate-0
                       shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20
                       ${card.style}`}
          >
            {/* Glossy overlay for the cyber theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent z-10 pointer-events-none" />
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
          </Link>
        ))}
      </div>

      {/* View Blogs Button */}
      <div className="mt-16 z-50">
        <Link
          href="/blogs"
          className="inline-flex px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full 
                     font-semibold tracking-wide hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          VIEW MORE BLOGS
        </Link>
      </div>
    </section>
  );
}
