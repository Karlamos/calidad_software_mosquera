// src/api/todos.ts
import type { Todo } from '../types';

// Obtiene las tareas desde el backend.
export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('/api/todos');
  if (!res.ok) {
    throw new Error('No se pudieron cargar las tareas');
  }
  return res.json() as Promise<Todo[]>;
}