
import React from 'react';
import Burnout from '../assets/burnout.png';

const FeatureCard: React.FC<{ title: string; desc: string; image: string }> = ({ title, desc, image }) => (
  <div className="group rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:border-rose-500/30 transition-all overflow-hidden flex flex-col">
    <div className="h-56 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm border border-white/10 p-2 rounded-xl">
         <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
      </div>
    </div>
    <div className="p-8 pt-4">
      <h3 className="text-2xl font-bold font-outfit mb-3 group-hover:text-rose-400 transition-colors">{title}</h3>
      <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Empowering <span className="text-rose-600">Critical</span> Care Teams.</h2>
            <p className="text-zinc-400">Advanced AI modules built specifically for the high-pressure environment of intensive care, focusing on both patient outcomes and staff well-being.</p>
          </div>
          <button className="text-rose-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Hospital Integration Guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Biometric Sentiment" 
            desc="Detect early markers of patient distress or agitation by correlating micro-vitals with sentiment AI."
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"
          />
          <FeatureCard 
            title="Family Bridge" 
            desc="Automated, empathetic patient status summaries for families, reducing nurse documentation overhead."
            image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop"
          />
          <FeatureCard 
            title="Burnout Monitoring" 
            desc="Anonymized staff stress tracking to alert department heads when care teams need critical breaks."
            image={Burnout}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
