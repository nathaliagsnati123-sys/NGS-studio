/**
 * Configurações Centrais do Site — Nathe Silva | Marketing e Conteúdo
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
    profession: 'Marketing e Conteúdo',
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
      'Sou profissional da área de Marketing e Conteúdo, com 6 anos de experiência e atualmente estudante de Administração. Ao longo dessa trajetória, venho desenvolvendo conhecimentos e habilidades em comunicação digital, criação de conteúdo, redes sociais e ferramentas que ajudam marcas e pessoas a fortalecerem sua presença na internet.',
      'Meu propósito é transformar ideias em possibilidades e ajudar pessoas e negócios a construírem uma presença digital mais estratégica, profissional e autêntica.',
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
      id: 'avaliacao-redes-sociais',
      number: '01',
      title: 'Avaliação de Redes Sociais',
      category: 'Diagnóstico & Estratégia',
      tagline: 'Análise aprofundada do perfil para identificar melhorias práticas.',
      description: 'Uma análise estratégica do seu perfil no Instagram para identificar pontos fortes, oportunidades de melhoria e o que pode ser feito para tornar sua presença digital mais profissional e organizada.',
      included: [
        'Análise da apresentação do perfil',
        'Avaliação da biografia e das informações principais',
        'Análise da coerência da identidade visual',
        'Avaliação dos conteúdos publicados e formatos',
        'Identificação de gargalos e pontos de melhoria',
        'Recomendações práticas para elevar o perfil e a comunicação',
      ],
      delivery: 'Relatório completo com análise personalizada e plano de sugestões práticas de melhoria.',
      ctaLabel: 'Solicitar avaliação',
    },
    {
      id: 'cronograma-postagens',
      number: '02',
      title: 'Cronograma de Postagens',
      category: 'Planejamento & Ideação',
      tagline: 'Organização editorial para postar com constância e direção.',
      description: 'Um planejamento de conteúdos para ajudar você a manter seu Instagram organizado e publicar com mais estratégia, sem ficar sem ideias do que postar.',
      included: [
        'Sugestões estruturadas de temas para publicações',
        'Ideias detalhadas de posts em feed, Reels e carrosséis',
        'Sugestões de títulos atraentes e ganchos de retenção',
        'Ideias de legendas persuasivas e chamadas para ação (CTAs)',
        'Organização de datas e temas em formato de cronograma prático',
      ],
      delivery: 'O cliente recebe o planejamento editorial pronto e fica responsável pela produção e publicação dos conteúdos.',
      ctaLabel: 'Solicitar cronograma',
    },
    {
      id: 'gerenciamento-instagram',
      number: '03',
      title: 'Gerenciamento de Instagram',
      category: 'Design & Produção Contínua',
      tagline: 'Feed ativo e visualmente alinhado à sua identidade.',
      description: 'Organização e produção de conteúdos para manter o Instagram do seu negócio atualizado, com uma comunicação visual alinhada à sua marca.',
      importantNotes: [
        'As artes são desenvolvidas de acordo com as informações, identidade visual e necessidades do cliente.',
        'Os detalhes de publicação, legendas e rotina são combinados na contratação de cada pacote.',
        'Valores personalizados conforme a demanda do projeto — solicite seu orçamento.',
      ],
      packages: [
        {
          id: 'pacote-1',
          name: 'Pacote 1',
          frequency: '1 arte por semana',
          description: 'Ideal para profissionais que desejam manter o perfil ativo com presença visual essencial.',
          deliverables: ['4 posts mensais planejados', 'Design alinhado à identidade', 'Legendas e orientações'],
        },
        {
          id: 'pacote-2',
          name: 'Pacote 2',
          frequency: '2 artes por semana',
          description: 'Perfeito para empresas que buscam consistência e ritmo constante de comunicação.',
          deliverables: ['8 posts mensais planejados', 'Variedade de temas e formatos', 'Design e roteiros'],
        },
        {
          id: 'pacote-3',
          name: 'Pacote 3',
          frequency: '3 artes por semana',
          description: 'Recomendado para marcas com foco em crescimento e geração ativa de autoridade.',
          deliverables: ['12 posts mensais planejados', 'Equilíbrio entre valor e conversão', 'Design e estratégia'],
        },
        {
          id: 'pacote-4',
          name: 'Pacote 4',
          frequency: '7 artes por semana',
          description: 'Presença diária intensiva para posicionamento forte e máxima cobertura de audiência.',
          deliverables: ['Postagens diárias (feed/carrosséis)', 'Design editorial completo', 'Gestão visual contínua'],
        },
      ],
      ctaLabel: 'Consultar pacotes',
    },
    {
      id: 'edicao-videos',
      number: '04',
      title: 'Edição de Vídeos',
      category: 'Vídeo & Dinamismo',
      tagline: 'Vídeos brutos transformados em conteúdos atraentes para redes sociais.',
      description: 'Transformo os vídeos enviados por você em conteúdos mais organizados e dinâmicos para suas redes sociais.',
      included: [
        'Cortes dinâmicos e eliminação de pausas desnecessárias',
        'Inserção de legendas legíveis e destaques visuais',
        'Ajustes de ritmo, enquadramento e áudio',
        'Otimização para formato vertical (Reels, TikTok, Shorts)',
      ],
      importantNotes: [
        'O cliente envia o vídeo original gravado e as orientações necessárias.',
        'A edição é realizada com base no material enviado.',
        'Após receber a edição, o cliente terá até 7 dias corridos para analisar o material e solicitar os ajustes previstos no serviço.',
        'Não há edições ilimitadas — o prazo de entrega e a quantidade de rodadas de ajustes são alinhados previamente com clareza.',
      ],
      delivery: 'Arquivo de vídeo pronto para publicação no formato ideal.',
      ctaLabel: 'Solicitar edição',
    },
    {
      id: 'criacao-sites',
      number: '05',
      title: 'Criação de Sites',
      category: 'Presença Web & Conversão',
      tagline: 'Páginas modernas, responsivas e pensadas para gerar contatos.',
      description: 'Desenvolvimento de sites modernos e responsivos para apresentar sua empresa, seus serviços e facilitar o contato com seus clientes.',
      possibilities: [
        'Sites institucionais para empresas e consultorias',
        'Sites de apresentação profissional e portfólio',
        'Páginas focadas em apresentação de serviços',
        'Landing pages de alta conversão para campanhas',
        'Páginas para divulgação de produtos e negócios locais',
      ],
      importantNotes: [
        'Cada projeto é planejado e desenvolvido sob medida para as necessidades e identidade do cliente.',
        'Design 100% responsivo para celulares, tablets e computadores.',
        'Estruturação pensada para facilitar o contato rápido via WhatsApp ou formulário.',
      ],
      delivery: 'Site completo no ar, testado e pronto para receber seus clientes.',
      ctaLabel: 'Solicitar orçamento',
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
