// src/test/setup.ts
import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from './mocks/server';

// 1. Antes de todos los tests: empieza a interceptar.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// 2. Después de CADA test: limpia los handlers añadidos puntualmente.
afterEach(() => server.resetHandlers());

// 3. Al terminar la suite: deja de interceptar y libera recursos.
afterAll(() => server.close());