import { NavLink, Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export default function Header() {
  const linkClass = "no-underline font-semibold text-[14px] md:text-[15px] tracking-wide text-[#aab3cc] hover:text-white transition-colors duration-200 px-3 py-1";

  return (
    <div className="fixed top-6 inset-x-0 z-[1000] flex justify-center w-full px-4 pointer-events-none">
      <header className="pointer-events-auto bg-[#0a0202]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-[800px] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        <a href="#hero" className="flex items-center gap-2 font-extrabold tracking-wide text-white text-xl cursor-pointer no-underline group">
          <Flame className="text-accent transition-transform duration-300 group-hover:scale-110" size={24} />
          Wildfire
        </a>
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


