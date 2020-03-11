import React from 'react';

import './App.css';
import { RenderRow } from './RenderRow';
import {data} from './mock-data';

function App() {
  return (
    <div className="App">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>City code</th>
            <th>City name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data[0].cityCode}</td>
            <td>{data[0].cityName}</td>
          </tr>
          <tr>
            <td>{data[1].cityCode}</td>
            <td>{data[1].cityName}</td>
          </tr>
          <tr>
            <td>{data[2].cityCode}</td>
            <td>{data[2].cityName}</td>
          </tr>
          <tr>
            <td>{data[3].cityCode}</td>
            <td>{data[3].cityName}</td>
          </tr>
        </tbody>
      </table>
      {/* {RenderRow(data[0])}
      {RenderRow(data[1])}
      {RenderRow(data[2])} */}
    </div>
  );
}

export default App;
