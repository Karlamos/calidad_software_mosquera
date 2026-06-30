// src/components/TodoItem.test.tsx
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';
afterEach(cleanup);

describe('TodoItem', () => {
  it('debería mostrar el texto de la tarea', () => {

      const todo = crearTodo({ text: 'Estudiar Vitest' });

    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);


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

  it('debería mostrar el texto exacto de la tarea', () => {
    const todo = crearTodo({ text: 'Estudiar matchers' , titulo: 'Educacion'});
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    // toHaveTextContent comprueba el texto contenido en el <li>
    expect(screen.getByRole('listitem')).toHaveTextContent('Estudiar matchers');
    expect(screen.getByRole('listitem')).toHaveTextContent('Educacion');
  });

  describe('TodoItem · matchers', () => {
    it('debería marcar el checkbox cuando la tarea está completada', () => {
    const todo = crearTodo({ completed: true });
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
    const checkbox = screen.getByRole('checkbox', { name: /marcar/i });
    expect(checkbox).toBeChecked();
  });
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