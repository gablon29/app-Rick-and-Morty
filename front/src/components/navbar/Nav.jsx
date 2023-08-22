import { Link } from "react-router-dom";
import { SearchBar } from "../search/SearchBar";
import "./Nav.css";

export const Nav = (props) => {
  return (
    <div className="navStyle">
      <div className="btn-search">
        <SearchBar onSearch={props.onSearch} />
      </div>
      <div className="links">
        <Link to="/" className="links">
          <h2>Home</h2>
        </Link>
        <Link to="favorites" className="links">
          <h2>Favorites</h2>
        </Link>
      </div>
    </div>
  );
};
