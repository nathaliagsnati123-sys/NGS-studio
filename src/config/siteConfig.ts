/**
 * Configurações Centrais do Site — Nathe Silva | Marketing de Conteúdos
 * 
 * Todas as informações de contato, links sociais, textos e serviços
 * podem ser editadas de forma centralizada e intuitiva neste arquivo.
 */

export interface ServicePackage {
  id: string;
  name: string;
  frequency: string;
  description: string;
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  included?: string[];
  delivery?: string;
  importantNotes?: string[];
  possibilities?: string[];
  packages?: ServicePackage[];
  ctaLabel: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
}

export const siteConfig = {
  // Dados de Identidade e Contato
  author: {
    name: 'Nathe Silva',
    profession: 'Marketing de Conteúdos',
    shortBio: 'Especialista em marketing digital, gestão estratégica de redes sociais e criação de sites modernos.',
    email: 'nathaliagsnati123@gmail.com',
    
    // WHATSAPP Oficial de Nathe Silva
    whatsappNumber: '5538998485606',
    whatsappDisplay: '(38) 99848-5606',
    whatsappDefaultMessage: 'Olá! Acessei seu site e gostaria de saber mais sobre seus serviços.',
    
    // INSTAGRAM: Substitua pelo seu perfil oficial
    instagramHandle: '@nathesilva',
    instagramUrl: 'https://instagram.com/nathesilva',
    
    // Foto Profissional da Nathe Silva fornecida pelo usuário:
    avatarUrl: 'https://i.ibb.co/TDKGHPcb/Imagem-do-Chat-GPT-2-de-nov-de-2026-11-25-06.png',
  },

  // Conteúdo da Seção Inicial (Hero)
  hero: {
    title: 'Transformo ideias em presença digital, conectando pessoas e negócios às oportunidades do mundo online.',
    subtitle: 'Ajudo empresas e profissionais a fortalecerem sua presença nas redes sociais, criarem conteúdos mais estratégicos e desenvolverem sua presença digital.',
    primaryCta: 'Conheça meus serviços',
    secondaryCta: 'Entre em contato',
  },

  // Conteúdo da Seção Sobre Mim
  about: {
    title: 'Prazer, sou Nathe Silva!',
    paragraphs: [
      'Sou profissional de Marketing de Conteúdos, com 6 anos de experiência na área e estudante de Administração. Ao longo da minha trajetória, desenvolvi habilidades em comunicação digital, criação de conteúdo, redes sociais e estratégias para fortalecer a presença de marcas e pessoas no ambiente digital.',
      'Acredito que uma presença digital forte começa com estratégia, criatividade e comunicação. Meu propósito é ajudar pessoas e negócios a transformarem suas ideias em uma comunicação mais estratégica, profissional e autêntica.',
    ],
    highlights: [
      { label: 'Estratégia sob medida', desc: 'Planejamento alinhado aos objetivos reais da sua marca' },
      { label: 'Comunicação Clara', desc: 'Conteúdos objetivos que engajam e transmitem confiança' },
      { label: 'Visão Integrada', desc: 'Do design e planejamento até páginas e sites responsivos' },
    ],
  },

  // Catálogo Oficial dos 5 Serviços
  services: [
    {
      id: 'otimizacao-instagram',
      number: '01',
      title: 'Otimização de Instagram',
      category: 'Instagram & Diagnóstico',
      tagline: 'Transformação do perfil em uma apresentação mais profissional e organizada.',
      description: 'Ajudo você a transformar seu perfil em uma apresentação mais profissional, estratégica e organizada, com orientação personalizada para melhorar sua presença digital.',
      ctaLabel: 'Tenho interesse',
    },
    {
      id: 'planejamento-estrategico-conteudo',
      number: '02',
      title: 'Planejamento Estratégico de Conteúdo',
      category: 'Planejamento & Estratégia',
      tagline: 'Direcionamento claro e consistente para suas redes sociais.',
      description: 'Planejamento personalizado para empresas que desejam ter mais direcionamento, consistência e estratégia na hora de criar conteúdo para as redes sociais.',
      ctaLabel: 'Tenho interesse',
    },
    {
      id: 'criacao-conteudo-instagram',
      number: '03',
      title: 'Criação de Conteúdo para Instagram',
      category: 'Design & Conteúdo',
      tagline: 'Conteúdos desenvolvidos de acordo com a identidade da sua marca, prontos para postar.',
      description: 'Criação de conteúdos personalizados para fortalecer a comunicação da sua marca e tornar sua presença digital mais profissional.',
      ctaLabel: 'Tenho interesse',
    },
    {
      id: 'identidade-visual-redes-sociais',
      number: '04',
      title: 'Identidade Visual para Redes Sociais',
      category: 'Identidade Visual & Branding',
      tagline: 'Profissionalismo, consistência e reconhecimento no ambiente digital.',
      description: 'Desenvolvimento de uma identidade visual consistente para transmitir profissionalismo e fortalecer o reconhecimento da sua marca nas redes sociais.',
      ctaLabel: 'Tenho interesse',
    },
    {
      id: 'criacao-mini-sites',
      number: '05',
      title: 'Criação de Mini Sites',
      category: 'Web & Presença Online',
      tagline: 'Páginas práticas para apresentar sua marca e facilitar o contato com clientes.',
      description: 'Criação de páginas profissionais e responsivas para apresentar sua marca, divulgar seus serviços e facilitar o contato com seus clientes.',
      ctaLabel: 'Tenho interesse',
    },
  ] as ServiceItem[],

  // Seção de Projetos e Trabalhos Realizados
  projectsSection: {
    title: 'Projetos e trabalhos realizados',
    subtitle: 'Confira algumas das criações desenvolvidas para marcas e negócios dos mais variados segmentos.',
    categories: ['Todos', 'Gastronomia & Delivery', 'Beleza & Cosméticos', 'Turismo & Varejo'],
    works: [
      {
        id: 'work-1',
        title: 'Cheese Burguer Artesanal',
        category: 'Gastronomia & Delivery',
        segment: 'Hamburgueria',
        description: 'Arte promocional com fotografia em destaque, texturas temáticas e contraste de alto impacto para delivery.',
        imageUrl: '/projects/work_1.png',
        tag: 'Social Media Food',
      },
      {
        id: 'work-2',
        title: 'Taça Ice Cream Especial',
        category: 'Gastronomia & Delivery',
        segment: 'Sobremesas & Sorveteria',
        description: 'Composição visual para sorveteria unindo texturas delicadas, cores vivas e desejo imediato de consumo.',
        imageUrl: '/projects/work_2.png',
        tag: 'Design Gastronômico',
      },
      {
        id: 'work-3',
        title: 'A Hora Certa da Pizza',
        category: 'Gastronomia & Delivery',
        segment: 'Pizzaria',
        description: 'Conceito criativo integrando despertador e pizza para campanhas de horários de pico e pedidos no WhatsApp/App.',
        imageUrl: '/projects/work_3.png',
        tag: 'Campanha Criativa',
      },
      {
        id: 'work-4',
        title: 'Pão de Mel Gourmet',
        category: 'Gastronomia & Delivery',
        segment: 'Confeitaria Artesanal',
        description: 'Arte comercial focada na cremosidade e camadas do produto, transmitindo sofisticação e apelo visual.',
        imageUrl: '/projects/work_4.png',
        tag: 'Doceria & Vendas',
      },
      {
        id: 'work-5',
        title: 'Destino Brasil — Turismo',
        category: 'Turismo & Varejo',
        segment: 'Agência de Viagens',
        description: 'Composição dinâmica para agência de turismo integrando mapa estilizado, avião e apelo emocional para viagens.',
        imageUrl: '/projects/work_5.png',
        tag: 'Viagens & Turismo',
      },
      {
        id: 'work-6',
        title: 'Sunless FPS 50 — Proteção Solar',
        category: 'Beleza & Cosméticos',
        segment: 'Cuidados com a Pele',
        description: 'Post comercial para linha solar com blocos geométricos modernos, tons ciano/azul e destaque da embalagem.',
        imageUrl: '/projects/work_6.png',
        tag: 'Cosméticos & Skincare',
      },
      {
        id: 'work-7',
        title: 'Rotina de Cuidados com a Pele',
        category: 'Beleza & Cosméticos',
        segment: 'Clínica de Estética & Bem-estar',
        description: 'Comunicação suave e profissional para procedimentos estéticos, com equilíbrio tipográfico e sensação de frescor.',
        imageUrl: '/projects/work_7.png',
        tag: 'Estética & Saúde',
      },
      {
        id: 'work-8',
        title: 'Batom Vermelho Cherry Kiss',
        category: 'Beleza & Cosméticos',
        segment: 'Maquiagem & Luxo',
        description: 'Peça refinada para produtos de beleza com iluminação metálica, contraste com fita vermelha e acabamento de alto padrão.',
        imageUrl: '/projects/work_8.png',
        tag: 'Maquiagem & Varejo',
      },
    ],
  },

  // Seção de Contato
  contact: {
    title: 'Vamos conversar sobre seu projeto?',
    subtitle: 'Está precisando melhorar sua presença digital, organizar seus conteúdos ou desenvolver um site para seu negócio? Entre em contato e me conte o que você precisa.',
  },
};
