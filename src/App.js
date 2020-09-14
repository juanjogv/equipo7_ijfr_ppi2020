import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import IntroBlocks from './components/IntroBlocks'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="bg"></div>
        <IntroBlocks />
      </div>
    );
  }
}

export default App;
