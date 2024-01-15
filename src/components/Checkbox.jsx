import { useContext, useState } from "react";
import { Context } from "../context/Context";
function Checkbox({ id }) {
  const [isChecked, setIsChecked] = useState(false);
  const { toggleTodoComplete } = useContext(Context);
  const handleClick = () => {
    setIsChecked(!isChecked);
    toggleTodoComplete(id);
  };
  return (
    <div
      className={`checkbox${isChecked ? " checkbox--checked" : ""}`}
      onClick={handleClick}
    >
      {isChecked && <img src="/icon-check.svg" />}
    </div>
  );
}

export default Checkbox;
