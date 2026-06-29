// src/components/Hello.tsx
// Componente trivial usado únicamente para verificar la configuración.
interface HelloProps {
  name: string;
}

export function Hello({ name }: HelloProps) {
  return <p>Hola, {name}</p>;
}