import React, { useState, useEffect } from 'react'
import DesktopNavbar from './DesktopNavbar'
import LoginNavbar from './loginNavbar';
import MobileNavbar from './MobileNavbar'

export default function Navbar() {

  const [width, seWidth] = useState(window.innerWidth);

  const checkWidthSize = () => {
    seWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWidthSize);
    return () => {
      window.removeEventListener('resize', checkWidthSize);
    };
  }, []);

  return (
    <nav>
      <div className='content'>
        <h2>Sportify</h2>
        {width < 1000
          ? <MobileNavbar />
          : <>
            <DesktopNavbar />
            <LoginNavbar />
          </>
        }
      </div>
    </nav>
  )
}
