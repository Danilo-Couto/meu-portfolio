import React from 'react';
import PropTypes from 'prop-types';

export default function RecommendationCard({
  strMealThumb,
  strMeal,
  strDrinkThumb,
  strDrink,
  index,
}) {
  return (
    <div
      data-testid={ `${index}-recomendation-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb || strDrinkThumb }
        alt={ strMeal || strDrink }
      />
      <h4 data-testid={ `${index}-recomendation-title` }>{strMeal || strDrink}</h4>
    </div>
  );
}

RecommendationCard.propTypes = {
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strDrink: PropTypes.string,
  index: PropTypes.number,
};

RecommendationCard.defaultProps = {
  strMealThumb: undefined,
  strMeal: undefined,
  strDrinkThumb: undefined,
  strDrink: undefined,
  index: undefined,
};
