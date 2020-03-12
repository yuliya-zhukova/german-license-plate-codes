import React from 'react';

import './App.css';
import { RenderTable } from './RenderTable';
import {data} from './mock-data';

function App() {
  return (
    <div className="App">
      {RenderTable(data)}
    </div>
  );
}

export default App;
