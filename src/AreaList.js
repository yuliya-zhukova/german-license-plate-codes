import React from 'react';

import { AreaListItem } from './AreaListItem';

export function AreaList(props) {
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
              props.data.map(function (element) {
                return (
                  <AreaListItem data={element} />
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
}
