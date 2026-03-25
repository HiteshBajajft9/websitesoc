'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  baseColorOffset: number;
  size: number;
}

export function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Out of bounds initially
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get parent dimensions
    const parent = canvas.parentElement;
    if (!parent) return;

    // Set canvas size to fill parent
    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resizeCanvas();

    const resizeListener = () => resizeCanvas();
    window.addEventListener('resize', resizeListener);

    // Initialize particles
    const particleCount = 700;
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        baseColorOffset: i / particleCount,
        size: Math.random() * 1.5 + 0.5,
      };
    });

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };
    
    // Clear mouse position when it leaves
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let isAnimating = true;

    // Animation loop
    const animate = () => {
      if (!isAnimating) return;

      // Draw trails (clear with a slight opacity)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const interactRadius = 200;
      const repelForce = 0.8;
      const swirlForce = 0.6;
      const friction = 0.94;
      const returnForce = 0.0005; // Very weak return force for slow, smooth return

      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Interaction with mouse (Repel + Swirl)
        if (distance < interactRadius && distance > 0) {
          const force = (interactRadius - distance) / interactRadius;
          const angle = Math.atan2(dy, dx);
          
          // Repulse away from mouse
          particle.vx += Math.cos(angle) * force * repelForce;
          particle.vy += Math.sin(angle) * force * repelForce;

          // Swirl tangentially
          particle.vx += Math.cos(angle + Math.PI / 2) * force * swirlForce;
          particle.vy += Math.sin(angle + Math.PI / 2) * force * swirlForce;
        }

        // Gentle return to origin
        const returnDx = particle.originX - particle.x;
        const returnDy = particle.originY - particle.y;
        particle.vx += returnDx * returnForce;
        particle.vy += returnDy * returnForce;

        // Add subtle drifting/noise to always keep them moving slowly
        particle.vx += (Math.random() - 0.5) * 0.15;
        particle.vy += (Math.random() - 0.5) * 0.15;

        // Apply friction
        particle.vx *= friction;
        particle.vy *= friction;

        // Update positions
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Color mapping based on white-to-black gradient
        // baseColorOffset 0 = white, 1 = dark grey (so they aren't fully invisible)
        const colorVal = Math.floor(255 - particle.baseColorOffset * 155);
        ctx.strokeStyle = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
        ctx.lineWidth = particle.size;

        // Render as dashes pointing along velocity vector
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 2, particle.y - particle.vy * 2);
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isAnimating = false;
      window.removeEventListener('resize', resizeListener);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
