// src/components/TodoItem.tsx
import type { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItemInteraction({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        aria-label={`Completar ${todo.text}`}
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button aria-label={`Eliminar ${todo.text}`} onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  )
}