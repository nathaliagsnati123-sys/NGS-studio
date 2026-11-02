import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre mim', href: '#sobre' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-100 py-12 md:py-16 text-neutral-600">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-100">
          {/* Identificação de Marca */}
          <div className="flex items-center gap-3">
            <img
              src="/logo_trimmed.png"
              alt="Studio NGS"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://i.ibb.co/0ypKhmdC/portfolio.png';
              }}
            />
            <div>
              <span className="text-base font-bold tracking-tight text-neutral-900 block">
                Studio NGS <span className="text-neutral-400 font-normal">|</span> {siteConfig.author.name}
              </span>
              <p className="text-xs text-neutral-500 mt-0.5">
                {siteConfig.author.profession} <span className="text-neutral-300">·</span> Presença digital estratégica
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-neutral-900 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Redes Sociais Editáveis */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.author.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Nathe Silva"
              className="w-9 h-9 rounded-md bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.author.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.author.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Nathe Silva"
              className="w-9 h-9 rounded-md bg-neutral-100 hover:bg-[#25D366] hover:text-white text-neutral-700 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="w-9 h-9 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Linha de Direitos e Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} {siteConfig.author.name}. Todos os direitos reservados.</p>
          <p className="text-neutral-500 font-medium">Design limpo e desenvolvimento web responsivo</p>
        </div>
      </div>
    </footer>
  );
};
