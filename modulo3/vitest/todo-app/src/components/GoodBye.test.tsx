// src/components/GoodBye.test.tsx
import { describe, it, expect } from 'vitest';
import { GoodBye } from './GoodBye';

describe('GoodBye', () => {
  // El test mínimo: el componente existe y es importable.
  it('debería estar definido', () => {
    expect(GoodBye).toBeDefined();
  });
});