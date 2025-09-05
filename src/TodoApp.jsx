import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Lista de Tareas</h1>
      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={addTask}>Agregar</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
