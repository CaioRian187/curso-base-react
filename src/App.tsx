import { useState } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";

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
          <TodoItem
            key={listItemComId.id}

            id={listItemComId.id}
            label={listItemComId.label}
            complete={listItemComId.complete}

            onRemove={() => setList([...list.filter(item => item.id !== listItemComId.id)])}
            onComplete={() => setList([
              ...list.map(item => ({
                ...item,
                complete: item.id === listItemComId.id ? true : item.complete
              }))
            ])}
          />
        ))}
      </ol>

    </div>
  );
}
