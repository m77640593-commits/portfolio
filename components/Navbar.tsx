
import React, { useState, useEffect } from 'react';
import { Section } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0f051d]/90 backdrop-blur-xl py-3 md:py-4 shadow-2xl shadow-purple-900/20' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-5 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => scrollToSection(Section.HERO)}>
          <div className="w-8 h-8 md:w-9 md:h-9 bg-purple-600 rounded-xl flex items-center justify-center font-brand text-white text-base md:text-lg rotate-3 hover:rotate-0 transition-transform">N</div>
          <span className="font-brand text-lg md:text-xl tracking-tighter text-white">NEBULA</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-tight text-purple-200/70">
          <button onClick={() => scrollToSection(Section.APPOINTMENT)} className="hover:text-white transition-colors">Book Call</button>
          <button onClick={() => scrollToSection(Section.GAMES)} className="hover:text-white transition-colors">Games</button>
          <button onClick={() => scrollToSection(Section.CONCEPT_LAB)} className="hover:text-white transition-colors">Lab</button>
          <button onClick={() => scrollToSection(Section.ABOUT)} className="hover:text-white transition-colors">About</button>
        </div>

        <button 
          onClick={() => scrollToSection(Section.APPOINTMENT)}
          className="px-4 md:px-6 py-2 md:py-2.5 bg-purple-600 text-white font-bold rounded-full text-xs md:text-sm hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20 active:scale-95"
        >
          Book
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
