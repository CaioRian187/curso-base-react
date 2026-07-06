import { Link } from "react-router-dom";
import "./TodoItem.css"

interface ITodoItemProps {
    id: string,
    label: string,
    complete: boolean
    onRemove(): void;
    onComplete(): void;
}

export const TodoItem = ({ id, label, complete, onRemove, onComplete }: ITodoItemProps) => {

    return (
        <li key={id}>

            <Link to={`/detalhe/${id}`}>
                {label}
            </Link>

            {complete ? ' - Concluido' : ''}

            <button className="btn-complete" onClick={onComplete}>
                Concluir
            </button>

            <button className="btn-remove" onClick={onRemove}>
                Remover
            </button>
        </li>
    );
}