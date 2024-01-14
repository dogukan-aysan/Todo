import { useState } from "react";
function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`checkbox${isChecked ? " checkbox--checked" : ""}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {isChecked && <img src="/icon-check.svg" />}
    </div>
  );
}

export default Checkbox;
