import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { guestLinks } from '../../services/guestLinks'

export default function MobileNavbar() {
  const checkbox = useRef(null)

  const handleChange = () => {
    checkbox.current.checked = false
  }

  return (
    <section className='mobile'>
      <input className='checkbox' type='checkbox' ref={checkbox} />
      <div className='hamburger-lines'>
        <span className='line line1'></span>
        <span className='line line2'></span>
        <span className='line line3'></span>
      </div>
      <ul className='menu-items'>
        <li>
          <NavLink to='/login' className='mobile__login' activeClassName='active' onClick={() => handleChange()}>
            <AiOutlineUser className='mobile__icon' />
            login
          </NavLink>
        </li>
        {guestLinks.map((item, idx) => {
          return (
            <li key={idx}>
              <NavLink to={`/${item.url}`} activeClassName='active' onClick={() => handleChange()}>
                {item.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
