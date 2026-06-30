// src/components/TodoList.test.tsx
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';
import type { Todo } from '../types';

afterEach(cleanup);

const tareas: Todo[] = [
  { id: '1', text: 'Comprar pan', completed: false , titulo: 'Tarea 1', Eliminar: 'Eliminar'},
  { id: '2', text: 'Lavar el coche', completed: true , titulo: 'Tarea 2', Eliminar: 'Eliminar'},
  { id: '3', text: 'Estudiar Vitest', completed: false , titulo: 'Tarea 3', Eliminar: 'Eliminar'},
  { id: '4', text: 'Ir al gimnasio', completed: true , titulo: 'Tarea 4', Eliminar: 'Eliminar'},
];

describe('TodoList · queries', () => {
  it('debería renderizar un listitem por cada tarea (getAllByRole)', () => {
    // Arrange
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    // Act + Assert: tres tareas → tres elementos de lista
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
  });

  it('debería encontrar la lista por su aria-label', () => {
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    expect(
      screen.getByRole('list', { name: 'Lista de tareas' }),
    ).toBeInTheDocument();
  });

  it('debería mostrar el estado vacío cuando no hay tareas', () => {
    // Arrange: lista vacía
    render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />);
    // Assert: aparece el mensaje y NO hay listitems
    expect(screen.getByText('No hay tareas pendientes')).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('debería mostrar el texto de una tarea concreta', () => {
    render(<TodoList todos={tareas} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Lavar el coche')).toBeInTheDocument();
  });
});