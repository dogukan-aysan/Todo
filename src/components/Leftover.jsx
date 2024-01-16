import { useContext } from "react";
import { Context } from "../context/Context";

function Leftover() {
  const { leftoverCount } = useContext(Context);
  return <div className="leftover">{leftoverCount} items left</div>;
}

export default Leftover;
