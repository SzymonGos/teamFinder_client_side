import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import PATH from './services/paths'
import User from './pages/User'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={PATH.HOME} component={Home} />
        <Route path={PATH.LOGIN} component={Login} />
        <Route path={PATH.REGISTER} component={Register} />
        <Route path={PATH.USER} component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
