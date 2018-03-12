import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import challenge from './challenge.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ai2iq.com</h1>
        </header>
        <p className="App-intro">
          To get started, <code>look at the picture below and try to determine which choice from the right side should replace the question mark on the left</code>.
        </p>
        <img src={challenge} style={{height: 500, width: '90%'}} />
      </div>
    );
  }
}

export default App;
