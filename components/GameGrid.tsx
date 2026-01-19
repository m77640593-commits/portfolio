
import React from 'react';
import { Game, Section } from '../types';

const GAMES: Game[] = [
  {
    id: '1',
    title: 'Purp Tycoon',
    genre: 'Tycoon',
    description: 'The chillest tycoon on the platform. Build your dream lavender farm.',
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    visits: '85M+',
    platforms: ['All']
  },
  {
    id: '2',
    title: 'Dreamscape Obby',
    genre: 'Platformer',
    description: 'A beautiful journey through the clouds. Easy to play, hard to leave.',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    visits: '42M+',
    platforms: ['Mobile', 'PC']
  },
  {
    id: '3',
    title: 'Starlight Roleplay',
    genre: 'RP',
    description: 'Meet new friends under the eternal purple moonlight.',
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80',
    visits: '15M+',
    platforms: ['All']
  }
];

const GameGrid: React.FC = () => {
  return (
    <section id={Section.GAMES} className="py-20 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-brand text-3xl md:text-4xl font-bold mb-4 tracking-tight">OUR WORLD</h2>
          <div className="h-1.5 w-12 md:w-16 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {GAMES.map((game) => (
            <div 
              key={game.id} 
              className="group bg-[#160a29] rounded-[2rem] overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2"
              style={{ isolation: 'isolate' }}
            >
              <div 
                className="aspect-[4/3] overflow-hidden relative rounded-t-[2rem]" 
                style={{ transform: 'translateZ(0)' }}
              >
                <img 
                  src={game.imageUrl} 
                  alt={game.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 will-change-transform"
                />
                <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                  {game.genre}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">{game.title}</h3>
                  <span className="text-purple-400 font-bold text-xs md:text-sm">{game.visits} visits</span>
                </div>
                <p className="text-purple-200/50 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                  {game.description}
                </p>
                <button className="w-full py-3 md:py-4 bg-purple-900/30 hover:bg-purple-600 text-purple-100 hover:text-white text-[10px] md:text-xs font-bold rounded-xl transition-all uppercase tracking-widest border border-purple-500/20 active:scale-95">
                  Join Experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
