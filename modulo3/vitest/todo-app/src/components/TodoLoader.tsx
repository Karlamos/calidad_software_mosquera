// src/components/TodoLoader.tsx
import { useEffect, useState } from 'react';
import type { Todo } from '../types';
import { fetchTodos } from '../api/todos';

// Componente de demostración: carga las tareas al montarse.
export function TodoLoader() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;

    fetchTodos()
      .then((data) => {
        if (!cancelado) setTodos(data);
      })
      .catch((err: unknown) => {
        // Capturamos el mensaje de error para mostrarlo en pantalla.
        if (!cancelado) {
          setError(err instanceof Error ? err.message : 'Error desconocido');
        }
      })
      .finally(() => {
        if (!cancelado) setLoading(false);
      });

    return () => {
      cancelado = true;
    };
  }, []);

  if (loading) return <p role="status">Cargando tareas…</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <ul aria-label="Lista de tareas">
      {todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}