import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-slate-800/60 via-slate-900/40 to-transparent p-10 rounded-2xl border border-white/5 shadow-lg">
          <h2 className="text-3xl font-bold text-amber-500 mb-4">Our Vision</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            At Aesthetic Design & Development Consultant, we believe that structural integrity and architectural beauty are not mutually exclusive—
            they are the twin pillars of every great landmark. We specialize in bridging the gap between imaginative design and the rigorous
            precision of structural engineering. From the first sketch to the final beam, we build the future on a foundation of excellence.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">What We Do</h3>
          <ul className="list-disc ml-5 text-slate-300 mb-6">
            <li className="mb-2"><strong>Architectural Design:</strong> Creating innovative, sustainable, and functional spaces that inspire.</li>
            <li className="mb-2"><strong>Structural Engineering:</strong> Utilizing advanced modeling and physics to ensure safety, durability, and cost-efficiency.</li>
            <li className="mb-2"><strong>Development Consultancy:</strong> Guiding clients through the complexities of project planning, feasibility, and technical execution.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">Why Choose Us?</h3>
          <p className="text-slate-300 mb-6">
            Seamless integration between design and construction, premium-quality results using state-of-the-art technology, and a client-centric
            approach that ensures each project realizes its unique vision without compromise.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">Our Commitment</h3>
          <p className="text-slate-300">
            Safety, innovation, and aesthetic brilliance are the hallmarks of our work. Whether designing a luxury residence or a complex commercial
            development, we are committed to engineering excellence that stands the test of time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
