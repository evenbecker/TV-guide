import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img src="/popcorn.png" alt="The TV Guide" />
      </Link>
      <nav className="header__nav">
        <NavLink to="/movies" className="header__nav-link">
          Movies
        </NavLink>
        <NavLink to="/shows" className="header__nav-link">
          Shows
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
