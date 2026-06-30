// src/components/TodoItem.tsx
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      {/* El checkbox refleja si la tarea está completada */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Marcar "${todo.text}"`}
      />

      <input
        type="checkbox"
        value={(todo.text)}
      />


      <input
        type="button1"
        value={(todo.text)}
      />
      
      {/* El texto de la tarea */}
      <span>{todo.titulo}</span>
      <span>{todo.text}</span>
      {/* Botón para eliminar la tarea */}
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
}