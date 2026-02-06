
import React from 'react';
import { CONTACT_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 flex items-center justify-center font-serif text-slate-950 text-2xl font-bold">
              {CONTACT_CONFIG.initial}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white uppercase leading-none">{CONTACT_CONFIG.name}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-500">Engineering Portfolio</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href={CONTACT_CONFIG.linkedin} className="text-slate-500 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
            <a href={CONTACT_CONFIG.instagram} className="text-slate-500 hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
            <a href={CONTACT_CONFIG.twitter} className="text-slate-500 hover:text-white transition-colors"><i className="fab fa-x-twitter text-xl"></i></a>
            <a href={CONTACT_CONFIG.github} className="text-slate-500 hover:text-white transition-colors"><i className="fab fa-github text-xl"></i></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/5">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {CONTACT_CONFIG.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-amber-500 transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-amber-500 transition-colors font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
