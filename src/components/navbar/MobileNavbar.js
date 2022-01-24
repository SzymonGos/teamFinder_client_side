import React, { useRef } from 'react'
import {  NavLink } from 'react-router-dom'

export default function MobileNavbar() {

  const checkbox = useRef(null);

  const handleChange = () => {
    checkbox.current.checked = false
  }

  return (
    <section className='mobile'>
      <input
        className="checkbox"
        type="checkbox"
        ref={checkbox}
      />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className='menu-items'>
        <li>
          <NavLink
            to='/home'
            className=""
            activeClassName="active"
            onClick={() => handleChange()}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/map'
            className=""
            activeClassName="active"
            onClick={() => handleChange()}
          >
            map
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className=""
            activeClassName="active"
            onClick={() => handleChange()}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            className=""
            activeClassName="active"
            onClick={() => handleChange()}
          >
            login
          </NavLink>
        </li>
      </ul>
    </section>
  )
}