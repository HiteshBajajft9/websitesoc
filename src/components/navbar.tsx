'use client';

import Link from 'next/link';

export function Navbar() {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Events', href: '#events' },
    { label: 'Alumni', href: '#alumni' },
    { label: 'Our Team', href: '#team' },
  ];

  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-lg fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl z-50 rounded-2xl border border-white/20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="ECE SOC Logo" className="w-8 h-8 bg-white border-white rounded-full" />
            <Link href="/" className="text-2xl font-bold text-white">
              ECESOC
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white font-medium transition duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button (optional) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
