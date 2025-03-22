import Task from "./Task";

export interface TaskType {
    id: number;
    title: string;
    date: string;
}

interface TasksListProps {
    tasks: TaskType[];
    onDelete: (id: number) => void;
}

const TasksList: React.FC<TasksListProps> = ({ tasks, onDelete }) => {
    return (
        <ul>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} />
                ))
            ) : (
                <li>
                    <strong>No Tasks Left</strong>
                </li>
            )}
        </ul>
    );
};

export default TasksList;