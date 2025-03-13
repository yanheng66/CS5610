import Task from './Task'

export default function TasksList({ tasks }: { tasks: { id: number, title: string, date: string }[] }) {
    return (
        <div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <Task key={task.id} id={task.id} title={task.title} date={task.date} />
                ))}
            </ul>
        </div>
    )
}
