import React from 'react'

export default function TabsButton({ isActive, children, onClick }) {
  return (
    <button
      className={`tab-btn
      ${isActive ? 'focus' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
