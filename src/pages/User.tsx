import { Link, Switch, Route, useLocation, Redirect } from 'react-router-dom'
import Container from '../components/Container'
import PATH from '../services/paths'
import CreateGame from '../components/user/CreateGame'
import Settings from '../components/user/Settings'
import Profile from '../components/user/Profile'
import NotFound from '../components/NotFound'

export default function User() {
  const location = useLocation()

  return (
    <section className='mt-10'>
      <Container>
        <div className='col-span-full md:col-span-2 border-2'>
          User Menu
          <ul className='flex flex-col mt-10 gap-y-6'>
            <Link to={PATH.CREATE_EVENT}>Add Game</Link>
            <Link to={PATH.USER}>Profile</Link>
            <Link to={PATH.USER_SETTINGS}>Settings</Link>
            <Link to='#'>Sign Out</Link>
          </ul>
        </div>
        <Switch>
          <Route path={PATH.USER} exact component={Profile} />
          <Route path={PATH.CREATE_EVENT} component={CreateGame} />
          <Route path={PATH.USER_SETTINGS} component={Settings} />
          <Route path='*'>
            <Redirect to={PATH.USER} />
          </Route>
        </Switch>
      </Container>
    </section>
  )
}
