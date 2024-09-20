import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="nav-item mega-menu">
              <Link to="/" className="nav-links" onClick={handleClick}>
                About
              </Link>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h4>Category 1</h4>
                  <ul>
                    <li>Subcategory 1</li>
                    <li>Subcategory 2</li>
                    <li>Subcategory 3</li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Category 2</h4>
                  <ul>
                    <li>Subcategory 1</li>
                    <li>Subcategory 2</li>
                    <li>Subcategory 3</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-links" onClick={handleClick}>
                Signup Form
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/react-memo"
                className="nav-links"
                onClick={handleClick}
              >
                React Memo
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <span className="icon">
              <GiHamburgerMenu />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
