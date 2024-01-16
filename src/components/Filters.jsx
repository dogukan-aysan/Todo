import { useContext } from "react";
import { Context } from "../context/Context";

function Filters() {
  const { filter, dispatch } = useContext(Context);
  const handleFilterSelection = (selectedFilter) => {
    dispatch({ type: "filterChange", payload: selectedFilter });
  };
  return (
    <div className="filters">
      <span
        onClick={() => handleFilterSelection("all")}
        className={`filters__all filters__all${
          filter === "all" ? "--active" : ""
        }`}
      >
        All
      </span>
      <span
        onClick={() => handleFilterSelection("active")}
        className={`filters__active filters__active${
          filter === "active" ? "--active" : ""
        }`}
      >
        Active
      </span>
      <span
        onClick={() => handleFilterSelection("completed")}
        className={`filters__completed filters__completed${
          filter === "completed" ? "--active" : ""
        }`}
      >
        Completed
      </span>
    </div>
  );
}

export default Filters;
