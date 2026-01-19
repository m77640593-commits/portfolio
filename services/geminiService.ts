
import { GoogleGenAI, Type } from "@google/genai";
import { GameConcept } from "../types";

export const generateGameConcept = async (genre: string, theme: string): Promise<GameConcept> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a creative Roblox game concept for a ${genre} game with a ${theme} theme. 
    Focus on Roblox-specific elements like social play, avatar items, and group-based mechanics.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          pitch: { type: Type.STRING },
          mechanics: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          monetization: { type: Type.STRING, description: "Robux-based monetization ideas" },
          uniqueSellingPoint: { type: Type.STRING }
        },
        required: ["title", "pitch", "mechanics", "monetization", "uniqueSellingPoint"]
      },
      temperature: 0.8,
    },
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Failed to generate a valid game concept.");
  }
};
