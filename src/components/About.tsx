import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface AboutProps {
  customPhotoUrl?: string;
}

export const About: React.FC<AboutProps> = ({ customPhotoUrl }) => {
  const photoToDisplay =
    customPhotoUrl ||
    siteConfig.author.avatarUrl ||
    'https://i.ibb.co/TDKGHPcb/Imagem-do-Chat-GPT-2-de-nov-de-2026-11-25-06.png';

  return (
    <section id="sobre" className="py-16 md:py-20 bg-white border-b border-neutral-100">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Foto pequena dentro de um círculo por cima do texto */}
        <div className="mb-4 relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-md ring-1 ring-neutral-200/90 bg-neutral-100 mx-auto">
            <img
              src={photoToDisplay}
              alt="Nathe Silva"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Título */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-6">
          Prazer, sou Nathe Silva!
        </h2>

        {/* Textos da Apresentação */}
        <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl text-center font-normal">
          <p>
            Sou profissional de Marketing de Conteúdo, com 6 anos de experiência na área e estudante de Administração. Ao longo da minha trajetória, desenvolvi habilidades em comunicação digital, criação de conteúdo, redes sociais e estratégias para fortalecer a presença de marcas e pessoas no ambiente digital.
          </p>
          <p>
            Acredito que uma presença digital forte começa com estratégia, criatividade e comunicação. Meu propósito é ajudar pessoas e negócios a transformarem suas ideias em uma comunicação mais estratégica, profissional e autêntica.
          </p>
        </div>
      </div>
    </section>
  );
};
