import React, { useRef } from 'react';
import {  NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

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
            to='/login'
            className="mobile__login"
            activeClassName="active"
            onClick={() => handleChange()}
          >
          <AiOutlineUser className='mobile__icon'/>
            login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home'    
            activeClassName="active"
            onClick={() => handleChange()}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/map'    
            activeClassName="active"
            onClick={() => handleChange()}
          >
            map
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'    
            activeClassName="active"
            onClick={() => handleChange()}
          >
            about
          </NavLink>
        </li>
      </ul>
    </section>
  )
}