import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STEPS_STATE = {
  ingredients: [],
};

export default function IngredientsList({ recipe }) {
  const [steps, setSteps] = useState(INITIAL_STEPS_STATE);

  const buildSteps = useCallback(() => {
    const recipeArray = Object.values(recipe);
    const newSteps = recipeArray.reduce(
      (acc, _, i) => {
        const recipeIngredient = recipe[`strIngredient${i}`];
        if (recipeIngredient) {
          acc.ingredients.push(recipeIngredient);
        }
        return acc;
      },
      { ingredients: [] },
    );
    setSteps(newSteps);
  }, [recipe]);

  useEffect(() => {
    buildSteps();
  }, [buildSteps]);

  return (
    <div>
      {steps && (
        <>
          <h2>
            IngredientsList
          </h2>
          <ul>
            {steps.ingredients.map((ingredient, i) => (
              <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>
                {ingredient}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

IngredientsList.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }),
};

IngredientsList.defaultProps = {
  recipe: {
    idMeal: undefined,
    idDrink: undefined,
  },
};
