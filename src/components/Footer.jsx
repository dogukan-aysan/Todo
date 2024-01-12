import ClearCompleted from "./ClearCompleted";
import Filters from "./Filters";
import Leftover from "./Leftover";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__leftover">
        <Leftover />
      </div>
      <div className="footer__filters">
        <Filters />
      </div>
      <div className="footer__clear-completed">
        <ClearCompleted />
      </div>
    </div>
  );
}

export default Footer;
