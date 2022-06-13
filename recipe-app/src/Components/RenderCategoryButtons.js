import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../Hooks/Context';
import CategoryButons from './CategoryButons';
import { DivCategory } from '../Styles/general';

const limitDisplayBtnCategory = 5;

export default function RenderCategoryButtons() {
  const { categoriesBtn, resetFilters } = useContext(Context);

  return (
    <DivCategory>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ resetFilters }
      >
        All
      </button>
      {categoriesBtn.slice(0, limitDisplayBtnCategory)
        .map((category, i) => (
          <CategoryButons
            key={ i }
            category={ category.strCategory }
            resetFilters={ resetFilters }
          />
        ))}
    </DivCategory>
  );
}

RenderCategoryButtons.propTypes = {
  categories: PropTypes.shape({
    slice: PropTypes.func,
  }),
  limitDisplayBtnCategory: PropTypes.any,
  resetFilters: PropTypes.any,
}.isRequired;
