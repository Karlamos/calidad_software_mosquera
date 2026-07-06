// src/hooks/useTodos.test.tsx
import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import type { Todo } from '../types'
import { useTodos } from './useTodos'


describe('useTodos', () => {
  it('arranca con lista vacía y filtro "all"', () => {
    const { result } = renderHook(() => useTodos())
    //      ^^^^^^ objeto con .current (snapshot del retorno del hook)

    // result.current contiene exactamente lo que el hook retorna
    expect(result.current.todos).toEqual([])
    expect(result.current.filter).toBe('all')
  })

  it('respeta el estado inicial provisto', () => {
    const inicial: Todo[] = [{ id: 'a', text: 'Tarea', completed: false , titulo: 'Tarea'}]
    const { result } = renderHook(() => useTodos(inicial))

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Tarea')
  })


  it('add agrega una tarea no completada', () => {
    const { result } = renderHook(() => useTodos())

    // act() agrupa la actualización de estado y aplica el re-render
    act(() => {
      result.current.add('Estudiar Vitest')
    })

    // tras act, result.current refleja el nuevo estado
    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0]).toMatchObject({
      text: 'Estudiar Vitest',
      completed: false,
    })
  })

   it('toggle alterna el campo completed', () => {
    const inicial: Todo[] = [{ id: 'a', text: 'Tarea', completed: false }]
    const { result } = renderHook(() => useTodos(inicial))

    act(() => result.current.toggle('a'))
    expect(result.current.todos[0].completed).toBe(true)

    // segundo toggle vuelve al estado original
    act(() => result.current.toggle('a'))
    expect(result.current.todos[0].completed).toBe(false)
  })

  it('remove elimina la tarea por id', () => {
    const inicial: Todo[] = [
      { id: 'a', text: 'Una', completed: false },
      { id: 'b', text: 'Dos', completed: false },
      
    ]
    const { result } = renderHook(() => useTodos(inicial))

    act(() => result.current.remove('a'))

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].id).toBe('b')
  })
})

// src/hooks/useTodos.test.tsx  (nuevo describe)
describe('useTodos — filtro', () => {
  function setup() {
    const inicial: Todo[] = [
      { id: '1', text: 'Activa', completed: false , titulo: 'Activa' },
      { id: '2', text: 'Hecha', completed: true , titulo: 'Hecha' },
    ]
    return renderHook(() => useTodos(inicial))
  }

  it('filtro "all" muestra todas', () => {
    const { result } = setup()
    expect(result.current.visibleTodos).toHaveLength(2)
  })

  it('filtro "active" muestra solo las no completadas', () => {
    const { result } = setup()

    act(() => result.current.setFilter('active'))

    expect(result.current.visibleTodos).toHaveLength(1)
    expect(result.current.visibleTodos[0].text).toBe('Activa')
  })

  it('filtro "completed" muestra solo las completadas', () => {
    const { result } = setup()

    act(() => result.current.setFilter('completed'))

    expect(result.current.visibleTodos).toHaveLength(1)
    expect(result.current.visibleTodos[0].text).toBe('Hecha')
  })
})