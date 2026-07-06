// src/components/TodoItem.test.tsx
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi , afterEach} from 'vitest'
import type { Todo } from '../types'
import { TodoItemInteraction } from './TodoItemInteraction'

// Tarea base reutilizable en los tests
const todo: Todo = { id: 'a1', text: 'Leer documentación', completed: false }

describe('TodoItemInteraction', () => {
  afterEach(() => {
    cleanup() 
  })
  it('dispara onToggle con el id al hacer click en el checkbox', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<TodoItemInteraction todo={todo} onToggle={onToggle} onDelete={vi.fn()} />)

    await user.click(screen.getByRole('checkbox'))

    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith('a1')
  })

  it('dispara onDelete con el id al hacer click en eliminar', async () => {
    const user = userEvent.setup()
    const onDelete = vi.fn()
    render(<TodoItemInteraction todo={todo} onToggle={vi.fn()} onDelete={onDelete} />)

    await user.click(screen.getByRole('button', { name: /eliminar/i }))

    expect(onDelete).toHaveBeenCalledWith('a1')
  })

  it('muestra el checkbox marcado cuando la tarea está completada', () => {
    const completada: Todo = { ...todo, completed: true }
    render(<TodoItemInteraction todo={completada} onToggle={vi.fn()} onDelete={vi.fn()} />)

    // este caso NO interactúa: por eso no necesita async/await
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})