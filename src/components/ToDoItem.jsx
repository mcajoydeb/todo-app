import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 flex-1">
        
        {/* ✅ Checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 cursor-pointer"
        />

        {/* ✅ Text */}
        {isEditing ? (
          <input
            className="border p-1 rounded w-full"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed
                ? "line-through text-gray-400"
                : "text-gray-700"
            }`}
          >
            {todo.text}
          </span>
        )}

        {/* ✅ Completed Label */}
        {todo.completed && (
          <span className="text-green-500 text-sm font-semibold">
            ✔ Completed
          </span>
        )}
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex gap-2 ml-3">
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => {
              editTodo(todo.id, newText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 px-3 py-1 rounded"
            >
              ✏️
            </button>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;