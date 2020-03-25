import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2> Welcome to Timer App!</h2>
      </div>
      <Timer start={Date.now()}/>
    </div>
  );
}

export default App;
