import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>

      {todos.map(todo => (
        <ToDoItem
          key={todo.id}   // ✅ Unique key (important for marks)
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;