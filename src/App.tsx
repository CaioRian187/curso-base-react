import { useState } from "react";

export function App() {

  return (
    <div>
      Olá
    </div>
  );
}

// Função JS
const teste = () => {
  return 1 + 1;
}

// Função JS
const useTeste = () => {
  return 1 + 1;
}

// Ract Hook
const useTest = () => {
  const [value] = useState(1 + 1);
  return value;
}

// Componente funcional
const Test = () => {
  return (
    <div>Teste</div>
  );
}