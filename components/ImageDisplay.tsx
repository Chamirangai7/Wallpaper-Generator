
import React, { useEffect, useState } from 'react';
import { LOADING_MESSAGES } from '../constants';
import { DownloadIcon } from './icons/DownloadIcon';
import { ExclamationIcon } from './icons/ExclamationIcon';
import { ImageIcon } from './icons/ImageIcon';

interface ImageDisplayProps {
  images: string[];
  isLoading: boolean;
  error: string | null;
}

const LoadingState: React.FC = () => {
    const [message, setMessage] = useState(LOADING_MESSAGES[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full text-center text-brand-text-secondary p-8">
            <div className="w-16 h-16 border-4 border-brand-border border-t-brand-primary rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold">{message}</p>
        </div>
    );
};

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-brand-text-secondary p-8">
      <ImageIcon className="w-24 h-24 mb-4 opacity-30" />
      <h3 className="text-xl font-bold text-brand-text-primary">Your masterpiece awaits</h3>
      <p>Describe your vision, pick a style, and hit 'Generate' to create your wallpaper.</p>
    </div>
  );
};


export const ImageDisplay: React.FC<ImageDisplayProps> = ({ images, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center text-red-400 p-8">
          <ExclamationIcon className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold">Generation Failed</h3>
          <p>{error}</p>
        </div>
      );
    }
    if (images.length > 0) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 animate-fade-in">
          {images.map((src, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-xl border border-brand-border">
              <img src={src} alt={`Generated wallpaper ${index + 1}`} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <a
                  href={src}
                  download={`ai-wallpaper-${index + 1}.jpg`}
                  className="flex items-center gap-2 bg-white text-black font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-300"
                >
                  <DownloadIcon />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return <EmptyState />;
  };

  return (
    <div className="w-full min-h-[60vh] bg-brand-surface border border-brand-border rounded-lg shadow-lg flex items-center justify-center overflow-auto">
        {renderContent()}
    </div>
  );
};
