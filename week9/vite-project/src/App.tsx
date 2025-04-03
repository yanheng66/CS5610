import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AddTask from "./component/AddTask";
import TasksList from "./component/TasksList";
import Header from "./component/Header";
import TaskDetail from "./component/TaskDetail";
import NotFound from "./component/NotFound";
import Home from "./component/Home";

export interface Task {
  id: number;
  title: string;
  date: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/tasks");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    }
    
    if (isAuthenticated) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  const handleAddTask = async (task: Omit<Task, "id">) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newTask = await response.json();
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  if (isLoading || loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container">
      <Header name="Task Manager" version={1} />
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={{ marginRight: "10px" }}>
          Home
        </NavLink>
        {isAuthenticated && (
          <NavLink to="/tasks">Tasks</NavLink>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuthenticated ? (
          <>
            <Route
              path="/tasks"
              element={
                <>
                  <AddTask onAddTask={handleAddTask} />
                  <TasksList tasks={tasks} onDelete={handleDeleteTask} />
                </>
              }
            />
            <Route path="/tasks/:taskId" element={<TaskDetail />} />
          </>
        ) : null}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;