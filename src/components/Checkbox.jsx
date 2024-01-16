import { useContext } from "react";
import { Context } from "../context/Context";
function Checkbox({ todo }) {
  const { toggleTodoComplete } = useContext(Context);
  const handleClick = () => {
    toggleTodoComplete(todo.id);
  };
  return (
    <div
      className={`checkbox${todo.isCompleted ? " checkbox--checked" : ""}`}
      onClick={handleClick}
    >
      {todo.isCompleted && <img src="/icon-check.svg" />}
    </div>
  );
}

export default Checkbox;
