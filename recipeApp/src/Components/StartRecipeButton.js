import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getLocalStorage } from '../services/LocalStorage';

export default function StartRecipeButton({ id }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const isFood = pathname.includes('foods');
  const [inProgressRecipe, setInProgressRecipe] = useState(false);
  const getInProgressRecipes = getLocalStorage('inProgressRecipes');

  const checkInProgressRecipes = useCallback(() => {
    const mealOrDrink = () => (pathname.includes('foods')
      ? getInProgressRecipes.meals
      : getInProgressRecipes.cocktails);

    if (getInProgressRecipes) {
      setInProgressRecipe(
        Object.keys(mealOrDrink()).some((key) => key === id),
      );
    }
  }, [getInProgressRecipes, id, pathname]);

  const startRecipe = () => {
    if (isFood) {
      history.push(`/foods/${id}/in-progress`);
    } else {
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  useEffect(() => {
    checkInProgressRecipes();
  }, [checkInProgressRecipes]);

  return (
    <button
      data-testid="start-recipe-btn"
      type="button"
      onClick={ startRecipe }
    >
      {inProgressRecipe ? 'Continue Recipe' : 'Start Recipe'}
    </button>
  );
}

StartRecipeButton.propTypes = {
  id: PropTypes.string,
}.isRequired;
