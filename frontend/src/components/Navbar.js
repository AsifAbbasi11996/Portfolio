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
    <>
      <div className='nav'>
        <div className='left'>
          <NavLink to='/'>Asif.dev</NavLink>
        </div>
        <div className={click ? 'right active' : 'right'}>
          <ul>
            <li>
              <NavLink to='/' onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={closeMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to='/projects' onClick={closeMenu}>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>

        <div class='hamburger' onClick={handleClick}>
          {click ? (
            <img class='crosse' src={cross} alt='' width='23px' />
          ) : (
            <img class='ham' src={menubar} alt='' width='23px' />
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
