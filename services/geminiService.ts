import { GoogleGenAI, Type, Schema } from "@google/genai";
import { BrandAnalysis } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const brandAnalysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    archetype: { type: Type.STRING, description: "The brand archetype (e.g., Creator, Hero, Sage)." },
    tagline: { type: Type.STRING, description: "A catchy, modern tagline for the brand." },
    toneOfVoice: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "3 adjectives describing the tone of voice."
    },
    strategicPillars: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING }
        }
      },
      description: "3 key strategic pillars for the brand's success."
    },
    visualDirection: { type: Type.STRING, description: "A brief description of the suggested visual aesthetic." }
  },
  required: ["archetype", "tagline", "toneOfVoice", "strategicPillars", "visualDirection"]
};

export const decodeBrandStrategy = async (description: string): Promise<BrandAnalysis> => {
  try {
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model,
      contents: `Atue como um estrategista de marca sênior de uma agência de alto padrão (como a Brands Decoded).
      Analise a seguinte descrição de negócio e forneça uma estratégia de marca concisa e impactante.
      Retorne apenas JSON.
      
      Descrição do Negócio: "${description}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: brandAnalysisSchema,
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    return JSON.parse(text) as BrandAnalysis;
  } catch (error) {
    console.error("Error decoding brand:", error);
    throw error;
  }
};