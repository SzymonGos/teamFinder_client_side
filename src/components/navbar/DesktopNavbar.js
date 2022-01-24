import React from 'react';
import { Link } from 'react-router-dom';

export default function DesktopNavbar() {

  return (
    <section className='desktop'>
      <ul className='desktop__items'>
      <li>
          <Link
            to='#'
            className="desktop__item"      
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className="desktop__item"      
          >
            map
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className="desktop__item"      
          >
            about
          </Link>
        </li>
      </ul>
    </section>
  );
}
