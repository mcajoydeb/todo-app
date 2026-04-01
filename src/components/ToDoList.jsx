import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div className="max-w-xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </div>

    </div>
  );
}

export default ToDoList;