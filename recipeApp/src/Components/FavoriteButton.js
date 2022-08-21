import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import favIcon from '../images/whiteHeartIcon.svg';
import favBlackIcon from '../images/blackHeartIcon.svg';
import { addFavoriteToLocalStorage,
  getLocalStorage,
  removeFavoriteToLocalStorage } from '../services/LocalStorage';
import Context from '../Hooks/Context';

export default function FavoriteButton(...props) {
  const { id } = useParams();
  const [favorited, setFavorited] = useState(false);
  const [{ recipe, testid }] = props;
  const { setShowFavorites } = useContext(Context);

  const objTransformer = (obj) => {
    const newObj = {
      id: obj.idMeal || obj.idDrink || obj.id,
      type: obj.idMeal || obj.type === 'food' ? 'food' : 'drink',
      nationality: obj.strArea || '' || obj.nationality,
      category: obj.strCategory || obj.category,
      alcoholicOrNot: obj.strAlcoholic || '' || obj.alcoholicOrNot,
      name: obj.strMeal || obj.strDrink || obj.name,
      image: obj.strMealThumb || obj.strDrinkThumb || '',
    };
    return newObj;
  };

  const isFavorited = useCallback(() => {
    const favoriteList = getLocalStorage('favoriteRecipes');

    if (favoriteList && Object.values(favoriteList)
      .some((item) => (item.id === id) || (item.id === recipe.id))) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
    setShowFavorites(favoriteList);
  }, [id, recipe.id, setShowFavorites]);

  const addFavoriteRecipe = () => {
    const favoriteRecipe = objTransformer(recipe);
    addFavoriteToLocalStorage(favoriteRecipe);
    isFavorited();
  };

  const removeFavoriteRecipe = () => {
    const favoriteRecipe = objTransformer(recipe);
    removeFavoriteToLocalStorage(favoriteRecipe);
    isFavorited();
  };

  useEffect(() => {
    isFavorited();
  }, []);

  return (
    <div>
      {favorited ? (
        <button
          type="button"
          data-testid={ testid }
          onClick={ removeFavoriteRecipe }
        >
          <img
            src={ favBlackIcon }
            alt="favBlackIcon"
            data-testid="favorite-btn"
          />
        </button>
      ) : (
        <button
          type="button"
          data-testid={ testid }
          onClick={ addFavoriteRecipe }
        >
          <img
            src={ favIcon }
            alt="favIcon"
            data-testid="favorite-btn"
          />
        </button>
      )}
    </div>
  );
}

FavoriteButton.propTypes = {
  alcoholicOrNot: PropTypes.any,
  category: PropTypes.any,
  id: PropTypes.any,
  image: PropTypes.any,
  name: PropTypes.any,
  nationality: PropTypes.any,
  type: PropTypes.any,
}.isRequired;
