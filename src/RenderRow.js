import React from 'react';

export function RenderRow(props) {
    return (
        <tr key={props.code}>
          <td>{props.code}</td>
          <td>{props.name}</td>
        </tr>
    );
}
