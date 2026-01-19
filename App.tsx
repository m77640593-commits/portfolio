
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import ConceptLab from './components/ConceptLab';
import Stats from './components/Stats';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-purple-500/30 bg-[#0f051d]">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Subtle Background Glows */}
          <div className="absolute top-[10%] right-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[20%] left-[-5%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-fuchsia-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
          
          <AppointmentSection />

          <GameGrid />
          
          <section id={Section.ABOUT} className="py-24 md:py-40 relative">
            <div className="container mx-auto px-6 md:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-brand text-3xl md:text-4xl font-bold mb-8 md:mb-10 tracking-tight uppercase">OUR STORY</h2>
                <p className="text-xl md:text-2xl text-purple-100/80 leading-relaxed font-medium mb-12 md:mb-16 italic tracking-tight px-2">
                  "Nebula was built on a simple idea: that games should be magical. We don't focus on complex numbers or tech—we focus on the feeling you get when you step into a new world for the first time."
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-purple-500 mb-4 rotate-3">
                    <img src="https://picsum.photos/id/177/200/200" alt="Founder" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <div className="font-brand text-white text-xs md:text-sm tracking-widest">VORTEX</div>
                    <div className="text-purple-500 font-bold text-[9px] md:text-xs uppercase">Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ConceptLab />
          
          <Stats />
          
          <section id={Section.COMMUNITY} className="py-20 md:py-32">
            <div className="container mx-auto px-5 md:px-8">
              <div className="max-w-2xl mx-auto glass-purple p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center shadow-2xl">
                <h2 className="font-brand text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight uppercase text-white">JOIN US</h2>
                <p className="text-purple-200/50 mb-8 md:mb-10 font-medium text-sm md:text-base">
                  Be part of our purple universe. Get exclusive updates and talk to the developers.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="w-full sm:w-auto px-10 py-4 bg-[#5865F2] hover:scale-105 active:scale-95 text-white font-bold rounded-xl md:rounded-2xl transition-all shadow-xl shadow-blue-900/20 text-sm">
                    Discord
                  </button>
                  <button className="w-full sm:w-auto px-10 py-4 bg-white text-purple-900 hover:scale-105 active:scale-95 font-bold rounded-xl md:rounded-2xl transition-all shadow-xl shadow-white/5 text-sm">
                    Roblox Group
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
