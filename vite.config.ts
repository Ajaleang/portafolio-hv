import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portafolio-hv/', // 👈 esto es clave para GitHub Pages (nombre del repositorio)
  plugins: [react()],
});
