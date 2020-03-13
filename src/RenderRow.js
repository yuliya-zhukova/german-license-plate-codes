import React from 'react';

export function RenderRow(props) {
    return (
        <tr key={props.code}>
          <td>{props.data.code}</td>
          <td>{props.data.name}</td>
        </tr>
    );
}
