import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>BD</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li >
          <Link to="/" onClick={handleClick}
          className={click ? 'nav-link active' : 'nav-link'}>HOME</Link>
        </li>
        <li>
          <Link to="/work" className='nav-link'>WORK</Link>
        </li>
        <li>
          <Link to="/about" className='nav-link'>ABOUT</Link>
        </li>
        <li>
          <Link to="/contact" className='nav-link'>CONTACT</Link>
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
