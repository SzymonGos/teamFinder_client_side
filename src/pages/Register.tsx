import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../config/config'
import Container from '../components/Container'
import Slider from '../components/login/Slider'
import PATH from '../services/paths'



export default function Register() {
  const history = useHistory()
  const [errorMessageAPI, setErrorMessageAPI] = useState('')
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    matchingPassword: '',
  })

  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    matchingPassword: '',
  })

  const onInputChange = (e: any) => {
    const { value, name } = e.target as HTMLInputElement

    setInput({
      ...input,
      [name]: value.trim(),
    })

    inputValidation(e)
  }

  const inputValidation = (e: any) => {
    let { name, value } = e.target as HTMLInputElement

    setError((prev) => {
      const validateInput = { ...prev, [name]: '' }

      switch (name) {
        case 'username':
          if (!value) {
            validateInput[name] = 'Please enter Username.'
          }
          break

        case 'email':
          if (!value) {
            validateInput[name] = 'Please enter email address.'
          }
          break

        case 'password':
          if (!value) {
            validateInput[name] = 'Please enter Password.'
          } else if (input.matchingPassword && value !== input.matchingPassword) {
            validateInput['matchingPassword'] = 'Password and Confirm Password does not match.'
          }
          else {
            validateInput['matchingPassword'] = input.matchingPassword ? '' : error.matchingPassword
          }
          break

        case 'matchingPassword':
          if (!value) {
            validateInput[name] = 'Please enter Confirm Password.'
          } else if (input.password && value !== input.password) {
            validateInput[name] = 'Password and Confirm Password does not match.'
          }
          break

        default:
          break
      }

      return validateInput
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newUser = {
      username: input.username,
      email: input.email,
      password: input.password,
      matchingPassword: input.matchingPassword,
    }

    try {
      const resp = await axios.post(`${API_URL}/signup`, newUser)
      if (resp.status === 201){
        history.push(PATH.HOME)
      }
    } catch (e: any) {
      setErrorMessageAPI(e.response.data.message)
    }
  }

  return (
    <section className='mt-6'>
      <Container>
        <div className='col-span-full md:col-span-6 lg:col-span-3 lg:col-start-3 lg:block lg:flex-1 items-center h-full border-2'>
          <form className='flex flex-col w-full gap-y-10' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label>Username</label>
              <input
                type='text'
                name='username'
                value={input.username}
                onBlur={inputValidation}
                onChange={(e) => onInputChange(e)}
                placeholder='User Name'
                required
              />
              {error.username && <span className='text-[#ca3c37]'>{error.username}</span>}
            </div>
            <div className='flex flex-col'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={input.email}
                onBlur={inputValidation}
                onChange={(e) => onInputChange(e)}
                placeholder='Email'
                required
              />
              {error.email && <span className='text-[#ca3c37]'>{error.email}</span>}
            </div>
            <div className='flex flex-col'>
              <label>Password <span className='text-[13px] '>(5 characters or longer)</span></label>
              <input
                type='password'
                name='password'
                value={input.password}
                onBlur={inputValidation}
                onChange={(e) => onInputChange(e)}
                placeholder='Password'
                required
              />
              {error.password && <span className='text-[#ca3c37]'>{error.password}</span>}
            </div>
            <div className='flex flex-col'>
              <input
                type='password'
                name='matchingPassword'
                value={input.matchingPassword}
                onBlur={inputValidation}
                onChange={(e) => onInputChange(e)}
                placeholder='Confirm Password'
                required
              />
              {error.matchingPassword && <span className='text-[#ca3c37]'>{error.matchingPassword}</span>}
            </div>
            <button type='submit'>Register</button>
          </form>
          <div className='flex justify-center mt-2'>{errorMessageAPI && errorMessageAPI}</div>
        </div>

        <div className='hidden md:block md:col-start-7 md:col-span-6 md:flex-1'>
          <Slider />
        </div>
      </Container>
    </section>
  )
}
