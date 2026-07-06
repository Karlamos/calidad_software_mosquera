// src/examples/vi-fn.test.ts
import { describe, it, expect, vi } from 'vitest'

describe('vi.fn()', () => {
  it('registra las llamadas y sus argumentos', () => {
    // Arrange: creamos una función mock vacía.
    const mock = vi.fn()

    // Act: la llamamos dos veces con argumentos distintos.
    mock('a', 1)
    mock('b', 2)
    mock('c', 3)    

    // Assert: el mock recuerda cuántas veces y con qué se le llamó.
    expect(mock).toHaveBeenCalledTimes(3)
    expect(mock).toHaveBeenCalledWith('a', 1)
    // último set de argumentos
    expect(mock).toHaveBeenLastCalledWith('c', 3)
  })
})