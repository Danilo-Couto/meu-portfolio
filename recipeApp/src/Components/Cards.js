import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../Hooks/Context';
import { ButtonCards } from '../Styles/general2';

export default function Cards(...props) {
  const [{ idMeal, idDrink, index, strMealThumb,
    strDrinkThumb, strMeal, strDrink }] = props;
  const { RedirectToDetailPage } = useContext(Context);

  return (
    <ButtonCards
      type="button"
      onClick={ () => { RedirectToDetailPage(idMeal || idDrink); } }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        testid={ `${index}-card-img` }
        src={ strMealThumb || strDrinkThumb }
        alt={ strMeal || strDrink }
      />
      <h3 data-testid={ `${index}-card-name` }>{strMeal || strDrink}</h3>
    </ButtonCards>
  );
}

Cards.propTypes = {
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
