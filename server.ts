import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// API de contato funcional
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, companyOrProfile, service, message } = req.body;

    // Validação estrita dos campos obrigatórios
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Por favor, informe seu nome.' });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Por favor, informe um e-mail válido.' });
    }

    if (!service || typeof service !== 'string' || !service.trim()) {
      return res.status(400).json({ success: false, error: 'Por favor, selecione qual serviço deseja contratar.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Por favor, descreva em algumas palavras o que você precisa.' });
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'nathaliagsnati123@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    // Log estruturado no servidor da solicitação de contato
    console.log('[NOVO CONTATO RECEBIDO]', {
      data: new Date().toISOString(),
      name,
      email,
      companyOrProfile: companyOrProfile || 'Não informado',
      service,
      message,
    });

    // Se houver uma chave da API Resend configurada nas variáveis de ambiente:
    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Contato Site <onboarding@resend.dev>',
          to: [recipientEmail],
          reply_to: email,
          subject: `Novo Contato do Site: ${name} — ${service}`,
          html: `
            <h2>Novo Contato recebido pelo site Nathe Silva</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Empresa / Perfil:</strong> ${companyOrProfile || 'Não informado'}</p>
            <p><strong>Serviço de interesse:</strong> ${service}</p>
            <p><strong>Mensagem:</strong></p>
            <blockquote style="background:#f9f9f9;padding:12px;border-left:4px solid #b45309;">
              ${message.replace(/\n/g, '<br/>')}
            </blockquote>
          `,
        }),
      });

      if (emailResponse.ok) {
        return res.json({
          success: true,
          provider: 'resend',
          message: 'Mensagem enviada com sucesso por e-mail! Em breve entrarei em contato.',
        });
      }
    }

    // Se houver Webhook (ex: Formspree, Make, Zapier, Google Sheets) configurado:
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          companyOrProfile,
          service,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (webhookResponse.ok) {
        return res.json({
          success: true,
          provider: 'webhook',
          message: 'Mensagem enviada com sucesso! Em breve entrarei em contato.',
        });
      }
    }

    // Caso o proprietário ainda não tenha adicionado RESEND_API_KEY ou CONTACT_WEBHOOK_URL nas variáveis de ambiente,
    // não simulamos envio falso: informamos com transparência e fornecemos o disparo imediato formatado
    return res.status(200).json({
      success: false,
      requiresSetup: true,
      message: 'Integração de envio automático de e-mail via servidor pendente de configuração (.env).',
      instructions: 'Para receber os e-mails diretamente sem intermediários, configure RESEND_API_KEY ou CONTACT_WEBHOOK_URL no arquivo de ambiente do servidor.',
      contactDetails: {
        recipientEmail,
        name,
        email,
        companyOrProfile: companyOrProfile || 'Não informado',
        service,
        message,
      },
    });
  } catch (err: any) {
    console.error('Erro ao processar formulário:', err);
    return res.status(500).json({
      success: false,
      error: 'Ocorreu um erro interno ao processar a mensagem. Tente pelo WhatsApp ou e-mail direto.',
    });
  }
});

// Configuração do Vite dev / Static prod
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();
