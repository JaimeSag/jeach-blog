function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3" id="menu">
      <a className="navbar-brand" href="#">
        <img
          src=""
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />{" "}
        Name
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              NOTICIAS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MÚSICA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              DEPORTES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ENTRETENIMIENTO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              OTROS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
