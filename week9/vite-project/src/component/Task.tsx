import { FaTrashAlt } from "react-icons/fa";

type task = {
    id: number;
    title: string;
    date: string;
    onDelete: (id: number) => void;
}

export default function Task(task: task) {
    return (
        <li key={task.id} className="task-item">
            <div className="task-actions">
                <h3>{task.title}</h3>
                <FaTrashAlt onClick={() => task.onDelete(task.id)} />
                <p>{task.date}</p>
            </div>
        </li>
    )
}
