
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-amber-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Core Expertise</span>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Professional <span className="italic">Services</span></h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="p-10 glass border border-white/5 hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors duration-300">
              <i className={`fas ${service.icon} text-2xl text-amber-500 group-hover:text-slate-950 transition-colors duration-300`}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 glass relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative z-10 max-w-xl">
          <h3 className="text-3xl font-serif text-white mb-4">Precision-Driven <span className="text-amber-500 italic">Methodology</span></h3>
          <p className="text-slate-400">
            Every plan is scrutinized for compliance, safety, and efficiency. We utilize state-of-the-art CAD/BIM software to deliver world-class infrastructure blueprints.
          </p>
        </div>
        <div className="relative z-10 flex gap-12">
          <div className="text-center">
            <div className="text-4xl font-serif text-amber-500 mb-1">150+</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-amber-500 mb-1">12</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-amber-500 mb-1">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Safety Record</div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
};
