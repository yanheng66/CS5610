import AddTask from './component/AddTask';
import Header from './component/Header'
import TasksList from './component/TasksList';

export default function App() {
  const name: string = 'React'
  return (
    <div className="app-container">
      <Header name={name} version={2} />
      <AddTask />
      <TasksList />
    </div >
  )
}
