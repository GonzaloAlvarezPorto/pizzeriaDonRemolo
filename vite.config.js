import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // Verifica que la carpeta 'front/dist' sea la correcta
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});
