import ClearCompleted from "./ClearCompleted";
import Filters from "./Filters";
import Leftover from "./Leftover";

function Footer() {
  return (
    <div className="footer">
      <Leftover />
      <Filters />
      <ClearCompleted />
    </div>
  );
}

export default Footer;
