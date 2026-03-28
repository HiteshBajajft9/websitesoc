import Link from 'next/link';
import { Mail, MapPin, Phone, Instagram, Linkedin, Github } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const Footer = () => {
  return (
    <footer className="relative w-full bg-black/80 backdrop-blur-md pt-16 pb-8 border-t border-purple-900/40">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="ECE SOC Logo" className="w-8 h-8 bg-white border-white rounded-full" />
              <h2 className={`text-2xl font-bold text-white ${poppins.className}`}>
                ECESOC
              </h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The official departmental society of Electronics and Communication Engineering at BIT Mesra. Fostering innovation, technology, and excellence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 text-zinc-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 text-zinc-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 text-zinc-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-white font-semibold mb-6 text-lg tracking-wide ${poppins.className}`}>Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Blogs', 'Events', 'Our Team', 'Alumni', 'Newsletter'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={`text-white font-semibold mb-6 text-lg tracking-wide ${poppins.className}`}>Resources</h3>
            <ul className="space-y-3">
              {['Study Materials', 'Lab Manuals', 'Previous Year Questions', 'Tech Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className={`text-white font-semibold mb-6 text-lg tracking-wide ${poppins.className}`}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-purple-400 mt-1 shrink-0" size={18} />
                <span className="text-zinc-400 text-sm">
                  Department of ECE,<br />
                  BIT Mesra, Ranchi,<br />
                  Jharkhand 835215
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-purple-400 shrink-0" size={18} />
                <a href="mailto:ecesoc@bitmesra.ac.in" className="text-zinc-400 hover:text-purple-400 text-sm transition-colors">
                  ecesoc@bitmesra.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-purple-400 shrink-0" size={18} />
                <span className="text-zinc-400 text-sm">+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} ECE Society, BIT Mesra. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
