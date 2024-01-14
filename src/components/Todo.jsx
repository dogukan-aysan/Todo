import Checkbox from "./Checkbox";

function Todo() {
  return (
    <div className="todo">
      <span className="todo__checkbox">
        <Checkbox />
      </span>
      <span className="todo__text">Jog around the park 3x</span>
    </div>
  );
}

export default Todo;
