import { useContext } from "react";
import Checkbox from "./Checkbox";
import { Context } from "../context/Context";

function Todo({ todo }) {
  const { removeTodo } = useContext(Context);
  return (
    <div className="todo">
      <span className="todo__checkbox">
        <Checkbox todo={todo} />
      </span>
      <span
        className={`todo__text${
          todo.isCompleted ? " todo__text--checked" : ""
        }`}
      >
        {todo.text}
      </span>
      <span className="todo__cross" onClick={() => removeTodo(todo.id)}>
        <img src="/icon-cross.svg" />
      </span>
    </div>
  );
}

export default Todo;
