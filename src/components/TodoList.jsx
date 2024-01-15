import { useContext } from "react";
import Todo from "./Todo";
import { Context } from "../context/Context";

function TodoList() {
  const { todos } = useContext(Context);
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-list__item" key={todo.id}>
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
