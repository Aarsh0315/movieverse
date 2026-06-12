import "../styles/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h1>
          GoMovie<span>.ai</span>
        </h1>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/search">
            Search
          </Link>
        </li>

        <li>
          <Link to="/Collections">
            Collections
          </Link>
        </li>

        <li>
          <Link to="/Blog">
            Blogs
          </Link>
        </li>

        <li>
        <Link to="/watchlist">
          Watchlist
        </Link>
      </li>

        <li>
          <Link to="/Ai">
            Ai Search
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;