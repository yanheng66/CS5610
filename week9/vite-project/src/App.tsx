import React from 'react'
import Header from './component/Header'

type task = {
  id: number;
  title: string;
  date: string;
}

export default function App() {
  const name: string = 'React'
  // list of tasks
  const tasks: task[] = [
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
  ];

  return (
    <div className="app-container">
      <Header name={name} version={2}></Header>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
