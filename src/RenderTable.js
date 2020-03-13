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
            {
              props.map(function (element) {
                return RenderRow(element);
              })
            }
          </tbody>
        </table>
      </div>
    );
}
