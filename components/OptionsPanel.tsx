
import React from 'react';
import type { GeneratorOptions, AspectRatio } from '../types';
import { ASPECT_RATIOS } from '../constants';

interface OptionsPanelProps {
  options: GeneratorOptions;
  setOptions: React.Dispatch<React.SetStateAction<GeneratorOptions>>;
}

export const OptionsPanel: React.FC<OptionsPanelProps> = ({ options, setOptions }) => {
  const handleAspectRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions(prev => ({ ...prev, aspectRatio: e.target.value as AspectRatio }));
  };

  const handleNumberOfImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 4) {
      setOptions(prev => ({ ...prev, numberOfImages: value }));
    }
  };

  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-4 shadow-lg">
      <h3 className="text-sm font-medium text-brand-text-secondary mb-4">
        3. Fine-tune your settings
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="aspectRatio" className="block text-sm font-medium text-brand-text-primary mb-1">
            Aspect Ratio
          </label>
          <select
            id="aspectRatio"
            value={options.aspectRatio}
            onChange={handleAspectRatioChange}
            className="w-full bg-brand-bg border border-brand-border rounded-md p-2 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
          >
            {ASPECT_RATIOS.map(ratio => (
              <option key={ratio.value} value={ratio.value}>{ratio.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="numberOfImages" className="block text-sm font-medium text-brand-text-primary mb-1">
            Number of Images (1-4)
          </label>
          <input
            type="number"
            id="numberOfImages"
            min="1"
            max="4"
            value={options.numberOfImages}
            onChange={handleNumberOfImagesChange}
            className="w-full bg-brand-bg border border-brand-border rounded-md p-2 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
};
