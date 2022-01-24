import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../services/guestLinks';

export default function DesktopNavbar() {

  return (
    <section className='desktop'>
      <ul className='desktop__items'>
        {links.map(link => {
          const { id, url, text } = link
          return (
            <li key={id}>
              <Link
                to={url}
                className='desktop__item'
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  );
}
