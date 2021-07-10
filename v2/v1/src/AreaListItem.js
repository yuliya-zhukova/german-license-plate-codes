import React from 'react';

export function AreaListItem(props) {
    return (
        <tr key={props.code}>
          <td>{props.data.code}</td>
          <td>{props.data.name}</td>
        </tr>
    );
}
