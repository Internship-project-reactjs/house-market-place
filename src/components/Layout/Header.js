import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <img className="homeIcon" src="https://www.pngkey.com/png/full/24-248385_home-icon-vector-png-google-home-app-icon.png" alt="home" />
          <Link className="navbar-brand" to="/">
            <b style={{fontSize:"30px"}}>H</b>ouse Marketplace
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 ">
              <li className="nav-item"
              
              >
                <Link className="nav-link active" aria-current="page" to="/">
                  Explore
                </Link>
              </li>
              <li className="nav-item"
              
              >
                <Link className="nav-link active" to="/offers">
                  Offers
                </Link>
              </li>
              <li className="nav-item"
              
              >
                <Link className="nav-link active" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
