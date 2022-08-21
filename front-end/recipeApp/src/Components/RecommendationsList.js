import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getDrinkRecipe, getMealRecipe } from '../services/Apis';
import RecommendationCard from './RecommendationCard';

const LIMIT = 6;

export default function RecommendationsList() {
  const [recipes, setRecipes] = useState([]);

  const { pathname } = useLocation();

  const getRecipes = useCallback(async () => {
    if (pathname.includes('foods')) {
      const getDrinks = await getDrinkRecipe();
      const drinkList = getDrinks.slice(0, LIMIT);
      setRecipes(drinkList);
    } else {
      const getMeals = await getMealRecipe();
      const mealList = getMeals.slice(0, LIMIT);
      setRecipes(mealList);
    }
  }, [pathname]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <div className="recommendationCard">
      {recipes && (
        <>
          {
            recipes.map((recipe, i) => (
              <RecommendationCard
                key={ recipe.idMeal || recipe.idDrink }
                index={ i }
                { ...recipe }
              />
            ))
          }
        </>
      )}
    </div>
  );
}

RecommendationsList.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }),
};

RecommendationsList.defaultProps = {
  recipe: {
    idMeal: undefined,
    idDrink: undefined,
  },
};
