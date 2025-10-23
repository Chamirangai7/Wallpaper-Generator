
import React from 'react';
import type { GeneratorOptions } from '../types';
import { STYLE_PRESETS } from '../constants';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  options: GeneratorOptions;
  setOptions: React.Dispatch<React.SetStateAction<GeneratorOptions>>;
}

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, options, setOptions }) => {
  const handleStyleChange = (styleId: string) => {
    setOptions(prev => ({ ...prev, style: styleId }));
  };

  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-4 shadow-lg">
      <label htmlFor="prompt" className="block text-sm font-medium text-brand-text-secondary mb-2">
        1. Describe your wallpaper
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., A vibrant nebula in deep space with glowing stars"
        rows={4}
        className="w-full bg-brand-bg border border-brand-border rounded-md p-2 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
      />
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-brand-text-secondary mb-2">
          2. Choose a style
        </label>
        <div className="flex flex-wrap gap-2">
          {STYLE_PRESETS.map(preset => (
            <button
              key={preset.id}
              onClick={() => handleStyleChange(preset.id)}
              className={`px-3 py-1 text-sm font-semibold rounded-full transition-all duration-200 ${
                options.style === preset.id
                  ? 'bg-brand-primary text-white ring-2 ring-offset-2 ring-offset-brand-surface ring-brand-primary'
                  : 'bg-brand-bg hover:bg-brand-border border border-brand-border'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
