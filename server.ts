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

    // Registro do contato no servidor
    console.log('[NOVO CONTATO RECEBIDO]', {
      data: new Date().toISOString(),
      name,
      email,
      companyOrProfile: companyOrProfile || 'Não informado',
      service,
      message,
    });

    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso! Em breve entrarei em contato.',
    });
  } catch (err: any) {
    console.error('Erro ao processar formulário:', err);
    return res.status(500).json({
      success: false,
      error: 'Ocorreu um erro ao processar a mensagem. Tente pelo WhatsApp ou e-mail direto.',
    });
  }
});

// Configuração do Vite dev / Static prod
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, allowedHosts: true },
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
