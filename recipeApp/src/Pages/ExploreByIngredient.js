import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import IngredientCards from '../Components/IngredientCards';
import RecipeList from '../Components/RecipeList';
import Context from '../Hooks/Context';
import { getIngredientButtons, getIngredientButtonsDrinks } from '../services/Apis';
import { IngredientDiv } from '../Styles/general';

const END = 12;
const MEAL_URL = (ingredient) => `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
const DRINK_URL = (ingredient) => `www.thecocktaildb.com/images/${ingredient}-Small.png`;

export default function ExploreByIngredient() {
  const [ingredients, setIngredients] = useState([]);
  const { pathname } = useLocation();
  const isFood = pathname.includes('foods');
  const { setIngredientSelected } = useContext(Context);

  const getRecipes = useCallback(async () => {
    if (isFood) {
      const ingredient = await getIngredientButtons();
      setIngredients(ingredient);
    } else {
      const ingredient = await getIngredientButtonsDrinks();
      setIngredients(ingredient);
    }
  }, [isFood]);

  const selectIngredient = (ingredientSelected) => {
    setIngredientSelected(ingredientSelected);
  };

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <>
      <Header showSearch={ false } />
      <IngredientDiv>
        {isFood ? ingredients.slice(0, END).map((ingredient, i) => (
          <IngredientCards
            ingredient={ ingredient }
            key={ i }
            index={ i }
            thumb={ MEAL_URL(ingredient.strIngredient) }
            selectIngredient={ selectIngredient }
          />
        ))
          : ingredients.slice(0, END).map((ingredient, i) => (
            <IngredientCards
              ingredient={ ingredient }
              key={ i }
              index={ i }
              thumb={ DRINK_URL(ingredient.strDrinkThumb) }
              selectIngredient={ selectIngredient }
            />
          ))}
      </IngredientDiv>
      <RecipeList />
      <Footer />
    </>
  );
}
