/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import Context from '../hooks/Context';
import { TableCss } from '../styles/general';

const magicNumber = 5;

export default function Table() {
  const { search, filterByNum, columnFilter,
    setFilterByNum, setColumnFilter } = useContext(Context);

  function removeFilter(columnDisplayed) {
    const filterRemoved = Object.values(filterByNum)
      .filter((e) => e.column !== columnDisplayed);
    setFilterByNum(filterRemoved);
    if (columnFilter.length !== magicNumber) {
      const backToColumn = [columnDisplayed, ...columnFilter];
      setColumnFilter(backToColumn);
    } return null;
  }

  function showFilterInUse() {
    return Object.values(filterByNum).map(({ column, comparison, value }) => (
      <div key={ column } data-testid="filter">
        <p>{`${column} ${comparison} ${value}`}</p>
        <button type="button" onClick={ () => removeFilter(column) }>x</button>
      </div>
    ));
  }

  return (
    <TableCss>
      {filterByNum && showFilterInUse()}
      <table className="table">
        <thead className="thead-table">
          <tr className="tr-table">
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody className="tbody-table">
          {search.map((val) => (
            <tr className="tr-tbody-table" key={ val.name }>
              <td
                data-testid="planet-name"
              >
                {val.name}
              </td>
              <td>{val.rotation_period}</td>
              <td>{val.orbital_period}</td>
              <td>{val.diameter}</td>
              <td>{val.climate}</td>
              <td>{val.gravity}</td>
              <td>{val.terrain}</td>
              <td>{val.surface_water}</td>
              <td>{val.population}</td>
              <td>{val.films}</td>
              <td>{val.created}</td>
              <td>{val.edited}</td>
              <td>{val.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableCss>
  );
}
