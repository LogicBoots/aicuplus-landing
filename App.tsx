
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AiDemo from './components/AiDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-rose-500/30">
      <Header />
      
      <main>
        <Hero />
        
        {/* Medical Partners Section */}
        <section className="py-12 border-y border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-zinc-600 text-sm font-bold uppercase tracking-widest mb-10">Integrated with Leading Healthcare Networks</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-xl font-bold font-outfit text-white">HEALTH-LINK</div>
              <div className="text-xl font-bold font-outfit text-white">VITAL-MED</div>
              <div className="text-xl font-bold font-outfit text-white">CORE-CLINIC</div>
              <div className="text-xl font-bold font-outfit text-white">BIO-TRUST</div>
              <div className="text-xl font-bold font-outfit text-white">PULSE-SYS</div>
            </div>
          </div>
        </section>

        <Features />

        {/* Vision Section - Re-imagined for ICU */}
        <section className="py-24 bg-zinc-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-rose-600/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop" 
                  alt="Clinical Care Precision" 
                  className="relative rounded-[3rem] shadow-2xl border border-white/10"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-rose-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Clinical Ethics</span>
                <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-8 leading-tight">Humanizing <br /><span className="text-rose-600">The Wire.</span></h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-outfit">
                  The ICU is a place of wires, beeps, and screens. AICU PLUS ICU transforms this data-heavy environment into a space of understanding, ensuring no patient is ever reduced to just a chart.
                </p>
                <div className="space-y-4">
                  {[
                    "HIPAA-compliant empathy algorithms",
                    "Real-time patient distress pre-detection",
                    "Nurse-first UI to reduce screen fatigue"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 text-zinc-200">
                      <div className="w-6 h-6 rounded-full bg-rose-600/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AiDemo />

        {/* Call to Action - ICU Pilot Program */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-rose-600/5 -z-10"></div>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 -z-10">
                 <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2547&auto=format&fit=crop" alt="Clinical Setting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/20 blur-[100px] rounded-full"></div>
              <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-8 relative z-10">Bring <span className="text-rose-500">AICU PLUS ICU</span> to your facility.</h2>
              <p className="text-zinc-400 text-lg mb-12 relative z-10 max-w-2xl mx-auto">
                Join our Early Pilot Program for ICU departments. Improve patient outcomes and staff retention through AI-driven empathy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <button className="px-10 py-5 bg-white text-zinc-950 rounded-2xl font-bold text-lg hover:bg-rose-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
                  Contact Clinical Sales
                </button>
                <button className="px-10 py-5 bg-zinc-800 text-white rounded-2xl font-bold text-lg hover:bg-zinc-700 transition-all border border-white/10">
                  Technical Whitepaper
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
