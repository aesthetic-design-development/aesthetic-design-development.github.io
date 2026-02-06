
import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../constants';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 flex items-center justify-center font-serif text-slate-950 text-xl font-bold">
            {CONTACT_CONFIG.initial}
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white uppercase leading-none">{CONTACT_CONFIG.name}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500">Engineering</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm uppercase tracking-widest transition-all duration-300 hover:text-amber-500 ${
                activeSection === item.id ? 'text-amber-500' : 'text-slate-400'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a 
          href="#contact" 
          className="hidden md:block px-6 py-2 border border-amber-500 text-amber-500 text-xs uppercase tracking-widest font-bold hover:bg-amber-500 hover:text-slate-950 transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 animate-fade-in-up">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`text-lg uppercase tracking-widest font-medium ${
                  activeSection === item.id ? 'text-amber-500' : 'text-slate-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="mt-4 px-6 py-4 border border-amber-500 text-amber-500 text-center uppercase tracking-widest font-bold"
            >
              Contact Specialist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
