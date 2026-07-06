import "./InputAdd.css"
import { useState } from "react";

interface IInputAddProps {
    onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        props.onAdd(value);
        setValue('');
    }



    return (
        <div>
            <input
                value={value}
                type="text"
                onChange={(event) => setValue(event.target.value)} />

            <button className="btn-add" onClick={handleAdd}>
                Adicionar
            </button>
        </div>
    );
}