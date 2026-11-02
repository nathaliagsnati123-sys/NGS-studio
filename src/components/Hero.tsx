import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  customPhotoUrl?: string;
  onOpenPhotoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ customPhotoUrl }) => {
  const photoToDisplay =
    customPhotoUrl ||
    siteConfig.author.avatarUrl ||
    'https://i.ibb.co/TDKGHPcb/Imagem-do-Chat-GPT-2-de-nov-de-2026-11-25-06.png';

  const works = siteConfig.projectsSection.works;
  // Duplicar a lista de trabalhos para rotação contínua e perfeita
  const scrollingWorks = [...works, ...works];

  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-neutral-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Foto da Nathe Silva (acima, centralizada) */}
        <div className="mb-5 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md ring-1 ring-neutral-200/80 bg-neutral-100 mx-auto">
            <img
              src={photoToDisplay}
              alt="Nathe Silva"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Nome "Nathe Silva" centralizado */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2">
          Nathe Silva
        </h2>

        {/* Tag discreta de posicionamento */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-700 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
          <span>Marketing Digital & Conteúdo Estratégico</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-snug sm:leading-tight text-balance max-w-2xl mb-12">
          {siteConfig.hero.title}
        </h1>
      </div>

      {/* Título: Projetos realizados */}
      <div className="w-full text-center mb-6">
        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-400">
          Projetos realizados
        </h3>
      </div>

      {/* Faixa Rolante de Trabalhos contínua (apenas exibição visual sem clique) */}
      <div className="w-full relative py-2">
        {/* Efeitos de fade nas laterais para suavizar entrada e saída */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll-left flex gap-5 items-center">
          {scrollingWorks.map((work, idx) => (
            <div
              key={`${work.id}-${idx}`}
              className="w-44 sm:w-52 shrink-0 aspect-[4/5] rounded-xl overflow-hidden border border-neutral-200/90 shadow-2xs hover:shadow-md transition-shadow duration-300 bg-neutral-50 relative pointer-events-auto"
            >
              <img
                src={work.imageUrl}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
