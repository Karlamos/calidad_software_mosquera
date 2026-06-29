// src/components/TodoItem.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

describe('TodoItem', () => {
  it('debería mostrar el texto de la tarea', () => {
    // Arrange: preparamos una tarea de ejemplo y funciones vacías.
      const todo = crearTodo({ text: 'Estudiar Vitest' });

    // Act: renderizamos el componente (aquí el "acto" es el propio render).
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);

    // Assert: el texto de la tarea debe estar en el documento.
    expect(screen.getByText('Estudiar Vitest')).toBeInTheDocument();
  });


  it('debería renderizar un checkbox', () => {
    const todo = crearTodo();
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    const checkbox = screen.getByRole('checkbox', { name: /marcar "comprar pan"/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });


  it('debería mostrar un botón de eliminar', () => {
    const todo = crearTodo();
    const { container } = render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(within(container).getByRole('button', { name: /eliminar/i })).toBeInTheDocument();
  });

  it('debería renderizar un checkbox en true', () => {
    const todo = crearTodo({ completed: true });
    console.log(todo.completed);
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByRole('checkbox', { checked: true })).toBeInTheDocument();
  });

});

// Helper local: crea una tarea con valores por defecto sobreescribibles.
function crearTodo(overrides: Partial<Todo> = {}): Todo {
  return { 
    id: '1', 
    text: 'Comprar pan', 
    completed: false, 
    ...overrides };
}