
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { OptionsPanel } from './components/OptionsPanel';
import { ImageDisplay } from './components/ImageDisplay';
import { generateWallpaper } from './services/geminiService';
import type { GeneratorOptions } from './types';
import { SparklesIcon } from './components/icons/SparklesIcon';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [options, setOptions] = useState<GeneratorOptions>({
    aspectRatio: '9:16',
    style: 'none',
    numberOfImages: 1,
  });
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt) {
      setError('Please enter a prompt to generate a wallpaper.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);

    try {
      const images = await generateWallpaper(prompt, options);
      setGeneratedImages(images);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, options]);

  return (
    <div className="min-h-screen bg-brand-bg font-sans flex flex-col items-center p-4">
      <Header />
      <main className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <PromptForm prompt={prompt} setPrompt={setPrompt} options={options} setOptions={setOptions} />
          <OptionsPanel options={options} setOptions={setOptions} />
          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt}
            className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-brand-primary-hover transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed transform hover:scale-105"
          >
            <SparklesIcon />
            {isLoading ? 'Generating...' : 'Generate Wallpaper'}
          </button>
        </div>
        <div className="w-full lg:w-2/3">
          <ImageDisplay
            images={generatedImages}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <footer className="text-center p-4 mt-8 text-brand-text-secondary text-sm">
        <p>Powered by Gemini. Designed for creativity.</p>
      </footer>
    </div>
  );
};

export default App;
