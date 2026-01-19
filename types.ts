export interface Game {
  id: string;
  title: string;
  genre: string;
  description: string;
  imageUrl: string;
  visits: string; // Roblox specific metric
  platforms: string[];
}

export enum Section {
  HERO = 'hero',
  GAMES = 'games',
  STATS = 'stats',
  COMMUNITY = 'community',
  ABOUT = 'about',
  APPOINTMENT = 'appointment',
  CONCEPT_LAB = 'concept-lab'
}

export interface GameConcept {
  title: string;
  pitch: string;
  mechanics: string[];
  monetization: string;
  uniqueSellingPoint: string;
}