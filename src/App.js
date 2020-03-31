import React from 'react';
import germanLicensePlatePrefixes from 'german-license-plate-prefixes';

import './App.css';
import { AreaList } from './AreaList';

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

      <AreaList data={array} />
    </div>
  );
}

export default App;
