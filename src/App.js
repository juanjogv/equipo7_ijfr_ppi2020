import React, { Component } from "react";
import { BrowserRouter as Router, Route, /*Link*/ } from 'react-router-dom';
import NavBar from "./components/NavBar.js";
import IntroBlocks from './components/IntroBlocks'
import LogIn from './components/LogIn.js';
import SignIn from './components/SignIn.js';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>

          <Route exact path='/' render={() => {
            return <div>
              <NavBar />
              <div className="bg"></div>
              <IntroBlocks />
            </div>
          }} />

          <Route path='/login' component={LogIn} />
          <Route path='/signin' component={SignIn} />
        </Router>
      </div>
    );
  }
}

export default App;
