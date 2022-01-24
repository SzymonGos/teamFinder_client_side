import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginNavbar() {
  return (
    <section className='desktop'>
      <ul className='desktop__items'>
        <li>
          <Link
            to='#'
            className="desktop__item"
          >
            login
          </Link>
        </li>
      </ul>
    </section>
  );
}
