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
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl">
      
      {/* Input Section */}
      <div className="flex gap-3">
        <input
          className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Add
        </button>
      </div>

      {/* List */}
      <div className="mt-6 space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-gray-400">No tasks yet 😴</p>
        ) : (
          todos.map(todo => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
            />
          ))
        )}
      </div>

    </div>
  );
}

export default ToDoList;