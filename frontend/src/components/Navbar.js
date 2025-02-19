import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar.css'
import menubar from '../assets/images/ham.webp'
import cross from '../assets/images/cross.png'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className={`nav ${click ? 'nav-active' : ''}`}>
      <div className='left'>
        <NavLink to='/'>
          <h3 className='brand-name'>Asif.dev</h3>
        </NavLink>
      </div>
      <div className={click ? 'right active' : 'right'}>
        <ul>
          <li>
            <NavLink to='/' onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <img className='crosse' src={cross} alt='Close' />
        ) : (
          <img className='ham' src={menubar} alt='Menu' />
        )}
      </div>
    </div>
  )
}

export default Navbar
