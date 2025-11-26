import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const optimizePrompt = async (rawInput: string): Promise<string> => {
  if (!apiKey) return "API Key missing. Unable to optimize.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert Prompt Engineer. Your task is to take the following raw user input and transform it into a highly optimized, structured system prompt suitable for a large language model.
      
      Rules:
      1. Add clear role definition (Persona).
      2. Add context and constraints.
      3. Format with Markdown.
      4. Do not add conversational filler. Output ONLY the optimized prompt.

      Raw Input: "${rawInput}"`,
    });

    return response.text || "Failed to generate optimized prompt.";
  } catch (error) {
    console.error("Gemini Optimization Error:", error);
    return "Error connecting to AI service.";
  }
};

export const generateTags = async (content: string): Promise<string[]> => {
  if (!apiKey) return ['AI', 'General'];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate 3-5 short, relevant tags for the following prompt content. Return them as a comma-separated list only.
      
      Content: "${content.substring(0, 500)}..."`,
    });
    
    const text = response.text || "";
    return text.split(',').map(t => t.trim()).filter(Boolean);
  } catch (error) {
    return ['AI', 'Generated'];
  }
};

export const runPrompt = async (prompt: string, model: string = 'gemini-2.5-flash'): Promise<string> => {
    if (!apiKey) return "Error: No API Key provided. Please check your environment variables.";

    try {
        // Map UI model names to actual API models where possible, else default to flash
        const apiModel = model.toLowerCase().includes('pro') ? 'gemini-2.5-flash' : 'gemini-2.5-flash';
        
        const response = await ai.models.generateContent({
            model: apiModel,
            contents: prompt,
        });
        return response.text || "No response generated.";
    } catch (error) {
        console.error("Run Prompt Error:", error);
        return `Error executing prompt: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
};
