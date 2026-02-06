
import React from 'react';
import { CONTACT_CONFIG } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Video & Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/assets/videoplayback.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] uppercase tracking-[0.4em] font-black">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          </span>
          
          <h1 className="text-6xl md:text-9xl font-serif mb-8 text-white leading-[0.9] text-gradient">
            Structural <br /> 
            <span className="italic font-normal">Excellence</span>.
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-amber-500 mb-16 leading-relaxed font-light">
            Crafting the backbone of modern civilization through <span className="text-amber-500 font-medium">precise structural analysis</span>, detailed floor planning, and structural design using <span className="text-amber-500 font-medium">STAAD.Pro</span> and <span className="text-amber-500 font-medium">ETABS</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects" 
            className="group relative px-12 py-5 bg-amber-500 text-slate-950 font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Discover Works</span>
            <div className="pointer-events-none absolute inset-0 z-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 will-change-transform origin-bottom"></div>
          </a>
          <a 
            href="#contact" 
            className="group flex items-center gap-3 px-12 py-5 border border-white/10 hover:border-amber-500/40 transition-all duration-500 uppercase tracking-[0.2em] font-black text-xs text-white"
          >
            Consultation
            <i className="fas fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Technical Tool Belt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-10 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {CONTACT_CONFIG.tools.map((tool, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-xl mb-3 group-hover:bg-amber-500/10 transition-colors">
                <i className={`fas ${tool.icon} text-amber-500/50 group-hover:text-amber-500`}></i>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">{tool.name}</span>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase mt-1">{tool.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blueprint Markers */}
      <div className="absolute bottom-10 left-10 text-[10px] text-slate-600 font-mono hidden lg:block tracking-widest uppercase vertical-rl">
        Coordinate System [40.7128° N, 74.0060° W]
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[10px] text-slate-600 font-mono hidden lg:block tracking-widest uppercase vertical-rl">
        Engineering Revision v.2024.11
      </div>
    </div>
  );
};
