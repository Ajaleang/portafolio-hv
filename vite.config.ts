import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portafolio-hv/', // este nombre debe coincidir con el de tu repositorio en GitHub
  plugins: [react()],
});
