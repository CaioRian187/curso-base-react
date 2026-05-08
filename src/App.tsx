import { useState } from "react";

export function App() {

  // Como trabalhar com listas

  const [list, setList] = useState([
    'Fazer Café',
    'Fazer Café',
    'Fazer Almoço',
    'Fazer Janta',
    'Fazer Merenda',
  ]);

  const [listComID, setlistComID] = useState([
    { id: '1', label: 'Fazer Café' },
    { id: '2', label: 'Fazer Café' },
    { id: '3', label: 'Fazer Almoço' },
    { id: '4', label: 'Fazer Merenda' },
  ]);

  return (
    <div>

      <input type="text" />

      <button>Adicionar</button>


      <ol>
        {list.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ol>


      <ol>
        {listComID.map((listItemComId) => (
          <li key={listItemComId.id}>
            {listItemComId.label}
          </li>
        ))}
      </ol>

    </div>
  );
}
