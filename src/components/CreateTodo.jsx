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
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };
  return (
    <>
      <div className="create-todo__circle" onClick={handleAddClick}></div>
      <input
        className="create-todo"
        type="text"
        placeholder="Create a new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleEnterPress}
      />
    </>
  );
}

export default CreateTodo;
