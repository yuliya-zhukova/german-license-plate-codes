import React from 'react';

import { RenderRow } from './RenderRow';

export function RenderTable(props) {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="code-column">City code</th>
              <th>City name</th>
            </tr>
          </thead>
          <tbody>
            {RenderRow(props[0])}
            {RenderRow(props[1])}
            {RenderRow(props[2])}
            {RenderRow(props[3])}
          </tbody>
        </table>
      </div>
    );
}