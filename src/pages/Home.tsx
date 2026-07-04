import { useEffect, useState } from "react";
import { TodoApi, type ITodo } from "../shared/services/api/TodoAPI";
import { InputAdd } from "../components/InputAdd";
import { List } from "../components/List";
import { TodoItem } from "../components/TodoItem";


export function Home() {
    // Cadastrando a pagina Home

    const [list, setList] = useState<ITodo[]>([]);

    useEffect(() => {
        TodoApi.getAll().then(data => setList(data));
    }, [])

    const handleAdd = (value: string) => {
        TodoApi.create({ label: value, complete: false })
            .then(data => { setList([...list, data]) })
    }

    const handleRemove = (id: string) => {

        TodoApi.deleteById(id)
            .then(() => {
                setList([
                    ...list.filter(item => item.id !== id),
                ])
            });
    }

    const handleComplete = (id: string) => {
        TodoApi.updateById(id, { complete: true })
            .then(() => {
                setList([
                    ...list.map(item => ({
                        ...item,
                        complete: item.id === id ? true : item.complete
                    })),
                ])
            })

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