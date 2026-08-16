import { NavLink, Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export default function Header() {
  const linkClass = "no-underline font-semibold text-[14px] md:text-[15px] tracking-wide text-[#aab3cc] hover:text-white transition-colors duration-200 px-3 py-1";

  return (
    <div className="fixed top-6 inset-x-0 z-[1000] flex justify-center w-full px-4 pointer-events-none">
      <header className="pointer-events-auto bg-[#0a0202]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-[800px] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff4500]">
            <path d="M12 2c0 0-5 6.5-5 11a5 5 0 0 0 10 0c0-4.5-5-11-5-11Z" />
            <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
          </svg>
          Firewall
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#map" className={linkClass}>Map</a>
          <a href="#why" className={linkClass}>Why</a>
          <a href="#architecture" className={linkClass}>Architecture</a>
          <a href="#impact" className={linkClass}>Impact</a>
          <a href="#strategy" className={linkClass}>Strategy</a>
        </nav>
      </header>
    </div>
  );
}


