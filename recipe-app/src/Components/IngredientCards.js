import PropTypes from 'prop-types';
import React from 'react';

export default function IngredientCards(...props) {
  const [{ ingredient, index, thumb, selectIngredient }] = props;

  return (
    <button
      type="button"
      onClick={ () => {
        selectIngredient(ingredient.strIngredient
      || ingredient.strIngredient1);
      } }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        testid={ `${index}-card-img` }
        src={ thumb }
        alt={ ingredient.strIngredient || ingredient.strIngredient1 }
      />
      <h3 data-testid={ `${index}-card-name` }>
        {ingredient.strIngredient
          || ingredient.strIngredient1}
      </h3>
    </button>
  );
}

IngredientCards.propTypes = {
  idDrink: PropTypes.any,
  idMeal: PropTypes.any,
  index: PropTypes.any,
  ingredient: PropTypes.any,
  isIngredient: PropTypes.any,
  strDrink: PropTypes.any,
  strDrinkThumb: PropTypes.any,
  strMeal: PropTypes.any,
  strMealThumb: PropTypes.any,
}.isRequired;
