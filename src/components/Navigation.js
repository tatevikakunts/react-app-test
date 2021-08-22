import React from "react";
import { Link } from "react-router-dom";
// export a navigation component (use react-router-dom)
const Navigation = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-4">
        <a className="navbar-brand" href="/">
          Camunda React Test
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/frameworks">
                Frameworks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/modeler">
                Modeler
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
export default Navigation;
