import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Nav'>
      <NavLink to='/' className='NavLink' >HOME</NavLink>
      <NavLink to='/About'  className='NavLink' >ABOUT</NavLink>
      <NavLink to='/Skills' className='NavLink'>SKILLS</NavLink>
      <NavLink to='/Projects' className='NavLink'>PROJECTS</NavLink>
      <NavLink to='/Contact' className='NavLink'>CONTACT</NavLink>
    </div>
  )
}

export default Navbar

