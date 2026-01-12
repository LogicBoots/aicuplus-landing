
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center heart-glow">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold font-outfit">AICU PLUS</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-6">
              Revolutionizing the bridge between technology and emotion. We believe in a future where AI doesn't just calculate, it cares.
            </p>
            {/* <div className="flex gap-4">
              {['twitter', 'github', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-rose-600 transition-colors text-zinc-400 hover:text-white border border-white/5">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </a>
              ))}
            </div> */}
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">API Keys</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        {/* <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
          <p>© 2026 AICU PLUS, Inc. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
