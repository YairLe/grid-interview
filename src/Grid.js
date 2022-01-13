import React from "react";

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((column) => (
          <th key={column.title}>{column.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((dataObject) => (
        <tr key={dataObject[config[0].field]}>
          {config.map(({ field, component: Component }) => (
            <td key={field}>
              {Component ? (
                <Component data={dataObject[field]} />
              ) : (
                dataObject[field]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
