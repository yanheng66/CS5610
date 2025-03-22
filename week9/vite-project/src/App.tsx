import { useState } from "react";
import AddTask from "./component/AddTask";
import TasksList from "./component/TasksList";
import Header from "./component/Header";

export interface Task {
  title: string;
  date: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <TasksList tasks={tasks} />
    </div>
  );
};

export default App;