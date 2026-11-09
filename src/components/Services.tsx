import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  SlidersHorizontal,
  Target,
  Layers,
  Palette,
  Globe,
  MessageCircle,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string, packageDetails?: string) => void;
}

interface ServiceItemClean {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList: ServiceItemClean[] = [
    {
      id: 'consultoria-otimizacao-instagram',
      number: '01',
      title: 'Consultoria e Otimização de Instagram',
      description:
        'Ajudo você a transformar seu perfil em uma apresentação mais profissional, estratégica e organizada, com orientação personalizada para melhorar sua presença digital.',
      icon: <SlidersHorizontal className="w-5 h-5 text-cyan-700" />,
    },
    {
      id: 'planejamento-estrategico-conteudo',
      number: '02',
      title: 'Planejamento Estratégico de Conteúdo',
      description:
        'Planejamento personalizado para empresas que desejam ter mais direcionamento, consistência e estratégia na hora de criar conteúdo para as redes sociais.',
      icon: <Target className="w-5 h-5 text-cyan-700" />,
    },
    {
      id: 'criacao-conteudo-instagram',
      number: '03',
      title: 'Criação de Conteúdo para Instagram',
      description:
        'Criação de conteúdos personalizados para fortalecer a comunicação da sua marca e tornar sua presença digital mais profissional.',
      icon: <Layers className="w-5 h-5 text-cyan-700" />,
    },
    {
      id: 'identidade-visual-redes-sociais',
      number: '04',
      title: 'Identidade Visual para Redes Sociais',
      description:
        'Desenvolvimento de uma identidade visual consistente para transmitir profissionalismo e fortalecer o reconhecimento da sua marca nas redes sociais.',
      icon: <Palette className="w-5 h-5 text-cyan-700" />,
    },
    {
      id: 'criacao-mini-sites',
      number: '05',
      title: 'Criação de Mini Sites',
      description:
        'Criação de páginas profissionais e responsivas para apresentar sua marca, divulgar seus serviços e facilitar o contato com seus clientes.',
      icon: <Globe className="w-5 h-5 text-cyan-700" />,
    },
  ];

  const handleInterestClick = (serviceTitle: string) => {
    onSelectService(serviceTitle, `Interesse em: ${serviceTitle}`);
    const whatsappMsg = encodeURIComponent(
      `Olá! Tenho interesse em conhecer melhor seus serviços de ${serviceTitle}.`
    );
    window.open(
      `https://wa.me/${siteConfig.author.whatsappNumber}?text=${whatsappMsg}`,
      '_blank'
    );
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-neutral-50/60 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-900 bg-cyan-100/70 border border-cyan-200 px-3.5 py-1 rounded">
            SERVIÇOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mt-4 leading-tight">
            Como posso ajudar sua marca a crescer no digital?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
            Ofereço soluções em marketing e conteúdo para ajudar empresas e profissionais a construírem uma presença digital mais organizada, estratégica e profissional.
          </p>
        </div>

        {/* Grade com os 5 Serviços — Apresentação limpa, objetiva e elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7 items-stretch">
          {servicesList.map((service, index) => {
            // Distribuição harmoniosa e centralizada no grid de 6 colunas para os 5 cards:
            // Linha 1 (cards 1, 2, 3): 2 colunas cada (2 + 2 + 2 = 6 colunas)
            // Linha 2 (cards 4, 5): 2 colunas cada, centralizados na linha inferior
            const gridClass =
              index < 3
                ? 'lg:col-span-2'
                : index === 3
                ? 'lg:col-span-2 lg:col-start-2'
                : 'lg:col-span-2';

            const mdClass =
              index === 4
                ? 'md:col-span-2 md:max-w-md md:mx-auto w-full'
                : 'md:col-span-1';

            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl border border-neutral-200/90 p-6 sm:p-7 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between ${gridClass} ${mdClass}`}
              >
                <div>
                  {/* Topo do Card: Ícone Minimalista e Número */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200/60 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-cyan-800 bg-cyan-50/80 px-2.5 py-0.5 rounded border border-cyan-100">
                      {service.number}
                    </span>
                  </div>

                  {/* Nome do Serviço */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Descrição Curta e Objetiva */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Botão de Contato "Tenho interesse" */}
                <div className="pt-5 mt-6 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => handleInterestClick(service.title)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-all duration-150 flex items-center justify-center gap-2 shadow-2xs group cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>Tenho interesse</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
