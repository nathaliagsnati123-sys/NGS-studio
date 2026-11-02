import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Send,
  Mail,
  MessageCircle,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Loader2,
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
  preselectedDetail?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService, preselectedDetail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyOrProfile, setCompanyOrProfile] = useState('');
  const [service, setService] = useState('Avaliação de Redes Sociais');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
    if (preselectedDetail && !message) {
      setMessage(`Olá Nathe! Gostaria de consultar detalhes e valores para: ${preselectedDetail}.`);
    }
  }, [preselectedService, preselectedDetail]);

  const serviceOptions = [
    '01. Mídias Sociais',
    '02. Criatividade e Conteúdo',
    '03. Criação de Sites',
    'Outro / Dúvida Geral',
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = 'Por favor, informe seu nome.';
    if (!email.trim()) {
      errors.email = 'Por favor, informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Por favor, informe um endereço de e-mail válido.';
    }
    if (!service) errors.service = 'Por favor, selecione um serviço.';
    if (!message.trim() || message.trim().length < 5) {
      errors.message = 'Por favor, descreva em poucas palavras o que você precisa.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const formattedSummary = `*Novo Contato via Site*\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Empresa/Perfil:* ${
    companyOrProfile || 'Não informado'
  }\n*Serviço:* ${service}\n\n*Mensagem:*\n${message}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmittedStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          companyOrProfile,
          service,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedStatus('success');
        setStatusMessage(data.message || 'Mensagem enviada com sucesso! Em breve entrarei em contato.');
      } else {
        setSubmittedStatus('error');
        setStatusMessage(data.error || 'Não foi possível enviar a mensagem no momento. Tente pelo WhatsApp.');
      }
    } catch (err) {
      console.error('Falha de envio:', err);
      setSubmittedStatus('error');
      setStatusMessage('Não foi possível enviar a mensagem no momento. Tente pelo WhatsApp ou e-mail direto.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Contato de ${name} — ${service}`);
    const body = encodeURIComponent(
      `Olá Nathe,\n\nNome: ${name}\nE-mail: ${email}\nEmpresa/Perfil: ${
        companyOrProfile || 'Não informado'
      }\nServiço de interesse: ${service}\n\nO que preciso:\n${message}\n`
    );
    window.location.href = `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Nathe! Vim pelo seu site e tenho interesse em conversar sobre meu projeto:\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Empresa/Perfil:* ${
        companyOrProfile || 'Não informado'
      }\n*Serviço:* ${service}\n\n*O que preciso:*\n${message}`
    );
    window.open(`https://wa.me/${siteConfig.author.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(formattedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Informações e Canais Diretos */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-4">
              <span>Contato Direto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-4">
              {siteConfig.contact.title}
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed font-normal mb-8">
              {siteConfig.contact.subtitle}
            </p>

            {/* Cartões de canais diretos */}
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 flex items-center gap-3.5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-cyan-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    E-mail Direto
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 truncate block group-hover:text-cyan-800">
                    {siteConfig.author.email}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.author.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.author.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 flex items-center gap-3.5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    WhatsApp Oficial
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 truncate block group-hover:text-emerald-700">
                    {siteConfig.author.whatsappDisplay}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.author.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 flex items-center gap-3.5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-cyan-700 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Instagram
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 truncate block group-hover:text-cyan-800">
                    {siteConfig.author.instagramHandle}
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-cyan-50/60 border border-cyan-200/60 text-xs text-cyan-900 leading-relaxed">
              <strong className="font-semibold block mb-1">Atendimento humanizado:</strong>
              As mensagens são analisadas pessoalmente por Nathe Silva com retorno em horário comercial.
            </div>
          </div>

          {/* Formulário Oficial */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs">
              {submittedStatus === 'success' ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Mensagem recebida com sucesso!</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                    {statusMessage || 'Obrigada pelo contato! Responderei o mais breve possível.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedStatus('idle');
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Campo 1: Nome */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                      }}
                      placeholder="Seu nome"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        fieldErrors.name ? 'border-red-400 bg-red-50/20' : 'border-neutral-300'
                      } focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors`}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Campo 2: E-mail */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      E-mail de contato <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                      }}
                      placeholder="seuemail@exemplo.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        fieldErrors.email ? 'border-red-400 bg-red-50/20' : 'border-neutral-300'
                      } focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                    )}
                  </div>

                  {/* Campo 3: Nome da empresa ou perfil (opcional) */}
                  <div>
                    <label htmlFor="companyOrProfile" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Nome da empresa ou perfil no Instagram <span className="text-neutral-400 font-normal">(opcional)</span>
                    </label>
                    <input
                      id="companyOrProfile"
                      type="text"
                      value={companyOrProfile}
                      onChange={(e) => setCompanyOrProfile(e.target.value)}
                      placeholder="Ex: @minhamarca ou Nome da Empresa"
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                    />
                  </div>

                  {/* Campo 4: Qual serviço deseja contratar? */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Qual serviço deseja contratar? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors text-neutral-800"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Campo 5: Conte um pouco sobre o que você precisa */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Conte um pouco sobre o que você precisa <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                      }}
                      placeholder="Explique os objetivos do seu negócio, dúvidas ou prazos desejados..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        fieldErrors.message ? 'border-red-400 bg-red-50/20' : 'border-neutral-300'
                      } focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 rounded-md transition-all duration-150 flex items-center justify-center gap-2 shadow-xs"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processando envio...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar mensagem</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Opções diretas caso ocorra erro de conexão */}
              {submittedStatus === 'error' && (
                <div className="mt-6 p-5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                        {statusMessage}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Você também pode enviar sua mensagem diretamente pelo WhatsApp ou pelo seu aplicativo de e-mail:
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={handleOpenWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enviar no WhatsApp</span>
                    </button>

                    <button
                      onClick={handleOpenMailto}
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-md border border-neutral-300 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Abrir no meu E-mail</span>
                    </button>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>Cópia rápida do texto:</span>
                    <button
                      onClick={handleCopyText}
                      className="text-neutral-700 font-semibold hover:text-neutral-900 flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copied ? 'Copiado!' : 'Copiar dados'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
