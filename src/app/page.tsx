import { HeroSection } from '@/components/hero-section';

export default function Home() {
  return (
    <>
      <HeroSection height="100vh">
        {/* Your hero content goes here */}
        <div className="text-center text-white flex items-center justify-center gap-6">
          <img src="/logo.png" alt="ECE SOC Logo" className="w-48 h-48 bg-white border-1 border-white rounded-full" />
          <h1 className="font-bold opacity-75" style={{ fontSize: '12rem' }}>ECE SOCIETY</h1>
        </div>
      </HeroSection>

      {/* Rest of your page content */}
      <div className="mt-20">
        {/* Other sections */}
      </div>
    </>
  );
}