import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import FavoriteButton from '../Components/FavoriteButton';
import Footer from '../Components/Footer';
import IngredientsList from '../Components/IngredientsList';
import RecommendationsList from '../Components/RecommendationsList';
import ShareButton from '../Components/ShareButton';
import StartRecipeButton from '../Components/StartRecipeButton';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import { getDrinkByIdRecipe, getMealByIdRecipe } from '../services/Apis';
import { NameCategoryDetail, ImgCardDetail, DetailPageCss } from '../Styles/general';

export default function Detail() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const isFood = pathname.includes('foods');

  const [recipes, setRecipes] = useState();

  const getRecipe = useCallback(async () => {
    if (isFood) {
      const fetchFood = await getMealByIdRecipe(id);
      setRecipes(fetchFood[0]);
    } else {
      const fetchDrink = await getDrinkByIdRecipe(id);
      setRecipes(fetchDrink[0]);
    }
  }, [id, isFood]);

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);

  return (
    <>
      <div>
        {recipes && (
          <DetailPageCss>
            <NameCategoryDetail>
              <h1 data-testid="recipe-title">
                {recipes.strMeal || recipes.strDrink}
              </h1>
              <p data-testid="recipe-category">
                {pathname.includes('foods')
                  ? recipes.strCategory
                  : recipes.strAlcoholic}
              </p>
            </NameCategoryDetail>

            <ImgCardDetail>
              <img
                data-testid="recipe-photo"
                src={ recipes.strMealThumb || recipes.strDrinkThumb }
                // width="100px"
                alt="Recipe"
              />
              <div className="icons">
                <ShareButton recipe={ recipes } />
                <FavoriteButton recipe={ recipes } />
              </div>
            </ImgCardDetail>
            <IngredientsList recipe={ recipes } />
            <div>
              <h2>Instructions</h2>
              <p data-testid="instructions">{recipes.strInstructions}</p>
            </div>
            <StartRecipeButton id={ recipes.idDrink || recipes.idMeal } />
            {recipes.strYoutube && (
              <div className="videoContainer">
                <h2>Video</h2>
                <YoutubeEmbed url={ recipes.strYoutube } />
              </div>
            )}
            <h3> Recommendation List </h3>
            <RecommendationsList recipe={ recipes } />
          </DetailPageCss>
        )}
      </div>
      <Footer />
    </>
  );
}
