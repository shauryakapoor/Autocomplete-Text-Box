import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './HideableText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <div className="App-content">
          <HideableText text="Dynamic Text!" />
      </div>
      </header>
    </div>
  );
}

export default App;
