import { useState } from "react";
import "./App.css";

function DeleteButton({ onClick }) {
  return <button onClick={onClick}> Delete </button>;
}

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input !== "") {
      setTodos([...todos, input]);
      setInput(""); // Reset the input after adding task
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2> To-Do List </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task!"
      />
      <button onClick={addTodo}> Add </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <DeleteButton onClick={() => deleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
