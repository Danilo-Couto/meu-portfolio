import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Components/Header';
import ShareButton from '../Components/ShareButton';
import { addDoneRecipesOnLocal, getLocalStorage } from '../services/LocalStorage';
import { DoneRecipesNav, RecipeDoneMap,
  ANameCategory, ImgCard } from '../Styles/general2';

export const addRecipeToDone = (recipe) => {
  const doneRecipe = {
    id: recipe.idMeal || recipe.idDrink,
    type: recipe.idMeal ? 'food' : 'drink',
    nationality: recipe.strArea || '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe.strMeal || recipe.strDrink,
    image: recipe.strMealThumb || recipe.strDrinkThumb,
    doneDate: new Date().toString(),
    tags: recipe.strTags ? recipe.strTags.split(',') : [],
  };
  addDoneRecipesOnLocal(doneRecipe);
};

export default function DoneRecipes() {
  const { pathname } = useLocation();
  const [recipesDone, setRecipesDone] = useState([]);

  const getDonesFromLocalStorage = useCallback(() => {
    const showRecipesDone = getLocalStorage('doneRecipes');
    if (showRecipesDone) {
      setRecipesDone(showRecipesDone);
    } else {
      setRecipesDone([]);
    }
  }, []);

  useEffect(() => {
    getDonesFromLocalStorage();
  }, [pathname, getDonesFromLocalStorage]);

  const filterButton = (event) => {
    const showRecipesDone = getLocalStorage('doneRecipes');

    if (event.target.name === 'food' && showRecipesDone.length !== 0) {
      const filteredRecipes = showRecipesDone
        .filter((recipe) => recipe.type === event.target.name);
      return setRecipesDone(filteredRecipes);
    }
    if (event.target.name === 'drink' && showRecipesDone.length !== 0) {
      const filteredRecipes = showRecipesDone
        .filter((recipe) => recipe.type === event.target.name);
      return setRecipesDone(filteredRecipes);
    } if (showRecipesDone.length !== 0) {
      const filteredRecipes = showRecipesDone;
      return setRecipesDone(filteredRecipes);
    }
  };

  return (
    <>
      <Header showSearch={ false } />
      <div>
        <DoneRecipesNav>
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
            Drinks
          </button>
        </DoneRecipesNav>
        {recipesDone
          && recipesDone.map((recipe, i) => (
            <RecipeDoneMap key={ i }>
              <ANameCategory>
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
                {recipe.tags.length > 0 && (
                  recipe.tags.map((tag, index) => (
                    <h3
                      key={ index }
                      data-testid={ `${i}-${tag}-horizontal-tag` }
                    >
                      {tag}
                    </h3>
                  )))}
              </ANameCategory>
              <span data-testid={ `${i}-horizontal-done-date` }>
                done at:
                {' '}
                {recipe.doneDate}
              </span>
              <ImgCard>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    className="imgRecipe"
                    data-testid={ `${i}-horizontal-image` }
                    // width="100px"
                    src={ recipe.image }
                    alt={ recipe.name }
                  />
                </Link>
                <div className="icons">
                  <ShareButton
                    testid={ `${i}-horizontal-share-btn` }
                    recipe={ recipe }
                  />
                </div>
              </ImgCard>
            </RecipeDoneMap>
          ))}
      </div>
    </>
  );
}
