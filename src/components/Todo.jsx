import { useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Checkbox from "./Checkbox";
import { Context } from "../context/Context";

function Todo({ todo }) {
  const { removeTodo } = useContext(Context);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleRemove = (e) => {
    // Prevent the drag-and-drop handler if the click event is from the cross
    if (e.target.closest(".todo__cross")) {
      e.stopPropagation(); // Stop propagation to prevent drag-and-drop
    }
    removeTodo(todo.id);
  };

  return (
    <div
      className="todo"
      ref={setNodeRef}
      {...attributes}
      style={style}
      onClick={(e) => console.log(e.target)}
    >
      <Checkbox todo={todo} />
      <div
        {...listeners}
        className={`todo__text${
          todo.isCompleted ? " todo__text--checked" : ""
        }`}
      >
        {todo.text}
      </div>
      <span className="todo__cross" onClick={handleRemove}>
        <img src="/icon-cross.svg" />
      </span>
    </div>
  );
}

export default Todo;
