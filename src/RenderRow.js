import React from 'react';

export function RenderRow(props) {
    return (
      <div>
        {props.cityCode}
        {props.cityName}
      </div>
    );
}