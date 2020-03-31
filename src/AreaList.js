import React from 'react';

import './AreaList.css';

import { AreaListItem } from './AreaListItem';
import { SearchField } from './SearchField';

export function AreaList(props) {
    return (
      <div>
        <SearchField />
        <table className="table table-striped region-list">
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
