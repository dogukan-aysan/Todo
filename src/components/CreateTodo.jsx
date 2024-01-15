import { useContext, useState } from "react";
import { Context } from "../context/Context";

function CreateTodo() {
  const [todo, setTodo] = useState("");
  const { addNewTodo } = useContext(Context);
  const handleAddClick = () => {
    if (todo) {
      const todoObj = {
        id: crypto.randomUUID(),
        text: todo,
        isCompleted: false,
      };
      addNewTodo(todoObj);
      setTodo("");
    }
  };
  return (
    <div className="create-todo">
      <div className="create-todo__add-button" onClick={handleAddClick}></div>
      <input
        className="create-todo__text"
        type="text"
        placeholder="Create a new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </div>
  );
}

export default CreateTodo;
