import { useState } from "react";

export function App() {

  // Como adicionando elementos na lista

  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer Café' },
    { id: '2', label: 'Fazer Café' },
    { id: '3', label: 'Fazer Almoço' },
    { id: '4', label: 'Fazer Merenda' },
  ]);

  return (
    <div>

      {/* Organizando o input: 
      setando o valeu do input para ser o mesmo do useState,
      setando o evento para que o input,
      atualizando o estado value sempre que o conteúdo do campo é alterado pelo usuário  
      */}
      <input
        value={value}
        type="text"
        onChange={(event) => setValue(event.target.value)} />

      {/* criando uma função que pega tudo que está na lista e adiciona um novo objeto referênciando o useStage value,
          como o valor do input é o mesmo do useStage para limpar o input basta limpar o useStage
      */}
      <button onClick={() => {
        setList([...list, { id: (list.length + 1).toString(), label: value }]);
        setValue('');
      }}>
        Adicionar
      </button>


      <ol>

        {list.map((listItemComId) => (
          <li key={listItemComId.id}>
            {listItemComId.label}
          </li>
        ))}

      </ol>

    </div>
  );
}
