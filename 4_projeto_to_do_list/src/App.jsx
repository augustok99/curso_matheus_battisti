import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // filtra a tarefa removida
  };

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </>
  );
}

export default App;
