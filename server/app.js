import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contact.js';
import { errorHandler } from './middleware/errorHandler.js';
import { config } from './config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.use('/api', contactRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

// In monorepo production, optionally serve the React build.
// Disable this on Vercel/serverless API deployment.
if (config.nodeEnv === 'production' && !process.env.VERCEL) {
  const distPath = path.resolve(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.use(errorHandler);

export default app;
