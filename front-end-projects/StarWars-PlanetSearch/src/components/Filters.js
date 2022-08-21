import React, { useContext, useState } from 'react';
import Context from '../hooks/Context';
import { AroundFilters } from '../styles/general';

const comparative = ['maior que', 'menor que', 'igual a'];

export default function Filters() {
  const { filterByNum,
    handleSearch, afterClick, columnFilter,
    sortTable, columnToSort, setColumnToSort, setSortTable } = useContext(Context);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const saveLocalState = () => {
    afterClick(column, comparison, value, sortTable);
  };

  const [orderTable, setOrderTable] = useState({
    order: {
      column: 'population',
      sortBy: 'ASC',
    },
  });

  const handleSort = ({ target }) => {
    setOrderTable({
      order: {
        column: columnToSort,
        sortBy: target.value,
      },
    });
  };

  const sendSortedToProvider = () => {
    setSortTable({
      order: {
        column: orderTable.order.column,
        sortBy: orderTable.order.sortBy,
      },
    });
  };

  return (
    <AroundFilters>
      <h1> StarWars Planet Search</h1>
      <div className="filterBy">
        <p>Filtrar Por Nome:</p>
        <input
          type="text"
          placeholder="Tatoo"
          data-testid="name-filter"
          onChange={ handleSearch }
        />
        <label htmlFor="column">
          <select
            data-testid="column-filter"
            id="column"
            value={ filterByNum.column }
            onChange={ (e) => setColumn(e.target.value) }
          >
            {
              columnFilter.map((dropdown) => (
                <option
                  key={ dropdown }
                >
                  {dropdown}
                </option>))
            }
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            name="comparison"
            value={ filterByNum.comparison }
            onChange={ (e) => setComparison(e.target.value) }
            data-testid="comparison-filter"
            id="comparison"
          >
            {
              comparative.map((dropdown, index) => (
                <option
                  key={ dropdown + index }
                // value={ dropdown }
                >
                  {dropdown}
                </option>))
            }
          </select>
        </label>
        <input
          name="value"
          type="number"
          value={ value }
          data-testid="value-filter"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="button"
          onClick={ saveLocalState }
          data-testid="button-filter"
        >
          Filtrar
        </button>

      </div>
      <div className="orderBy">
        <p>Ordenar Por:</p>
        <select
          data-testid="column-sort"
          id="sortBy"
          name="sortBy"
          value={ columnToSort }
          onChange={ (e) => setColumnToSort(e.target.value) }
        >
          {
            columnFilter.map((dropdown) => (
              <option
                key={ dropdown }
              >
                {dropdown}
              </option>))
          }
        </select>
        <input
          type="radio"
          name="radio"
          value="ASC"
          data-testid="column-sort-input-asc"
          defaultChecked
          onChange={ (e) => handleSort(e) }
        />
        <p>Ascendente</p>
        <input
          type="radio"
          // id="DESC"
          name="radio"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ (e) => handleSort(e) }
        />
        <p>Descendente</p>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => sendSortedToProvider() }
        >
          Ordenar
        </button>
      </div>
    </AroundFilters>);
}
