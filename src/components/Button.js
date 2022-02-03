import React from 'react'

export default function Button({ icon, name }) {
  return (
    <button className='button' role='button'>
      {icon}
      <span>{name}</span>
    </button>
  )
}
