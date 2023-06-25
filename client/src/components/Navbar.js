import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <div className="navbar-brand">
            <i className="icofont-support-faq mr-2 " />
            Antarctia Tours
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarmain"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-link">About</li>
              <li className="nav-item nav-link">Trips</li>
              <li className="nav-item nav-link">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
