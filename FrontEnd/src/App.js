import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroBlocks from "./pages/IntroBlocks";
import LogIn from "./pages/LogIn.js";
// import SignIn from './pages/SignIn.js';
// import Posts from './pages/Posts.js';
// import Ranking from './pages/Ranking.js';
// import Profile from './pages/Profile.js';
// import QR_Reader from './components/QR_Reader';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IntroBlocks} />
          <Route path="/login" component={LogIn} />
          {/* <Route path='/reader' component={QR_Reader} />
          
          <Route path='/signin' component={SignIn} />
          <Route path='/posts' component={Posts} />
          <Route path='/ranking' component={Ranking} />
          <Route path='/profile' component={Profile} /> */}
        </Switch>
      </Router>
    </div>
  );
}
