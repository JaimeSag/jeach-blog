import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../navLinks";
import logo from "../../logo.svg"
import './styles.css';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="menu">
        <Link className="navbar-brand" href="#" to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />{" "}
          Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {navLinks.map((element, index) => (
              <li key={index} className="nav-item">
                <NavLink className="nav-link" to={element.path}>
                  {element.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
