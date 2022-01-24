import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../../services/guestLinks';

export default function MobileNavbar() {

  const [selectedItemID, setSelectedItemID] = useState();
  const checkbox = useRef(null);

  const handleChange = (id) => {
    setSelectedItemID(id)
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
        {links.map(link => {
          const { id, url, text } = link
          return (
            <li key={id}>
              <Link
                to={url}
                onClick={() => handleChange(id)}
                className={id === selectedItemID ? "active" : ""}
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}