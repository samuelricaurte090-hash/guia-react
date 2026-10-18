import { defineConfig } from 'vitest/config';

// Solo corre las pruebas de los ejercicios de cada semana.
// Las apps de Vite que crees dentro de cada semana tienen sus propias pruebas.
export default defineConfig({
  test: {
    include: ['semana-*/*.test.ts'],
  },
});
