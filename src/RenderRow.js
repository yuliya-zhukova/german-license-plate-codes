import React from 'react';

export function RenderRow(props) {
    return (
        <tr>
          <td>{props.cityCode}</td>
          <td>{props.cityName}</td>
        </tr>
    );
}