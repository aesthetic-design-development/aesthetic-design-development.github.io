
import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../constants';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Structural Consultation',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(`Project Proposal Request: ${formData.type} - ${formData.name}`);
    const body = encodeURIComponent(
      `Dear ${CONTACT_CONFIG.fullName},\n\n` +
      `I am reaching out regarding a new project inquiry.\n\n` +
      `PROSPECTIVE CLIENT DETAILS:\n` +
      `---------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service Required: ${formData.type}\n\n` +
      `PROJECT OVERVIEW:\n` +
      `${formData.message}\n\n` +
      `This inquiry was generated from your professional portfolio site.`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', type: 'Structural Consultation', message: '' });
      }, 5000);
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="animate-fade-in-up">
          <span className="text-amber-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Request a Quote</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to <br /> <span className="italic text-amber-500/80">Collaborate?</span></h2>
          <p className="text-slate-400 mb-12 max-w-md leading-relaxed">
            From complex structural blueprints to high-end architectural elevations, let's discuss your next engineering challenge. 
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass border border-white/10 flex items-center justify-center rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl shadow-amber-500/5">
                <i className="fas fa-envelope-open-text text-xl"></i>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Direct Communication</div>
                <div className="text-white font-medium hover:text-amber-500 transition-colors cursor-pointer">{CONTACT_CONFIG.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass border border-white/10 flex items-center justify-center rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl shadow-amber-500/5">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Call</div>
                <div className="text-white font-medium hover:text-amber-500 transition-colors cursor-pointer">
                  <a href={`tel:${CONTACT_CONFIG.phone}`}>{CONTACT_CONFIG.phone}</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass border border-white/10 flex items-center justify-center rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl shadow-amber-500/5">
                <i className="fas fa-map-marked-alt text-xl"></i>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Consultation Hub</div>
                <div className="text-white font-medium">{CONTACT_CONFIG.location}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-12 border border-white/10 relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
              <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mb-8 text-slate-950 text-4xl shadow-lg shadow-amber-500/20">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h3 className="text-3xl font-serif text-white mb-3">Proposal Transmitted</h3>
              <p className="text-slate-400 text-sm max-w-xs mx-auto">Your email client has been launched with the pre-filled proposal. Please hit send to finalize.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-10 px-8 py-3 bg-white/5 text-amber-500 text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 rounded-full transition-all"
              >
                Draft Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Client Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email Identity</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Required Expertise</label>
                <div className="relative">
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all appearance-none cursor-pointer"
                  >
                    <option>Structural Consultation</option>
                    <option>Floor Plan Development</option>
                    <option>MEP System Layout</option>
                    <option>Facade Elevation Rendering</option>
                    <option>Blueprint Audit</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-xs"></i>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Project Particulars</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none"
                  placeholder="Outline your project requirements..."
                ></textarea>
              </div>
              <button 
                disabled={status === 'sending'}
                className="group relative w-full py-5 bg-amber-500 text-slate-950 font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all duration-500 disabled:opacity-50 overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {status === 'sending' ? (
                    <>
                      <i className="fas fa-cog fa-spin"></i>
                      Processing...
                    </>
                  ) : (
                    <>
                      Transmit Proposal
                      <i className="fas fa-arrow-right text-xs group-hover:translate-x-2 transition-transform"></i>
                    </>
                  )}
                </div>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
