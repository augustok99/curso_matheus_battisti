import { useState } from "react";

// Exercício 1

const Greeting = ({ name }) => {
  return <h1>Olá, {name}!</h1>;
};

// Exercício 2

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handleIncrementClick}>Clique Incrementar</button>
      <button onClick={handleDecrementClick}>Clique Decrementar</button>
      <p>Contador está: {count}</p>
    </>
  );
};

// Exercicio 3

const tasks = [
  { id: 1, texto: "Estudar React" },
  { id: 2, texto: "Fazer exercícios" },
  { id: 3, texto: "Ler documentação" },
];

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa disponível.</p>;
  }

  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.texto}</li>
      ))}
    </ol>
  );
};

const Exercises = () => {
  return (
    <>
      <div>Exercicio 1</div>
      <Greeting name="Carlos" />
      <Counter />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Exercises;
