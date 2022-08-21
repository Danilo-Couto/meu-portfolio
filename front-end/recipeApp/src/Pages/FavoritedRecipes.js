/* eslint-disable react/jsx-max-depth */
import React, { useCallback, useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import FavoriteButton from '../Components/FavoriteButton';
import Header from '../Components/Header';
import ShareButton from '../Components/ShareButton';
import Context from '../Hooks/Context';
import { getLocalStorage } from '../services/LocalStorage';
import { FavoritesNav, ANameCategoryFav,
  FavoriteMap, ImgCardFavorite } from '../Styles/general2';

export default function FavoriteRecipes() {
  const { pathname } = useLocation();
  const { getFavoritesFromLS, showFavorites, setShowFavorites } = useContext(Context);

  const filterButton = useCallback(({ target: { name } }) => {
    const getFavorites = getLocalStorage('favoriteRecipes');

    if (name === 'all' && getFavorites.length !== 0) {
      return setShowFavorites(getFavorites);
    }
    if (name === 'food' && getFavorites.length !== 0) {
      const filteredFavs = getFavorites
        .filter((item) => item.type.includes('food'));
      return setShowFavorites(filteredFavs);
    }
    if (name === 'drink' && getFavorites.length !== 0) {
      const filteredFavs = getFavorites
        .filter((item) => item.type.includes('drink'));
      return setShowFavorites(filteredFavs);
    }
  }, [setShowFavorites]);

  useEffect(() => {
    getFavoritesFromLS();
  }, [pathname, getFavoritesFromLS]);

  return (
    <>
      <Header showSearch={ false } />
      <div>
        <FavoritesNav>
          <button
            name="all"
            data-testid="filter-by-all-btn"
            type="button"
            onClick={ filterButton }
          >
            All
          </button>
          <button
            name="food"
            data-testid="filter-by-food-btn"
            type="button"
            onClick={ filterButton }
          >
            Food
          </button>
          <button
            name="drink"
            data-testid="filter-by-drink-btn"
            type="button"
            onClick={ filterButton }
          >
            Drink
          </button>
        </FavoritesNav>
        {showFavorites
          && showFavorites.map((recipe, i) => (
            <FavoriteMap key={ i }>
              <ANameCategoryFav>
                <Link
                  to={ `/${recipe.type}s/${recipe.id}` }
                  data-testid={ `${i}-horizontal-name` }
                >
                  {recipe.name}
                </Link>
                <h3
                  data-testid={ `${i}-horizontal-top-text` }
                >
                  {recipe.type === 'drink'
                    ? recipe.alcoholicOrNot
                    : `${recipe.nationality} ${recipe.category}`}
                </h3>
              </ANameCategoryFav>

              <ImgCardFavorite>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    className="imgRecipe"
                    Link
                    to={ `/${recipe.type}s/$}{recipe.id}` }
                    data-testid={ `${i}-horizontal-image` }
                    // width="100px"
                    src={ recipe.image }
                    alt={ recipe.name }
                  />
                </Link>
                <div className="icons">
                  <ShareButton
                    testid={ `${i}-horizontal-share-btn` }
                    favoriteId={ recipe.id }
                    type={ recipe.type }
                    recipe={ recipe }
                  />
                  <FavoriteButton
                    recipe={ recipe }
                    testid={ `${i}-horizontal-favorite-btn` }
                  />
                </div>
              </ImgCardFavorite>
            </FavoriteMap>
          ))}
      </div>
    </>
  );
}
