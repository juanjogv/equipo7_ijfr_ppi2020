import React, { Component } from "react";
import { BrowserRouter as Router, Route, /*Link*/ } from 'react-router-dom';
import NavBar from "./components/NavBar.js";
import IntroBlocks from './pages/IntroBlocks'
import LogIn from './pages/LogIn.js';
import SignIn from './pages/SignIn.js';
import Posts from './pages/Posts.js';
import Ranking from './pages/Ranking.js';
import Profile from './pages/Profile.js';
import QR_Reader from './components/QR_Reader';
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

          <Route path='/reader' component={QR_Reader} />
          <Route path='/login' component={LogIn} />
          <Route path='/signin' component={SignIn} />
          <Route path='/posts' component={Posts} />
          <Route path='/ranking' component={Ranking} />
          <Route path='/profile' component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
