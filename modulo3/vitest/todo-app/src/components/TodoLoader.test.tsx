// src/components/TodoLoader.test.tsx
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { TodoLoader } from './TodoLoader';
import { waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../test/mocks/server';


describe('TodoLoader', () => {
    afterEach(() => {
        cleanup()
    })
    it('muestra el estado de carga al montarse', () => {
        render(<TodoLoader />);

        // getBy* es síncrono: el mensaje existe en el primer render.
        expect(screen.getByRole('status')).toHaveTextContent('Cargando tareas…');
    });

    it('muestra las tareas cuando la petición tiene éxito', async () => {
        render(<TodoLoader />);

        // findBy* = getBy* + waitFor. Espera a que aparezca el elemento.
        const lista = await screen.findByRole('list', { name: 'Lista de tareas' });

        expect(lista).toBeInTheDocument();
        expect(screen.getByText('Aprender Vitest')).toBeInTheDocument();
        expect(screen.getByText('Configurar MSW')).toBeInTheDocument();


    });

    it('renderiza dos elementos de tarea (con waitFor)', async () => {
        render(<TodoLoader />);

        await waitFor(() => {
            // El callback se reintenta hasta que la lista tenga 2 elementos.
            expect(screen.getAllByRole('listitem')).toHaveLength(2);
        });
    });


    it('muestra un mensaje de error si la petición falla', async () => {
        // Override puntual: este endpoint responderá 500 solo en este test.
        server.use(
            http.get('/api/todos', () => {
                return new HttpResponse(null, { status: 500 });
            }),
        );

        render(<TodoLoader />);

        // role="alert" aparece cuando setError se ejecuta.
        const alerta = await screen.findByRole('alert');
        expect(alerta).toHaveTextContent('No se pudieron cargar las tareas');
    });


});