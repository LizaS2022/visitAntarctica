import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const styles = {
  navItem: {
    cursor: "pointer",
  },
};

const Navbar = () => {
  return (
    <section>
      <header>
        <nav className="navbar navbar-nav ms-auto navbar-expand-lg bs-gray-500 bg-light">
          <div className="container">
            <Link
              className="navbar-brand"
              style={{
                fontFamily: "Brush Script MT",
                fontSize: "2em",
                color: "#ce8460",
              }}
              to="/"
            >
              <i className="mr-2 " />
              VisitAntarctica
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                {" "}
                {/* The class 'ml-auto' pushes the ul to the right side */}
                <li className="nav-item active">
                  <ScrollLink
                    className="nav-link"
                    to="/home"
                    spy={true}
                    smooth={-70}
                    duration={500}
                    style={styles.navItem}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="AboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={styles.navItem}
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="trips"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={styles.navItem}
                  >
                    Trips
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="contact-form"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={styles.navItem}
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
