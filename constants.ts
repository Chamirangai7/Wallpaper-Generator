
import type { AspectRatio, StylePreset } from './types';

export const STYLE_PRESETS: StylePreset[] = [
  { id: 'none', name: 'None', prompt: '' },
  { id: 'cinematic', name: 'Cinematic', prompt: 'cinematic, hyper-detailed, photorealistic, 8k, cinematic lighting, professional color grading' },
  { id: 'anime', name: 'Anime', prompt: 'anime style, vibrant colors, detailed illustration, by studio ghibli and makoto shinkai' },
  { id: 'fantasy', name: 'Fantasy', prompt: 'epic fantasy art, detailed, matte painting, mystical, ethereal lighting, by greg rutkowski' },
  { id: 'minimalist', name: 'Minimalist', prompt: 'minimalist, clean lines, simple, abstract, geometric shapes, neutral color palette' },
  { id: 'cyberpunk', name: 'Cyberpunk', prompt: 'cyberpunk style, neon lights, dystopian future, high tech, Blade Runner aesthetic' },
  { id: 'abstract', name: 'Abstract', prompt: 'abstract art, non-representational, expressive brushstrokes, colorful, modern art' },
];

export const ASPECT_RATIOS: { value: AspectRatio; label: string }[] = [
  { value: '9:16', label: 'Phone (9:16)' },
  { value: '1:1', label: 'Square (1:1)' },
  { value: '16:9', label: 'Widescreen (16:9)' },
  { value: '3:4', label: 'Portrait (3:4)' },
  { value: '4:3', label: 'Landscape (4:3)' },
];

export const LOADING_MESSAGES: string[] = [
  "Summoning creative pixels...",
  "Teaching AI about aesthetics...",
  "Mixing digital paints...",
  "Consulting the art muses...",
  "Generating a masterpiece...",
  "Reticulating splines...",
  "Polishing the final image...",
];
