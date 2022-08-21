import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../Hooks/Context';
import Cards from './Cards';
import Header from './Header';
import RenderCategoryButtons from './RenderCategoryButtons';
import { RecipeListDiv, ContainerAroundRecipeList } from '../Styles/general';

const limitDisplayCards = 12;

export default function RecipeList() {
  const { pathname } = useLocation();
  const isFood = pathname.includes('foods');
  const isExplore = pathname.includes('explore');

  const { fetchAllMeals, fetchAllDrinks, recipes,
    categorySelected, renderButtonsCategory,
    ingredientSelected, resetFilters, RedirectToDetailPage } = useContext(Context);

  useEffect(() => {
    renderButtonsCategory();
  }, [pathname, categorySelected]);

  useEffect(() => {
    resetFilters();
  }, []);

  useEffect(() => {
    if (isFood && categorySelected === '') {
      fetchAllMeals();
    } else if (!isFood && categorySelected === '') {
      fetchAllDrinks();
    }
  }, [categorySelected, pathname]);

  const renderCards = () => {
    let showRecipes;

    if (ingredientSelected) {
      showRecipes = recipes.filter((recipe) => (
        Object.values(recipe).includes(ingredientSelected)
      ));
    } else {
      showRecipes = recipes;
    }

    return showRecipes.slice(0, limitDisplayCards)
      .map((recipe, i) => (
        <Cards
          key={ i }
          index={ i }
          { ...recipe }
        />
      ));
  };

  return (
    <>
      {!isExplore && <Header showSearch />}
      <div>
        {!isExplore && <RenderCategoryButtons />}
      </div>
      <ContainerAroundRecipeList>
        <RecipeListDiv>
          {recipes.length === 1
            ? RedirectToDetailPage(recipes[0].idMeal
            || recipes[0].idDrink)
            : renderCards()}
        </RecipeListDiv>
      </ContainerAroundRecipeList>
    </>

  );
}
