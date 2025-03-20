import { useState } from 'react';
import Task from './Task'

type task = {
    id: number;
    title: string;
    date: string;
}

export default function TasksList() {

    const [tasks, setTasks] = useState<task[]>([
        {
            id: 1,
            title: "Review week 9 material",
            date: "June 4th at 1 pm",
        },
        {
            id: 2,
            title: "Do quiz 9",
            date: "June 4th at 6 pm",
        },
        {
            id: 3,
            title: "Work on assignment 2",
            date: "June 5th at 8 am",
        },
    ]);

    // setTasks([]);

    function deleteTask(id: number) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        date={task.date}
                        onDelete={deleteTask} />
                ))}
            </ul>
        </div>
    )
}
