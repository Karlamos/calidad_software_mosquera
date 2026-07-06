
// src/test/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// El servidor intercepta peticiones en el entorno Node de los tests.
export const server = setupServer(...handlers);