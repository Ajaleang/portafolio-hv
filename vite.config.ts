import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 👈 esto es clave para Vercel
  plugins: [react()],
});
