
import React, { useState } from 'react';
import { generateGameConcept } from '../services/geminiService';
import { GameConcept, Section } from '../types';

const ConceptLab: React.FC = () => {
  const [genre, setGenre] = useState('');
  const [theme, setTheme] = useState('');
  const [loading, setLoading] = useState(false);
  const [concept, setConcept] = useState<GameConcept | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!genre || !theme) return;
    setLoading(true);
    setError('');
    setConcept(null);
    try {
      const result = await generateGameConcept(genre, theme);
      setConcept(result);
    } catch (err) {
      setError('Something went wrong. Try again later!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={Section.CONCEPT_LAB} className="py-20 md:py-32 bg-[#0c0418]">
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-brand text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">IDEA LAB</h2>
            <p className="text-purple-200/60 text-base md:text-lg px-4 md:px-0">
              Let's imagine something new together. <br className="hidden sm:block" />
              Enter a genre and a theme to get a custom Roblox idea.
            </p>
          </div>

          <div className="glass-purple p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] mb-12">
            <div className="space-y-4 md:space-y-6 mb-8">
              <input 
                type="text" 
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="What's the genre?"
                className="w-full bg-white/5 border border-purple-500/20 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-purple-500/30"
              />
              <input 
                type="text" 
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="What's the theme?"
                className="w-full bg-white/5 border border-purple-500/20 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-purple-500/30"
              />
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full py-4 md:py-4.5 rounded-xl md:rounded-2xl font-bold transition-all text-sm md:text-base ${
                loading ? 'bg-purple-900/50 text-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-500 text-white shadow-xl shadow-purple-600/20 active:scale-95'
              }`}
            >
              {loading ? 'Creating Magic...' : 'Generate Idea'}
            </button>
            {error && <p className="mt-4 text-center text-red-400 text-xs md:text-sm">{error}</p>}
          </div>

          {concept && (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="glass-purple p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border-purple-500/30 shadow-2xl">
                <h3 className="font-brand text-2xl md:text-3xl text-white mb-3 tracking-tighter">{concept.title}</h3>
                <p className="text-base md:text-lg text-purple-300 italic mb-8 md:mb-10">"{concept.pitch}"</p>
                
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-[9px] md:text-[10px] font-bold text-purple-500 uppercase tracking-[0.3em] mb-4">The Gameplay</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {concept.mechanics.map((m, i) => (
                        <span key={i} className="bg-purple-500/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm text-purple-200 border border-purple-500/10">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-purple-600/10 p-5 md:p-6 rounded-xl md:rounded-2xl border border-purple-500/20">
                    <h4 className="text-[9px] md:text-[10px] font-bold text-purple-500 uppercase tracking-[0.3em] mb-2">Why players love it</h4>
                    <p className="text-white text-xs md:text-sm leading-relaxed">{concept.uniqueSellingPoint}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConceptLab;
