import React from "react";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="SE-logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="SELogo"
      />
      <ul className="navbar-links">
        <a className="navbar-links-item" href="">
          View Properties
        </a>
        <a className="navbar-links-item" href="">
          Add a Property
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
