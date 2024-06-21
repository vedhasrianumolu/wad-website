import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="nav d-flex justify-content-between">
      <h3 className="mx-5">Vedhasri</h3>
      <ul className="d-flex justify-content-end">
        <li className="nav-item">
          <Link className="nav-link " to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="signup">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="signin">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="technologies">
            Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
