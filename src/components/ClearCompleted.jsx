import { useContext } from "react";
import { Context } from "../context/Context";

function ClearCompleted() {
  const { dispatch } = useContext(Context);
  return (
    <div
      className="clear-completed"
      onClick={() => dispatch({ type: "todos/clear" })}
    >
      Clear Completed
    </div>
  );
}

export default ClearCompleted;
