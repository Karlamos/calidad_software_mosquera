// src/examples/vi-fn-return.test.ts
import { describe, it, expect, vi } from 'vitest'

describe('valores de retorno de vi.fn()', () => {
  it('mockReturnValue devuelve un valor fijo', () => {
    const getNumero = vi.fn().mockReturnValue(42)
    expect(getNumero()).toBe(42)
  })

  it('mockResolvedValue devuelve una promesa resuelta', async () => {
    // Útil para simular llamadas a la API que resuelven con datos.
    const cargar = vi.fn().mockResolvedValue(['a', 'b'])
    await expect(cargar()).resolves.toEqual(['a', 'b'])
  })

  it('mockRejectedValue devuelve una promesa rechazada', async () => {
    // Útil para simular un error de red.
    const fallar = vi.fn().mockRejectedValue(new Error('boom'))
    await expect(fallar()).rejects.toThrow('boom')
  })

  it('mockImplementation reemplaza la lógica', () => {
    const doble = vi.fn().mockImplementation((n: number) => n * 2)
    expect(doble(5)).toBe(10)
  })
})