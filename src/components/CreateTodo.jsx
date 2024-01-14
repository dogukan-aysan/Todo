import Checkbox from "./Checkbox";

function CreateTodo() {
  return (
    <div className="create-todo">
      <span className="create-todo__checkbox">
        <Checkbox />
      </span>
      <span className="create-todo__text">Create a new todo...</span>
    </div>
  );
}

export default CreateTodo;
