
import React from 'react';

export const Team: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-transparent border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Company Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-6">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 text-2xl md:text-3xl font-bold shadow-xl">
                EN
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-amber-500 font-bold mb-1">Chairman & Founder</div>
                <div className="text-xl md:text-2xl font-semibold text-white">Engr. MD Nazrul Islam Mishel</div>
                <div className="text-sm text-slate-300 mt-2">BSc in Civil Engineering, AUST</div>
                <div className="text-sm text-slate-400 mt-1">Membership No. <span className="text-amber-500 font-medium">A-26859</span></div>
                <p className="mt-4 text-slate-300 max-w-lg">
                  With a proven track record in structural and architectural consultancy, Engr. Mishel leads the firm with a commitment to blending
                  aesthetic vision with technical excellence. His leadership ensures each project meets the highest standards of safety and design.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-slate-400 to-slate-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                SS
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-amber-500 font-bold mb-1">Managing Director & Partner</div>
                <div className="text-xl md:text-2xl font-semibold text-white">Sheikh Md. Samiul</div>
                <div className="text-sm text-slate-300 mt-2">BSc in Computer Science & Engineering, NSU</div>
                <p className="mt-4 text-slate-300 max-w-lg">
                  Sheikh Samiul brings deep technical expertise in systems and project delivery, complementing the firm's engineering capabilities
                  with digital and operational insights to drive efficient, modern workflows across projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
