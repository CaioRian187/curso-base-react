import { useState } from "react";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import { TodoApi } from "./shared/services/api/TodoAPI";

TodoApi.getAll().then(data => console.log('1', data));

export function App() {

  // Utilizando o mirage para simular um servidor

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
  const handleRemove = (id: string) => {
    setList([
      ...list.filter(item => item.id !== id),
    ])
  }

  const handleComplete = (id: string) => {
    setList([
      ...list.map(item => ({
        ...item,
        complete: item.id === id ? true : item.complete
      })),
    ])
  }

  return (
    <div>

      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItemComId) => (
          <TodoItem
            key={listItemComId.id}

            id={listItemComId.id}
            label={listItemComId.label}
            complete={listItemComId.complete}

            onRemove={() => handleRemove(listItemComId.id)}
            onComplete={() => handleComplete(listItemComId.id)}

          />
        ))}
      </List>

    </div>
  );
}
