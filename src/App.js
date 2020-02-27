import React from 'react';
import * as data from 'german-license-plate-prefixes';

import './App.css';

const codeName = 'A';
const cityName = data.default[codeName];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            <tr>
              <td>{codeName}</td>
              <td>{cityName}</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
