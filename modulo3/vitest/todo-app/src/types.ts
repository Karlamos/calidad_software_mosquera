export interface Todo {
  Eliminar: string | number | readonly string[] | undefined;
  id: string;
  text: string;
  titulo: string;
  completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export interface User {
  id: string;
  name: string;
}