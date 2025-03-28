import { FaTrash } from "react-icons/fa";
import { TaskType } from "./TasksList";

interface TaskProps {
    task: TaskType;
    onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
    return (
        <li className="task-item">
            <div className="task-container">
                <div className="task-content">
                    <p>
                        <strong>{task.title}</strong>
                    </p>
                    <p>{task.date}</p>
                </div>
                <FaTrash className="delete-icon" onClick={() => onDelete(task.id)} />
            </div>
        </li>
    );
};

export default Task;