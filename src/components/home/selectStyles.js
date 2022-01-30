import React from 'react';

export const customStyles = {
  container: (base) => ({
    ...base,
    marginBottom: '1rem',
    fontFamily: 'Inter, Raleway, sans-serif',
  }),
  control: (base, state) => ({
    ...base,
    boxShadow: 'none',
    border: 'none',
    borderRadius: 0,
    padding: '.4rem',
  }),
  placeholder: (base) => ({
    ...base,
    fontWeight: 200,
  }),
  option: (base, state) => ({
    ...base,
    color: state.isFocused ? "#f7f7f7" : '#1a1b1f',
    backgroundColor: state.isFocused ? "#0d172a" : 'transparent',
    '&:active': {
      backgroundColor: '#0d172a',
    },

  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    boxShadow: 'none',
    border: 'none',
    
  }),

}