import React from 'react'
import { Link } from 'react-router-dom'
import { guestLinks } from '../../services/guestLinks'

export default function DesktopNavbar() {
  return (
    <section className='desktop'>
      <ul className='desktop__items'>
        {guestLinks.map((item, idx) => {
          return (
            <li key={idx}>
              <Link to={`/${item.url}`} className='desktop__item'>
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
