import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";
// React font-awesome ikonice
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="pdv logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff" }}
            className="about-icon"
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="naslovna" className="nav-link" href="#">
                Naslovna <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="onama" className="nav-link" href="#">
                O nama
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="usluge" className="nav-link" href="#">
                Usluge
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="timeline" className="nav-link" href="#">
                Timeline
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="reference" className="nav-link" href="#">
                Reference
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="kontakt" className="nav-link" href="#">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
