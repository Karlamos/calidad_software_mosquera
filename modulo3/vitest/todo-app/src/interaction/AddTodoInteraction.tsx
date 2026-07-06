// src/components/AddTodoForm.tsx
import { useState } from 'react'

interface AddTodoInteractionProps {
  onAdd: (text: string) => void
}

export function AddTodoInteraction({ onAdd }: AddTodoInteractionProps) {
  const [text, setText] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = text.trim()
    if (!value) return // no agregar tareas vacías
    onAdd(value)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="Nueva tarea"
        placeholder="¿Qué hay que hacer?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  )
}