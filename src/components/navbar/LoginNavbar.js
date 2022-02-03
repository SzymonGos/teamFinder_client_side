import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'

export default function LoginNavbar() {
  return (
    <section className='desktop'>
      <ul className='desktop__items'>
        <AiOutlineUser className='desktop__icon' />
        <li>
          <Link to='#' className='desktop__item'>
            login
          </Link>
        </li>
      </ul>
    </section>
  )
}
