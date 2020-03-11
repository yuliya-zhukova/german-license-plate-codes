import React from 'react';
import * as data from 'german-license-plate-prefixes';

import './App.css';

const cleanData = data.default;


const codeName = 'A';
const cityName = cleanData[codeName];

const codeName2 = 'FFB';
const cityName2 = cleanData[codeName2];

function renderTableRow(codeName, cityName) {
  return (
    <tr>
      <td>{codeName}</td>
      <td>{cityName}</td>
    </tr>
  );
}

function transformToArray(data) {
  const allRows = [];

  for (let [key, value] of Object.entries(data)) {
    allRows.push({
      key: key,
      value: value
    });
  } 
  
  return allRows;
}

const arrayData = transformToArray(data)

console.log(arrayData);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            {renderTableRow(codeName, cityName)}
            {renderTableRow(codeName2, cityName2)}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
