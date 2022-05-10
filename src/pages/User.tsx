import { Link, Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useStore } from '../store/userProfile'
import Container from '../components/Container'
import PATH from '../services/paths'
import CreateGame from '../components/user/CreateGame'
import Settings from '../components/user/Settings'
import Profile from '../components/user/Profile'
import { useEffect } from 'react'

export default function User() {
  const store = useStore()
  const history = useHistory()
  const [cookies, setCookie, removeCookie] = useCookies()

  useEffect(() => {
    if(!cookies?.token){
      history.push(PATH.HOME)
    }
  }, [cookies?.token])

  return (
    <section className='mt-10'>
      <Container>
        <div className='col-span-full md:col-span-2 border-2 h-fit'>
          User Menu
          <ul className='flex flex-col mt-10 gap-y-6'>
            <Link to={PATH.CREATE_EVENT}>Add Game</Link>
            <Link to={PATH.USER}>Profile</Link>
            <Link to={PATH.USER_SETTINGS}>Settings</Link>
            <Link to='#'>
              <button onClick={() => store.signOut()}>Sign Out</button>
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
