
import React from 'react';
import { Section } from '../types';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={Section.HERO} className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Organic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] md:w-[50%] md:h-[50%] bg-purple-900/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] md:w-[50%] md:h-[50%] bg-fuchsia-900/20 rounded-full blur-[80px] md:blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 md:mb-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-bold text-[11px] md:text-[13px]">
          ✨ Creating magic on Roblox
        </div>
        <h1 className="font-brand text-5xl sm:text-7xl md:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter">
          SIMPLY <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300">MAGICAL</span>
        </h1>
        <p className="max-w-xl mx-auto text-purple-200/60 text-base md:text-xl mb-10 md:mb-12 font-medium leading-relaxed px-4 md:px-0">
          We build simple, polished, and fun experiences for everyone to enjoy. Join millions of players in our growing universe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md mx-auto sm:max-w-none">
          <button 
            onClick={() => scrollToSection(Section.APPOINTMENT)}
            className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-purple-600 hover:bg-purple-500 text-white text-base md:text-lg font-extrabold rounded-2xl transition-all shadow-2xl shadow-purple-900/50 active:scale-95 uppercase tracking-wider"
          >
            Make an Appointment
          </button>
          <button 
            onClick={() => scrollToSection(Section.GAMES)}
            className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 glass-purple text-purple-100 text-base md:text-lg font-extrabold rounded-2xl transition-all active:scale-95 uppercase tracking-wider"
          >
            View Experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
