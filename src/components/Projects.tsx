import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  ArrowUpRight,
  Maximize2,
  X,
  Sparkles,
  LayoutGrid,
  Layers,
  ExternalLink,
} from 'lucide-react';

interface ProjectsProps {
  onContactClick: (serviceContext?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onContactClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'mosaic'>('grid');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedWork, setSelectedWork] = useState<(typeof siteConfig.projectsSection.works)[0] | null>(
    null
  );
  const [isFullMosaicModalOpen, setIsFullMosaicModalOpen] = useState(false);

  const works = siteConfig.projectsSection.works;

  const filteredWorks =
    activeCategory === 'Todos'
      ? works
      : works.filter((w) => w.category === activeCategory);

  const handleRequestSimilar = (title: string) => {
    if (selectedWork) setSelectedWork(null);
    onContactClick(`Gostaria de um projeto visual similar ao trabalho: "${title}"`);
  };

  return (
    <section id="projetos" className="py-20 md:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-4">
              <span>Portfólio Studio NGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-3">
              {siteConfig.projectsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {siteConfig.projectsSection.subtitle}
            </p>
          </div>

          {/* Alternância de Modo de Visualização */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 bg-neutral-100 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-cyan-700" />
                <span>Peças Individuais</span>
              </button>
              <button
                onClick={() => setViewMode('mosaic')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'mosaic'
                    ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-cyan-700" />
                <span>Painel Completo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modo 1: Painel Completo em Alta Resolução (1366 x 768) */}
        {viewMode === 'mosaic' && (
          <div className="mb-12 bg-neutral-50 rounded-2xl border border-neutral-200/90 p-5 sm:p-8 shadow-xs animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Painel Geral de Trabalhos
                </h3>
                <p className="text-xs text-neutral-500">
                  Visualização panorâmica em alta definição com todos os projetos reunidos.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullMosaicModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 rounded-md border border-neutral-300 transition-colors shadow-2xs"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-700" />
                  <span>Ampliar em Tela Cheia</span>
                </button>
                <a
                  href="/portfolio-highres.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 rounded-md transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir arquivo original</span>
                </a>
              </div>
            </div>

            <div
              onClick={() => setIsFullMosaicModalOpen(true)}
              className="cursor-pointer group relative rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xs"
            >
              <img
                src="/portfolio-highres.png"
                alt="Painel de portfólio Studio NGS - Nathe Silva"
                className="w-full h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-neutral-900 text-xs font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-cyan-700" />
                  <span>Clique para ampliar em tela cheia</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modo 2: Grade com Filtros por Categorias e Peças em Alta Definição */}
        {viewMode === 'grid' && (
          <>
            {/* Filtros em Abas Limpas */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-lg mb-8 overflow-x-auto max-w-full">
              {siteConfig.projectsSection.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-white text-neutral-900 shadow-2xs font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grade de 4 Colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  className="group bg-white rounded-xl border border-neutral-200/90 overflow-hidden hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md"
                >
                  {/* Imagem em Alta Definição */}
                  <div
                    onClick={() => setSelectedWork(work)}
                    className="relative aspect-[4/5] bg-neutral-100 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/25 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-neutral-900 text-xs font-medium px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-cyan-700" />
                        <span>Ver detalhes</span>
                      </div>
                    </div>

                    <div className="absolute top-2.5 left-2.5 bg-neutral-900/80 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded">
                      {work.segment}
                    </div>
                  </div>

                  {/* Informações da Peça */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-neutral-900 mb-1 group-hover:text-cyan-800 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 mb-3">
                        {work.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-cyan-800">
                        {work.tag}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRequestSimilar(work.title);
                        }}
                        className="text-xs font-semibold text-neutral-900 hover:text-cyan-800 flex items-center gap-1 transition-colors"
                      >
                        <span>Orçamento</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Faixa Convite para Projetos Personalizados */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-cyan-700 shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">
                Gostou do estilo visual das peças?
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5">
                Desenvolvo artes e identidades visuais exclusivas para qualquer nicho de negócio.
              </p>
            </div>
          </div>

          <button
            onClick={() => onContactClick('Criação de artes personalizadas para meu negócio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white rounded-md border border-neutral-300 hover:border-neutral-900 transition-colors whitespace-nowrap shadow-2xs shrink-0"
          >
            <span>Solicitar artes para minha marca</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Lightbox / Modal de Detalhes da Peça Individual */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-xl max-w-2xl w-full border border-neutral-200 overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]">
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-3 right-3 z-10 bg-white/90 rounded-full p-1.5 text-neutral-600 hover:text-neutral-900 shadow-xs"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagem Ampliada */}
            <div className="md:w-1/2 bg-neutral-100 flex items-center justify-center p-5">
              <div className="w-full max-w-xs aspect-[4/5] rounded-lg overflow-hidden shadow-md bg-white">
                <img
                  src={selectedWork.imageUrl}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Detalhes do Trabalho */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="inline-block px-2.5 py-1 bg-cyan-50 border border-cyan-200/80 rounded text-[11px] font-semibold text-cyan-800 uppercase tracking-wider mb-3">
                  {selectedWork.segment}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {selectedWork.title}
                </h3>
                <p className="text-xs text-neutral-500 font-mono mb-4">
                  Segmento: {selectedWork.category}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {selectedWork.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => handleRequestSimilar(selectedWork.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Quero um projeto parecido</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="w-full py-2 px-4 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors text-center"
                >
                  Fechar visualização
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Tela Cheia do Painel Completo */}
      {isFullMosaicModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setIsFullMosaicModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-neutral-300 p-2 flex items-center gap-1.5 text-xs font-medium"
            >
              <X className="w-5 h-5" />
              <span>Fechar</span>
            </button>
            <div className="w-full bg-white rounded-xl overflow-hidden p-2 shadow-2xl">
              <img
                src="/portfolio-highres.png"
                alt="Painel de portfólio Studio NGS em alta definição"
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>
            <div className="mt-4 flex items-center justify-between w-full text-white text-xs px-2">
              <span>Portfólio Studio NGS — 8 Projetos em Alta Resolução</span>
              <button
                onClick={() => {
                  setIsFullMosaicModalOpen(false);
                  onContactClick('Criação de identidade visual e artes');
                }}
                className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-colors"
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
