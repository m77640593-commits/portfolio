
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0418] py-20 border-t border-purple-500/10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-brand text-white text-sm">N</div>
              <span className="font-brand text-lg text-white">NEBULA</span>
            </div>
            <p className="text-purple-200/30 text-sm leading-relaxed max-w-xs">
              Building simple, beautiful, and fun experiences for the next generation of players.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:col-span-1">
            <div>
              <h4 className="font-brand text-[10px] font-bold mb-6 tracking-[0.3em] text-purple-500">STUDIO</h4>
              <ul className="space-y-4 text-sm text-purple-200/50">
                <li><a href="#" className="hover:text-white transition-colors">Games</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-brand text-[10px] font-bold mb-6 tracking-[0.3em] text-purple-500">LINKS</h4>
              <ul className="space-y-4 text-sm text-purple-200/50">
                <li><a href="#" className="hover:text-white transition-colors">Roblox</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-brand text-[10px] font-bold mb-6 tracking-[0.3em] text-purple-500">STAY UPDATED</h4>
            <div className="flex bg-white/5 p-1 rounded-2xl border border-purple-500/10">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent px-4 py-2 text-sm text-white focus:outline-none flex-1 placeholder:text-purple-500/30"
              />
              <button className="bg-purple-600 px-6 py-2 rounded-xl text-xs font-bold hover:bg-purple-500 transition-colors">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/5 text-center">
          <p className="text-purple-200/20 text-[10px] font-bold uppercase tracking-[0.3em]">© 2025 NEBULA STUDIOS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
