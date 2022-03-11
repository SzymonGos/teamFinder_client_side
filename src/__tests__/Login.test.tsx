import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen, act } from '@testing-library/react'
import Login from '../pages/Login'

describe('render <Login> Page', () => {
  it('login form should be in the document', () => {
    const container = render(<Login />)
    const singInButtonNode = container.getByText('Sign In')
    expect(singInButtonNode).toBeInTheDocument()
  }),
    it('renders 2 required inputs components', () => {
      const { getByTestId } = render(<Login />)
      const inputUsernameNode = getByTestId('required-username-input')
      const inputPasswordNode = getByTestId('required-password-input')

      expect(inputUsernameNode).toBeRequired()
      expect(inputPasswordNode).toBeRequired()
    }),
    it('renders a submit button', () => {
      const { getByText } = render(<Login />)
      const singInButtonNode = getByText('Sign In')
      expect(singInButtonNode).toBeInTheDocument()
    }),
    it('renders a register button', () => {
      const { getByText } = render(<Login />)
      const singInButtonNode = getByText('Register')
      expect(singInButtonNode).toBeInTheDocument()
    })
})
