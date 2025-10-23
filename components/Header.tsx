
import React from 'react';
import { ImageIcon } from './icons/ImageIcon';

export const Header: React.FC = () => {
  return (
    <header className="w-full text-center p-4">
      <div className="flex items-center justify-center gap-4 mb-2">
        <ImageIcon className="w-12 h-12 text-brand-primary" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary tracking-tight">
          AI Wallpaper Studio
        </h1>
      </div>
      <p className="text-brand-text-secondary text-lg">
        Craft your perfect mobile background with the power of AI.
      </p>
    </header>
  );
};
