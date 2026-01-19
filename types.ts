
export interface Game {
  id: string;
  title: string;
  genre: string;
  description: string;
  imageUrl: string;
  visits: string; // Roblox specific metric
  platforms: string[];
}

export interface GameConcept {
  title: string;
  pitch: string;
  mechanics: string[];
  monetization: string; // Roblox specific
  uniqueSellingPoint: string;
}

export enum Section {
  HERO = 'hero',
  GAMES = 'games',
  CONCEPT_LAB = 'concept-lab',
  STATS = 'stats',
  COMMUNITY = 'community',
  ABOUT = 'about',
  APPOINTMENT = 'appointment'
}
