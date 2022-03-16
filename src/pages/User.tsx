import { Link, Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useStore } from '../store/userProfile'
import Container from '../components/Container'
import PATH from '../services/paths'
import CreateGame from '../components/user/CreateGame'
import Settings from '../components/user/Settings'
import Profile from '../components/user/Profile'
import axios from 'axios'
import API_URL from '../config/config'

export default function User() {
  const store = useStore()
  const history = useHistory()
  const [cookies, setCookie, removeCookie] = useCookies()

  const handleSignOut = () => {
    removeCookie('token')
    store.signOut()
  }

  useEffect(() => {
    if (!cookies?.token) {
      history.push(PATH.HOME)
    }
  }, [cookies?.token])

  return (
    <section className='mt-10'>
      <Container>
        <div className='col-span-full md:col-span-2 border-2'>
          User Menu
          <ul className='flex flex-col mt-10 gap-y-6'>
            <Link to={PATH.CREATE_EVENT}>Add Game</Link>
            <Link to={PATH.USER}>Profile</Link>
            <Link to={PATH.USER_SETTINGS}>Settings</Link>
            <Link to='#'>
              <button onClick={handleSignOut}>Sign Out</button>
            </Link>
          </ul>
        </div>
        <section className='md:col-span-10'>
          <Switch>
            <Route path={PATH.USER} exact component={Profile} />
            <Route path={PATH.CREATE_EVENT} component={CreateGame} />
            <Route path={PATH.USER_SETTINGS} component={Settings} />
            <Route path='*'>
              <Redirect to={PATH.USER} />
            </Route>
          </Switch>
        </section>
      </Container>
    </section>
  )
}
