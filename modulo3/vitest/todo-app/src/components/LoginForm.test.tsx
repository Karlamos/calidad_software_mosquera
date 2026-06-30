import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, logRoles } from '@testing-library/react';
import { LoginForm } from './LoginForm';


afterEach(cleanup);

describe('LoginForm · queries', () => {
  it('debería encontrar campos por su label (getByLabelText)', () => {
    render(<LoginForm onLogin={() => {}} />);
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
  });

  it('debería encontrar el botón por rol y nombre (getByRole)', () => {
    render(<LoginForm onLogin={() => {}} />);
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  it('debería encontrar el formulario por su rol con name', () => {
    render(<LoginForm onLogin={() => {}} />);
    expect(screen.getByRole('form', { name: 'Formulario de acceso' })).toBeInTheDocument();
  });

  it('Link a Google', () => {
    render(<LoginForm onLogin={() => {}} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

   it('NO debería mostrar un mensaje de error inicialmente (queryBy)', () => {
    render(<LoginForm onLogin={() => {}} />);
    // queryBy devuelve null → seguro para aserciones negativas.
    expect(screen.queryByText('Credenciales inválidas')).not.toBeInTheDocument();
    expect(screen.queryByText('Correo no valido')).not.toBeInTheDocument();
  });
  
  it('inspecciona el DOM y los roles', () => {
  const { container } = render(<LoginForm onLogin={() => {}} />);

  // Imprime TODO el HTML renderizado en consola
  screen.debug();

  // Imprime solo un nodo (más enfocado)
  screen.debug(screen.getByRole('button', { name: 'Entrar' }));

  // Lista todos los roles y sus nombres accesibles
  logRoles(container);
});

});