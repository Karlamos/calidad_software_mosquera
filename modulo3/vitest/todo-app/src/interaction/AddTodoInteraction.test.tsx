// src/components/AddTodoForm.test.tsx
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi , afterEach} from 'vitest'
import { AddTodoInteraction } from './AddTodoInteraction'

describe('AddTodoInteraction', () => {
  afterEach(() => {
    cleanup() // 3. Limpia el DOM después de cada test
  })
  it('llama a onAdd con el texto al enviar el formulario', async () => {
    // Arrange: setup() ANTES de interactuar + spy que registra llamadas
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddTodoInteraction onAdd={onAdd} />)

    // Act: escribimos y hacemos click en el botón
    const input = screen.getByLabelText('Nueva tarea')
    await user.type(input, 'Comprar pan')
    await user.click(screen.getByRole('button', { name: /agregar/i }))
    const input2 = screen.getByLabelText('Nueva tarea')
    await user.type(input2, 'Comprar leche')
    await user.click(screen.getByRole('button', { name: /agregar/i }))
    

    // Assert: onAdd recibió exactamente el texto escrito, una sola vez
    expect(onAdd).toHaveBeenCalledTimes(2)
    expect(onAdd).toHaveBeenCalledWith('Comprar pan')

  })

  it('también envía al presionar Enter dentro del input', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddTodoInteraction onAdd={onAdd} />)

    // {Enter} al final del texto dispara el submit del form
    await user.type(screen.getByLabelText('Nueva tarea'), 'Estudiar Vitest{Enter}')

    expect(onAdd).toHaveBeenCalledWith('Estudiar Vitest')
  })

  it('limpia el input después de agregar', async () => {
    const user = userEvent.setup()
    render(<AddTodoInteraction onAdd={vi.fn()} />)

    const input = screen.getByLabelText<HTMLInputElement>('Nueva tarea')
    await user.type(input, 'Tarea temporal{Enter}')

    // tras enviar, el input vuelve a estar vacío (setText(''))
    expect(input.value).toBe('')
  })
})