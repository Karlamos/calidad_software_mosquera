// src/matchers.test.ts
import { describe, it, expect } from 'vitest';

describe('toBe vs toEqual', () => {
  it('toBe usa === : ideal para primitivos', () => {
    expect('hola').toBe('hola');   // ✓
    expect(42).toBe(42);            // ✓
  });

  it('toEqual compara la estructura recursivamente', () => {
    // Para objetos/arrays, === compararía REFERENCIAS, no contenido.
    expect({ id: '1' }).toEqual({ id: '1' }); // ✓ mismo contenido
  });
});