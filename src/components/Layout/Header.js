import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            House Marketplace
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <motion.li className="nav-item"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #565051",
              }}
              >
                <Link className="nav-link active" aria-current="page" to="/">
                  Explore
                </Link>
              </motion.li>
              <motion.li className="nav-item"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #565051",
              }}
              >
                <Link className="nav-link" to="/offers">
                  Offers
                </Link>
              </motion.li>
              <motion.li className="nav-item"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #565051",
              }}
              >
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
