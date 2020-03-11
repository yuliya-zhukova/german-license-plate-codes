import React from 'react';

export function RenderRow(props) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td class="code-column">{props.cityCode}</td>
              <td>{props.cityName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}