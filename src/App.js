import React from 'react';
import { Button } from 'reactstrap';
import * as data from 'german-license-plate-prefixes';

import logo from './logo.svg';
import './App.css';

console.log(data.default);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button color="success">Success</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
