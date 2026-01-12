
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Clinical Background Image */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 -z-20 scale-105">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" 
          alt="Modern ICU Environment"
          className="w-full h-full object-cover blur-sm"
        />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-rose-900/20 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          Critical Care Empathy Core
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tight leading-[1.1] mb-8">
          The Heart of the <br />
          <span className="gradient-text">ICU Ecosystem.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-12">
          AICU PLUS ICU integrates emotional intelligence directly into patient vitals, supporting healthcare heroes and humanizing critical care for families.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-rose-900/30 flex items-center justify-center gap-2 group">
            Request Clinical Demo
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
            Implementation Story
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Hero Visual Block: ICU Monitor Interface */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-rose-600/10 rounded-[3rem] blur-3xl -z-10 animate-pulse"></div>
          <div className="rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl shadow-rose-900/20 aspect-[16/9] md:aspect-[21/9] bg-zinc-900 group">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop" 
              alt="Patient Monitoring Interface"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="text-left">
                <p className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-1">Clinical Engine Active</p>
                <p className="text-white text-xl font-bold">Monitoring Patient Sentience...</p>
              </div>
              <div className="flex gap-1 items-end h-12">
                {[4, 7, 2, 8, 5, 9, 3, 6].map((h, i) => (
                  <div key={i} className="w-1.5 bg-rose-500/60 rounded-full animate-pulse" style={{ height: `${h * 10}%`, animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
