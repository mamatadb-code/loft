// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="nav-header">
        <ul className="navList">
            <li> 
              <Link to = "/Home" className="navlink">Home </Link>
            </li>
            <li>  <Link to = "/About" className="navlink">About </Link></li>
            <li>  <Link to = "/Contact" className="navlink last-nav-link">Contact </Link></li>
          </ul>
        {/* <Home /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
         */}
      </header>
    </div>
    <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Contact" component={Contact} />
    </Switch>
    </Router>
  );
}

export default App;
