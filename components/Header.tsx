
import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center heart-glow">
            {/* <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg> */}
            <img src={Logo}/>
          </div>
          <span className="text-xl font-bold font-outfit tracking-tight">AICU PLUS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-rose-400 transition-colors">Features</a>
          <a href="#demo" className="hover:text-rose-400 transition-colors">Experience</a>
          <a href="#about" className="hover:text-rose-400 transition-colors">Ethos</a>
        </div>

        <button className="bg-rose-600 hover:bg-rose-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-rose-900/20">
          <a className="no-underline text-white" href="https://www.aicuplus.in/">Explore ICU models</a>
        </button>
      </div>
    </nav>
  );
};

export default Header;
