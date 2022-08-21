/* eslint-disable object-curly-spacing */
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import Context from './Context';
import ApiFetch from '../services/ApiFetch';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState([]);
  const [nameFiltered, setNameFiltered] = useState(
    { nameFiltered: { name: '' } },
  );
  const [filterByNum, setFilterByNum] = useState([]);
  const [columnFilter, setColumnFilter] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [columnToSort, setColumnToSort] = useState('population');
  const [sortTable, setSortTable] = useState({
    order: {
      column: '',
      sortBy: '',
    },
  });

  useEffect(() => {
    async function planetFetch() {
      const data = await ApiFetch();
      setPlanets(data);
    }
    planetFetch();
  }, []);

  function capitalizeFirstLetter(string) {
    if (!string) return string;
    return string[0].toUpperCase() + string.slice(1);
  }

  const handleSearch = ({ target }) => {
    const searchName = capitalizeFirstLetter(target.value);
    setNameFiltered({
      nameFiltered: {
        name: searchName,
      },
    });
  };

  const afterClick = (column, comparison, value) => {
    if (filterByNum.some((dropdown) => dropdown.column === column)) {
      return null;
    }
    setFilterByNum([...filterByNum, { column, comparison, value }]);
    setColumnFilter(columnFilter.filter((el) => el !== column));
  };

  const numFilter = (planet) => {
    const filter = ({ comparison, column, value }) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
    };
    return filterByNum.every((el) => filter(el));
  };

  const sortArray = useCallback((searchResult) => {
    if (sortTable.order.sortBy === '') {
      setSearch(searchResult.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortTable.order.sortBy === 'ASC') {
      setSearch(searchResult.sort((a, b) => a[columnToSort] - b[columnToSort]));
    } else {
      setSearch(searchResult.sort((a, b) => b[columnToSort] - a[columnToSort]));
    }
  }, [planets, sortTable]);

  useEffect(() => {
    (() => {
      sortArray(planets.filter((planet) => planet.name
        .includes(nameFiltered.nameFiltered.name))
        .filter(numFilter));
    })();
  }, [planets, nameFiltered, filterByNum, sortTable]);

  const contextValue = {
    planets,
    nameFiltered,
    setNameFiltered,
    filterByNum,
    setFilterByNum,
    handleSearch,
    afterClick,
    search,
    columnFilter,
    setColumnFilter,
    sortTable,
    setSortTable,
    columnToSort,
    setColumnToSort,
    setSearch,
    sortArray,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;

// ajuda do Paulo Sordi;
