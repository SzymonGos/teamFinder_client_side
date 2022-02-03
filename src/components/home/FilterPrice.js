import React, { useState } from 'react'

export default function FilterPrice() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='accordion'>
      <div className='accordion__item'>
        <div className='accordion__title' onClick={() => setIsActive(!isActive)}>
          <div>Price</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        <div className={`accordion-content ${isActive ? 'show' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo id laborum officia facere eos iure magni
          dolore vitae autem.
        </div>
      </div>
    </div>
  )
}
