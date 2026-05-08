import { useState } from "react";
import { Teste } from "./components/teste/Teste";

export function App() {

  // Como mostrar ou esconder o elemento na tela

  const [hide, setHide] = useState(false);

  return (
    <div>

      {hide && <p>Teste 1</p>}
      {!hide && <p>Teste 2</p>}


      {hide && <div >
        <h1>Div apareceu</h1>
      </div>}

      {hide && <Teste />}
      <button onClick={() => setHide(!hide)}>
        Clique Aqui
      </button>

    </div>
  );
}
