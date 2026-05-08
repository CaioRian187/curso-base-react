import { useState } from "react";

export function App() {

  // Como adicionando elementos na lista

  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer Café', complete: false },
    { id: '2', label: 'Fazer Café', complete: false },
    { id: '3', label: 'Fazer Almoço', complete: false },
    { id: '4', label: 'Fazer Merenda', complete: false },
  ]);

  return (
    <div>

      <input
        value={value}
        type="text"
        onChange={(event) => setValue(event.target.value)} />

      <button onClick={() => {
        setList([...list, { id: (list.length + 1).toString(), label: value, complete: false }]);
        setValue('');
      }}>
        Adicionar
      </button>

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
