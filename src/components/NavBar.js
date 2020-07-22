import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

import "../styles/NavBar.css";

const NavBar = ({ onLogin, onLogout, userID}) => {
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
          <Link to="/" className="navbar-links-item" data-testid="view-properties-id">
            View Properties
          </Link>
        </li>
        <li>
          <Link to="/add-property" className="navbar-links-item" data-testid="add-property-id">
            Add a Property
          </Link>
        </li>
        <li className="facebook-button">
        {!userID ? (
          <FacebookLogin
            appId="287306666028054"
            autoLoad={true}
            fields="name,email,picture"
            callback={onLogin}
          />
        ) : (
          <button onClick={onLogout}>Sign Out</button>
        )}
        </li>
      </ul>
      
    </div>
  );
};

export default NavBar;
