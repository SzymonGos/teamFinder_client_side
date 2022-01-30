import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <div className='footer__logo'>
          <h3>
            Sportify
          </h3>
        </div>
        <div className='footer__contact'>
          <h3>
            Contact Us
          </h3>
          <div>
            <p>
              Email: <br />
              info@sportify.com <br />
              Tel: 123-456-789
            </p>
            <div className='footer__social'>
              <FaFacebookF className='footer__icon' />
              <FaTwitter className='footer__icon' />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <Link to='#'>
                Home
              </Link>
            </li>
            <li>
              <Link to='#'>
                Map
              </Link>
            </li>
            <li>
              <Link to='#'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__credits'>
        <p>
          Copyright &#169; 2022 Sportify
        </p>
      </div>
    </footer>
  );
}