import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="bg"></div>
      </div>
    );
  }
}

export default App;
