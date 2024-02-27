import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <ul>
        <li><NavLink to ='/About'>plans</NavLink></li>
        <li><NavLink to='/About/History'>History</NavLink></li>
      </ul>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default About
