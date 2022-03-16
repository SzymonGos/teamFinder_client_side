import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useStore } from '../store/userProfile'
import axios from 'axios'
import Container from '../components/Container'
import Slider from '../components/login/Slider'
import PATH from '../services/paths'
import API_URL from '../config/config'

export default function Login() {
  const store = useStore()
  const history = useHistory()
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [cookies, setCookie] = useCookies(['token'])
  const [errorMsg, setErrorMsg] = useState<string>('')

  console.log(store.state.user)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = {
      username: userName,
      password: password,
    }

    try {
      const resp = await axios.post(`${API_URL}/signin`, user)
      setCookie('token', resp.data.token, { path: '/' })  
      let id = resp.data.id
      let name = resp.data.username
      let email = resp.data.email
      store.getUserData(id, name, email)
    } catch (e: any) {
      setErrorMsg(e.response.data.message)
    }
  }

  useEffect(() => {
    if (cookies?.token) {
      history.push(PATH.USER)
      setUserName('')
      setPassword('')
    }
  }, [cookies?.token])

  return (
    <section className='mt-6'>
      <Container>
        <div className='col-span-full md:col-span-6 lg:col-span-3 lg:col-start-3 lg:block lg:flex-1 items-center h-full border-2'>
          <form className='flex flex-col w-full gap-y-10' onSubmit={(e) => handleSubmit(e)} data-testid='form'>
            <div className='flex flex-col'>
              <label>Username</label>
              <input
                type='text'
                placeholder='Username'
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                data-testid='required-username-input'
              />
            </div>
            <div className='flex flex-col'>
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                data-testid='required-password-input'
              />
            </div>
            <button type='submit'>Sign In</button>
          </form>
          <div className='flex justify-center mt-2'>{errorMsg && errorMsg}</div>
          <div className='mt-10 flex flex-row gap-x-10'>
            New Account ?<button onClick={() => history.push(PATH.REGISTER)}>Register</button>
          </div>
        </div>

        <div className='hidden md:block md:col-start-7 md:col-span-6 md:flex-1'>
          <Slider />
        </div>
      </Container>
    </section>
  )
}
