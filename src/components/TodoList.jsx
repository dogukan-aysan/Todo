import Todo from "./Todo";

function TodoList() {
  return (
    <div className="todo-list">
      <div className="todo-list__item">
        <Todo />
      </div>
      <div className="todo-list__item">
        <Todo />
      </div>
      <div className="todo-list__item">
        <Todo />
      </div>
    </div>
  );
}

export default TodoList;
