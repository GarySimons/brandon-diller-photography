import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
//   const [clicked, navClicked] = useState(false);
//   const navClick = () => navClicked(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>BD</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <li >
          <Link to="/"
          className={click ? 'nav-link1 active' : 'nav-link1'}>HOME</Link>
        </li>
        <li >
          <Link to="/work"
          className={click ? 'nav-link2 active' : 'nav-link2'}>WORK</Link>
        </li>
        <li >
          <Link to="/about"
          className={click ? 'nav-link3 active' : 'nav-link3'}>ABOUT</Link>
        </li>
        <li >
          <Link to="/contact"
          className={click ? 'nav-link4 active' : 'nav-link4'}>CONTACT</Link>
        </li>

      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "#fff" }} size={20} />
        ) : (
          <FaBars style={{ color: "#fff" }} size={20} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
