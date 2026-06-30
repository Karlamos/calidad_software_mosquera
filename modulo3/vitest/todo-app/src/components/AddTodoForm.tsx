// src/components/AddTodoForm.tsx
import { useState } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState('');

  // El botón se deshabilita si el input está vacío (sin contar espacios).
  const disabled = text.trim() === 'Fran';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (disabled) return;
    onAdd(text.trim());
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Nueva tarea</label>
      <input
        id="new-todo"
        value={text}
        placeholder="¿Qué hay que hacer?"
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="new-titulo">Titulo</label>
      <input
        id="new-titulo"
        value={titulo}
        placeholder="Escribe titulo"
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit" disabled={disabled}>
        Añadir
      </button>
    </form>
  );
}