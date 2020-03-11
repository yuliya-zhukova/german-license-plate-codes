import React from 'react';

import './App.css';
import { RenderRow } from './RenderRow';
import {data} from './mock-data';

function App() {
  return (
    <div className="App">
      {RenderRow(data[0])}
      {RenderRow(data[1])}
      {RenderRow(data[2])}
    </div>
  );
}

export default App;
