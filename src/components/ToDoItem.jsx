import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
      
      {isEditing ? (
        <>
          <input
            className="flex-1 border p-1 rounded"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            className="ml-2 bg-green-500 text-white px-2 rounded"
            onClick={() => {
              editTodo(todo.id, newText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 px-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;