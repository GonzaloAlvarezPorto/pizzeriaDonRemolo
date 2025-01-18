import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',  // Proxy a tu backend en desarrollo
    }
  }
=======
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
    },
>>>>>>> bd7cb5794bb0b3508fab17cdb758b30a31b53e1b
});
