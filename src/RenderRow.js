import React from 'react';

export function RenderRow(props) {
    return (
      <div>
        <table className="table table-striped">
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