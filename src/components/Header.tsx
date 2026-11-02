import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-xs py-2.5'
          : 'bg-white border-b border-transparent py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-center">
        <a
          href="#inicio"
          className="flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="Studio NGS - Página inicial"
        >
          <img
            src="/logo_trimmed.png"
            alt="Studio NGS"
            className="h-11 sm:h-13 w-auto object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://i.ibb.co/0ypKhmdC/portfolio.png';
            }}
          />
        </a>
      </div>
    </header>
  );
};
