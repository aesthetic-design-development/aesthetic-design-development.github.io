
import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../constants';

export const ProjectSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const nextImage = () =>
    setSelectedIndex(prev => (prev === null ? 0 : (prev + 1) % PROJECTS.length));

  const prevImage = () =>
    setSelectedIndex(prev => (prev === null ? 0 : (prev - 1 + PROJECTS.length) % PROJECTS.length));

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isLightboxOpen]);
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-amber-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Engineering <span className="italic">Showcase</span></h2>
        </div>
        <p className="max-w-md text-slate-400">
          A collection of high-precision blueprints, electrical layouts, and architectural elevations that define our standard of work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="group cursor-pointer outline-none focus:ring-2 focus:ring-amber-500/50 rounded-md"
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(idx)}
            aria-label={`Open ${project.title} preview`}
          >
            <div className="relative overflow-hidden mb-6 aspect-[4/5] glass border border-white/10 group-hover:border-amber-500/30 transition-all duration-500">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-amber-500 text-[10px] uppercase tracking-widest mb-2 block font-bold">Project {idx + 1}</span>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.details.map((detail, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-white/10 border border-white/5 rounded text-white/80">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">{project.category}</span>
              <div className="w-10 h-[1px] bg-slate-800 transition-all duration-500 group-hover:w-20 group-hover:bg-amber-500"></div>
            </div>
          </div>
        ))}
      </div>

      {isLightboxOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <button
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl"
          >
            <i className="fas fa-times"></i>
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous project"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl p-3"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={nextImage}
            aria-label="Next project"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl p-3"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="max-w-6xl w-full">
            <div className="relative aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={PROJECTS[selectedIndex].imageUrl}
                alt={PROJECTS[selectedIndex].title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold">{PROJECTS[selectedIndex].title}</h3>
                <p className="text-slate-400 text-sm">{PROJECTS[selectedIndex].category}</p>
              </div>
              <div className="hidden md:flex flex-wrap gap-2">
                {PROJECTS[selectedIndex].details.map((d, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-white/10 border border-white/5 rounded text-white/80">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
