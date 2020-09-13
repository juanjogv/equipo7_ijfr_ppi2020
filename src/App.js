import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import NavBar from './components/NavBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
