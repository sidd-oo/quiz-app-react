import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/highscore" className="link">
        <p>View Highscore </p>
      </Link>
      <p>
        Time: <span>{props.timer ? props.timer : 50}</span> sec
      </p>
    </div>
  );
};

export default Header;
