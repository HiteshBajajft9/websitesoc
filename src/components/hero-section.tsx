'use client';

import { MouseParticles } from './mouse-particles';

interface HeroSectionProps {
  children?: React.ReactNode;
  height?: string;
  className?: string;
}

export function HeroSection({ children, height = '100vh', className = '' }: HeroSectionProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      <MouseParticles />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
