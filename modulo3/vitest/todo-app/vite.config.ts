// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Simula un navegador (document, window) dentro de Node.
    environment: 'jsdom',
    // Permite usar describe/it/expect sin importarlos en cada archivo.
    globals: false,
    // Archivo que se ejecuta una vez antes de toda la suite.
    setupFiles: './src/test/setup.ts',
    // Vitest incluye por defecto los **/*.test.tsx; lo dejamos explícito.
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});