/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PhotoModal } from './components/PhotoModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('01. Mídias Sociais');
  const [selectedDetail, setSelectedDetail] = useState<string>('');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string>('');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);

  const handleSelectService = (serviceName: string, packageDetails?: string) => {
    setSelectedService(serviceName);
    setSelectedDetail(packageDetails || '');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* 1. Cabeçalho Fixo com a Logo Studio NGS */}
      <Header />

      <main className="flex-1">
        {/* 2. Seção Inicial — Apresentação + Projetos Realizados Rolantes */}
        <Hero
          customPhotoUrl={customPhotoUrl}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        />

        {/* 3. Tipos de Trabalho / Serviços que Realizo */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Sobre Mim */}
        <About customPhotoUrl={customPhotoUrl} />
      </main>

      {/* 5. Rodapé */}
      <Footer />

      {/* 6. Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Modal Interativo de Ajuste / Teste de Foto Profissional */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={customPhotoUrl}
        onSavePhoto={(url) => setCustomPhotoUrl(url)}
        onReset={() => setCustomPhotoUrl('')}
      />
    </div>
  );
}
