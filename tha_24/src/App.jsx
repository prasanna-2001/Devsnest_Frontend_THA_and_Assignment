// import React from "react";
// import { useState } from "react";

// function App() {
//   const [state, setState] = useState("hsfgskf");
//   return (
//     <div className="App">
//     <h1>{state}</h1>
//     </div>
//   );
// }

// export default App;


import './Style.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

import { AuthContext } from './Context';

function App() {
  return (
    <Router>
      <ul className="navbar">
        <li>
          <Link to="/" className="menuOpt">Home</Link>
        </li>
        <li>
          <Link to="/about" className="menuOpt">About</Link>
        </li>
        <li>
          <Link to="/profile" className="menuOpt">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard" className="menuOpt">Dashboard</Link>
        </li>
      </ul>

      
        <Switch>
            <AuthContext>
              <Route exact path="/" component={Home} ></Route>
              <Route exact path="/about" component={About} ></Route>
              <Route exact path="/profile" component={Profile} ></Route>
              <Route exact path="/Dashboard" component={Dashboard} ></Route>  
          </AuthContext>
        </Switch>


    </Router>
  );
}

export default App;