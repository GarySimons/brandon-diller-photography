import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './NavbarStyles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
//   const [clicked, navClicked] = useState(false);
//   const navClick = () => navClicked(!click);

  return (
    <div className='header'>
      <Link to='/'>
        <h1>BD</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <li >
          <Link to='/'
          className='nav-link'>HOME</Link>
        </li>
        <li >
          <Link to='/exteriors'
          className='nav-link'>EXTERIORS</Link>
        </li>
        <li >
          <Link to='/interiors'
          className='nav-link'>INTERIORS</Link>
        </li>
        <li >
          <Link to='/about'
          className='nav-link'>ABOUT</Link>
        </li>
        <li >
          <Link to='/contact'
          className='nav-link'>CONTACT</Link>
        </li>

      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes className='nav-trigger' />
        ) : (
          <FaBars className='nav-trigger' />
        )}
      </div>
    </div>
  );
};

export default Navbar;
