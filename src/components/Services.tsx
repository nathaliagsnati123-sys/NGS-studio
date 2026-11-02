import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Share2, Palette, Laptop, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string, packageDetails?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      id: 'midias-sociais',
      number: '01',
      title: '01. MÍDIAS SOCIAIS',
      icon: <Share2 className="w-5 h-5 text-cyan-700" />,
      description:
        'Avaliação, planejamento e gerenciamento de Instagram. Soluções para melhorar seu perfil, organizar sua comunicação e fortalecer sua presença nas redes sociais.',
      cta: 'Consultar Mídias Sociais',
    },
    {
      id: 'criatividade-e-conteudo',
      number: '02',
      title: '02. CRIATIVIDADE E CONTEÚDO',
      icon: <Palette className="w-5 h-5 text-cyan-700" />,
      description:
        'Criação de artes, planejamento de conteúdos e edição de vídeos para apresentar suas ideias de forma criativa, profissional e atrativa.',
      cta: 'Consultar Criatividade & Conteúdo',
    },
    {
      id: 'criacao-de-sites',
      number: '03',
      title: '03. CRIAÇÃO DE SITES',
      icon: <Laptop className="w-5 h-5 text-cyan-700" />,
      description:
        'Desenvolvimento de sites simples, modernos e responsivos para apresentar seu trabalho, divulgar seus serviços e conectar você ao seu público.',
      cta: 'Consultar Criação de Sites',
    },
  ];

  const handleCardClick = (title: string) => {
    onSelectService(title, `Interesse em serviços de: ${title}`);
    const whatsappMsg = encodeURIComponent(
      `Olá Nathe! Acessei seu site e gostaria de saber mais sobre seus serviços de: ${title}.`
    );
    window.open(`https://wa.me/${siteConfig.author.whatsappNumber}?text=${whatsappMsg}`, '_blank');
  };

  return (
    <section id="servicos" className="py-12 md:py-16 bg-neutral-50/70 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-900 bg-cyan-100/70 border border-cyan-200 px-3.5 py-1 rounded">
            SERVIÇOS
          </span>
        </div>

        {/* Grade com os 3 Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              onClick={() => handleCardClick(srv.title)}
              className="bg-white rounded-xl border border-neutral-200/90 p-6 shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {srv.icon}
                </div>

                <h3 className="text-base font-bold tracking-tight text-neutral-900 mb-3 group-hover:text-cyan-800 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-cyan-800">
                  {srv.cta}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-cyan-800 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
