import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../Hooks/Context';

export default function CategoryButons({ category, i }) {
  const { fetchFilterMealByCategories,
    fetchFilterDrinkByCategories, setCategorySelected, categorySelected,
    resetFilters,
  } = useContext(Context);

  const { pathname } = useLocation();
  const isFood = pathname.includes('foods');

  const setFilter = () => {
    if (isFood) fetchFilterMealByCategories(category);
    else fetchFilterDrinkByCategories(category);
    setCategorySelected(category);
  };

  return (
    <div>
      <button
        type="button"
        key={ i }
        data-testid={ `${category}-category-filter` }
        onClick={ category === categorySelected ? resetFilters : setFilter }
      >
        {category}
      </button>
    </div>);
}

CategoryButons.propTypes = {
  category: PropTypes.any,
}.isRequired;
