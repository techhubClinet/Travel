import http from 'http';
import app from './app.js';
import { config } from './config.js';

const server = http.createServer(app);

server.on('error', (err) => {
  console.error('Server error:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${config.port} is already in use. Try another port or stop the other process.`);
  }
  process.exit(1);
});

server.on('listening', () => {
  console.log(`Server running at http://localhost:${config.port}`);
  if (config.nodeEnv === 'production') {
    console.log('Serving React build from /dist');
  } else {
    console.log('API: POST /api/contact, GET /api/health');
  }
});

server.listen(config.port);
