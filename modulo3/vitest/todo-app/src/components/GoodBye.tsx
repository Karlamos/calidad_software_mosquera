// src/components/Hello.tsx
// Componente trivial usado únicamente para verificar la configuración.
interface HelloProps {
  name: string;
}

export function GoodBye({ name }: HelloProps) {
  return <p>Good Bye, {name}</p>;
}