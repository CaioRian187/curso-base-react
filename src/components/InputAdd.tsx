import "./InputAdd.css"
import { useRef, useState } from "react";

interface IInputAddProps {
    onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAdd = () => {
        props.onAdd(value);
        setValue('');
        inputRef.current?.focus();
    }

    return (
        <div>
            <input
                value={value}
                ref={inputRef}
                type="text"
                onChange={(event) => setValue(event.target.value)} />

            <button className="btn-add" onClick={handleAdd}>
                Adicionar
            </button>
        </div>
    );
}