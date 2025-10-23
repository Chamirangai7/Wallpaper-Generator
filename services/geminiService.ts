
import { GoogleGenAI } from "@google/genai";
import type { GeneratorOptions } from '../types';
import { STYLE_PRESETS } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWallpaper = async (
  userPrompt: string,
  options: GeneratorOptions
): Promise<string[]> => {
  try {
    const style = STYLE_PRESETS.find(p => p.id === options.style);
    const fullPrompt = style ? `${userPrompt}, ${style.prompt}` : userPrompt;

    console.log("Generating with options:", { ...options, prompt: fullPrompt });

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: fullPrompt,
      config: {
        numberOfImages: options.numberOfImages,
        aspectRatio: options.aspectRatio,
        outputMimeType: 'image/jpeg',
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error("The AI did not return any images. Try a different prompt.");
    }

    const imageUrls = response.generatedImages.map(img => {
      const base64ImageBytes = img.image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    });

    return imageUrls;
  } catch (error) {
    console.error("Error generating wallpaper:", error);
    // Enhance error message for user
    if (error instanceof Error && error.message.includes('SAFETY')) {
        throw new Error("Your prompt was blocked by the safety filter. Please modify your prompt and try again.");
    }
    throw new Error("Failed to generate wallpaper. Please check your prompt or try again later.");
  }
};
