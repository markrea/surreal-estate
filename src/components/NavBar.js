import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar" data-testid="nav-bar-id">
      <img
        className="SE-logo"
        data-testid="logo-id"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="SELogo"
      />
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-links-item">
            View Properties
          </Link>
        </li>
        <li>
          <Link to="/add-property" className="navbar-links-item">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
