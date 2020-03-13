import React from 'react';
import germanLicensePlatePrefixes from 'german-license-plate-prefixes';

import './App.css';
import { RenderTable } from './RenderTable';

function objectToArray(obj) {
  return Object.keys(obj).map(function (key) {
    return {
      code: key,
      name: obj[key]
    };
  });
}

function App() {
  const array = objectToArray(germanLicensePlatePrefixes);

  return (
    <div className="App">
      {RenderTable(array)}
    </div>
  );
}

export default App;
