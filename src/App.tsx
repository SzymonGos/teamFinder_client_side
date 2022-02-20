import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import PATH from './services/paths'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={PATH.HOME} component={Home} />
        <Route path={PATH.LOGIN} component={Login} />
        <Route path={PATH.REGISTER} component={Register} />        
      </Switch>
    </Router>
  )
}
