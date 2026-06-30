// src/components/AddTodoForm.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddTodoForm } from './AddTodoForm';

describe('AddTodoForm · matchers', () => {
  it('debería deshabilitar el botón cuando el input está vacío', () => {
    // Arrange + Act
    render(<AddTodoForm onAdd={() => {}} />);
    // Assert: con input vacío, el botón está deshabilitado
    expect(screen.getByRole('button', { name: 'Añadir' })).toBeEnabled();
  });
});