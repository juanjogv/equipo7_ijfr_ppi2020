import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroBlocks from "./pages/IntroBlocks";
import LogIn from "./pages/LogIn.js";
import SignIn from "./pages/SignIn.js";
import Profile from "./pages/Profile.js";
// import Posts from './pages/Posts.js';
// import Ranking from './pages/Ranking.js';
import QRReader from "./components/QRReader";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IntroBlocks} />
          <Route path="/login" component={LogIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/reader" component={QRReader} />
          {/* <Route path='/posts' component={Posts} />
          <Route path='/ranking' component={Ranking} /> */}
        </Switch>
      </Router>
    </div>
  );
}
