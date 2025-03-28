import { useState, useEffect } from "react";
import AddTask from "./component/AddTask";
import TasksList from "./component/TasksList";
import Header from "./component/Header";

export interface Task {
  id: number;
  title: string;
  date: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect hook to fetch tasks from fake server on page load
  useEffect(() => {
    async function fetchData() {
      try {
        // Using fetch API to get tasks data
        const response = await fetch("http://localhost:5000/tasks");
        // Check if response is OK (HTTP status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON data
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // Empty dependency array to run only once

  // Function to add a new task using POST request
  const handleAddTask = async (task: Omit<Task, "id">) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST", // Using POST method to add new task
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task), // Convert task object to JSON string
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newTask = await response.json(); // Get the newly created task (including id)
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Function to delete a task using DELETE request
  const handleDeleteTask = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE", // Using DELETE method to remove task
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Update tasks state after successful deletion
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Conditional rendering: show "Loading ..." while data is being fetched
  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container">
      {/* Passing required props to Header */}
      <Header name="Task Manager" version={1} />
      <AddTask onAddTask={handleAddTask} />
      <TasksList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;