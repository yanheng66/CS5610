type task = {
    id: number;
    title: string;
    date: string;
}

export default function Task(task: task) {
    return (
        <li key={task.id} className="task-item">
            <div className="task-actions">
                <h3>{task.title}</h3>
                <p>{task.date}</p>
            </div>
        </li>
    )
}
