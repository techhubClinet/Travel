import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Support both layouts:
// 1) monorepo: ../.env (current project structure)
// 2) server-only repo: ./.env (Vercel/deployed server repo)
const envCandidates = [
  path.resolve(__dirname, '..', '.env'),
  path.resolve(__dirname, '.env'),
];

for (const envPath of envCandidates) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    break;
  }
}

const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
const missing = required.filter((key) => !process.env[key]?.trim());

if (missing.length > 0) {
  console.error('[Config] Missing required env:', missing.join(', '));
  console.error('Add them to .env (see .env.example).');
  process.exit(1);
}

export const config = {
  port: Number(process.env.PORT) || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.SMTP_TO || process.env.SMTP_USER,
  },
};
