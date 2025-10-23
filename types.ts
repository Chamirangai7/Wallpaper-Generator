
export type AspectRatio = '9:16' | '1:1' | '16:9' | '4:3' | '3:4';

export interface StylePreset {
  id: string;
  name: string;
  prompt: string;
}

export interface GeneratorOptions {
  aspectRatio: AspectRatio;
  style: string; // Corresponds to StylePreset.id
  numberOfImages: number;
}
