import { useState } from "react";
import { InputAdd } from "./components/InputAdd";

export function App() {

  // Componentizando a aplicação

  const [list, setList] = useState([
    { id: '1', label: 'Fazer Café', complete: false },
    { id: '2', label: 'Fazer Café', complete: false },
    { id: '3', label: 'Fazer Almoço', complete: false },
    { id: '4', label: 'Fazer Merenda', complete: false },
  ]);


  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: (list.length + 1).toString(), complete: false, label: value }]);
  }

  return (
    <div>

      <InputAdd onAdd={handleAdd} />


      <ol>
        {list.map((listItemComId) => (
          <li key={listItemComId.id}>
            {listItemComId.label}

            {listItemComId.complete ? 'Concluido' : ''}

            <button onClick={
              () => setList([
                ...list
                  .map(item => ({ ...item, complete: item.id === listItemComId.id ? true : item.complete }))
              ])}>
              Concluir
            </button>

            <button onClick={() => setList([...list.filter(item => item.id !== listItemComId.id)])}>
              Remover
            </button>
          </li>
        ))}
      </ol>

    </div>
  );
}
