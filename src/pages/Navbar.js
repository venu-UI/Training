import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About Us</NavLink></li>
            <li><NavLink to='/Contact'>Contact Us</NavLink></li>
        </ul>
      
    </div>
  )
}

export default Navbar
