import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLocalStorage,
  toggleInProgressRecipesFromLocal } from '../services/LocalStorage';
import './RecipeStepsCSS.css';
import { addRecipeToDone } from '../Pages/DoneRecipes';

const INITIAL_STEPS_STATE = {
  ingredients: [],
  measure: [],
};

const STATE_IN_PROGRESS = {
  meals: {},
  cocktails: {},
};

export default function RecipeSteps({ recipe }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const [steps, setSteps] = useState(INITIAL_STEPS_STATE);
  const [completeSteps, setCompleteSteps] = useState({
    id: recipe.idMeal || recipe.idDrink,
    ingredients: [],
  });

  const isChecked = useCallback((item) => (
    completeSteps.ingredients.includes(item)
      ? 'checked-item' : 'not-checked-item'
  ), [completeSteps]);

  const handleToggleStep = (ingredientIndex) => {
    const completedSteps = Object.values(completeSteps.ingredients);
    if (completedSteps.includes(ingredientIndex)) {
      setCompleteSteps({
        ...completeSteps,
        ingredients: completedSteps.filter(
          (ingredient) => ingredient !== ingredientIndex,
        ),
      });
    } else {
      setCompleteSteps({
        ...completeSteps,
        ingredients: [...completedSteps, ingredientIndex],
      });
    }
  };

  const finishRecipe = () => {
    addRecipeToDone(recipe);
    history.push('/done-recipes');
  };

  const saveStep = useCallback((state = STATE_IN_PROGRESS) => {
    if (pathname.includes('food')) {
      return {
        ...state,
        meals: {
          ...state.meals,
          [completeSteps.id]: completeSteps.ingredients,
        },
      };
    }
    if (pathname.includes('drinks')) {
      return {
        ...state,
        cocktails: {
          ...state.cocktails,
          [completeSteps.id]: completeSteps.ingredients,
        },
      };
    }
  }, [pathname, completeSteps]);

  const buildSteps = useCallback(() => {
    const recipes = Object.values(recipe);
    const newSteps = recipes.reduce(
      (acc, _, i) => {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient || measure) {
          acc.ingredients.push(ingredient);
          acc.measure.push(measure);
        }
        return acc;
      },
      { ingredients: [], measure: [] },
    );
    setSteps(newSteps);
  }, [recipe]);

  const getInProgressFromLocalStorage = useCallback((type) => {
    const inProgressLocal = getLocalStorage('inProgressRecipes');
    if (inProgressLocal) {
      setCompleteSteps((prevCompleteSteps) => ({
        ...prevCompleteSteps,
        ingredients: inProgressLocal[type][prevCompleteSteps.id] || [],
      }));
    }
  }, []);

  useEffect(() => {
    if (pathname.includes('food')) {
      getInProgressFromLocalStorage('meals');
    } else {
      getInProgressFromLocalStorage('cocktails');
    }
  }, [pathname, getInProgressFromLocalStorage]);

  useEffect(() => {
    buildSteps();
  }, [buildSteps]);

  useEffect(() => {
    saveStep();
  }, [completeSteps, saveStep]);

  useEffect(() => {
    toggleInProgressRecipesFromLocal(saveStep());
  }, [saveStep]);

  const { ingredients } = completeSteps;
  const stepsNotEmpty = steps.ingredients.filter((item) => item !== '');

  return (
    <>
      <div>
        {stepsNotEmpty.map((ingredient, i) => (
          <div key={ i }>
            <input
              type="checkbox"
              id={ i }
              name={ ingredient }
              value={ ingredient }
              checked={ ingredients.includes(i) }
              onChange={ () => handleToggleStep(i) }
              data-testid={ `${i}-ingredient-step` }
            />
            <span
              className={ isChecked(i) }
            >
              {`${steps.measure[i]} ${ingredient} `}
            </span>
          </div>
        ))}
      </div>
      <div>
        <button
          type="button"
          disabled={ stepsNotEmpty.length !== ingredients.length }
          data-testid="finish-recipe-btn"
          onClick={ finishRecipe }
        >
          Finish Recipe
        </button>
      </div>
    </>
  );
}

RecipeSteps.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }),
};

RecipeSteps.defaultProps = {
  recipe: {
    idMeal: undefined,
    idDrink: undefined,
  },
};
