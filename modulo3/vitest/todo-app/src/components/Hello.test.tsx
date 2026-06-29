// src/components/Hello.test.tsx
import { describe, it, expect } from 'vitest';
import { Hello } from './Hello';

describe('Hello', () => {
  // El test mínimo: el componente existe y es importable.
  it('debería estar definido', () => {
    expect(Hello).toBeDefined();
  });
});