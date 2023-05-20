import "./NotFound.css";
import { Link } from "react-router-dom";

// DEFINED ALL LOGIC.
function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound-card">
        <h5 className="NotFound-h1">Page Not Found!!!</h5>
          <Link exact="true" to="/">
            CLICK FOR HOME
          </Link>
      </div>
    </div>
  );
}

export default NotFound;
