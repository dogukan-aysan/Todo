import { useContext } from "react";
import Todo from "./Todo";
import { Context } from "../context/Context";

function TodoList() {
  const { todos, filter } = useContext(Context);
  let filteredTodos = todos;
  if (filter !== "all") {
    filteredTodos = todos.filter(
      (todo) => todo.isCompleted === (filter === "active" ? false : true)
    );
  }
  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <div className="todo-list__item" key={todo.id}>
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
