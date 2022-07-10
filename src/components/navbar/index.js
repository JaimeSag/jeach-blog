import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const navLinks = [
  {
    title: "Noticias",
    path: "/noticias",
  },
  {
    title: "Música",
    path: "/musica",
  },
  {
    title: "Deportes",
    path: "/deportes",
  },
  {
    title: "Entretenimiento",
    path: "/entretenimiento",
  },
  {
    title: "Otros",
    path: "/otros",
  },
];

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-3" id="menu">
        <Link className="navbar-brand" href="#" to="/">
          <img
            src=""
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />{" "}
          Name
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
