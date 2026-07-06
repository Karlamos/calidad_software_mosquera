// src/hooks/useTodos.ts
import { useState, useMemo, useCallback } from 'react'
import type { Todo, Filter } from '../types'

let nextId = 0
function genId(): string {
  // id incremental simple para el ejemplo
  return `todo-${++nextId}`
}

export function useTodos(initial: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initial)
  const [filter, setFilter] = useState<Filter>('all')

  const add = useCallback((text: string) => {
    setTodos((prev) => [...prev, { id: genId(), text, completed: false , titulo: text }])
  }, [])

  const toggle = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    )
  }, [])

  const remove = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  // lista derivada según el filtro activo
  const visibleTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed)
    if (filter === 'completed') return todos.filter((t) => t.completed)
    return todos
  }, [todos, filter])

  return { todos, visibleTodos, filter, setFilter, add, toggle, remove }
}