import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Navbar />  
      <Home />    
    </Router>
  );
}