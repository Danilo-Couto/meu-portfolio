import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeSteps from '../Components/RecipeSteps';
import FavoriteButton from '../Components/FavoriteButton';
import ShareButton from '../Components/ShareButton';
import { getDrinkByIdRecipe, getMealByIdRecipe } from '../services/Apis';
import { AroundInProgressCss, ImgCardInProgress } from '../Styles/general2';
import Footer from '../Components/Footer';

export default function InProgress() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const isFood = pathname.includes('foods');

  const [recipe, setRecipe] = useState([]);

  const getRecipe = useCallback(async () => {
    if (isFood) {
      const fetchFood = await getMealByIdRecipe(id);
      setRecipe(fetchFood || []);
    } else {
      const fetchDrink = await getDrinkByIdRecipe(id);
      setRecipe(fetchDrink || []);
    }
  }, [id, isFood]);

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);

  return (
    <>
      <div>
        {recipe.length !== 0 && (
          <AroundInProgressCss>
            <h1 data-testid="recipe-title">
              {recipe[0].strDrink || recipe[0].strMeal}
            </h1>
            <h3 data-testid="recipe-category">{recipe[0].strCategory}</h3>
            <ImgCardInProgress>
              <img
                src={ recipe[0].strDrinkThumb || recipe[0].strMealThumb }
                alt={ recipe[0].strDrink || recipe[0].strMeal }
                // width="100px"
                data-testid="recipe-photo"
              />
              <div className="icons">
                <FavoriteButton recipe={ recipe[0] } />
                <ShareButton recipe={ recipe[0] } />
              </div>
            </ImgCardInProgress>
            <p data-testid="instructions">{recipe[0].strInstructions}</p>
            <RecipeSteps recipe={ recipe[0] } />
          </AroundInProgressCss>
        )}
      </div>
      <Footer />

    </>
  );
}
