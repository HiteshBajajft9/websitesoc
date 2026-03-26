import { HeroSection } from '@/components/hero-section';
import { AboutUs } from '@/components/about-us';
import { Testimonials } from '@/components/testimonials';
import { SocialGallery } from '@/components/social-gallery';
import { Socials } from '@/components/socials';
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '700' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '700' });

export default function Home() {
  return (
    <>
      <HeroSection height="100vh">
        {/* Your hero content goes here */}
        <div className="text-center text-white flex items-center justify-center gap-6">
          <style>{`
            @keyframes panGradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-text-color {
              background: linear-gradient(
                to right,
                #8b5cf6,
                #3b82f6,
                #ec4899,
                #a855f7,
                #60a5fa,
                #8b5cf6
              );
              background-size: 200% auto;
              color: transparent;
              -webkit-background-clip: text;
              background-clip: text;
              animation: panGradient 5s linear infinite;
            }
          `}</style>
          <img src="/logo.png" alt="ECE SOC Logo" className="w-48 h-48 bg-white border-1 border-white rounded-full" />
          <h1 className={`font-bold ${montserrat.className}`} style={{ fontSize: '12rem' }}>
            ECE <span className="animate-text-color">Society</span>
          </h1>
        </div>
      </HeroSection>

      <div className="mt-20">
        <AboutUs />
      </div>

      <div className="relative z-10 w-full bg-black/40 backdrop-blur-sm pt-20 flex flex-col items-center mb-10">
        <SocialGallery />
        <Socials />
      </div>

      <div className="mt-10 mb-20 relative z-10">
        <Testimonials />
      </div>
    </>
  );
}